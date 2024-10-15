# project_to_do_api_node

### Topics / Tópicos:

<ul>
  <li><a href="#text-pt-br">Ler em Português</a>  |  <a href="#text-en">Read in english</a></li>
  <li><a href="#features-pt-br">Funcionalidades ( pt-br )</a>  |  <a href="#features-en">Features ( en )</a></li>
  <li><a href="#link-api">Link da API ( pt-br )   |   API link ( en )</a></li>
</ul>

## Mais Sobre o Projeto

Esta é uma descrição de uma aplicação de gerenciamento de tarefas (To-Do API) utilizando Node.js, PostgreSQL e autenticação JWT:

A **To-Do API** foi desenvolvida com Node.js e Express.js, permitindo que os usuários gerenciem suas tarefas de forma segura e eficiente. A aplicação segue os princípios RESTful, facilitando a integração com diversos sistemas e interfaces.

O servidor foi implementado com **Express.js**, enquanto o **PostgreSQL** atua como banco de dados relacional, armazenando as informações de tarefas, como título, descrição e status. A comunicação entre o Node.js e o PostgreSQL é feita através da biblioteca **pg**, que gerencia as conexões e operações no banco de dados.

A API suporta operações CRUD (Criar, Ler, Atualizar e Excluir) para as tarefas. A segurança é garantida pela implementação de **autenticação com JWT (JSON Web Token)**, assegurando que apenas usuários autenticados possam acessar e manipular suas tarefas. O JWT permite a autenticação via token, garantindo a proteção das rotas e dos dados armazenados.

Os usuários podem criar contas, fazer login e, após a autenticação, realizar todas as operações relacionadas às tarefas. Essa abordagem torna a API escalável e segura, preparada para futuras extensões, como controle de acesso mais refinado ou integrações com outros serviços.

Esta é a primeira versão funcional; no futuro, o projeto pode ser aprimorado com otimizações de banco de dados, novas funcionalidades e melhorias no design e na experiência de uso.



Use the project : https://project-to-do-api-node.onrender.com
