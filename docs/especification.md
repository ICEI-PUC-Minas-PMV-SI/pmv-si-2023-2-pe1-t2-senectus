# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros.

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Pedro Costa (Personal Trainer)  | Gostaria de receber avaliações dos meus clientes           | Mostrar o quão confiável meus serviços são               |
|Pedro Costa (Personal Trainer)       | Gostaria de alguma forma atender os clientes tanto online quanto presencialmente                 | Responder dúvidas mais complexas 
|Pedro Costa (Personal Trainer)       | Inserir meu currículo/portfolio na plataforma        | Dar mais visibilidade ao meu perfil |
| Ana Carolina (Coordenadora de Programas de Saúde) | Gostaria de poder classificar meus eventos entre presencial e online | Informar os idosos sobre a dinâmica do evento
| Ana Carolina (Coordenadora de Programas de Saúde) | Gostaria de saber quem tem interesse no evento. | Poder enviar notificações |
| Ana Carolina (Coordenadora de Programas de Saúde) | Juntamente com profissionais da saúde, gostaria de poder criar notícias sobre a saúde entre os idosos | Propagar conhecimento |
| João da Silva (Usuário do site) | Gostaria de praticar atividade física guiada  | Facilitar a minha rotina |
| João da Silva (Usuário do site) | Gostaria de saber os benefícios de cada exercício | Saber quais são mais importantes para mim |
| João da Silva (Usuário do site) | Gostaria de ler notícias sobre a saúde de idosos | Me manter informado |
| João da Silva (Usuário do site) | Gostaria de pesquisar profissionais da saúde | Me guiar/auxiliar na saúde física |
| João da Silva (Usuário do site) | Gostaria de demonstrar  interesse em eventos  | Engajar mais pessoas no evento |


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Tipo | Responsável |
|------|-----------------------------------------|----| ----| ------|
|RF-001| Usuários comuns devem ser capazes de acessar o catalogo de exercícios| MÉDIA | Dinâmico | |
|RF-002| Usuários comuns devem ser capazes de criar um cronograma personalizado| MÉDIA | Dinâmico | |
|RF-003| Usuários comuns devem ser capazes de publicar seus problemas para que qualquer profissional possa contata-lo| MÉDIA | Dinâmico | |
|RF-004| Usuários comuns devem ser capazes de buscar por profissionais manualmente| ALTA | Dinâmico | 
|RF-005| O usuário deve realizar cadastros de contas | ALTA | Dinâmico | |
|RF-006| O sistema deve ser capaz de filtrar profissionais da saúde | MÉDIA | Dinâmico | |
|RF-007| O usuário pode personalizar o perfil na plataforma | MÉDIA | Dinâmico | |
|RF-008| Permitir que o usuário receba notificações regulares para lembrá-los de realizar suas atividades diárias | MÉDIA | Dinâmico | |
|RF-009| Profissionais da saúde devem ser capazes de indicar suas profissões | MÉDIA | |
|RF-010| Profissionais da saúde devem ser capazes de colocar seus meios de contatos em seu perfil | MÉDIA | Dinâmico |
|RF-011| O usuário deve ser capaz de deletar a sua conta | ALTA | Estático | |
|RF-012| O usuário deve ser capaz de recuperar uma conta deletada em até 30 dias| BAIXO | Estático| 
|RF-013| Uma interface de usuário simples | MÉDIA | Estático | |
|RF-014| Visualizar notícias na plataforma | MÉDIA | Estático | |
|RF-015| A aplicação deve possuir um fluxo dinâmico de CI/CD para aumentar a produtividade dos desenvolvedores| MÉDIA| Estático |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A aplicação deve ter uma boa usabilidade | ALTA | 
|RNF-002| A aplicação deve ser responsiva em diversas telas com base no público-alvo |  ALTA | 
|RNF-003| A aplicação deve respeitar as normas da LGPD | MÉDIA |
|RNF-004| A aplicação deve ser segura para os usuários | ALTA |
|RNF-005| A aplicação deve ser de fácil entendimento para o público idoso | MÉDIA |
|RNF-006| A aplicação deve ser acessível para os motores de busca SEO e SEM| MÉDIA|
|RNF-007| A aplicação deve ser capaz de funcionar offline| BAIXO |
|RNF-008| A aplicação deve ser desenvolvida utilizando a linguagem de programação Javascript| ALTA |


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| A aplicação não deve utilizar nenhuma tecnologia de back-end |
|02| A aplicação não deve utilizar nenhuma tecnologia de framework|
|03| A aplicação deve consumir o minímo de recursos financeiros|
|04| A aplicação não deve utilizar bancos de dados, armazenando assim, os dados em memória|
|05| O projeto deverá ser entregue até o final do semestre|

