# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

A documentação dos testes é dividida nas seguintes seções:

 - [Plano de Testes de Software](#plano-de-testes-de-software)
 - [Registro dos Testes de Software](#registro-dos-testes-de-software)
 - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
 - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
 - [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
 - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)

# Teste de Software

Nesta seção o grupo deverá documentar os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

## Plano de Testes de Software

### Caso de Teste 001

**Caso de Teste** | **CT01 - Acessar os exercícios**
 :--------------: | ------------
**Procedimento**  | 1) O usuário acessa a url /src/home <br> 2) O usuário clica em 'Biblioteca de exercícios' <br> 3) Seleciona a categoria de seu interesse <br> 4) Usuário lê a descrição do exercício em questão e acessa o vídeo do exercício pelo youtube
**Requisitos associados** | RF-001, RF-002, RF-003 RF-004, RNF-004
**Resultado esperado** | Viabilizar o acesso do usuário aos vídeos feitos para os instruir na sua rotina de exercícios
**Dados de entrada** | A url da página inicial ('src/home')
**Resultado obtido** | |
**Páginas acessadas** | /src/home, /src/exercises-types, /src/[categória do exercício] |

<br>

### Fluxograma do teste - CT01

<div align="center">
    <img src="./img/CT01.svg" alt="fluxograma do CT01" width="50%" height="50%"/>
</div>

<br>
<br>
<br>
<br>

### Caso de Teste 002

**Caso de Teste** | **CT02 - Criar conta**
 :--------------: | ------------
**Procedimento**  | 1) O usuário acessa a url /src/home <br> 2) O usuário clica em 'Entrar como profissional' <br> 3) O usuário clica em 'clique aqui' para criar uma conta <br> 4) Usuário insere seu nome, email e senha <br> 5) A aplicação valida os dados, verificando se possui os requisitos necessários para serem armazenados corretamente <br> 6) Se tudo estiver correto, o sistema deve embaralhar os dados em formato hexadecimal <br> 7) O sistema, após embaralhar o conteúdo, armazena no Local Storage e gera um token de autenticação, armazenando-o no Session Storage <br> 8) O usuário é redirecionado para a home, mas desta vez, autenticado
**Requisitos associados** | RF-005, RNF-003
**Resultado esperado** | Criação de conta
**Dados de entrada** | A url da página inicial ('src/home') e a inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | |
**Páginas acessadas** | /src/home, /src/cadastro |


<br>

### Fluxograma do teste - CT02

<div align="center">
    <img src="./img/CT02.svg" alt="fluxograma do CT02" width="50%" height="50%"/>
</div>

<br>
<br>
<br>
<br>

### Caso de Teste 003

**Caso de Teste** | **CT03 - Configuração da conta**
 :--------------: | ------------
**Procedimento**  | 1) O usuário acessa a url /src/home <br> 2) O usuário clica em 'Bem-vindo \<NOME\>' <br> 3) O usuário clica em 'Configurações' <br> 4) Usuário tenta inserir seu nome, senha, descrição curta, telefone, profissão, estado, cidade e valor por serviço <br> 5) A aplicação atualiza os dados armazenados no Local Storage e o token armazenado em Session Storage <br> 6) A aplicação dispara um popup alertando que a conta foi atualizada
**Requisitos associados** | RF-006, RF-014, RF-018
**Resultado esperado** | Atualização da conta
**Dados de entrada** | A url da página inicial ('src/home') e a inserção de dados válidos no formulário de atualização dos dados na página de configuração.
**Resultado obtido** | |
**Páginas acessadas** | /src/home, /src/configs |

### Fluxograma do teste - CT03

<div align="center">
    <img src="./img/CT03.svg" alt="fluxograma do CT03" width="50%" height="50%"/>
</div>

<br>
<br>
<br>
<br>

### Caso de Teste 004

**Caso de Teste** | **CT04 - Login da conta**
 :--------------: | ------------
**Procedimento**  | 1) O usuário acessa a url /src/home <br> 2) O usuário clica em 'Entrar como profissional' <br> 3) Usuário insere seu email e senha <br> 4) A aplicação verifica se o usuário existe, caso exista, o mesmo é redirecionado para a home já autenticado e com posse do token no Session Storage
**Requisitos associados** | RF-007
**Resultado esperado** | Login da conta e redirecionamento para a home
**Dados de entrada** | A url da página inicial ('src/home') e a inserção de dados válidos no formulário de login.
**Resultado obtido** | |
**Páginas acessadas** | /src/home, /src/login |

### Fluxograma do teste - CT04

<div align="center">
    <img src="./img/CT04.svg" alt="fluxograma do CT04" width="50%" height="50%"/>
</div>

<br>
<br>
<br>
<br>

### Caso de Teste 005

**Caso de Teste** | **CT05 - Buscar profissional**
 :--------------: | ------------
**Procedimento**  | 1) Usuário filtra os profissionais por fisioterapeuta <br> 2) Usuário insere o nome do profissional que deseja contatar <br> 3) Usuário clica em contatar e escolhe o meio de contato na qual deseja utilizar
**Requisitos associados** | RF-008, RF-009, RF-010, RF-016, RF-017, RNF-004
**Resultado esperado** | Usuário contata um profissional de seu desejo
**Dados de entrada** | A url da página inicial ('src/home') e a inserção do nome do profissional e a categoria do mesmo
**Resultado obtido** | |
**Páginas acessadas** | /src/home, /src/search-professionals |

