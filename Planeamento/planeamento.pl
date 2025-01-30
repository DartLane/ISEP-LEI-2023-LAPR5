% Bibliotecas
:- use_module(library(http/thread_httpd)).
:- use_module(library(http/http_dispatch)).
:- use_module(library(http/http_parameters)).
:- use_module(library(http/http_open)).
:- use_module(library(http/http_cors)).
:- use_module(library(date)).
:- use_module(library(random)).

% Bibliotecas JSON
:- use_module(library(http/json_convert)).
:- use_module(library(http/http_json)).
:- use_module(library(http/json)).

%=== BC Primaria ===
:- dynamic entrega/6.
:- dynamic armazem_entregas/2.
:- dynamic data_entrega/1.
:- dynamic entregas0000_url/1.

%Cors
:- set_setting(http:cors, [*]).

%==================================
% Cria��o de servidor HTTP em 'Port' que trata pedidos em JSON
server(Port) :-
        http_server(http_dispatch, [port(Port)]).

stopServer(Port):-
        %retract(port(Port)),
        http_stop_server(Port,_).
%==================================

:- http_handler('/api/pp/obterPlaneamento/', obter_planeamento,[]).

:-json_object planeamento(camiao:list(plan)).
:-json_object plan(armazem:string,entregas:list(string)).

obter_planeamento(Request) :-
        http_parameters(Request,
                    [ dataentrega(DataEntrega)],
                    [ attribute_declarations(http_param)]
                    ),
        retractall(entregas0000_url(_)),
        cors_enable(_Request,[methods([get])]),
        removerBaseConhecimento(),
        url_entregas(DataEntrega),
        adicionarBaseConhecimento(),
        criar_armazem_entregas(),
        findall(armazem_entregas(A,LE), armazem_entregas(A,LE),Lag),
        findall(carateristicasCam(Nome,A,B,C,D,E), carateristicasCam(Nome,A,B,C,D,E),Lag2),
        criarJSONArray(Lag,JsonArray),
        buscarCamiao(Lag2,CamiaoNome),
        append(CamiaoNome,JsonArray,JsonPlan),
        Reply=planeamento(JsonPlan),
        prolog_to_json(Reply, JSONObject),
        reply_json(JSONObject, [json_object(dict)]).

http_param(dataentrega, [number]).
/*http://localhost:8080/api/pp/obterPlaneamento/?dataentrega=20201205*/

url_entregas(DataEntrega):-
    string_concat('http://localhost:5000/api/Entregas/data/data1=',DataEntrega,S1),
    string_concat(S1,'&data2=',S2),
    string_concat(S2,DataEntrega,S3),
    asserta(entregas0000_url(S3)).

criarJSONArray([],[]).
criarJSONArray([armazem_entregas(Armazem,Entregas)|Lag],[Reply2|JsonArray]):-
        append([],[Entregas],Reply1),
        append([Armazem],[Reply1],Reply2),
        _Reply=plan(Armazem,Reply1),
        criarJSONArray(Lag,JsonArray).

buscarCamiao([],[]).
buscarCamiao([carateristicasCam(Nome,_,_,_,_,_)],[Reply2|JsonArray]):-
        append([Nome],[],Reply2),
        buscarCamiao(_L,JsonArray).


adicionarBaseConhecimento():-
        adicionarEntregas(),!.

removerBaseConhecimento():-
    retractall(entrega(_,_,_,_,_,_)),
    retractall(data_entrega(_)),
    retractall(armazem_entregas(_,_)).

save_entrega([]).
save_entrega([A|B]):-number_codes(N,A.armazemId),assertz(entrega(A.id,A.dia,A.massa,N,A.tempocarga,A.tempodescarga)),save_entrega(B).

adicionarEntregas():-
    obterEntregas(Data),
    save_entrega(Data).

obterEntregas(Data):-
    entregas0000_url(URL),
    http_open(URL, In,[cert_verify_hook(cert_accept_any)]),
    json_read_dict(In, Data).


% saber entrega de cada armazem
    % retirar 5
    apaga(_,[ ],[ ]).
    apaga(X,[X|L],M):-!,apaga(X,L,M).
    apaga(X,[Y|L],[Y|M]):-apaga(X,L,M).
    seq_sem_5(Ln):-seq_custo_min(LCcompleto,_), apaga(5,LCcompleto,Ln).

    % entregas para cada armazem
    criar_armazem_entregas():-seq_sem_5(Ln), ent(Ln,_LEntrega).
    ent([],[]).
    ent([H|T],[H1|T1]):-ent(T,T1),entrega(H1,_,_,H,_,_),idArmazem(A,H),assertz(armazem_entregas(A,H1)).



% ================================================
% Encontrar melhor trajetoria de entregas
% ================================================

