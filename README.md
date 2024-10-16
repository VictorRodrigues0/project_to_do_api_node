# project_to_do_api_node

### Topics / Tópicos:

- [Mais sobre o projeto](#mais-sobre-o-projeto) | [More about the project](#More-about-the-project)
- [Ferramentas](#ferramentas) | [Tools](#tools)
- [Como baixar](#como-baixar) | [How to download](#how-to-download)
- [Rotas](#rotas) | [Routes](#routes)
- [Link da API](#link-da-api) | [API link](#api-link)
- [Agradecimento](#agradecimento) | [Acknowledgment](#acknowledgment)

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
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" width="100px" />
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
<hr>

## Rotas

Antes de demonstrar como usar esta API, é de extrema importância mencionar que este projeto está no ar, e caso você opte por não utilizá-lo localmente, pode simplesmente substituir o `https://localhost/sua_porta` pelo link fornecido no tópico [Link da API](#link-da-api).

⚠️ **Aviso Importante**: Não se esqueça de configurar o arquivo `.env` antes de iniciar a aplicação. Certifique-se de que as variáveis de ambiente, como as `credenciais do banco de dados`, `chave secreta do JWT ` e a `porta da aplicação`. É necessário que essas estejam corretamente ajustadas para o ambiente que você está utilizando. Esse passo é essencial para garantir o funcionamento adequado da API.

**Rota Padrão:**
<br>
✅ `https://localhost/sua_porta`: Verifica se a aplicação está no ar (apenas para testar).
<br><br>
**Rota dos Usuários:**
<br>
✅ `https://localhost/sua_porta/users`: Verifica se a rota `users` está no ar (apenas para testar).
<br>
✅ `https://localhost/sua_porta/users/register`: Registra um usuário no banco de dados.
<br>
✅ `https://localhost/sua_porta/users/login`: Faz login usando o email e a senha de algum usuário cadastrado.
<br>
✅ `https://localhost/sua_porta/users/list`: Lista todos os usuarios no sistema. 
<br>
✅ `https://localhost/sua_porta/users/update/id_do_user`: Atualiza os dados do usuário passado por parâmetro.
<br>
✅ `https://localhost/sua_porta/users/delete/id_do_user`: Excluí o usuário passado por parâmetro.
<br><br>
**Rota dos To-Dos:**
<br>
✅ `https://localhost/sua_porta/toDos`: Verifica se a rota `toDos` está no ar (apenas para testar).
<br>
✅ `https://localhost/sua_porta/toDos/create`: Cria um to do para o usuário ogado.
<br>
✅ `https://localhost/sua_porta/toDos/list`: Lista os to dos do usuário logado.
<br>
✅ `https://localhost/sua_porta/toDos/update/id_do_to_do`: Atualiza um to do em específico do usuário logado.
<br>
✅ `https://localhost/sua_porta/toDos/delete/id_do_to_do`: Deleta um to do em específico do usuário logado.
<br>
<br>

**Explicando mehor as rotas:**
<br><br>
**Users:**
<br>

Na rota `/users/register`, devem ser enviados os valores: `name` (string), `email` (string) e `password` (string). Certifique-se de passar um email válido, pois há um nível de verificação. Um email válido se assemelha a `seuemail@gmail.com`.
<br>

Na rota `/users/login`, será gerado um `token` que autoriza o usuário a acessar as outras rotas do sistema. Não esqueça de adicionar esse token no `header` de praticamente ⚠️**TODAS AS ROTAS**⚠️ do sistema. As únicas rotas que não precisam desse token são: `/users/register`, `/users/login` e `/users/list`. Caso o token não seja enviado, o acesso será negado.
<br>

Para enviar o `header` com o `token JWT`, utilize o nome do `header` como `Authorization` e o conteúdo no formato `bearer token_do_usuario_logado`.

<br>

**To-Dos:**
<br>

Na rota `/toDos/create`, devem ser enviados os seguintes dados: `name` (string), `task` (string), `priority` (string), `status` (string), `term` (data), `category` (string) e `description` (string). É importante mencionar que o campo `description` é opcional.
<br>

Não esqueça de passar os parâmetros necessários nas rotas de `delete` e `update`. O ID que deve ser enviado é o do to-do, e não do usuário.

<br>

**Para rotas do tipo `update`:**  
<br>
Em rotas desse tipo, é importante enviar **TODOS** os dados do usuário novamente, alterando apenas o que for necessário. Isso garante que os outros campos não sejam sobrescritos ou perdidos.  

<br>

**Urls Copiáves**
<br><br>
**Rota Padrão:**
```url
https://localhost/sua_porta
```
**Rota dos Usuários:**

```url
https://localhost/sua_porta/users
```
```url
https://localhost/sua_porta/users/register
```
```url
https://localhost/sua_porta/users/login
```
```url
https://localhost/sua_porta/users/list
```
```url
https://localhost/sua_porta/users/update/id_do_usuario
```
```url
https://localhost/sua_porta/users/delete/id_do_usuario
```

**Rota dos To-Dos:**

```url
https://localhost/sua_porta/toDos
```
```url
https://localhost/sua_porta/toDos/create
```
```url
https://localhost/sua_porta/toDos/list
```
```url
https://localhost/sua_porta/toDos/update/id_do_to_do
```
```url
https://localhost/sua_porta/users/delete/id_do_to_do
```

<br>

Se você estiver utilizando o projeto em `deploy`, abaixo estão os mesmos links já configurados para uso em um servidor online.

<br>

**Rota Padrão:**
```url
https://project-to-do-api-node.onrender.com
```
**Rota dos Usuários:**

```url
https://project-to-do-api-node.onrender.com/users
```
```url
https://project-to-do-api-node.onrender.com/users/register
```
```url
https://project-to-do-api-node.onrender.com/users/login
```
```url
https://project-to-do-api-node.onrender.com/users/list
```
```url
https://project-to-do-api-node.onrender.com/users/update/id_do_usuario
```
```url
https://project-to-do-api-node.onrender.com/users/delete/id_do_usuario
```

**Rota dos To-dos:**

```url
https://project-to-do-api-node.onrender.com/toDos
```
```url
https://project-to-do-api-node.onrender.com/toDos/create
```
```url
https://project-to-do-api-node.onrender.com/toDos/list
```
```url
https://project-to-do-api-node.onrender.com/toDos/update/id_do_to_do
```
```url
https://project-to-do-api-node.onrender.com/users/delete/id_do_to_do
```

<hr>

## Link da API:

Utilize o projeto em produção: https://project-to-do-api-node.onrender.com

<hr>

## Agradecimento:

Agradeço por utilizar esta API. Espero que tenha sido útil para o seu projeto pessoal. Sua contribuição é sempre bem-vinda, seja para corrigir algum erro ou adicionar novas funcionalidades. Não hesite em enviar sua solução.

<hr>

## More about the project
</div>
This is a description of a task management application (To-Do API) using Node.js, PostgreSQL, and JWT authentication:

The To-Do API was developed with Node.js and Express.js, allowing users to manage their tasks securely and efficiently.

The server is implemented with Express.js, while PostgreSQL serves as the relational database, storing task information such as title, description, and status. Communication between Node.js and PostgreSQL is handled through the pg library, which manages database connections and operations.

The API supports CRUD (Create, Read, Update, Delete) operations for tasks. Security is ensured through the implementation of JWT (JSON Web Token) authentication, ensuring that only authenticated users can access and manipulate their tasks. JWT enables token-based authentication, protecting routes and stored data.

Users can create accounts, log in, and, after authentication, perform all task-related operations. This approach makes the API scalable and secure, prepared for future enhancements such as more refined access control or integrations with other services.

This is the first functional version; in the future, the project may be improved with database optimizations, new features, and enhancements in design and user experience.

<hr>

## Tools
<div style="display:inline-block">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" width="100px" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" width="100px" /> 
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" width="100px" /> </div> <hr>

## How to download:
First, clone the project to a directory of your choice
```bash
git clone https://github.com/VictorRodrigues0/project_to_do_api_node.git
```

Then, install the Node modules:
```bash
npm install
```

Now, simply start the server using:

```bash
npm run server
```

<hr>

## Routes
Before demonstrating how to use this API, it is crucial to mention that this project is live. If you choose not to use it locally, you can simply replace `https://localhost/your_port` with the link provided in the API link section.

⚠️ **Important Notice:** Don’t forget to configure the `env` file before starting the application. Ensure that environment variables such as `database credentials`, `JWT secret key`, and `application port `are set correctly for your environment. This step is essential for the proper functioning of the API.

<br>

**Default Route** <br>

✅ `https://localhost/your_port`: Checks if the application is running (for testing purposes). <br><br>

**User Routes:** <br> 
✅ `https://localhost/your_port/users`: Checks if the users route is running (for testing purposes). <br>
✅ `https://localhost/your_port/users/register`: Registers a user in the database. <br> 
✅ `https://localhost/your_port/users/login`: Logs in using the email and password of a registered user. <br> 
✅ `https://localhost/your_port/users/list`: Lists all users in the system. <br> 
✅ `https://localhost/your_port/users/update/user_id`: Updates the data of the specified user. <br>
✅ `https://localhost/your_port/users/delete/user_id:` Deletes the specified user. <br><br> 

**To-Do Routes:** <br> 
✅`https://localhost/your_port/toDos`: Checks if the toDos route is running (for testing purposes). <br> 
✅ `https://localhost/your_port/toDos/create`: Creates a to-do for the logged-in user. <br>
✅ `https://localhost/your_port/toDos/list`: Lists the to-dos of the logged-in user. <br> 
✅` https://localhost/your_port/toDos/update/to_do_id`: Updates a specific to-do of the logged-in user. <br> 
✅ `https://localhost/your_port/toDos/delete/to_do_id`: Deletes a specific to-do of the logged-in user. <br> <br>

**Detailed Explanation of Routes:** <br><br> **Users:** <br>

In the /users/register route, you must send the following values: name (string), email (string), and password (string). Make sure to provide a valid email, as there is a level of verification. A valid email resembles youremail@gmail.com. <br>

In the /users/login route, a token will be generated to authorize the user to access other routes of the system. Remember to include this token in the header of almost ⚠️ALL ROUTES⚠️ of the system. The only routes that do not require this token are: /users/register, /users/login, and /users/list. If the token is not sent, access will be denied. <br>

To send the header with the JWT token, use Authorization as the header name and the content in the format bearer logged_in_user_token.

<br>

**To-Dos:** <br>

In the `/toDos/create` route, the following data must be sent: `name` (string), `task` (string), `priority` (string), `status` (string), `term` (date), `category` (string), and `description` (string). It is important to note that the `description` field is optional.
<br>

Do not forget to pass the necessary parameters in the `delete` and `update` routes. The ID that should be sent is that of the to-do, not the user.

<br>

**For update type routes:**
<br> In these types of routes, it is important to send ALL user data again, changing only what is necessary. This ensures that other fields are not overwritten or lost.

<br>

**Copyable URLs** <br><br> 

**Default Route:**
```url
https://localhost/sua_porta
```

**User Routes:**

```url
https://localhost/sua_porta/users
```
```url
https://localhost/sua_porta/users/register
```
```url
https://localhost/sua_porta/users/login
```
```url
https://localhost/sua_porta/users/list
```
```url
https://localhost/sua_porta/users/update/id_do_usuario
```
```url
https://localhost/sua_porta/users/delete/id_do_usuario
```


**To-Do Routes:**


```url
https://localhost/sua_porta/toDos
```
```url
https://localhost/sua_porta/toDos/create
```
```url
https://localhost/sua_porta/toDos/list
```
```url
https://localhost/sua_porta/toDos/update/id_do_to_do
```
```url
https://localhost/sua_porta/users/delete/id_do_to_do
```

<br>

If you are using the project in `deploy`, below are the same links already configured for use on an online server.

<br>

**Default Route:**

```url
https://project-to-do-api-node.onrender.com
```

**User Routes:**
```url
https://project-to-do-api-node.onrender.com/users
```
```url
https://project-to-do-api-node.onrender.com/users/register
```
```url
https://project-to-do-api-node.onrender.com/users/login
```
```url
https://project-to-do-api-node.onrender.com/users/list
```
```url
https://project-to-do-api-node.onrender.com/users/update/id_do_usuario
```
```url
https://project-to-do-api-node.onrender.com/users/delete/id_do_usuario
```

**To-Do Routes:**
```url
https://project-to-do-api-node.onrender.com/toDos
```
```url
https://project-to-do-api-node.onrender.com/toDos/create
```
```url
https://project-to-do-api-node.onrender.com/toDos/list
```
```url
https://project-to-do-api-node.onrender.com/toDos/update/id_do_to_do
```
```url
https://project-to-do-api-node.onrender.com/users/delete/id_do_to_do
```


<hr>

## API Link:
Use the project in production: https://project-to-do-api-node.onrender.com

<hr>

## Acknowledgment:
Thank you for using this API. I hope it has been helpful for your personal project. Your contribution is always welcome, whether to fix a bug or add new features. Don’t hesitate to submit your solution.
















