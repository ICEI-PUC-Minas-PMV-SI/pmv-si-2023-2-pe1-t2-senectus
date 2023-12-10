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
| RF-006 | O sistema deve permitir que os profissionais sejam capazes de preencher informações mais completas sobre suas competências, incluindo os serviços prestados | ALTA | https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-senectus/src/configs.html | configs.html |
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
| RF-017 | O sistema deve permitir que o usuário profissional receba uma notificação no seu e-mail para confirmação de consulta. | MÉDIA | https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-senectus/src/search-professionals.html | search-professionals.html |
| RF-018 | O sistema deve permitir que usuários profissionais definam o valor de seus serviços | MÉDIA | https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-senectus/src/configs.html | configs.html |
| RF-019 | O sistema deve permitir que usuários desloguem da plataforma | MÉDIA | https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-senectus/src/configs.html | configs.html |

## Descrição das estruturas:

### Entidades - Prestador de serviço
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             |Texto|               Identificador único do usuário            | 913c0138-d292-4579-afd7-345df721d947                                             |
| Nome     | Texto              | Nome do usuário                        | Luiz da Silva |
| Email      | Texto             | Email do usuário                                 | luizdasilva@email.com     |
| Senha  | Texto  | Senha do usuário para ser usado para autentificação | 123456                                             |
|Descrição curta | Texto | Uma pequena descrição do usuário | Fisioterapeuta dedicado ao seu bem-estar. |
|Estado | Texto | O estado onde o usuário de localiza | Minas Gerais |
|Abreviação do estado | Texto | O estado onde o usuário de localiza | MG |
|Cidade | Texto | A cidade onde o usuário de localiza | BH |
| Área de atuação   | Texto  | Profissão do usuário| Personal Trainer                                           |
|Valor cobrado pelo serviço  | Numero  | Valor que o usuário terá que pagar pelo serviço | 158                                              ||
| Criado em | Data | Data de criação da conta | 23/12/2023
| Serviço mais prestado | Texto | Serviço mais prestado pelo usuário | Pilates |
| Segundo serviço mais prestado | Texto | Segundo serviço mais prestado pelo usuário | Fisioterapia Neurofuncional |
| Terceiro serviço mais prestado | Texto | Terceiro serviço mais prestado pelo usuário | Fisioterapia Ortopédica |


### Estrutura do projeto
<img src="./img/EstruturaDoProjeto.svg" alt=""/>

<br>
<br>
<br>

A estrutura do nosso projeto foi moldada de maneira completamente modular, visando separar a regra de negócio e designar a responsabilidade para cada classe existente no sistema, observe as camadas existentes no sistema abaixo e as suas respectivas responsabilidades:

| Camada | Caminho | Responsabilidade |
|------|---------|------------------|
| Páginas | /src/js/pages | Responsável por gerenciar os eventos da página e disparar as demais classes quando necessário, por exemplo, quando o usuário precisa realizar o cadastro, a pages deve disparar a classe responsável por tal |
| Entidades | /src/js/entities | Responsável por viabilizar o uso das entidades no código por meio das classes, por exemplo a entidade de usuários, que é representada por user.js |
| Repositórios | /src/js/repos | Responsável por isolar os repositórios e métodos de armazenamentos em uma classe, um exemplo disso é o localstorage/user.js e o sessionStorage/token.js que são responsáveis pela criação dos respectivos dados dentro do Local Storage e o Session Storage, garantindo que a utilização desta API nativa do Javascript seja utilizada de maneira uniforme e mais modular. |
| Fabricas | /src/factories | Responsável por criar entidades ou dados de maneira genérica e customizável ao mesmo tempo, um exemplo de uso desta camada pode ser visualizado na geração de coleções de usuários aleatórios em /src/js/entities/repos/localstorage/seed.js. |
| Validação de dados | /src/DTO | Responsável pela validação de uma coleção de dados. Geralmente, utilizamos esta camada quando pretendemos passar um objeto de uma camada para a outra, um exemplo de uso é o momento em que o usuário realiza o seu login e precisamos validar se os campos do usuário estão corretos ou não. |
| Utilitários | /src/utils | São utilitários utilizados no projeto, não possuem uma função específica, sendo assim, são funções genéricas, como por exemplo, a geração de um UUID ou a formatação de um número de telefone. |
| Eventos | /src/events | Esta camada é responsável por gerenciar eventos customizados, com a biblioteca mitt. No sistema, um exemplo de uso é quando precisamos disparar um determinado popup usando o metódo dispatch.  |
| Gateways | /src/gateways | Responsável pelo uso de APIs externas, garantindo uma uniformidade em seu uso, evitando assim, que erros possam ocorrer ao manipular, por exemplo, a API do IBGE. 
| Mapeadores | /src/js/entities/mappers | São responsaveis por remapear as entidades presentes no sistema. Um exemplo disso, é quando precisamos converter a classe User em um objeto para inserir dentro do Local Storage. |