%idArmazem(<local>,<codigo>)
idArmazem('Arouca',001).
idArmazem('Espinho',002).
idArmazem('Gondomar',003).
idArmazem('Maia',004).
idArmazem('Matosinhos',005).
idArmazem('Oliveira de Azemeis',006).
idArmazem('Paredes',007).
idArmazem('Porto',008).
idArmazem('Povoa de Varzim',009).
idArmazem('Santa Maria da Feira',010).
idArmazem('Santo Tirso',011).
idArmazem('Sao Joao da Madeira',012).
idArmazem('Trofa',013).
idArmazem('Vale de Cambra',014).
idArmazem('Valongo',015).
idArmazem('Vila do Conde',016).
idArmazem('Vila Nova de Gaia',017).

%carateristicasCam(<nome_camiao>,<tara>,<capacidade_carga>,<carga_total_baterias>,<autonomia>,<t_recarr_bat_20a80>).
carateristicasCam(eTruck01,7500,4300,80,100,60).

%dadosCam_t_e_ta(<nome_camiao>,<cidade_origem>,<cidade_destino>,<tempo>,<energia>,<tempo_adicional>).
dadosCam_t_e_ta(eTruck01,1,2,122,42,0).
dadosCam_t_e_ta(eTruck01,1,3,122,46,0).
dadosCam_t_e_ta(eTruck01,1,4,151,54,25).
dadosCam_t_e_ta(eTruck01,1,5,147,52,25).
dadosCam_t_e_ta(eTruck01,1,6,74,24,0).
dadosCam_t_e_ta(eTruck01,1,7,116,35,0).
dadosCam_t_e_ta(eTruck01,1,8,141,46,0).
dadosCam_t_e_ta(eTruck01,1,9,185,74,53).
dadosCam_t_e_ta(eTruck01,1,10,97,30,0).
dadosCam_t_e_ta(eTruck01,1,11,164,64,40).
dadosCam_t_e_ta(eTruck01,1,12,76,23,0).
dadosCam_t_e_ta(eTruck01,1,13,174,66,45).
dadosCam_t_e_ta(eTruck01,1,14,59,18,0).
dadosCam_t_e_ta(eTruck01,1,15,132,51,24).
dadosCam_t_e_ta(eTruck01,1,16,181,68,45).
dadosCam_t_e_ta(eTruck01,1,17,128,45,0).

dadosCam_t_e_ta(eTruck01,2,1,116,42,0).
dadosCam_t_e_ta(eTruck01,2,3,55,22,0).
dadosCam_t_e_ta(eTruck01,2,4,74,25,0).
dadosCam_t_e_ta(eTruck01,2,5,65,22,0).
dadosCam_t_e_ta(eTruck01,2,6,69,27,0).
dadosCam_t_e_ta(eTruck01,2,7,74,38,0).
dadosCam_t_e_ta(eTruck01,2,8,61,18,0).
dadosCam_t_e_ta(eTruck01,2,9,103,44,0).
dadosCam_t_e_ta(eTruck01,2,10,36,14,0).
dadosCam_t_e_ta(eTruck01,2,11,88,41,0).
dadosCam_t_e_ta(eTruck01,2,12,61,19,0).
dadosCam_t_e_ta(eTruck01,2,13,95,42,0).
dadosCam_t_e_ta(eTruck01,2,14,78,34,0).
dadosCam_t_e_ta(eTruck01,2,15,69,30,0).
dadosCam_t_e_ta(eTruck01,2,16,99,38,0).
dadosCam_t_e_ta(eTruck01,2,17,46,14,0).

dadosCam_t_e_ta(eTruck01,3,1,120,45,0).
dadosCam_t_e_ta(eTruck01,3,2,50,22,0).
dadosCam_t_e_ta(eTruck01,3,4,46,15,0).
dadosCam_t_e_ta(eTruck01,3,5,46,14,0).
dadosCam_t_e_ta(eTruck01,3,6,74,37,0).
dadosCam_t_e_ta(eTruck01,3,7,63,23,0).
dadosCam_t_e_ta(eTruck01,3,8,38,8,0).
dadosCam_t_e_ta(eTruck01,3,9,84,36,0).
dadosCam_t_e_ta(eTruck01,3,10,59,28,0).
dadosCam_t_e_ta(eTruck01,3,11,61,27,0).
dadosCam_t_e_ta(eTruck01,3,12,67,32,0).
dadosCam_t_e_ta(eTruck01,3,13,67,29,0).
dadosCam_t_e_ta(eTruck01,3,14,82,38,0).
dadosCam_t_e_ta(eTruck01,3,15,34,8,0).
dadosCam_t_e_ta(eTruck01,3,16,80,30,0).
dadosCam_t_e_ta(eTruck01,3,17,36,10,0).

