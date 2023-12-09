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

Atualmente, temos as intenções de rastrear os bugs presentes nas aplicações por meio do plano de teste citado abaixo. No entanto, é de nossa responsabilidade categorizar os tipos de bugs, para que assim, possamos compreender o nível de severidade e importância que devemos dar para cada bug, segue abaixo as categorias usadas:

- Severidade
    1. S1 - Crítica / Show Stopper: bloqueia o uso da aplicação;
    2. S2 - Grave: bugs que causam erros indesejados e geralmente irreversíveis;
    3. S3 - Moderada: a funcionalidade não atinge os critérios esperados, mas ainda é utilizável;
    3. S4 - Pequena: impacto minímo na aplicação, como erros na interface gráfica.

## Plano de Testes de Software

### Caso de Teste 001

**Caso de Teste** | **CT01 - Acessar os exercícios**
 :--------------: | ------------
**Procedimento**  | 1) O usuário acessa a url https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-senectus/src/home e começa a navegar por cada campo <br> 2) Após terminar de navegar pela página inícial, o usuário clica em 'Exercitar' <br> 3) Seleciona a categoria de seu interesse <br> 4) Usuário lê a descrição do exercício em questão e acessa o vídeo do exercício pelo youtube
**Requisitos associados** | RF-001, RF-002, RF-003, RF-004, RF-011, RF-012, RF-013, RNF-004
**Resultado esperado** | Viabilizar o acesso do usuário aos vídeos feitos para os instruir na sua rotina de exercícios
**Dados de entrada** | A url da página inicial
**Resultados obtidos**    | SUCESSO |
**Bugs encontrados** | 0 |
**Bugs corrigidos** | 0 |
**Páginas acessadas** | 1) https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-senectus/src/home <br> 2) https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-senectus/src/exercises-types <br> 3) https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-senectus/src/exercises-list-hipertrofia.html |

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

**Caso de Teste** | **CT02 - Criar conta completa**
 :--------------: | ------------
