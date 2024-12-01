
# 📚 BookStore

Um projeto para gerenciar uma livraria, incluindo funcionalidades de cadastro de usuários, login, gerenciamento de livros e pedidos.

## 📑 Índice

- [🚀 Tecnologias Usadas](#-tecnologias-usadas)
- [🔒 Segurança com bcrypt](#-segurança-com-bcrypt)
- [🔑 Segurança com JWT](#-segurança-com-jwt)
- [📖 Endpoints Principais](#-endpoints-principais)
  - [Usuários](#usuários)
  - [Livros](#livros)
- [📂 Estrutura do Projeto](#-estrutura-do-projeto)
- [🏃‍♂️ Como Rodar o Projeto Localmente](#️-como-rodar-o-projeto-localmente)

---

## 🚀 Tecnologias Usadas

- **Node.js**
- **TypeScript**
- **Express**
- **PostgreSQL**
- **bcrypt** para hashing de senhas
- **JWT** para autenticação

---

## 🔒 Segurança com bcrypt

O projeto utiliza bcrypt para proteger as senhas dos usuários. As senhas são hasheadas antes de serem armazenadas no banco de dados, garantindo maior segurança. Durante o login, o hash da senha armazenado é comparado à senha fornecida pelo usuário para autenticação.

### Fluxo de Uso

- **Registro:** A senha é transformada em hash usando `bcrypt.hash()` e armazenada no banco.
- **Login:** A senha fornecida é comparada ao hash armazenado usando `bcrypt.compare()`.

### Código Relacionado

- Registro de usuário: `services/userService.ts`
- Login de usuário: `services/authService.ts`

---

## 🔑 Segurança com JWT

O JWT (JSON Web Token) é utilizado para autenticar usuários de forma segura e manter sessões ativas sem armazenar informações sensíveis no cliente.

### Fluxo de Uso

- **Login:** Após o login bem-sucedido, um token JWT é gerado usando `jsonwebtoken.sign()` com uma chave secreta e enviado ao cliente.
- **Validação:** Nas requisições subsequentes, o cliente envia o token no cabeçalho `Authorization`, que é verificado usando `jsonwebtoken.verify()` para autorizar o acesso às rotas protegidas.

### Código Relacionado

- Geração de token: `services/authService.ts`
- Validação de token: Middleware de autenticação em `middlewares/authMiddleware.ts`

---

## 📖 Endpoints Principais

### Usuários

- **POST /auth/register** - Registra um novo usuário

  **Corpo da requisição:**
  ```json
  {
    "name": "John Doe",
    "email": "johndoe@example.com",
    "password": "securepassword123"
  }
  ```

  **Resposta de sucesso:**
  ```json
  {
    "message": "Usuário registrado com sucesso!",
    "user": {
      "id": 1,
      "name": "John Doe",
      "email": "johndoe@example.com"
    }
  }
  ```

- **POST /auth/login** - Realiza login

  **Corpo da requisição:**
  ```json
  {
    "email": "johndoe@example.com",
    "password": "securepassword123"
  }
  ```

  **Resposta de sucesso:**
  ```json
  {
    "message": "Login bem-sucedido!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": 1,
      "name": "John Doe",
      "email": "johndoe@example.com"
    }
  }
  ```

- **GET /auth/users** - Lista todos os usuários

  **Resposta de sucesso:**
  ```json
  [
    {
      "id": 1,
      "name": "John Doe",
      "email": "johndoe@example.com"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "janesmith@example.com"
    }
  ]
  ```

### Livros

- **GET /books** - Lista todos os livros

  **Resposta de sucesso:**
  ```json
  [
    {
      "id": 1,
      "title": "Livro Exemplo",
      "author": "Autor Exemplo",
      "price": 39.90
    },
    {
      "id": 2,
      "title": "Outro Livro",
      "author": "Outro Autor",
      "price": 49.90
    }
  ]
  ```

- **POST /books** - Adiciona um novo livro

  **Corpo da requisição:**
  ```json
  {
    "title": "Livro Exemplo",
    "author": "Autor Exemplo",
    "price": 39.90
  }
  ```

  **Resposta de sucesso:**
  ```json
  {
    "message": "Livro adicionado com sucesso!",
    "book": {
      "id": 1,
      "title": "Livro Exemplo",
      "author": "Autor Exemplo",
      "price": 39.90
    }
  }
  ```

---

## 📂 Estrutura do Projeto

```
/src
│
├── controllers/   # Lógica para gerenciar rotas
├── models/        # Definições de modelos de dados
├── routes/        # Definição de endpoints
├── services/      # Lógica de autenticação e negócios
├── helpers/       # Funções utilitárias (validações)
├── config/        # Configuração de banco de dados
└── middlewares/   # middlewares
```

---

## 🏃‍♂️ Como Rodar o Projeto Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/LucasSantos4NA/BookStore.git
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute as migrações para configurar as tabelas no banco de dados:
   ```bash
   npm run migrate
   ```

4. Inicie o servidor:
   ```bash
   nodemon server.ts
   ```

5. (Opcional) Para rodar o front, abra a pasta `front` e use o arquivo `index.html`.

---

Sinta-se à vontade para contribuir ou relatar problemas! 📬
