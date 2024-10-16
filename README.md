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
✅ `https://localhost/sua_porta`: Verifica se a aplicação está no ar (apenas para testar).
<br><br>
**Rota dos usuários:**
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
**Rota dos to dos:**
<br>
✅ `https://localhost/sua_porta/toDos`: Verifica se a rota `toDos` está no ar (apenas para testar).
<br>
✅ `https://localhost/sua_porta/toDos/create`:Cria um to do para o usuário ogado.
<br>
✅ `https://localhost/sua_porta/toDos/list`: Lista os to dos do usuário logado.
<br>
✅ `https://localhost/sua_porta/toDos/update/id_do_to_do`: Atualiza um to do em específico do usuário logado.
<br>
✅ `https://localhost/sua_porta/toDos/delete/id_do_to_do`: Deleta um to do em específico do usuário logado.
<br>
<br>

**Urls copiáves**
<br><br>
**Rota padrão:**
```url
https://localhost/sua_porta
```
**Rota dos usuários:**

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

**Rota dos to dos:**

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

**Rota padrão:**
```url
https://project-to-do-api-node.onrender.com
```
**Rota dos usuários:**

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

**Rota dos to dos:**

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

<br>

**Explicando mehor as rotas:**
<br><br>

**Para rotas do tipo `update`:**  
Em rotas desse tipo, é importante enviar **TODOS** os dados do usuário novamente, alterando apenas o que for necessário. Isso garante que os outros campos não sejam sobrescritos ou perdidos.  
**Users:**
<br>

Na rota `/users/register`, devem ser enviados os valores: `name` (string), `email` (string) e `password` (string). Certifique-se de passar um email válido, pois há um nível de verificação. Um email válido se assemelha a `seuemail@gmail.com`.
<br>

Na rota `/users/login`, será gerado um `token` que autoriza o usuário a acessar as outras rotas do sistema. Não esqueça de adicionar esse token no `header` de praticamente ⚠️ **TODAS AS ROTAS**⚠️ do sistema. As únicas rotas que não precisam desse token são: `/users/register`, `/users/login` e `/users/list`. Caso o token não seja enviado, o acesso será negado.
<br>

Para enviar o `header` com o `token JWT`, utilize o nome do `header` como `Authorization` e o conteúdo no formato `bearer token_do_usuario_logado`.

**To-Dos:**
<br>

Não esqueça de passar os parâmetros necessários nas rotas de `delete` e `update`. O ID que deve ser enviado é o do to-do, e não do usuário.













Use the project : https://project-to-do-api-node.onrender.com