dadosCam_t_e_ta(eTruck01,4,1,149,54,25).
dadosCam_t_e_ta(eTruck01,4,2,65,24,0).
dadosCam_t_e_ta(eTruck01,4,3,46,16,0).
dadosCam_t_e_ta(eTruck01,4,5,27,10,0).
dadosCam_t_e_ta(eTruck01,4,6,103,47,0).
dadosCam_t_e_ta(eTruck01,4,7,55,27,0).
dadosCam_t_e_ta(eTruck01,4,8,36,10,0).
dadosCam_t_e_ta(eTruck01,4,9,50,26,0).
dadosCam_t_e_ta(eTruck01,4,10,78,34,0).
dadosCam_t_e_ta(eTruck01,4,11,42,19,0).
dadosCam_t_e_ta(eTruck01,4,12,97,42,0).
dadosCam_t_e_ta(eTruck01,4,13,44,11,0).
dadosCam_t_e_ta(eTruck01,4,14,111,48,0).
dadosCam_t_e_ta(eTruck01,4,15,32,13,0).
dadosCam_t_e_ta(eTruck01,4,16,53,14,0).
dadosCam_t_e_ta(eTruck01,4,17,38,11,0).

dadosCam_t_e_ta(eTruck01,5,1,141,51,24).
dadosCam_t_e_ta(eTruck01,5,2,55,20,0).
dadosCam_t_e_ta(eTruck01,5,3,48,14,0).
dadosCam_t_e_ta(eTruck01,5,4,25,9,0).
dadosCam_t_e_ta(eTruck01,5,6,97,44,0).
dadosCam_t_e_ta(eTruck01,5,7,55,28,0).
dadosCam_t_e_ta(eTruck01,5,8,29,7,0).
dadosCam_t_e_ta(eTruck01,5,9,48,24,0).
dadosCam_t_e_ta(eTruck01,5,10,69,30,0).
dadosCam_t_e_ta(eTruck01,5,11,53,26,0).
dadosCam_t_e_ta(eTruck01,5,12,95,36,0).
dadosCam_t_e_ta(eTruck01,5,13,63,20,0).
dadosCam_t_e_ta(eTruck01,5,14,105,45,0).
dadosCam_t_e_ta(eTruck01,5,15,34,14,0).
dadosCam_t_e_ta(eTruck01,5,16,46,18,0).
dadosCam_t_e_ta(eTruck01,5,17,27,7,0).

dadosCam_t_e_ta(eTruck01,6,1,69,23,0).
dadosCam_t_e_ta(eTruck01,6,2,71,27,0).
dadosCam_t_e_ta(eTruck01,6,3,74,38,0).
dadosCam_t_e_ta(eTruck01,6,4,103,46,0).
dadosCam_t_e_ta(eTruck01,6,5,99,44,0).
dadosCam_t_e_ta(eTruck01,6,7,88,48,0).
dadosCam_t_e_ta(eTruck01,6,8,92,38,0).
dadosCam_t_e_ta(eTruck01,6,9,134,66,45).
dadosCam_t_e_ta(eTruck01,6,10,42,14,0).
dadosCam_t_e_ta(eTruck01,6,11,116,56,30).
dadosCam_t_e_ta(eTruck01,6,12,23,9,0).
dadosCam_t_e_ta(eTruck01,6,13,126,58,33).
dadosCam_t_e_ta(eTruck01,6,14,25,9,0).
dadosCam_t_e_ta(eTruck01,6,15,84,44,0).
dadosCam_t_e_ta(eTruck01,6,16,132,60,35).
dadosCam_t_e_ta(eTruck01,6,17,80,38,0).

dadosCam_t_e_ta(eTruck01,7,1,116,36,0).
dadosCam_t_e_ta(eTruck01,7,2,71,38,0).
dadosCam_t_e_ta(eTruck01,7,3,61,22,0).
dadosCam_t_e_ta(eTruck01,7,4,53,26,0).
dadosCam_t_e_ta(eTruck01,7,5,53,28,0).
dadosCam_t_e_ta(eTruck01,7,6,88,48,0).
dadosCam_t_e_ta(eTruck01,7,8,59,26,0).
dadosCam_t_e_ta(eTruck01,7,9,88,48,0).
dadosCam_t_e_ta(eTruck01,7,10,84,44,0).
dadosCam_t_e_ta(eTruck01,7,11,74,22,0).
dadosCam_t_e_ta(eTruck01,7,12,82,42,0).
dadosCam_t_e_ta(eTruck01,7,13,76,31,0).
dadosCam_t_e_ta(eTruck01,7,14,97,49,21).
dadosCam_t_e_ta(eTruck01,7,15,29,16,0).
dadosCam_t_e_ta(eTruck01,7,16,84,42,0).
dadosCam_t_e_ta(eTruck01,7,17,69,30,0).