### Fluxograma do teste - CT05

<div align="center">
    <img src="./img/CT05.svg" alt="fluxograma do CT05" width="50%" height="50%"/>
</div>

<br>
<br>
<br>
<br>


### Caso de Teste 006

**Caso de Teste** | **CT06 - Visualização da home**
 :--------------: | ------------
**Procedimento**  | 1) O usuário acessa /src/home e navega por ela
**Requisitos associados** | RF-011, RF-012, RF-013, RNF-004
**Resultado esperado** | Dar um ponto de acesso único ao usuário, onde o mesmo possa acessar o resto do site
**Dados de entrada** | A url da página inicial ('src/home')
**Resultado obtido** | |
**Páginas acessadas** | /src/home |

### Fluxograma do teste - CT06

<div align="center">
    <img src="./img/CT06.svg" alt="fluxograma do CT06" width="50%" height="50%"/>
</div>

<br>
<br>
<br>
<br>

### Caso de Teste 007

**Caso de Teste** | **CT07 - Responsividade**
 :--------------: | ------------
**Procedimento**  | 1) O usuário tenta redimencionar o tamanho de sua tela
**Requisitos associados** | RNF-001, RNF-002
**Resultado esperado** | Viabilizar o acesso do usuário aos vídeos feitos para os instruir na sua rotina de exercícios
**Dados de entrada** | A url da página inicial
**Resultado obtido** | |
**Páginas acessadas** | TODAS |

### Fluxograma do teste - CT07

<div align="center">
    <img src="./img/CT07.svg" alt="fluxograma do CT07" width="50%" height="50%"/>
</div>

<br>
<br>
<br>
<br>

### Caso de Teste 008

**Caso de Teste** | **CT08 - Deletar conta**
 :--------------: | ------------
**Procedimento**  | 1) O usuário acessa a url /src/home <br> 2) O usuário clica em 'Bem-vindo \<NOME\>' <br> 3) O usuário clica em 'Configurações' <br> 4) Usuário clica em 'Deletar conta' <br> 5) A aplicação deleta a conta e remove seu token <br> 6) A aplicação dispara um popup alertando que a conta foi deletada
**Requisitos associados** | RF-015
**Resultado esperado** | Deleção da conta
**Dados de entrada** | A url da página inicial ('src/home') | 
**Resultado obtido** | |
**Páginas acessadas** | /src/home, /src/configs |

### Fluxograma do teste - CT08

<div align="center">
    <img src="./img/CT08.svg" alt="fluxograma do CT08" width="50%" height="50%"/>
</div>

<br>
<br>
<br>
<br>

## Registro dos Testes de Software

Esta seção deve apresentar o relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Documente cada caso de teste apresentando um vídeo ou animação que comprove o funcionamento da funcionalidade. Veja os exemplos a seguir.

|*Caso de Teste*                                 |*TC-01 - Criar uma conta*                                         |
|---|---|
|Requisito Associado | RF-004 - Usuários não autenticados podem se cadastrar para criar uma conta e serem autenticados.|
|Link do vídeo do teste realizado: | https://1drv.ms/u/s!AhD2JqpOUvJChapRtRSQ9vPzbNLwGA?e=mxZs6t| 

|*Caso de Teste*                                 |*TC-02 - Efetuar Login (usuário autenticado)*                                         |
|---|---|
|Requisito Associado | RF-004 - Usuários não autenticados podem se cadastrar para criar uma conta e serem autenticados.|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 


## Avaliação dos Testes de Software

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.


# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.


Apresente os cenários de testes utilizados na realização dos testes de usabilidade da sua aplicação. Escolha cenários de testes que demonstrem as principais histórias de usuário sendo realizadas. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando. |
| 2             | Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço. |



## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 27.87 segundos                  |
| 2       | SIM             | 5                    | 17.11 segundos                  |
| 3       | SIM             | 5                    | 39.09 segundos                  |
|  |  |  |  |
| **Média**     | 0%           | 0                | 0 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 8.66 segundos |


    Comentários dos usuários: Achei o site muito bom e intuitivo. 
    Não tive dificuldades e acho que ficou bem intuitivo.




Cenário 2: Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 22.54 segundos                          |
| 2       | SIM             | 5                    | 31.42 segundos                          |
| 3       | SIM             | 5                    | 36.21 segundos                          |
|  |  |  |  |
| **Média**     | 0%           | 0                | 0 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.57 segundos |


    Comentários dos usuários: O site é fácil de acessar, mas algumas páginas poderiam 
    redirecionar a gente automaticamente para outras. Senti a falta de mais opções de filtros, 
    tanto na hora da pesquisa, quanto depois dela, nos resultados.




## Avaliação dos Testes de Usabilidade


Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.

Contudo, tendo em vista que a diferença foi relevante (por exemplo, 113 segundos — média usuários — contra 25 segundos — especialista — no cenário três), e ainda os comentários feitos por alguns usuários, entendemos haver oportunidades de melhoria na usabilidade da aplicação.



