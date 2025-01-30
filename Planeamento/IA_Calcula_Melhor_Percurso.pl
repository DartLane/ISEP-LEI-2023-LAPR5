:-set_prolog_flag(answer_write_options,[max_depth(0)]).

%idArmazem(<local>,<codigo>)
idArmazem('Arouca',1).
idArmazem('Espinho',2).
idArmazem('Gondomar',3).
idArmazem('Maia',4).
idArmazem('Matosinhos',5).
idArmazem('Oliveira de Azemeis',6).
idArmazem('Paredes',7).
idArmazem('Porto',8).
idArmazem('Povoa de Varzim',9).
idArmazem('Santa Maria da Feira',10).
idArmazem('Santo Tirso',11).
idArmazem('Sao Joao da Madeira',12).
idArmazem('Trofa',13).
idArmazem('Vale de Cambra',14).
idArmazem('Valongo',15).
idArmazem('Vila do Conde',16).
idArmazem('Vila Nova de Gaia',17).

%carateristicasCam(<nome_camiao>,<tara>,<capacidade_carga>,<carga_total_baterias>,<autonomia>,<t_recarr_bat_20a80>).
carateristicasCam(eTruck01,7500,4300,80,100,60).

%Armazem Central
partida_chegada(5).

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

entregas(16).
%entrega(<idEntrega>,<data>,<massaEntrega>,<armazemEntrega>,<tempoColoc>,<tempoRet>)

entrega(6439, 20230110, 200, 1, 8, 10).
entrega(6438, 20230110, 750, 9, 25, 30).
entrega(6445, 20230110, 1600, 3, 53, 62).
entrega(6443, 20230110, 120, 8, 6, 8).
entrega(6449, 20230110, 300, 11, 15, 20).
entrega(6398, 20230110, 310, 17, 16, 20).
entrega(6432, 20230110, 1700, 14, 55, 65).
entrega(6437, 20230110, 900, 12, 30, 35).
entrega(6451, 20230110, 440, 6, 18, 24).
entrega(6452, 20230110, 1400, 13, 47, 58).
entrega(6444, 20230110, 380, 2, 20, 25).
entrega(6455, 20230110, 560, 7, 28, 38).
entrega(6399, 20230110, 260, 15, 13, 18).
entrega(6454, 20230110, 350, 10, 18, 22).
entrega(6446, 20230110, 260, 4, 14, 17).
entrega(6456, 20230110, 850, 16, 27, 31).

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


%Passa a entregas a cidades
cidades_para_entregas([],[]).
cidades_para_entregas([H|LC], [E|LE]):- cidades_para_entregas(LC, LE), !, entrega(E,_,_,H,_,_).

%Calcula_Tempo_das_Trajetorias
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
    US023 - Avaliar essas trajetórias de acordo com o tempo para completar todas as entregas
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
    ((Custo<CustoMin,!,retract(custo_min(_,_)),assertz(custo_min(LEPerm,Custo)),
    write(Custo),nl);true).
    %o write(Custo),nl so para ver a atualizacao do menor custo

% sequencia com custo de tempo minimo traduzida em nomes de cidades
    seq_custo_min_traduzida_em_nomes(LCcompletoTraduzida, Custo):-seq_custo_min(LCcompleto,Custo),write(LCcompleto) ,traduz(LCcompleto,LCcompletoTraduzida).

    traduz([],[]).
    traduz([H|T],[H1|T1]):- traduz(T,T1), idArmazem(H1,H).
/*-----------------------------------------------------------------------------------------------------------------------------------*/

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
calculaPrimeiraHeuristica(LEntregas,Custo):-calculaPercursoProximo(LEntregas,LResultado),apaga(5,LResultado,L),soma_pesosH(L,LP,_),calcula_custoHeuristicas(LResultado,LP,Custo).
calculaPrimeiraHeuristicaAlgGen(LE):- findall(Entrega,entrega(Entrega,_,_,_,_,_),LEntregas), calculaPercursoProximo(LEntregas,LResultado), apaga(5,LResultado,L), !, cidades_para_entregas(L,LE).


calculaPercursoProximo(LEntregas,LResultado):-entregas_para_cidades(LEntregas,LArmazens),!,calculaPercursoProximo1(LArmazens,LResultado).
calculaPercursoProximo1(LArmazensEntregas,LResultado):-partida_chegada(AF),calculaProximo(AF,LArmazensEntregas,[],L2),append([AF|L2],[AF],LResultado).