dadosCam_t_e_ta(eTruck01,8,1,134,46,0).
dadosCam_t_e_ta(eTruck01,8,2,59,18,0).
dadosCam_t_e_ta(eTruck01,8,3,32,6,0).
dadosCam_t_e_ta(eTruck01,8,4,34,10,0).
dadosCam_t_e_ta(eTruck01,8,5,32,7,0).
dadosCam_t_e_ta(eTruck01,8,6,88,38,0).
dadosCam_t_e_ta(eTruck01,8,7,57,26,0).
dadosCam_t_e_ta(eTruck01,8,9,69,30,0).
dadosCam_t_e_ta(eTruck01,8,10,65,26,0).
dadosCam_t_e_ta(eTruck01,8,11,53,22,0).
dadosCam_t_e_ta(eTruck01,8,12,82,34,0).
dadosCam_t_e_ta(eTruck01,8,13,61,24,0).
dadosCam_t_e_ta(eTruck01,8,14,97,40,0).
dadosCam_t_e_ta(eTruck01,8,15,36,12,0).
dadosCam_t_e_ta(eTruck01,8,16,65,23,0).
dadosCam_t_e_ta(eTruck01,8,17,32,6,0).

dadosCam_t_e_ta(eTruck01,9,1,181,72,50).
dadosCam_t_e_ta(eTruck01,9,2,95,41,0).
dadosCam_t_e_ta(eTruck01,9,3,86,35,0).
dadosCam_t_e_ta(eTruck01,9,4,55,24,0).
dadosCam_t_e_ta(eTruck01,9,5,48,23,0).
dadosCam_t_e_ta(eTruck01,9,6,134,65,42).
dadosCam_t_e_ta(eTruck01,9,7,95,47,0).
dadosCam_t_e_ta(eTruck01,9,8,69,28,0).
dadosCam_t_e_ta(eTruck01,9,10,109,51,24).
dadosCam_t_e_ta(eTruck01,9,11,61,29,0).
dadosCam_t_e_ta(eTruck01,9,12,132,57,31).
dadosCam_t_e_ta(eTruck01,9,13,67,19,0).
dadosCam_t_e_ta(eTruck01,9,14,143,66,45).
dadosCam_t_e_ta(eTruck01,9,15,71,34,0).
dadosCam_t_e_ta(eTruck01,9,16,15,3,0).
dadosCam_t_e_ta(eTruck01,9,17,67,28,0).

dadosCam_t_e_ta(eTruck01,10,1,97,30,0).
dadosCam_t_e_ta(eTruck01,10,2,34,14,0).
dadosCam_t_e_ta(eTruck01,10,3,59,27,0).
dadosCam_t_e_ta(eTruck01,10,4,78,33,0).
dadosCam_t_e_ta(eTruck01,10,5,71,30,0).
dadosCam_t_e_ta(eTruck01,10,6,40,14,0).
dadosCam_t_e_ta(eTruck01,10,7,82,42,0).
dadosCam_t_e_ta(eTruck01,10,8,65,24,0).
dadosCam_t_e_ta(eTruck01,10,9,109,52,25).
dadosCam_t_e_ta(eTruck01,10,11,92,46,0).
dadosCam_t_e_ta(eTruck01,10,12,32,6,0).
dadosCam_t_e_ta(eTruck01,10,13,99,46,0).
dadosCam_t_e_ta(eTruck01,10,14,63,17,0).
dadosCam_t_e_ta(eTruck01,10,15,74,34,0).
dadosCam_t_e_ta(eTruck01,10,16,105,46,0).
dadosCam_t_e_ta(eTruck01,10,17,53,23,0).

dadosCam_t_e_ta(eTruck01,11,1,164,65,42).
dadosCam_t_e_ta(eTruck01,11,2,88,41,0).
dadosCam_t_e_ta(eTruck01,11,3,65,28,0).
dadosCam_t_e_ta(eTruck01,11,4,42,18,0).
dadosCam_t_e_ta(eTruck01,11,5,55,25,0).
dadosCam_t_e_ta(eTruck01,11,6,118,57,31).
dadosCam_t_e_ta(eTruck01,11,7,74,23,0).
dadosCam_t_e_ta(eTruck01,11,8,59,23,0).
dadosCam_t_e_ta(eTruck01,11,9,63,28,0).
dadosCam_t_e_ta(eTruck01,11,10,97,46,0).
dadosCam_t_e_ta(eTruck01,11,12,111,52,25).
dadosCam_t_e_ta(eTruck01,11,13,25,7,0).
dadosCam_t_e_ta(eTruck01,11,14,126,58,33).
dadosCam_t_e_ta(eTruck01,11,15,53,25,0).
dadosCam_t_e_ta(eTruck01,11,16,59,27,0).
dadosCam_t_e_ta(eTruck01,11,17,67,27,0).

