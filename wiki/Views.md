# Views

## Introduction
Será adotada a combinação de dois modelos de representação arquitetural: C4 e 4+1.

O Modelo de Vistas 4+1 [[Krutchen-1995]](References.md#Kruchten-1995) propõe a descrição do sistema através de vistas complementares permitindo assim analisar separadamente os requisitos dos vários stakeholders do software, tais como utilizadores, administradores de sistemas, project managers, arquitetos e programadores. As vistas são deste modo definidas da seguinte forma:

- Vista lógica: relativa aos aspetos do software visando responder aos desafios do negócio;
- Vista de processos: relativa ao fluxo de processos ou interações no sistema;
- Vista de desenvolvimento: relativa à organização do software no seu ambiente de desenvolvimento;
- Vista física: relativa ao mapeamento dos vários componentes do software em hardware, i.e. onde é executado o software;
- Vista de cenários: relativa à associação de processos de negócio com atores capazes de os espoletar.

O Modelo C4 [[Brown-2020]](References.md#Brown-2020)[[C4-2020]](References.md#C4-2020) defende a descrição do software através de quatro níveis de abstração: sistema, contentor, componente e código. Cada nível adota uma granularidade mais fina que o nível que o antecede, dando assim acesso a mais detalhe de uma parte mais pequena do sistema. Estes níveis podem ser equiparáveis a mapas, e.g. a vista de sistema corresponde ao globo, a vista de contentor corresponde ao mapa de cada continente, a vista de componentes ao mapa de cada país e a vista de código ao mapa de estradas e bairros de cada cidade.
Diferentes níveis permitem contar histórias diferentes a audiências distintas.

Os níveis encontram-se definidos da seguinte forma:
- Nível 1: Descrição (enquadramento) do sistema como um todo;
- Nível 2: Descrição de contentores do sistema;
- Nível 3: Descrição de componentes dos contentores;
- Nível 4: Descrição do código ou partes mais pequenas dos componentes (e como tal, não será abordado neste DAS/SAD).

Pode-se dizer que estes dois modelos se expandem ao longo de eixos distintos, sendo que o Modelo C4 apresenta o sistema com diferentes níveis de detalhe e o Modelo de Vista 4+1 apresenta o sistema de diferentes perspetivas. Ao combinar os dois modelos torna-se possível representar o sistema de diversas perspetivas, cada uma com vários níveis de detalhe.

Para modelar/representar visualmente, tanto o que foi implementado como as ideias e alternativas consideradas, recorre-se à Unified Modeling Language (UML) [[UML-2020]](References.md#UML-2020) [[UMLDiagrams-2020]](References.md#UMLDiagrams-2020).


## Nível 1
### Vista Lógica

![N1-VL](https://bitbucket.org/claudiafreitas/lei-22-s5/wiki/diagramas/nivel1/NivelLogica.jpg)

### Vista de Processos

#### SSD US001 - Criar Armazém
![N1-VP-US001](https://bitbucket.org/claudiafreitas/lei-22-s5/wiki/diagramas/nivel1/US001/N1_Vista_Processo_US001.svg)

#### SSD US006 - Editar uma Entrega
![N1-VP-US006](https://bitbucket.org/claudiafreitas/lei-22-s5/wiki/diagramas/nivel1/US006/N%C3%ADvel%201%20-%20Vista%20de%20Processo%20-%20US06.svg)

#### SSD US008 - Listar Camião
![N1-VP-US008](https://bitbucket.org/claudiafreitas/lei-22-s5/wiki/diagramas/nivel1/US008/Nivel1_Listar_Camiao.svg)


## Nível 2

### Vista Lógica
![N2-VL](https://bitbucket.org/claudiafreitas/lei-22-s5/wiki/diagramas/nivel2/Nivel2_VL/Vista%20L%C3%B3gica-ALT2.jpg)

#### Alternativa2
Em alternativa a este diagrama, apresentamos uma outra solução. Em que, o planeamento tem mais funcionalidades do que previsto. 

![N2-VL](https://bitbucket.org/claudiafreitas/lei-22-s5/wiki/diagramas/nivel2/Nivel2_VL/Vista%20L%C3%B3gica-ALT1.jpg)

Do nosso ponto de vista, a primeira alternativa é melhor, uma vez, que apresenta menor acoplamento e maior coesão. 


### Vista de Processos

#### SSD US004 - Criar uma Entrega
![N2-VP-US004](https://bitbucket.org/claudiafreitas/lei-22-s5/wiki/diagramas/nivel2/US004/Nivel2_Criar_Entrega.svg)

#### SSD US012 - Editar um Caminho 
![N2-VP-US012](https://bitbucket.org/claudiafreitas/lei-22-s5/wiki/diagramas/nivel2/US012/Nivel2_Editar_Caminho.svg)


### Vista de Implementação

![N2-VL](https://bitbucket.org/claudiafreitas/lei-22-s5/wiki/diagramas/nivel2/Nivel2_VI/ALT2/Vista%20Implementacao-ALT2.jpg)


### Vista Física
Uma proposta muito simplificada. 
![N2-VF](https://bitbucket.org/claudiafreitas/lei-22-s5/wiki/diagramas/nivel2/Nivel2_VF/VistaFisicaNivel2.svg)

De facto, deve-se ter em consideração os requisitos não funcionais ["Physical Contraints"](Background.md#Physical_Constraints).


## Nível 3 (Gestão de Armazéns)

### Vista Lógica
Alternativa baseada numa arquitetura por camadas sobrepostas:

![N3-VL-MDR-alt1](https://bitbucket.org/claudiafreitas/lei-22-s5/wiki/diagramas/nivel3/VistaLogica.jpg)

Alternativa baseada numa arquitetura por camadas concêntricas (Onion):

![N3-VL-MDR-alt2](https://bitbucket.org/claudiafreitas/lei-22-s5/wiki/diagramas/nivel3/VistaLogica2.jpg)

A alternativa Onion será a adotada.


### Vista de Processos

#### SD US001 - Criar Armazém
![N3_VP_US001](https://bitbucket.org/claudiafreitas/lei-22-s5/wiki/diagramas/nivel3/US001/N3_Vista_Processo_US001.svg)

#### SD US002 - Listar Armazém
![N3_VP_US002](https://bitbucket.org/claudiafreitas/lei-22-s5/wiki/diagramas/nivel3/US002/Nivel3-ListarArmazens-US02.svg)

#### SD US006 - Editar Entrega
![N3_VP_US006](https://bitbucket.org/claudiafreitas/lei-22-s5/wiki/diagramas/nivel3/US006/Nivel3-VistaProcesso-US006.svg)

### Vista de Implementação
![N3-VI-GestaoArmazens-alt2](https://bitbucket.org/claudiafreitas/lei-22-s5/wiki/diagramas/nivel3/vista%20implementa%C3%A7%C3%A3o%20.png)

### Vista Física
Por agora, não existe necessidade de ser representada.

## Nível 3 (Logística)
### Vista Lógica
Alternativa baseada numa arquitetura por camadas sobrepostas:

![N3-VL-Logistica-alt1](https://bitbucket.org/claudiafreitas/lei-22-s5/wiki/diagramas/nivel3/Nivel3_VL_Logistica/Nivel3_VL_Logistica.jpg)

Alternativa baseada numa arquitetura por camadas concêntricas (Onion):

![N3-VL-Logistica-alt2](https://bitbucket.org/claudiafreitas/lei-22-s5/wiki/diagramas/nivel3/Nivel2VistaFisicaLogistica2.jpg)

A alternativa Onion será a adotada.

### Vista de Processos

#### SD US010 - Criar Caminhos
![N3_VP_US010](https://bitbucket.org/claudiafreitas/lei-22-s5/wiki/diagramas/nivel3/US010/Nivel3-VistaProcesso-us010.svg)

#### SD US011 - Listar Caminhos
![N3_VP_US011_Todos](https://bitbucket.org/claudiafreitas/lei-22-s5/wiki/diagramas/nivel3/US011/Nivel3_VP_US007_ListarTodosCaminhos.jpg)

![N3_VP_US011_PorId](https://bitbucket.org/claudiafreitas/lei-22-s5/wiki/diagramas/nivel3/US011/Nivel3_VP_US007_ListarPorId.jpg)

![N3_VP_US011_IdArmazemOrigem](https://bitbucket.org/claudiafreitas/lei-22-s5/wiki/diagramas/nivel3/US011/Nivel3_VP_US007_ListarPorIdArmazemOrigem.jpg)

![N3_VP_US011_IdArmazemDestino](https://bitbucket.org/claudiafreitas/lei-22-s5/wiki/diagramas/nivel3/US011/Nivel3_VP_US007_ListarPorIdArmazemDestino.jpg)

#### SD US009 - Editar Camião
![N3_VP_US009](https://bitbucket.org/claudiafreitas/lei-22-s5/wiki/diagramas/nivel3/US009/N3_Vista_Processo_US009.svg)

### Vista de Implementação
![N3-VI-Logistica](https://bitbucket.org/claudiafreitas/lei-22-s5/wiki/diagramas/nivel3/Nivel3_VI_Logistica/Nivel3_VI_Logistica.jpg)

### Vista Física
Por agora, não existe necessidade de ser representada.

## Nível 3 (Planeamento)

### Vista Lógica
![N3_VP_Planeamento](https://bitbucket.org/claudiafreitas/lei-22-s5/wiki/diagramas/nivel3/Nivel3_VL_Planeamento/Nivel3_VL_Planeamento.jpg)

### Vista de Processos

### Vista de Implementação
![N3_VI_Planeamento](https://bitbucket.org/claudiafreitas/lei-22-s5/wiki/diagramas/nivel3/Nivel3_VI_Planeamento/Nivel3_VI_Planeamento.jpg)

### Vista Física

## Nível 3 (SPA)
### Vista Lógica
![N3_VL_SPA](https://bitbucket.org/claudiafreitas/lei-22-s5/wiki/diagramas/nivel3/Nivel3_VL_SPA/nivel3%20vp.jpg)

### Vista de Processos
#### SD US015 - Criar Camião
![N3_VP_US015](https://bitbucket.org/claudiafreitas/lei-22-s5/wiki/diagramas/nivel3/US015/Nivel3%20VP%20US015.jpg)

### Vista de Implementação
![N3-VI-SPA](https://bitbucket.org/claudiafreitas/lei-22-s5/wiki/diagramas/nivel3/Nivel3_VI_SPA/Nivel3_VI_SPA.jpg)

### Vista Física