**Procedimento**  | 1) O usuário acessa a url https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-senectus/src/home <br> 2) O usuário clica em 'Entrar como profissional' <br> 3) O usuário clica em 'clique aqui' para acessar a página de criação de conta <br> 4) Usuário insere seu nome, email e senha <br> 5) A aplicação valida os dados, verificando se possui os requisitos necessários para serem armazenados corretamente <br> 6) Se tudo estiver correto, o sistema deve embaralhar os dados em formato hexadecimal <br> 7) O sistema, após embaralhar o conteúdo, armazena no Local Storage e gera um token de autenticação, armazenando-o no Session Storage <br> 8) O usuário é redirecionado para a home, mas desta vez, autenticado <br> 9) O sistema o pede para completar seu perfil e o redireciona para a url https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-senectus/src/configs <br> 10) Usuário preenche dados mais completos
**Requisitos associados** | RF-005, RF-006, RF-018, RNF-003, RNF-006
**Resultado esperado** | Criação de conta por completo e a adição de uma camada no conteúdo inserido que dificulte a visibilidade dos dados do usuário por terceiros
**Dados de entrada** | A url da página inicial, a inserção de dados válidos no formulário de cadastro e de configurações da conta.
**Resultados obtidos**    | SUCESSO |
**Bugs encontrados** | 1 |
**Bugs corrigidos** | 1 |
**Descrição dos bugs**| 1) S1 - Popup na qual solicita o preenchimento de dados relacionados aos contatos do usuário disparava em todas as páginas, incluindo a de configuração e de maneira incessante <br> 2) S4 - O mesmo popup é disparado instantaneamente, impossibilitando a visualização da tela do usuário de início, o que não é nossa intenção.
**Branches de correções** | [7d20231](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t2-senectus/commit/7d20231fd23a94966f0211bb74f523e354fae214), [33f2866](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t2-senectus/commit/33f28663e91d2840ffcbd916d1a53d4d0cc38475), [39d97e6](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t2-senectus/commit/39d97e60a4ce69fef483bb695d0c1d5fc78f4bff) |
**Páginas acessadas** | 1) https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-senectus/src/home <br> 2) https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-senectus/src/cadastro <br> 3) https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-senectus/src/configs |


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
**Procedimento**  | 1) O usuário acessa a url https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-senectus/src/home <br> 2) O usuário clica em 'Bem-vindo \<NOME\>' <br> 3) O usuário clica em 'Configurações' <br> 4) Usuário tenta inserir dados novos na sua conta por meio do formulário fornecido <br> 5) A aplicação atualiza os dados armazenados no Local Storage e o token armazenado em Session Storage <br> 6) A aplicação dispara um popup alertando que a conta foi atualizada
**Requisitos associados** | RF-014, RF-018
**Resultado esperado** | Atualização da conta
**Dados de entrada** | A url da página inicial e a inserção de dados válidos no formulário de atualização dos dados na página de configuração.
**Resultados obtidos**    | SUCESSO |
**Bugs encontrados** | 1 |
**Bugs corrigidos** | 1 |
**Descrição dos bugs**| 1) S4 - O campo de cidade não tem a funcionalidade de sugestões de cidades existentes, caso o usuário não mude o estado. |
**Branches de correções** | [d3c5032](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t2-senectus/commit/d3c50326abb8d2ffb6bffcf9f3daeb6c1ebcc59b) |
**Páginas acessadas** | 1) https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-senectus/src/home <br> 2) https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-senectus/src/configs |

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
**Procedimento**  | 1) O usuário acessa a url https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-senectus/src/home <br> 2) O usuário clica em 'Entrar como profissional' <br> 3) Usuário insere seu email e senha <br> 4) A aplicação verifica se o usuário existe, caso exista, o mesmo é redirecionado para a home já autenticado e com posse do token no Session Storage
**Requisitos associados** | RF-007, RNF-003
**Resultado esperado** | Login da conta e redirecionamento para a home
**Dados de entrada** | A url da página inicial e a inserção de dados válidos no formulário de login.
**Resultados obtidos**    | SUCESSO |
**Bugs encontrados** | 0 |
**Bugs corrigidos** | 0 |
**Páginas acessadas** | 1) https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-senectus/src/home <br> 2) https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-senectus/src/login |

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
**Procedimento**  | 1) O usuário acessa a url https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-senectus/src/home <br> 2) Usuário filtra os profissionais por fisioterapeuta <br> 2) Usuário insere o nome do profissional que deseja contatar <br> 3) Usuário clica em contatar e escolhe o meio de contato na qual deseja utilizar
**Requisitos associados** | RF-008, RF-009, RF-010, RF-016, RF-017, RNF-004
**Resultado esperado** | Usuário contata um profissional de seu desejo
**Dados de entrada** | A url da página inicial e a inserção do nome do profissional e a categoria do mesmo
**Resultados obtidos**    | SUCESSO |
**Bugs encontrados** | 2 |
**Bugs corrigidos** | 2 |
**Descrição dos bugs**| 1) S2 - Percebe-se um bug na pesquisa dos profissionais por palavra-chave, onde o sistema limitava a iteração de usuário no Local Storage até o máximo de 12 usuário <br> 2) S3 - Ao tentar filtrar por profissionais e palavra-chave ao mesmo tempo, o aplicativo retorna dados incorretos |
**Branches de correções** | [9eeff33](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t2-senectus/commit/9eeff330b55bef1146946dc46a6a7e10a480fcd1), [6234d87](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t2-senectus/tree/6234d876d2a535010b68f1d2889de3d314b624ce) |
**Páginas acessadas** | 1) https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-senectus/src/home <br> 2) https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-senectus/src/search-professionals |

### Fluxograma do teste - CT05

<div align="center">
    <img src="./img/CT05.svg" alt="fluxograma do CT05" width="50%" height="50%"/>
</div>

<br>
<br>
<br>
<br>

### Caso de Teste 006

**Caso de Teste** | **CT06 - Deletar conta**
 :--------------: | ------------
