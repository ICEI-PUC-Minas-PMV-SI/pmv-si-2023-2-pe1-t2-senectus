# Especificações do Projeto

O projeto Senectus tem requisitos funcionais e não funcionais que definem como a solução web funcionará. Como o Senectus é apenas o front-end, ele tem algumas limitações que foram avaliadas. Também criamos 3 personas para entender nossos possíveis clientes. Acompanhe abaixo as informações referentes à especificação do projeto.

## Personas
![Persona1](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t2-senectus/assets/92616145/d41030c1-3f17-4df9-b969-ea3c97037de7 "Figura 2: Persona Pedro Costa")

![Persona2](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t2-senectus/assets/92616145/a76010ff-d62c-4450-be08-ed910174334c "Figura 3: Persona João da Silva")

![Persona3](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t2-senectus/assets/92616145/982aad35-567f-4ba1-b064-c19b05abdaa6 "Figura 4: Persona Maria Alice")


## Histórias de Usuários

Com base na análise das personas, foram identificadas as seguintes histórias de usuários:

| EU COMO... `PERSONA` | QUERO/PRECISO ... `FUNCIONALIDADE` | PARA ... `MOTIVO/VALOR` |
| --- | --- | --- |
| Pedro Costa (Prestador de serviço) | Definir o valor cobrado pelos meus serviços. | Precificar meu serviço na plataforma. |
| Pedro Costa (Prestador de serviço) | Inserir o meu currículo e informações pessoais plataforma. | Divulgar o seu serviço e mostrar suas experiências anteriores para o mercado de trabalho. |
| Pedro Costa (Prestador de serviço) | Receber contato de possíveis clientes através da plataforma. | Aumentar minha fonte de renda e ajudar os idosos sedentários. |
| João da Silva (Idoso) | Praticar atividade física guiada através de uma plataforma on-line. | Se exercitar e sair do sedentarismo. |
| João da Silva (Idoso)  | Pesquisar por profissionais da saúde na plataforma. | Monitorar minha saúde física através de uma consulta on-line. |
| Maria Alice (Idosa) | Uma plataforma que possua explicações sobre os exercícios que devo fazer, me ensinando a praticá-los por meio de vídeos, fotos ou descrições. | Sanar as minhas dificuldades sobre como praticar determinados exercícios. |
| Maria Alice (Idosa) | Ser orientada de maneira simples e objetiva sobre o quão seguro os meus dados estão na plataforma.  | Me sentir mais confortável ao utilizar a plataforma. |
| Maria Alice (Idosa) | Uma plataforma simplificada com um passo a passo ensinando como navegá-la. | Reduzir as minhas dificuldades ao lidar com novas tecnologias. |

## Requisitos

As tabelas a seguir detalham os requisitos funcionais e não funcionais do projeto:
### Requisitos Funcionais

| ID | Descrição do Requisito | Prioridade | Responsável |
| --- | --- | --- | --- |
| RF-001 | O sistema deve permitir que usuários tenham acesso a descrição informativa dos exercícios. | ALTA |  |
| RF-002 | O sistema deve permitir que usuários sejam capazes de acessar o catálogo de exercícios e os selecionar. | ALTA |  |
| RF-003 | O sistema deve permitir que o usuário, ao iniciar um exercício, tenha acesso a um cronometro que possa ser inicializado ou pausado. | MÉDIA |  |
| RF-004 | O sistema deve permitir que o usuário tenha acesso a algum vídeo ou imagem sobre como fazer o exercício. | MÉDIA |   |
| RF-005 | O sistema deve permitir que um profissional se cadastre na plataforma, inserindo informações básicas, por exemplo: nome e meios de contato. | ALTA |   |
| RF-006 | O sistema deve permitir que os profissionais sejam capazes de preencher informações mais completas sobre suas competências logo após o cadastro. | ALTA |  |
| RF-007 | O sistema deve permitir que usuários profissionais, previamente cadastrados, façam login na aplicação. | ALTA |   |
| RF-008 | O sistema deve permitir que usuários contatem profissionais pelo seu perfil. | ALTA |  |
| RF-009 | O sistema deve ser capaz de filtrar profissionais por especialidade. | MÉDIA |  |
| RF-010 | O sistema deve ser capaz de filtrar profissionais por palavra-chave. | MÉDIA |  |
| RF-011 | O sistema deve ter uma página inicial que mostre a importância da atividade física durante o envelhecimento. | BAIXO |  |
| RF-012 | O sistema deve ter uma página inicial que fale sobre a iniciativa do projeto Senectus. | MÉDIA |  |
| RF-013 | O sistema deve ter uma página inicial que mostre o quão confiável a plataforma é. | MÉDIA |  |
| RF-014 | O sistema deve permitir que usuários profissionais atualizem seus perfis. | MÉDIA |  |
| RF-015 | O sistema deve permitir que o usuário profissional seja capaz de deletar a sua conta. | ALTA |  |
| RF-016 | O sistema deve permitir que o usuário profissional seja capaz de recuperar uma conta deletada em até 30 dias. | MÉDIA |  |
| RF-017 | O sistema deve informar, sempre que necessário, boas práticas que o usuário pode ter relacionado a sua segurança, tendo em vista o seu público-alvo. | MÉDIA |  |

### Requisitos não Funcionais

| ID | Descrição do Requisito | Prioridade |
| --- | --- | --- |
| RNF-001 | O sistema deve seguir boas práticas de desenvolvimento de sistemas com relação a usabilidade. | ALTA  |
| RNF-002 | O sistema deve ser responsivo em diversas telas com base no público-alvo | ALTA |
| RNF-003 | O sistema deve respeitar as normas da LGPD | MÉDIA |
| RNF-004 | O sistema deve seguir boas práticas de segurança da informação sempre que possível | ALTA |
| RNF-005 | O sistema deve ser de fácil entendimento para o público idoso | MÉDIA |
| RNF-007 | O sistema deve ser desenvolvido utilizando a linguagem de programação Javascript | ALTA |


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

| ID | Restrição |
| --- | --- |
| 01 | A aplicação não deve utilizar nenhuma tecnologia de back-end |
| 02 | A aplicação não deve utilizar nenhuma tecnologia de framework |
| 03 | A aplicação deve consumir o mínimo de recursos financeiros |
| 04 | A aplicação não deve utilizar bancos de dados, armazenando, assim, os dados em memória |
| 05 | O projeto deverá ser entregue até o final do semestre |

