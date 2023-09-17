# Especificações do Projeto

O projeto Senectus tem requisitos funcionais e não funcionais que definem como a solução web funcionará. Como o Senectus é apenas o front-end, ele tem algumas limitações que foram avaliadas. Também criamos 3 personas para entender nossos possíveis clientes. Acompanhe abaixo as informações referentes à especificação do projeto.

## Personas
![Persona1](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t2-senectus/assets/92616145/d41030c1-3f17-4df9-b969-ea3c97037de7 "Figura 2: Persona Pedro Costa")

![Persona2](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t2-senectus/assets/92616145/a76010ff-d62c-4450-be08-ed910174334c)

![Persona3](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t2-senectus/assets/92616145/982aad35-567f-4ba1-b064-c19b05abdaa6 "Figura 4: Persona Maria Alice")


## Histórias de Usuários

Com base na análise das personas, foram identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR` |
| --- | --- | --- |
| Pedro Costa (Personal Trainer) | Definir o valor cobrado pelos seus serviços | Aumentar a fonte de renda |
| Pedro Costa (Personal Trainer) | Definir um cronograma de exercícios personalizados para os meus clientes e acompanha-los | Atender os seus feedbacks, engaja-los e adaptar os seus exercícios conforme as suas necessidades e dificuldades |
| Pedro Costa (Personal Trainer) | Que a plataforma me de oportunidades para iniciar no mercado por meio um engajamento gerado da mesma | Iniciar minha carreira no mercado de trabalho |
| João da Silva (Usuário do site) | Praticar atividade física guiada por um profissional e pesquisar demais profissionais da saúde conforme as minhas necessidades | Evitar possíveis lesões devido a minha falta de conhecimento e me manter engajado em minhas rotinas. |
| João da Silva (Usuário do site) | Definir um cronograma que se encaixe em minha rotina | Viabilizar a prática de exercícios em meus complicados horários. |
| Maria Alice (Usuário do site) | Um aplicativo que seja de fácil uso e com instruções claras e objetivas sobre cada exercício, por exemplo: vídeos e fotos. | Facilitar o meu acesso no dia a dia. Tendo em vista, que tenho dificuldades de manusear as tecnologias atuais. |
| Maria Alice (Usuário do site) | Ser orientada de maneira simples e objetiva sobre o quão seguro os meus dados estão na plataforma. E entender as boas práticas que podem deixar meus dados ainda mais seguros. | Me sentir mais confortável ao utilizar a plataforma. |


## Requisitos

As tabelas a seguir detalham os requisitos funcionais e não funcionais do projeto:
### Requisitos Funcionais

| ID | Descrição do Requisito | Prioridade | Responsável |
| --- | --- | --- | --- |
| RF-001 | O sistema deve permitir que usuários tenham acesso a descrição informativa dos exercícios | ALTA | |
| RF-002 | O sistema deve permitir que usuários sejam capazes de acessar o catalogo de exercícios e os selecionar | ALTA |  |
| RF-003 | O sistema deve permitir que o usuário, ao iniciar um exercício, tenha acesso a um cronometro que possa ser inicializado ou pausado. | MÉDIA |  |
| RF-004 | O sistema deve permitir que o usuário tenha acesso a algum vídeo ou imagem sobre como fazer o exercício | MÉDIA |  |
| RF-005 | O sistema deve permitir que usuários comuns façam cadastros | ALTA |  |
| RF-006 | O sistema deve permitir que um profissional se cadastre na plataforma, inserindo informações básicas, por exemplo: nome e meios de contato. | ALTA |  |
| RF-007 | O sistema deve permitir que os profissionais sejam capazes de preencher informações mais completas sobre suas competências logo após o cadastro. | ALTA |  |
| RF-008 | O sistema deve permitir que usuários comuns e profissionais, previamente cadastrados, façam login na aplicação | ALTA |  |
| RF-009 | O sistema deve permitir que usuários comuns cadastrados e não cadastrados contatem profissionais por meio de formulários que podem ser acessados no perfil dos mesmos | ALTA |  |
| RF-010 | O sistema deve permitir que usuários comuns criem posts falando sobre seus problemas, para assim encontrar ajuda profissional | MÉDIA |  |
| RF-011 | O sistema deve ser capaz de filtrar os posts dos usuários para os profissionais por meio de palavra-chave | MÉDIA |  |
| RF-012 | O sistema deve ser capaz de filtrar profissionais por especialidade | MÉDIA |  |
| RF-013 | O sistema deve ser capaz de filtrar profissionais por palavra-chave | MÉDIA |  |
| RF-014 | O sistema deve ter uma página inicial que mostre a importância da atividade física durante o envelhecimento. | BAIXO |  |
| RF-015 | O sistema deve ter uma página inicial que fale sobre a iniciativa Senectus | MÉDIA |  |
| RF-016 | O sistema deve ter uma página inicial que mostre o quão confiável a plataforma é | MÉDIA |  |
| RF-017 | O sistema deve permitir que usuários comuns atualizem seus perfis com as seguintes informações: nome, descrição/biografia e idade | MÉDIA |  |
| RF-018 | O sistema deve permitir que usuários profissionais atualizem seus perfis com as seguintes informações: nome, descrição/biografia, idade, profissão, currículo, portfólio, meios de contato e foto. | MÉDIA |  |
| RF-019 | O sistema deve permitir que o usuário comum e profissional seja capaz de deletar a sua conta | ALTA |  |
| RF-020 | O sistema deve permitir que o usuário comum e profissional seja capaz de recuperar uma conta deletada em até 30 dias | MÉDIA |  |
| RF-021 | O sistema deve permitir que os usuários criem cronogramas tanto mensais, quanto semanais, com a possibilidade reajustes. | ALTA |  |
| RF-022 | O sistema deve engajar o profissional iniciante, promovendo-o ao topo das páginas de pesquisas | ALTA |  |
| RF-023 | O sistema deve informar, sempre que necessário, boas práticas que o usuário pode ter relacionado a sua segurança, tendo em vista o seu público-alvo | MÉDIA |  |

### Requisitos não Funcionais

| ID | Descrição do Requisito | Prioridade |
| --- | --- | --- |
| RNF-001 | O sistema deve seguir boas práticas de desenvolvimento de sistemas com relação a usabilidade | ALTA  |
| RNF-002 | O sistema deve ser responsivo em diversas telas com base no público-alvo | ALTA |
| RNF-003 | O sistema deve respeitar as normas da LGPD | MÉDIA |
| RNF-004 | O sistema deve ser seguro para os usuários | ALTA |
| RNF-005 | O sistema deve ser de fácil entendimento para o público idoso | MÉDIA |
| RNF-007 | O sistema deve ser desenvolvido utilizando a linguagem de programação Javascript | ALTA |


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

| ID | Restrição |
| --- | --- |
| 01 | A aplicação não deve utilizar nenhuma tecnologia de back-end |
| 02 | A aplicação não deve utilizar nenhuma tecnologia de framework |
| 03 | A aplicação deve consumir o mínimo de recursos financeiros |
| 04 | A aplicação não deve utilizar bancos de dados, armazenando assim, os dados em memória |
| 05 | O projeto deverá ser entregue até o final do semestre |

