# project_to_do_api_node

### Topics / Tópicos:

- [Mais sobre o projeto](#mais-sobre-o-projeto) | [More about the project](#More-about-the-project)
- [Ferramentas](#ferramentas) | [Tools](#tools)
- [Como baixar](#como-usar) | [How to download](#how-to-use)
- [Rotas](#rotas) | [Routes](#routes)

</ul>

<hr>
<div id="mais-projeto-pt-br">
   
   ## Mais sobre o projeto 
</div>

Esta é uma descrição de uma aplicação de gerenciamento de tarefas (To-Do API) utilizando Node.js, PostgreSQL e autenticação JWT:

A **To-Do API** foi desenvolvida com Node.js e Express.js, permitindo que os usuários gerenciem suas tarefas de forma segura e eficiente.

O servidor foi implementado com **Express.js**, enquanto o **PostgreSQL** atua como banco de dados relacional, armazenando as informações de tarefas, como título, descrição e status. A comunicação entre o Node.js e o PostgreSQL é feita através da biblioteca **pg**, que gerencia as conexões e operações no banco de dados.

A API suporta operações CRUD (Criar, Ler, Atualizar e Excluir) para as tarefas. A segurança é garantida pela implementação de **autenticação com JWT (JSON Web Token)**, assegurando que apenas usuários autenticados possam acessar e manipular suas tarefas. O JWT permite a autenticação via token, garantindo a proteção das rotas e dos dados armazenados.

Os usuários podem criar contas, fazer login e, após a autenticação, realizar todas as operações relacionadas às tarefas. Essa abordagem torna a API escalável e segura, preparada para futuras extensões, como controle de acesso mais refinado ou integrações com outros serviços.

Esta é a primeira versão funcional; no futuro, o projeto pode ser aprimorado com otimizações de banco de dados, novas funcionalidades e melhorias no design e na experiência de uso.

<hr>

## Ferramentas

<div style="display:inine-block">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" width="100px" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg"width="100px"  />
          
</div>
          
<hr>

## Como baixar:

Primeiro, copie o projeto para uma pasta de sua preferência:
```bash
git clone https://github.com/VictorRodrigues0/project_to_do_api_node.git
```

Depois, instale os módulos do Node:
```bash
npm install
```

Agora, basta iniciar o servidor usando:

```bash
npm run server
```

## Rotas

Antes de demonstrar como usar esta API, é de extrema importância mencionar que este projeto está no ar, e caso você opte por não utilizá-lo localmente, pode simplesmente substituir o `https://localhost/sua_porta` pelo link fornecido no tópico [Link da API](#link-da-api).

⚠️ **Aviso Importante**: Não se esqueça de configurar o arquivo `.env` antes de iniciar a aplicação. Certifique-se de que as variáveis de ambiente, como as credenciais do banco de dados, chave secreta do JWTe a porta da aplicação. É necessário que essas estejam corretamente ajustadas para o ambiente que você está utilizando. Esse passo é essencial para garantir o funcionamento adequado da API.

**Rota padrão:**
<br>
✅ `https://localhost/sua_porta/`: Verifica se a aplicação está no ar (apenas para testar).
<br>
**Rota dos usuários:**
<br>
✅ `https://localhost/sua_porta/users`: Verifica se a rota `users` está no ar (apenas para testar).
✅ `https://localhost/sua_porta/users/register`: Registra um usuário no banco de dados.
✅ `https://localhost/sua_porta/users/login`: Faz login usando o email e a senha de algum usuário cadastrado.
✅ `https://localhost/sua_porta/users/list`: Lista todos os usuarios no sistema. 
✅ `https://localhost/sua_porta/users/update/id_do_user`: Atualiza os dados do usuário passado por parâmetro.
✅ `https://localhost/sua_porta/users/delete/id_do_user`: Excluí o usuário passado por parâmetro.
<br>
**Rota do to do:**
<br>
✅ `https://localhost/sua_porta/toDos`: Verifica se a rota `toDos` está no ar (apenas para testar).
✅ `https://localhost/sua_porta/toDos/create`:Cria um to do para o usuário ogado.
✅ `https://localhost/sua_porta/toDos/list`: Lista os to dos do usuário logado.
✅ `https://localhost/sua_porta/toDos/update/id_do_to_do`: Atualiza um to do em específico do usuário logado.
✅ `https://localhost/sua_porta/toDos/delete/id_do_to_do`: Deleta um to do em específico do usuário logado.
<br>


Use the project : https://project-to-do-api-node.onrender.com