**Procedimento**  | 1) O usuário acessa https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-senectus/src/home <br> 2) O usuário clica em 'Bem-vindo \<NOME\>' <br> 3) O usuário clica em 'Configurações' <br> 4) Usuário clica em 'Deletar conta' <br> 5) A aplicação deleta a conta e remove seu token <br> 6) A aplicação dispara um popup alertando que a conta foi deletada <br> 7) Sistema redireciona para a página inicial
**Requisitos associados** | RF-015
**Resultado esperado** | Deleção da conta
**Dados de entrada** | A url da página inicial | 
**Resultados obtidos**    | SUCESSO |
**Bugs encontrados** | 0 |
**Bugs corrigidos** | 0 |
**Páginas acessadas** | 1) https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-senectus/src/home <br> 2) https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-senectus/src/configs |

### Fluxograma do teste - CT06

<div align="center">
    <img src="./img/CT06.svg" alt="fluxograma do CT06" width="50%" height="50%"/>
</div>

<br>
<br>
<br>
<br>

### Caso de Teste 007
**Caso de Teste** | **CT07 - Javascript**
:---------------: | ---------------------
**Procedimento**  | 1) Acessar o DevTools do navegador e acessar o Javascript
**Requisitos associados** | RNF-005
**Resultados esperados** | Encontrar arquivos Javascript no sistema
**Dados de entrada** | A url da página inicial | 
**Resultados obtidos**    | SUCESSO |
**Bugs encontrados** | 0 |
**Bugs corrigidos** | 0 |
**Páginas acessadas** | 1) https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-senectus/src/home |

### Fluxograma do teste - CT07

<div align="center">
    <img src="./img/CT07.svg" alt="fluxograma do CT07" width="50%" height="50%"/>
</div>

<br>
<br>
<br>
<br>

### Caso de Teste 008
**Caso de Teste** | **CT08 - Responsividade no mobile**
:---------------: | ---------------------
**Procedimento**  | 1) Navegar pelo site
**Requisitos associados** | RNF-002
**Resultados esperados** | Assim como nos testes que envolvem o site em dispositivos desktop, como mostrados nos demais casos, espera-se que o projeto seja responsivo para dispositivos mobile também |
**Dados de entrada** | A url da página inicial | 
**Resultados obtidos**    | SUCESSO |
**Bugs encontrados** | 0 |
**Bugs corrigidos** | 0 |
**Páginas acessadas** | Todos as páginas |

### Fluxograma do teste - CT08

<div align="center">
    <img src="./img/CT08.svg" alt="fluxograma do CT08" width="50%" height="50%"/>
</div>

<br>
<br>
<br>
<br>

### Caso de Teste 009
**Caso de Teste** | **CT09 - Desconexão/Logout**
:---------------: | ---------------------
**Procedimento**  | 1) O usuário acessa https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-senectus/src/home <br> 2) O usuário clica em 'Bem-vindo \<NOME\>' <br> 3) O usuário clica em 'Desconectar' <br> 4) O sistema remove seu token de autenticação e redireciona o usuário para a página de login
**Requisitos associados** | RF-019, RNF-003 
**Resultados esperados** | A desconexão do usuário |
**Dados de entrada** | A url da página inicial | 
**Resultados obtidos**    | SUCESSO |
**Páginas acessadas** | 1) https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-senectus/src/home <br> 2) https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-senectus/src/login |

### Fluxograma do teste - CT09

<div align="center">
    <img src="./img/CT09.svg" alt="fluxograma do CT09" width="50%" height="50%"/>
</div>

<br>
<br>
<br>
<br>


### Caso de Teste 010
**Caso de Teste** | **CT10 - Usabilidade**
:---------------: | ---------------------
**Procedimento**  | 1) Acessar a aplicação em https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-senectus/src/home <br> 2) Validar com base nas Heurísticas de Nielsen
**Requisitos associados** | RNF-001, RNF-004
**Resultados esperados** | O sistema estar seguindo pelo menos 4 heurísticas 
**Resultados obtidos**    | SUCESSO |
**Heurísticas encontradas** | 1) Compatibilidade entre o sistema e o mundo real <br> 2) Consistência e Padronização <br> 3) Prevenção de erros <br> 4) Diagnóstico de erros <br> 5) Design minimalista
**Páginas acessadas** | 1) https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-senectus/src/home |

<br>
<br>
<br>
<br>