calculaProximo(_,[],L1,L2):-!,inverte(L1,L2).
calculaProximo(APartida,LArmazens,L1,L2):-calculaProximo1(APartida,LArmazens,APartida,1000000000,U),!,apaga(U,LArmazens,L),!,calculaProximo(U,L,[U|L1],L2).

calculaProximo1(_,[],R,_,U):-!, U is R.
calculaProximo1(APartida,[H|LArmazens],AChegada,Tempo,U):-dadosCam_t_e_ta(_,APartida,H,TempoAux,_,_),((TempoAux<Tempo,!,calculaProximo1(APartida,LArmazens,H,TempoAux,U));calculaProximo1(APartida,LArmazens,AChegada,Tempo,U)).


%Calcula o tempo da 2�Heuristica
calculaSegundaHeuristica(LEntregas,Custo):-calculaPercursoMassa(LEntregas,LResultado),apaga(5,LResultado,L),soma_pesosH(L,LP,_),calcula_custoHeuristicas(LResultado,LP,Custo).
calculaSegundaHeuristicaAlgGen(LE):-findall(Entrega,entrega(Entrega,_,_,_,_,_),LEntregas), !, calculaPercursoMassa(LEntregas,LResultado), apaga(5,LResultado,L), !, cidades_para_entregas(L,LE).

calculaPercursoMassa(LEntregas,LResultado):-entregas_para_cidades(LEntregas,LArmazens),calculaPercursoMassa1(LArmazens,LResultado).
calculaPercursoMassa1(LArmazensEntregas,LResultado):-partida_chegada(AF),calculaProximoMassa(AF,LArmazensEntregas,[],L2),append([AF|L2],[AF],LResultado).


calculaProximoMassa(_,[],L1,L2):-!,append(L1,[],L2).
calculaProximoMassa(APartida,LArmazens,L1,L2):-calculaProximoMassa1(LArmazens,APartida,1000000000,U),!,apaga(U,LArmazens,L), !, calculaProximoMassa(U,L,[U|L1],L2).


calculaProximoMassa1([],R,_,U):-U is R.
calculaProximoMassa1([H|LArmazens],AChegada,Massa,U):-entrega(_,_,MassaAux,H,_,_),((MassaAux<Massa,!,calculaProximoMassa1(LArmazens,H,MassaAux,U));calculaProximoMassa1(LArmazens,AChegada,Massa,U)).


%Calcula o tempo da 3�Heuristica
calculaTerceiraHeuristica(LEntregas,Custo):-calculaPercursoTempoMassa(LEntregas,LResultado),apaga(5,LResultado,L),soma_pesosH(L,LP,_),calcula_custoHeuristicas(LResultado,LP,Custo).
calculaTerceiraHeuristicaAlgGen(LEntregas):-findall(Entrega,entrega(Entrega,_,_,_,_,_),LEntregas), !,calculaPercursoTempoMassa(LEntregas,LResultado).

calculaPercursoTempoMassa(LEntregas,LResultado):-entregas_para_cidades(LEntregas,LArmazens),calculaPercursoTempoMassa1(LArmazens,LResultado).
calculaPercursoTempoMassa1(LArmazensEntregas,LResultado):-partida_chegada(AF),calculaProximoTempoMassa(AF,LArmazensEntregas,[],L2),append([AF|L2],[AF],LResultado).

calculaProximoTempoMassa(_,[],L1,L2):-!,inverte(L1,L2).
calculaProximoTempoMassa(APartida,LArmazens,L1,L2):-calculaProximoTempoMassa1(APartida,LArmazens,LArmazens,APartida,1000000000,U),!,apaga(U,LArmazens,L), !, calculaProximoTempoMassa(U,L,[U|L1],L2).

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

soma_pesosH([],[],0).
soma_pesosH([Armazem|LC],[PesoAc|LP],PesoAc):-
soma_pesosH(LC,LP,PesoAc1),entrega(_,_,Peso,Armazem,_,_),PesoAc is Peso+PesoAc1.


%Apaga elementos de uma lista
apaga(_,[ ],[ ]).
apaga(X,[X|L],M):-!,apaga(X,L,M).
apaga(X,[Y|L],[Y|M]):-apaga(X,L,M).