dadosCam_t_e_ta(eTruck01,12,1,76,23,0).
dadosCam_t_e_ta(eTruck01,12,2,61,19,0).
dadosCam_t_e_ta(eTruck01,12,3,67,32,0).
dadosCam_t_e_ta(eTruck01,12,4,97,41,0).
dadosCam_t_e_ta(eTruck01,12,5,92,38,0).
dadosCam_t_e_ta(eTruck01,12,6,19,8,0).
dadosCam_t_e_ta(eTruck01,12,7,82,42,0).
dadosCam_t_e_ta(eTruck01,12,8,86,33,0).
dadosCam_t_e_ta(eTruck01,12,9,128,61,37).
dadosCam_t_e_ta(eTruck01,12,10,32,6,0).
dadosCam_t_e_ta(eTruck01,12,11,109,50,23).
dadosCam_t_e_ta(eTruck01,12,13,120,53,26).
dadosCam_t_e_ta(eTruck01,12,14,40,10,0).
dadosCam_t_e_ta(eTruck01,12,15,78,38,0).
dadosCam_t_e_ta(eTruck01,12,16,126,54,28).
dadosCam_t_e_ta(eTruck01,12,17,74,32,0).

dadosCam_t_e_ta(eTruck01,13,1,174,65,42).
dadosCam_t_e_ta(eTruck01,13,2,107,35,0).
dadosCam_t_e_ta(eTruck01,13,3,74,29,0).
dadosCam_t_e_ta(eTruck01,13,4,46,11,0).
dadosCam_t_e_ta(eTruck01,13,5,67,20,0).
dadosCam_t_e_ta(eTruck01,13,6,128,57,31).
dadosCam_t_e_ta(eTruck01,13,7,80,30,0).
dadosCam_t_e_ta(eTruck01,13,8,76,20,0).
dadosCam_t_e_ta(eTruck01,13,9,67,20,0).
dadosCam_t_e_ta(eTruck01,13,10,105,47,0).
dadosCam_t_e_ta(eTruck01,13,11,27,7,0).
dadosCam_t_e_ta(eTruck01,13,12,122,52,25).
dadosCam_t_e_ta(eTruck01,13,14,137,58,33).
dadosCam_t_e_ta(eTruck01,13,15,67,17,0).
dadosCam_t_e_ta(eTruck01,13,16,59,15,0).
dadosCam_t_e_ta(eTruck01,13,17,78,22,0).

dadosCam_t_e_ta(eTruck01,14,1,59,18,0).
dadosCam_t_e_ta(eTruck01,14,2,80,35,0).
dadosCam_t_e_ta(eTruck01,14,3,80,38,0).
dadosCam_t_e_ta(eTruck01,14,4,109,46,0).
dadosCam_t_e_ta(eTruck01,14,5,105,45,0).
dadosCam_t_e_ta(eTruck01,14,6,27,9,0).
dadosCam_t_e_ta(eTruck01,14,7,97,48,0).
dadosCam_t_e_ta(eTruck01,14,8,99,38,0).
dadosCam_t_e_ta(eTruck01,14,9,143,66,45).
dadosCam_t_e_ta(eTruck01,14,10,61,17,0).
dadosCam_t_e_ta(eTruck01,14,11,122,57,31).
dadosCam_t_e_ta(eTruck01,14,12,42,10,0).
dadosCam_t_e_ta(eTruck01,14,13,132,58,35).
dadosCam_t_e_ta(eTruck01,14,15,90,44,0).
dadosCam_t_e_ta(eTruck01,14,16,139,61,37).
dadosCam_t_e_ta(eTruck01,14,17,86,38,0).

dadosCam_t_e_ta(eTruck01,15,1,132,51,24).
dadosCam_t_e_ta(eTruck01,15,2,74,30,0).
dadosCam_t_e_ta(eTruck01,15,3,34,8,0).
dadosCam_t_e_ta(eTruck01,15,4,36,12,0).
dadosCam_t_e_ta(eTruck01,15,5,36,14,0).
dadosCam_t_e_ta(eTruck01,15,6,86,44,0).
dadosCam_t_e_ta(eTruck01,15,7,34,16,0).
dadosCam_t_e_ta(eTruck01,15,8,42,13,0).
dadosCam_t_e_ta(eTruck01,15,9,71,35,0).
dadosCam_t_e_ta(eTruck01,15,10,82,36,0).
dadosCam_t_e_ta(eTruck01,15,11,53,25,0).
dadosCam_t_e_ta(eTruck01,15,12,80,38,0).
dadosCam_t_e_ta(eTruck01,15,13,69,18,0).
dadosCam_t_e_ta(eTruck01,15,14,95,45,0).
dadosCam_t_e_ta(eTruck01,15,16,69,29,0).
dadosCam_t_e_ta(eTruck01,15,17,53,17,0).