## Registro dos Testes de Software
|*Caso de Teste*    |*TC-01 - Acessar os exercícios* |
|---|---|
|Requisito Associado | RF-001 - O sistema deve permitir que usuários tenham acesso a descrição informativa de exercícios. <br> RF-002 - O sistema deve permitir que usuários sejam capazes de acessar o catálogo de exercícios e os selecionar. <br> RF-011 - O sistema deve ter uma página inicial que mostre a importância da atividade física durante o envelhecimento. <br> RF-012 - O sistema deve ter uma página inicial que fale sobre a iniciativa do projeto Senectus. <br> RF-013 - O sistema deve ter uma página inicial que mostre o quão confiável a plataforma é. <br> RF-003 O sistema deve permitir a seleção de exercícios em forma de categórias. <br> RF-004 O sistema deve permitir que o usuário tenha acesso a algum vídeo ou imagem sobre como fazer o exercício. <br> RNF-004 - O sistema deve ser de fácil entendimento para o público idoso |
|Link do vídeo do teste realizado: | [CT01 - Video](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t2-senectus/assets/92616145/b05676de-e26f-424d-8e01-4301a57a9881)  | 

|*Caso de Teste*                                 |*TC-02 - Criar conta completa*                                         |
|---|---|
|Requisito Associado | RF-005 - O sistema deve permitir que um profissional se cadastre na plataforma, inserindo informações básicas. <br> RNF-006 - O sistema deve respeitar as normas da LGPD <br> RF-006 - O sistema deve permitir que os profissionais sejam capazes de preencher informações mais completas sobre suas competências logo após o cadastro. <br> RF-018 - O sistema deve permitir que usuários profissionais definam previamente o valor de seus serviços <br> RNF-003 - O sistema deve seguir boas práticas de segurança da informação sempre que possível|
|Link do vídeo do teste realizado: | [CT02 - Video](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t2-senectus/assets/92616145/c444fa66-dc43-49d3-bfad-71cb40c4f97e) |
|Nota: | É mais que válido lembrar que a partir do momento em que os dados do usuário são obtidos, a aplicação, aplica uma camada extra de proteção dos dados, utilizando a classe presente em '/src/js/utils/obfuscator.js' na camada de repositório. Além disso, todas as ações e manipulações realizadas pela aplicação, como o compartilhamento dos dados obtidos para a base de clientes, só serão realizadas, caso o usuário aceite e insira seus devidos meios de contatos, conforme mostrado no vídeo. |

|*Caso de Teste*                                 |*TC-03 - Configuração da conta*                                         |
|---|---|
|Requisito Associado | RF-014 - O sistema deve permitir que usuários profissionais atualizem seus perfis. <br> RF-018 - O sistema deve permitir que usuários profissionais definam previamente o valor de seus serviços. |
|Link do vídeo do teste realizado: | [CT03 - Video](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t2-senectus/assets/92616145/392d4973-c722-45ca-a37a-f843c251520b)  | 

|*Caso de Teste*                                 |*TC-04 - Login da conta*                                         |
|---|---|
|Requisito Associado | RF-007 - O sistema deve permitir que usuários profissionais, previamente cadastrados, façam login na aplicação. <br> RNF-003 - O sistema deve seguir boas práticas de segurança da informação sempre que possível. |
|Link do vídeo do teste realizado: | [CT04 - Video](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t2-senectus/assets/92616145/134f2ef3-31fd-4138-aa8f-bd816c201c5a) |

|*Caso de Teste*                                 |*TC-05 - Buscar profissional*                                         |
|---|---|
|Requisito Associado | RF-008 - O sistema deve permitir que usuários contactem profissionais. <br> RF-009 - O sistema deve ser capaz de filtrar profissionais por especialidade. <br> RF-010 - O sistema deve ser capaz de filtrar profissionais por palavra-chave. <br> RF-016 - O sistema deve permitir que o usuário idoso marque uma consulta com o profissional da saúde. <br> RF-017 - O sistema deve permitir que o usuário profissional receba uma notificação do seu e-mail para confirmação de consulta. <br> RNF-004 - O sistema deve ser de fácil entendimento para o público idoso |
|Link do vídeo do teste realizado: | [CT05 - Video](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t2-senectus/assets/92616145/cccb14b5-4be0-4525-a8b4-28b4d0590ec6) |