%Inverte uma lista
inverte(L,LI):-inverte1(L,[ ],LI).
inverte1([ ],L,L).
inverte1([X|L],L2,L3):-inverte1(L,[X|L2],L3).


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%US024 - Aumentar a dimensão do problema e verificar até que dimensão é viável proceder do modo adotado.%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

%Calcula o tempo de geração de solução para seq_custo_min_traduzida_em_nomes.
%L - Lista vazia onde vai guarda a lista com a melhor solução
%Custo - Variavel não instanciada onde vai guardar o tempo em minutos necessário para a melhor solução
%TSol - Variavel não instanciada que vai guardar o tempo de geração da solução

calculaTempoGeracaoSolucao(L, Custo, TSol):-
get_time(Ti),
seq_custo_min_traduzida_em_nomes(L, Custo),
get_time(Tf),
TSol is Tf-Ti.

calculaTempoPrimeiraHeuristicaSolucao(L, Custo, TSol):-
get_time(Ti),
calculaPrimeiraHeuristica(L, Custo),
get_time(Tf),
TSol is Tf-Ti.

calculaTempoSegundaHeuristicaSolucao(L, Custo, TSol):-
get_time(Ti),
calculaSegundaHeuristica(L, Custo),
get_time(Tf),
TSol is Tf-Ti.

calculaTempoTerceiraHeuristicaSolucao(L, Custo, TSol):-
get_time(Ti),
calculaTerceiraHeuristica(L, Custo),
get_time(Tf),
TSol is Tf-Ti.



%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%Algoritmo genético%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
:-dynamic geracoes/1.
:-dynamic populacao/1.
:-dynamic prob_cruzamento/1.
:-dynamic prob_mutacao/1.
:-dynamic cod_termino/1.

% parameteriza��o
inicializa:-write('Numero de novas Geracoes: '),read(NG),
 	(retract(geracoes(_));true), asserta(geracoes(NG)),
	write('Numero que ao ser atingido ira terminar o processo (se não for atingido serão realizadas as gerações especificadas em cima): '), read(CT),
	(retract(cod_termino(_));true), asserta(cod_termino(CT)),
	write('Dimensao da Populacao: '),read(DP),
	(retract(populacao(_));true), asserta(populacao(DP)),
	write('Probabilidade de Cruzamento (%):'), read(P1),
	PC is P1/100, 
	(retract(prob_cruzamento(_));true), 	asserta(prob_cruzamento(PC)),
	write('Probabilidade de Mutacao (%):'), read(P2),
	PM is P2/100, 
	(retract(prob_mutacao(_));true), asserta(prob_mutacao(PM)).


gera:-
	inicializa,
	gera_populacao(Pop),
	write('Pop='),write(Pop),nl,
	avalia_populacao(Pop,PopAv),
	write('PopAv='),write(PopAv),nl,
	ordena_populacao(PopAv,PopOrd),
	geracoes(NG),
	gera_geracao(0,NG,PopOrd).

gera_populacao(Pop):-
	populacao(TamPop),
	entregas(NumT),
	findall(Entrega,entrega(Entrega,_,_,_,_,_),LE),
	calculaPrimeiraHeuristicaAlgGen(LEP),
	calculaSegundaHeuristicaAlgGen(LES),
	calculaTerceiraHeuristicaAlgGen(LET),
	NP is TamPop-3,
	gera_populacao(NP,LE,NumT,Pop1),
	append(Pop1,[LEP],Pop2),
	append(Pop2,[LES],Pop3),
	append(Pop3,[LET],Pop).

gera_populacao(0,_,_,[]):-!.

gera_populacao(TamPop,ListaEntregas,NumT,[Ind|Resto]):-
	TamPop1 is TamPop-1,
	gera_populacao(TamPop1,ListaEntregas,NumT,Resto),
	gera_individuo(ListaEntregas,NumT,Ind),
	not(member(Ind,Resto)).
gera_populacao(TamPop,ListaEntregas,NumT,L):-
	gera_populacao(TamPop,ListaEntregas,NumT,L).

gera_individuo([G],1,[G]):-!.

gera_individuo(ListaEntregas,NumT,[G|Resto]):-
	NumTemp is NumT + 1, % To use with random
	random(1,NumTemp,N),
	retira(N,ListaEntregas,G,NovaLista),
	NumT1 is NumT-1,
	gera_individuo(NovaLista,NumT1,Resto).