dadosCam_t_e_ta(eTruck01,16,1,179,68,45).
dadosCam_t_e_ta(eTruck01,16,2,92,37,0).
dadosCam_t_e_ta(eTruck01,16,3,84,31,0).
dadosCam_t_e_ta(eTruck01,16,4,57,16,0).
dadosCam_t_e_ta(eTruck01,16,5,46,18,0).
dadosCam_t_e_ta(eTruck01,16,6,132,60,35).
dadosCam_t_e_ta(eTruck01,16,7,92,42,0).
dadosCam_t_e_ta(eTruck01,16,8,67,23,0).
dadosCam_t_e_ta(eTruck01,16,9,15,3,0).
dadosCam_t_e_ta(eTruck01,16,10,105,46,0).
dadosCam_t_e_ta(eTruck01,16,11,57,28,0).
dadosCam_t_e_ta(eTruck01,16,12,130,52,25).
dadosCam_t_e_ta(eTruck01,16,13,61,15,0).
dadosCam_t_e_ta(eTruck01,16,14,141,61,37).
dadosCam_t_e_ta(eTruck01,16,15,69,29,0).
dadosCam_t_e_ta(eTruck01,16,17,65,24,0).

dadosCam_t_e_ta(eTruck01,17,1,128,46,0).
dadosCam_t_e_ta(eTruck01,17,2,42,14,0).
dadosCam_t_e_ta(eTruck01,17,3,40,11,0).
dadosCam_t_e_ta(eTruck01,17,4,42,13,0).
dadosCam_t_e_ta(eTruck01,17,5,34,10,0).
dadosCam_t_e_ta(eTruck01,17,6,82,38,0).
dadosCam_t_e_ta(eTruck01,17,7,74,30,0).
dadosCam_t_e_ta(eTruck01,17,8,29,6,0).
dadosCam_t_e_ta(eTruck01,17,9,69,31,0).
dadosCam_t_e_ta(eTruck01,17,10,55,24,0).
dadosCam_t_e_ta(eTruck01,17,11,69,29,0).
dadosCam_t_e_ta(eTruck01,17,12,80,30,0).
dadosCam_t_e_ta(eTruck01,17,13,82,23,0).
dadosCam_t_e_ta(eTruck01,17,14,90,38,0).
dadosCam_t_e_ta(eTruck01,17,15,53,18,0).
dadosCam_t_e_ta(eTruck01,17,16,67,25,0).

%soma_pesos
%Peso Sem Tara
soma_pesos([],[],0).
soma_pesos([Entrega|LC],[PesoAc|LP],PesoAc):-
soma_pesos(LC,LP,PesoAc1),entrega(Entrega,_,Peso,_,_,_),PesoAc is Peso+PesoAc1.


%acrescenta_tara
%Peso Com Tara
acrescenta_tara([],[Tara]):- carateristicasCam(_,Tara,_,_,_,_).
acrescenta_tara([Peso|LP],[PesoTara|LPT]):-carateristicasCam(_,Tara,_,_,_,_),
acrescenta_tara(LP,LPT),
PesoTara is Peso+Tara.

%Passa a cidades as Entregas
entregas_para_cidades([],[]).
entregas_para_cidades([H|LE], [C|LC]):-entregas_para_cidades(LE, LC), !, entrega(H,_,_,C,_,_).


%Calcula_Tempo_das_Trajetorias
%Falta outros tempos, foi so usado o tempo de viagem
calcula_custo(LE,Custo):-
soma_pesos(LE,LP,_),
acrescenta_tara(LP,LPT),entregas_para_cidades(LE, LC),
append([5|LC],[5],LCcompleto),
carateristicasCam(_,_,_,_,Autonomia,_),
custo(LCcompleto,LPT,Autonomia,Custo).


custo([_],[],_,0).
custo([C1,C2|LC],[PT|LPT],Autonomia,Custo):-
dadosCam_t_e_ta(_,C1,C2,TempoViagem,KWHMAX,TempoAdd),
carateristicasCam(_,TARA,CAPACIDADE,KWh100,_,_),
KWh20 is 0.20*KWh100,
KWh80 is 0.80*KWh100,
KWhNeeded is (KWHMAX*(PT/(TARA+CAPACIDADE)) + KWh20),
%write('KWhNeeded: '),write(KWhNeeded),nl,
(Autonomia >= KWhNeeded -> (Autonomia1 is Autonomia - KWhNeeded +KWh20, TempoCarregar is 0, TempoAdicional is 0);tempo_adicional(Autonomia1,KWhNeeded,TempoAdd,KWh20,KWh80,TempoAdicional),TempoCarregar is (KWh80-Autonomia)*(60/48)),
(C1 \= 5-> entrega(_,_,_,C1,_,TempoRet);TempoRet is 0),
(TempoCarregar < TempoRet -> (TempoCarregarF is TempoRet);(TempoCarregarF is TempoCarregar)),
%write('Tempo Carregamento: '),write(TempoCarregarF), nl,
%write('Autonomia: '),write(Autonomia1), nl,
custo([C2|LC],LPT,Autonomia1,Custo1),
TempoViagemF is TempoViagem*(PT/(TARA+CAPACIDADE)),
%write('Tempo Viagem: '),write(TempoViagemF), nl,
%write('Tempo Adicional: '),write(TempoAdicional), nl,
Custo is Custo1+TempoCarregarF+TempoAdicional+TempoViagemF.