|*Caso de Teste*                                 |*TC-06 - Deletar conta*                                         |
|---|---|
|Requisito Associado | RF-015 - O sistema deve permitir que o usuário profissional seja capaz de deletar a sua conta. |
|Link do vídeo do teste realizado: | [CT06 - Video](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t2-senectus/assets/92616145/53b8132c-4428-4528-96f3-18fcae7f18e3) |

|*Caso de Teste*                                 |*TC-07 - Utilização do Javascript*                                         |
|---|---|
|Requisito Associado | RNF-005 - O sistema deve ser desenvolvido utilizando a linguagem de programação Javascript |
|Link do vídeo do teste realizado: | [CT07 - Video](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t2-senectus/assets/92616145/3cbd9db9-afa5-41d0-98ca-c6d8966bb3da) |
|Explicação da arquitetura do projeto em javascript: | [development.md](development.md#estrutura-do-projeto) |

|*Caso de Teste*                                 |*TC-08 - Responsividade*                                         |
|---|---|
|Requisito Associado | RNF-002 - O sistema deve ser responsivo em diversas telas com base no público-alvo |
|Link do vídeo do teste realizado: |  [CT08 - Video](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t2-senectus/assets/92616145/d4415b87-7bb8-46f4-bd69-b570f512cc4a) |

|*Caso de Teste*                                 |*TC-09 - Desconexão/Logout*                                         |
|---|---|
|Requisito Associado | RNF-019 - O sistema deve permitir que usuários desloguem da plataforma |
|Link do vídeo do teste realizado: |  [CT09 - Video](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t2-senectus/assets/92616145/8397d5a4-9a23-4ddc-9628-7e860bb7775e) |

|*Caso de Teste*                                 |*TC-10 - Usabilidade*                                         |
|---|---|
|Requisito Associado | RNF-001 - O sistema deve seguir boas práticas de desenvolvimento de sistemas com relação a usabilidade. <br> RNF-004 - O sistema deve ser de fácil entendimento para o público idoso. |
|Link dos documentos: |  [Documento de comprovação](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t2-senectus/files/13625094/heuristicas.pdf) |

## Avaliação dos Testes de Software

### Sobre os bugs
Ao terminar os testes de software, foi possível encontrar alguns bugs de diversos níveis, desde o mais grave até o mais simples. No entanto, é valido ressaltar que todos os bugs detectados na aplicação atualmente, com base nos testes, foram corrigidos com sucesso, somando assim 4 correções de 4 bugs, segue abaixo o gráfico que separa os bugs pelas suas devidas categórias:

<div align="center">
    <img src="./img/graficoDeBugs.png" alt="relatório de bugs encontrados" width="50%" height="50%"/>
</div>

<br>

Vale destacar que, a detecção dos bugs foram de extrema importância para o desenvolvimento do projeto, tendo em vista de que foi possível gerar um feedback de como esta o estado de vida da aplicação e propor possíveis melhorias, como a adição de um tempo de espera nos disparos de popups referentes ao CT02.

### Pontos fracos e fortes da aplicação 

Ao analisar a aplicação por meios dos testes foi possível compreender onde a aplicação mais se destaca e onde ela menos se destaca, por exemplo, como analisado no CT10 a aplicação possui fortes pontos positivos com relação ao seu layout, sendo minimalista, direto ao ponto e eficiente, quando o assunto é feedback e validação dos dados de entrada que o usuário pode interagir, impedindo assim, que o mesmo cometa erros básicos no sistema.

No entanto, pelo fato da aplicação se tratar de um modelo MVP (Minimum Viable Product), pode-se notar limitações significativas em suas funcionalidade, como por exemplo, poucos exercícios presentes em sua biblioteca e poucas funcionalidade dedicadas para os profissionais que se cadastrem na aplicação.

# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação. Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados (LGPD), as informações pessoais - exceto nome, idade e profissão - dos usuários que participaram do teste não foram coletadas, as informações coletadas serviram apenas para a assinatura do Termo de Consentimento Livre e Esclarecido, referenciado logo abaixo desta seção de apresentação, e não foram coletadas por finalidade de pesquisa.

Para este teste de usabilidade, elaboramos seis cenários, cada um baseado na definição apresentada sobre as histórias dos usuários definido na etapa das especificações do projeto.

Foram convidadas [QUANTIDADE DE PESSOAS NO TESTE] pessoas que os perfis se encaixassem nas definições das personas apresentadas na documentação, sendo, idosos e profissionais da saúde; visando averiguar os seguintes indicadores:

### Indicadores 

**Taxa de sucesso:** Métrica coletada a respeito do cumprimento de uma tarefa passada ao usuário, se o usuário conseguiu ou não executar a tarefa proposta;

**Satisfação subjetiva:** Métrica coletada a respeito da avaliação subjetiva por parte do usuário à tarefa proposta, como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

**Tempo para conclusão da tarefa:** em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que se encaixa na meia idade e sedentária. Acesse a página inicial do site e tente compreender a proposta do projeto. Incluindo a importância da atividade física durante o envelhecimento, sobre o que é o nosso projeto e a segurança dos seus dados na nossa plataforma. |
| 2             | Você é uma pessoa que se encaixa na meia idade e sedentária que esta procurando conhecer novos tipos exercícios físico da categória aeróbico e pretende obter conteúdos digitais que conseguem te guiar passo a passo nos seus exercícios. Encontre a atividade física que se encaixa nesta categoria no site. |
| 3             | Você é uma pessoa que se encaixa na meia idade e sedentária que esta procurando contatos de profissionais da saúde relacionados a fisioterapia. Procure os contatos de fisiterapeutas na sua cidade. |
| 4             | Você é um profissional da saúde buscando uma plataforma que divulgue os seus meios de contatos. Encontre uma maneira de vincular ao Senectus criando a sua propria conta para se divulgar e logo em seguida se desconecte da plataforma de maneira segura. |
| 5             | Você é um profissional da saúde na qual deixou de usar a plataforma Senectus e quer se desvincular ao site. Encontre uma maneira de remover seus dados. |



## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que se encaixa na meia idade e sedentária. Acesse a página inicial do site e tente compreender a proposta do projeto. Incluindo a importância da atividade física durante o envelhecimento, sobre o que é o nosso projeto e a segurança dos seus dados na nossa plataforma.


| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário | 
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 4                    | 02.52 segundos                  | 
| 2       | SIM             | 5                    | 17.11 segundos                  |
| 3       | SIM             | 5                    | 39.09 segundos                  |
|  |  |  |  |
| **Média**     | 0%           | 0                | 0 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 8.66 segundos |


    Comentários dos usuários: Achei o site muito bom e fácil de achar as informações. 
    Não tive dificuldades e ficou bem intuitivo.


Cenário 2: Você é uma pessoa que se encaixa na meia idade e sedentária que esta procurando conhecer novos tipos exercícios físico da categória aeróbico e pretende obter conteúdos digitais que conseguem te guiar passo a passo nos seus exercícios. Encontre a atividade física que se encaixa nesta categoria no site. Além do mais descreva em voz alta um exercício que lhe gerou interesse e selecione a categoria.



| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 4                    | 01:08 segundos                  |
| 2       | SIM             | 5                    | 31.42 segundos                  |
| 3       | SIM             | 5                    | 36.21 segundos                  |
|  |  |  |  |
| **Média**     | 0%           | 0                | 0 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.57 segundos |


    Comentários dos usuários: O site é fácil de acessar, os exercícios são práticos e fáceis de realizar. Eu me interessei pela categoria de hipertrofia e pelos exercícios de agachamento.


Cenário 3: Você é uma pessoa que se encaixa na meia idade e sedentária que esta procurando contatos de profissionais da saúde relacionados a fisioterapia. Procure os contatos de fisiterapeutas na sua cidade.


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

Cenário 4: Você é um profissional da saúde buscando uma plataforma que divulgue os seus meios de contatos. Encontre uma maneira de vincular ao Senectus criando a sua propria conta para se divulgar e logo em seguida se desconecte da plataforma de maneira segura.

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


Cenário 5: Você é um profissional da saúde na qual deixou de usar a plataforma Senectus e quer se desvincular ao site. Encontre uma maneira de remover seus dados.


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

Cenário 6: Você é um profissional da saúde na qual quer se conectar ao site em um computador que não é de sua posse. Encontre uma maneira segura de se conectar e desconectar no Senectus.


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