retira(1,[G|Resto],G,Resto).
retira(N,[G1|Resto],G,[G1|Resto1]):-
	N1 is N-1,
	retira(N1,Resto,G,Resto1).

avalia_populacao([],[]).
avalia_populacao([Ind|Resto],[Ind*V|Resto1]):-
	calcula_custo(Ind,V),
	avalia_populacao(Resto,Resto1).


%Calcula_Tempo_das_Trajetorias
avalia(LE,Custo):-
soma_pesos(LE,LP,_),
acrescenta_tara(LP,LPT),entregas_para_cidades(LE, LC),
carateristicasCam(_,_,_,_,Autonomia,_),
custo(LC,LPT,Autonomia,Custo).

ordena_populacao(PopAv,PopAvOrd):-
	bsort(PopAv,PopAvOrd).

bsort([X],[X]):-!.
bsort([X|Xs],Ys):-
	bsort(Xs,Zs),
	btroca([X|Zs],Ys).


btroca([X],[X]):-!.

btroca([X*VX,Y*VY|L1],[Y*VY|L2]):-
	VX>VY,!,
	btroca([X*VX|L1],L2).

btroca([X|L1],[X|L2]):-btroca(L1,L2).

tempo_viagem(V, J):- J is V.

gera_geracao(G,G,Pop):-!,
	write('Geracao '), write(G), write(':'), nl, write(Pop), nl.

gera_geracao(N,G,[X*H|Pop1]):-
	tempo_viagem(H, Valor),
	cod_termino(Termino),
	append([X*H], Pop1, Pop),
	(Valor =< Termino, !, gera_geracao(N, N, Pop), write('Termino porque alcancou ou superou o valor esperado.'); 
	write('Geracao '), write(N), write(':'), nl, write(Pop), nl,
	random_permutation(Pop, PopPerm), %Impedir que haja sempre as mesmas permutacoes
	cruzamento(PopPerm,NPop1),
	mutacao(NPop1,NPop),
	avalia_populacao(NPop,NPopAv),
	/*juntar duas geracoes*/
	append(NPopAv,[X*H|Pop],PopTemp),
	ordena_populacao(PopTemp,NPopOrd),
	eliminaRepetidos(NPopOrd,ListaSobra),
	populacao(DP),
	roleta(ListaSobra, DP, NPopAux),
	avalia_populacao(NPopAux,NPopAvFinal),
	N1 is N+1,
	gera_geracao(N1,G,NPopAvFinal)).

%multiplicar o custo de cada individuo por um random entre 0 e 1 e selecionar os G melhores
roleta([],_,[]):-!.

%/*multiplicar o custo de cada individuo por um random entre 0 e 1 e selecionar os G melhores*/
roleta([], _, []):-!.
roleta([X*V|Resto],G,Resto1):-
	random(0.1,1,R),
	V1 is V*R,
	(roleta1(Resto,Resto2);true),
	append([X*V1],Resto2,L),
	bsort(L, L1),
	eliminaRepetidos(L1, L2),
	length(L2, Tamanho),
	Tamanho >= G ->
	escolhe(G, L2, Resto1); escolhe(G, L1, Resto1).

roleta1([], []):-!.
roleta1([X*V|Resto],[X*V1|Resto1]):-
random(0.1,1,R),
	V1 is V*R,
	roleta1(Resto,Resto1).


escolhe(0,_,[]):-!.

escolhe(G,[X*_|Resto],[X|Resto1]):-
	G1 is G-1,
	escolhe(G1,Resto,Resto1).

eliminaRepetidos([],[]).
eliminaRepetidos([X|Xs],Ys):-
	member(X,Xs),!,
	eliminaRepetidos(Xs,Ys).
eliminaRepetidos([X|Xs],[X|Ys]):-
	eliminaRepetidos(Xs,Ys).

gerar_pontos_cruzamento(P1,P2):-
	gerar_pontos_cruzamento1(P1,P2).

gerar_pontos_cruzamento1(P1,P2):-
	entregas(N),
	NTemp is N+1,
	random(1,NTemp,P11),
	random(1,NTemp,P21),
	P11\==P21,!,
	((P11<P21,!,P1=P11,P2=P21);(P1=P21,P2=P11)).
gerar_pontos_cruzamento1(P1,P2):-
	gerar_pontos_cruzamento1(P1,P2).