%Auxiliar para calcular o tempo adicional
tempo_adicional(Autonomia1,KWhNeeded,TempoAdd,KWh20,KWh80,TempoAdicional ):-KWhNeeded =< KWh80 -> (Autonomia1 is KWh80, TempoAdicional is 0);(Autonomia1 is KWh20, TempoAdicional is TempoAdd).

/*
    Avaliar essas trajetórias de acordo com o tempo para completar todas as entregas
    e voltar ao armazém base de Matosinhos e escolher a solução que permite a volta do camião mais cedo.
*/
% Avalia as trajetorias e escolhe a trajetoria com_menor tempo de entregas
% trajetoria de entregas com menor tempo
    seq_custo_min(LCcompleto,Custo):-(run;true),custo_min(LE,Custo), entregas_para_cidades(LE, LC), !, append([5|LC],[5],LCcompleto).

    run:- retractall(custo_min(_,_)), assertz(custo_min(_,1000000000)),
    findall(Entrega,entrega(Entrega,_,_,_,_,_),LE),
    permutation(LE,LEPerm),
    calcula_custo(LEPerm,Custo),
    atualiza(LEPerm,Custo),
    fail.

% atualiza melhor trajetoria com menor tempo
    atualiza(LEPerm,Custo):-
    custo_min(_,CustoMin),
    ((Custo<CustoMin,!,retract(custo_min(_,_)),assertz(custo_min(LEPerm,Custo)));true).
    %o write(Custo),nl so para ver a atualizacao do menor custo

% sequencia com custo de tempo minimo traduzida em nomes de cidades
    seq_custo_min_traduzida_em_nomes(LCcompletoTraduzida, Custo):-seq_custo_min(LCcompleto,Custo), traduz(LCcompleto,LCcompletoTraduzida).
    traduz([],[]).
    traduz([H|T],[H1|T1]):- traduz(T,T1), idArmazem(H1,H).
/*-----------------------------------------------------------------------------------------------------------------------------------*/

/*
    Heuristicas
*/

%Lista de cidades
listar_todas_as_possibilidades(LCidades):-findall(LC,todas_as_possibilidades(LC),LCidades).

todas_as_possibilidades(LCcompleto):-
findall(Entrega,entrega(Entrega,_,_,_,_,_),LE),
permutation(LE,LEPerm),
entregas_para_cidades(LEPerm, LCPerm), append([5|LCPerm],[5],LCcompleto).


%Lista de cidades traduzidas para nomes
listar_todas_as_possibilidades_com_nomes(LCidades):-findall(LC,todas_as_possibilidades_com_nomes(LC),LCidades).

todas_as_possibilidades_com_nomes(LCNome):-
todas_as_possibilidades(LCId), traduz(LCId,LCNome).


%Lista de cidades com write
listar_todas_as_possibilidades_com_write:-findall(LC,todas_as_possibilidades_com_write(LC),_).

todas_as_possibilidades_com_write(LCcompleto):-
todas_as_possibilidades(LCcompleto), write(LCcompleto),nl.

%Lista de cidades com write traduzidas para nomes
listar_todas_as_possibilidades_com_write_com_nomes:-findall(LC,todas_as_possibilidades_com_write_com_nomes(LC),_).

todas_as_possibilidades_com_write_com_nomes(LCNome):-
todas_as_possibilidades_com_nomes(LCNome), write(LCNome),nl.

%Calcula o tempo da 1�Heuristica
calculaPrimeiraHeuristica(LEntregas,Custo):-calculaPercursoProximo(LEntregas,LResultado),soma_pesos(LEntregas,LP,_),calcula_custoHeuristicas(LResultado,LP,Custo).

calculaPercursoProximo(LEntregas,LResultado):-entregas_para_cidades(LEntregas,LArmazens),calculaPercursoProximo1(LArmazens,LResultado).
calculaPercursoProximo1(LArmazensEntregas,LResultado):-partida_chegada(AF),calculaProximo(AF,LArmazensEntregas,[],L2),append([AF|L2],[AF],LResultado).

