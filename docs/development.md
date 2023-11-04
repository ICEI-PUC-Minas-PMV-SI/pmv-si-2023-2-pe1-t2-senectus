# Programação de Funcionalidades

## Onde acessar
Atualmente, optamos por manter o nosso site hospedado no github pages, segue o link do projeto em produção:
[https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-senectus/src/home](https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-senectus/src/home)

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Prioridade | Links | Artefato Criado |
| --- | --- | --- | --- | --- |
| RF-001 | O sistema deve permitir que usuários tenham acesso a descrição informativa de exercícios. | ALTA | https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-senectus/src/exercises-list-aerobico# | exercises-list-aerobico.html |
| RF-002 | O sistema deve permitir que usuários sejam capazes de acessar o catálogo de exercícios e os selecionar. | ALTA | https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-senectus/src/exercises-list-aerobico# | exercises-list-aerobico.html |
| RF-003 | O sistema deve permitir a seleção de exercícios em forma de categorias. | MÉDIA | https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-senectus/src/exercises-types# | exercises-types.html |
| RF-004 | O sistema deve permitir que o usuário tenha acesso a algum vídeo ou imagem sobre como fazer o exercício. | MÉDIA | https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-senectus/src/exercises-list-aerobico#  | exercises-list-aerobico.html
| RF-005 | O sistema deve permitir que um profissional se cadastre na plataforma, inserindo informações básicas, por exemplo: nome e meios de contato. | ALTA | https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-senectus/src/cadastro | cadastro.html |
| RF-006 | O sistema deve permitir que os profissionais sejam capazes de preencher informações mais completas sobre suas competências logo após o cadastro. | ALTA | https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-senectus/src/configs.html | configs.html |
| RF-007 | O sistema deve permitir que usuários profissionais, previamente cadastrados, façam login na aplicação. | ALTA | https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-senectus/src/login  | login.html |
| RF-008 | O sistema deve permitir que usuários contactem profissionais. | ALTA | https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-senectus/src/search-professionals | search-professionals.html |
| RF-009 | O sistema deve ser capaz de filtrar profissionais por especialidade. | MÉDIA | https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-senectus/src/search-professionals | search-professionals.html |
| RF-010 | O sistema deve ser capaz de filtrar profissionais por palavra-chave. | MÉDIA | https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-senectus/src/search-professionals | search-professionals.html |
| RF-011 | O sistema deve ter uma página inicial que mostre a importância da atividade física durante o envelhecimento. | BAIXO | https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-senectus/src/home | home.html|  
| RF-012 | O sistema deve ter uma página inicial que fale sobre a iniciativa do projeto Senectus. | MÉDIA | https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-senectus/src/home | home.html |
| RF-013 | O sistema deve ter uma página inicial que mostre o quão confiável a plataforma é. | MÉDIA | https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-senectus/src/home | home.html |
| RF-014 | O sistema deve permitir que usuários profissionais atualizem seus perfis. | MÉDIA | https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-senectus/src/configs.html | configs.html |
| RF-015 | O sistema deve permitir que o usuário profissional seja capaz de deletar a sua conta. | ALTA | https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-senectus/src/configs.html  | configs.html |
| RF-016 | O sistema deve permitir que o usuário idoso marque uma consulta com o profissional da saúde. | MÉDIA | https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-senectus/src/search-professionals.html | search-professionals.html | 
| RF-017 | O sistema deve permitir que o usuário profissional receba uma notificação do seu e-mail para confirmação de consulta. | MÉDIA | https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-senectus/src/search-professionals.html | search-professionals.html |
| RF-018 | O sistema deve permitir que usuários profissionais definam previamente o valor de seus serviços | MÉDIA | https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-senectus/src/configs.html | configs.html |
## Descrição das estruturas:

## Prestador de serviço
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             |Number|               Identificador único do usuário            | 1                                              |
| Nome completo     | Texto              | Nome Completo do usuário                        | Luiz da Silva Pereira |
| Email      | Texto             | Email do usuário                                 | luizdasilva@email.com     |
| Senha  | Texto  | Senha do usuário para ser usado para autentificação | 123456                                             |
| Área de atuação   | Texto  | Profissão do usuário| Personal Trainer                                           |
| Localização  | Texto  | Localização do usuário | Belo Horizonte, MG 
|Valor cobrado pelo serviço  | Numero (Inteiro)  | Valor que o usuário terá que pagar pelo serviço | R$158.99                                              ||