cruzamento([],[]).
cruzamento([Ind*_],[Ind]).
cruzamento([Ind1*_,Ind2*_|Resto],[NInd1,NInd2|Resto1]):-
	gerar_pontos_cruzamento(P1,P2),
	prob_cruzamento(Pcruz),random(0.0,1.0,Pc),
	((Pc =< Pcruz,!,
        cruzar(Ind1,Ind2,P1,P2,NInd1),
	  cruzar(Ind2,Ind1,P1,P2,NInd2))
	;
	(NInd1=Ind1,NInd2=Ind2)),
	cruzamento(Resto,Resto1).

preencheh([],[]).

preencheh([_|R1],[h|R2]):-
	preencheh(R1,R2).


sublista(L1,I1,I2,L):-
	I1 < I2,!,
	sublista1(L1,I1,I2,L).

sublista(L1,I1,I2,L):-
	sublista1(L1,I2,I1,L).

sublista1([X|R1],1,1,[X|H]):-!,
	preencheh(R1,H).

sublista1([X|R1],1,N2,[X|R2]):-!,
	N3 is N2 - 1,
	sublista1(R1,1,N3,R2).

sublista1([_|R1],N1,N2,[h|R2]):-
	N3 is N1 - 1,
	N4 is N2 - 1,
	sublista1(R1,N3,N4,R2).

rotate_right(L,K,L1):-
	entregas(N),
	T is N - K,
	rr(T,L,L1).

rr(0,L,L):-!.

rr(N,[X|R],R2):-
	N1 is N - 1,
	append(R,[X],R1),
	rr(N1,R1,R2).


elimina([],_,[]):-!.

elimina([X|R1],L,[X|R2]):-
	not(member(X,L)),!,
	elimina(R1,L,R2).

elimina([_|R1],L,R2):-
	elimina(R1,L,R2).

insere([],L,_,L):-!.
insere([X|R],L,N,L2):-
	entregas(T),
	((N>T,!,N1 is N mod T);N1 = N),
	insere1(X,N1,L,L1),
	N2 is N + 1,
	insere(R,L1,N2,L2).


insere1(X,1,L,[X|L]):-!.
insere1(X,N,[Y|L],[Y|L1]):-
	N1 is N-1,
	insere1(X,N1,L,L1).

cruzar(Ind1,Ind2,P1,P2,NInd11):-
	sublista(Ind1,P1,P2,Sub1),
	entregas(NumT),
	R is NumT-P2,
	rotate_right(Ind2,R,Ind21),
	elimina(Ind21,Sub1,Sub2),
	P3 is P2 + 1,
	insere(Sub2,Sub1,P3,NInd1),
	eliminah(NInd1,NInd11).


eliminah([],[]).

eliminah([h|R1],R2):-!,
	eliminah(R1,R2).

eliminah([X|R1],[X|R2]):-
	eliminah(R1,R2).

mutacao([],[]).
mutacao([Ind|Rest],[NInd|Rest1]):-
	prob_mutacao(Pmut),
	random(0.0,1.0,Pm),
	((Pm < Pmut,!,mutacao1(Ind,NInd));NInd = Ind),
	mutacao(Rest,Rest1).

mutacao1(Ind,NInd):-
	gerar_pontos_cruzamento(P1,P2),
	mutacao22(Ind,P1,P2,NInd).

mutacao22([G1|Ind],1,P2,[G2|NInd]):-
	!, P21 is P2-1,
	mutacao23(G1,P21,Ind,G2,NInd).
mutacao22([G|Ind],P1,P2,[G|NInd]):-
	P11 is P1-1, P21 is P2-1,
	mutacao22(Ind,P11,P21,NInd).

mutacao23(G1,1,[G2|Ind],G2,[G1|Ind]):-!.
mutacao23(G1,P,[G|Ind],G2,[G|NInd]):-
	P1 is P-1,
	mutacao23(G1,P1,Ind,G2,NInd).











%=======================================================
%   2. Ordenar entregas de modo decrescente por massa
%=======================================================

run3_ordenar_entregas(LEO):- 
    findall(entrega(Entrega,Data,Massa,X,S,D),entrega(Entrega,Data,Massa,X,S,D),LE),
   	lista_entregas_ordenadas(LE,LEO).

lista_entregas_ordenadas(LE,LEO):-sort(3, @>=, LE, LEO).