calculaProximo(_,[],L1,L2):-!,inverte(L1,L2).
calculaProximo(APartida,LArmazens,L1,L2):-calculaProximo1(APartida,LArmazens,APartida,1000000000,U),!,apaga(U,LArmazens,L),calculaProximo(U,L,[U|L1],L2).

calculaProximo1(_,[],R,_,U):-U is R.
calculaProximo1(APartida,[H|LArmazens],AChegada,Tempo,U):-dadosCam_t_e_ta(_,APartida,H,TempoAux,_,_),((TempoAux<Tempo,!,calculaProximo1(APartida,LArmazens,H,TempoAux,U));calculaProximo1(APartida,LArmazens,AChegada,Tempo,U)).


%Calcula o tempo da 2�Heuristica
calculaSegundaHeuristica(LEntregas,Custo):-calculaPercursoMassa(LEntregas,LResultado),soma_pesos(LEntregas,LP,_),calcula_custoHeuristicas(LResultado,LP,Custo).

calculaPercursoMassa(LEntregas,LResultado):-entregas_para_cidades(LEntregas,LArmazens),calculaPercursoMassa1(LArmazens,LResultado).
calculaPercursoMassa1(LArmazensEntregas,LResultado):-partida_chegada(AF),calculaProximoMassa(AF,LArmazensEntregas,[],L2),append([AF|L2],[AF],LResultado).


calculaProximoMassa(_,[],L1,L2):-!,append(L1,[],L2).
calculaProximoMassa(APartida,LArmazens,L1,L2):-calculaProximoMassa1(LArmazens,APartida,1000000000,U),!,apaga(U,LArmazens,L),calculaProximoMassa(U,L,[U|L1],L2).


calculaProximoMassa1([],R,_,U):-U is R.
calculaProximoMassa1([H|LArmazens],AChegada,Massa,U):-entrega(_,_,MassaAux,H,_,_),((MassaAux<Massa,!,calculaProximoMassa1(LArmazens,H,MassaAux,U));calculaProximoMassa1(LArmazens,AChegada,Massa,U)).


%Calcula o tempo da 3�Heuristica
calculaTerceiraHeuristica(LEntregas,Custo):-calculaPercursoTempoMassa(LEntregas,LResultado),soma_pesos(LEntregas,LP,_),calcula_custoHeuristicas(LResultado,LP,Custo).

calculaPercursoTempoMassa(LEntregas,LResultado):-entregas_para_cidades(LEntregas,LArmazens),calculaPercursoTempoMassa1(LArmazens,LResultado).
calculaPercursoTempoMassa1(LArmazensEntregas,LResultado):-partida_chegada(AF),calculaProximoTempoMassa(AF,LArmazensEntregas,[],L2),append([AF|L2],[AF],LResultado).

calculaProximoTempoMassa(_,[],L1,L2):-!,inverte(L1,L2).
calculaProximoTempoMassa(APartida,LArmazens,L1,L2):-calculaProximoTempoMassa1(APartida,LArmazens,LArmazens,APartida,1000000000,U),!,apaga(U,LArmazens,L),calculaProximoTempoMassa(U,L,[U|L1],L2).

calculaProximoTempoMassa1(_,[],_,R,_,U):-U is R.
calculaProximoTempoMassa1(APartida,[H|LArmazens],LArmazensInicial,AChegada,Criterio,U):-dadosCam_t_e_ta(_,APartida,H,TempoAux,_,_),apaga(H,LArmazensInicial,L),calcula_pesos(L,PesoAux),Criterio1 is TempoAux*PesoAux,((Criterio1<Criterio,!,calculaProximoTempoMassa1(APartida,LArmazens,LArmazensInicial,H,Criterio1,U));calculaProximoTempoMassa1(APartida,LArmazens,LArmazensInicial,AChegada,Criterio,U)).


%Metodos auxiliares para o calculo das heuristicas

%Calcula o custo do percurso das heuristicas
calcula_custoHeuristicas(Percurso,LP,Custo):-
acrescenta_tara(LP,LPT),
carateristicasCam(_,_,_,_,Autonomia,_),
custo(Percurso,LPT,Autonomia,Custo).

%Calcula o peso que ainda ir� ser descarregado
calcula_pesos([],0).
calcula_pesos([H|LArmazens],Peso):-calcula_pesos(LArmazens,Peso1),entrega(_,_,PesoAux,H,_,_),Peso is PesoAux+Peso1.

%Apaga elementos de uma lista
apaga(_,[ ],[ ]).
apaga(X,[X|L],M):-!,apaga(X,L,M).
apaga(X,[Y|L],[Y|M]):-apaga(X,L,M).

%Inverte uma lista
inverte(L,LI):-inverte1(L,[ ],LI).
inverte1([ ],L,L).
inverte1([X|L],L2,L3):-inverte1(L,[X|L2],L3).








































