

```
# 📚 BookStore

Um projeto para gerenciar uma livraria, incluindo funcionalidades de cadastro de usuários, login, gerenciamento de livros e pedidos.

## 🚀 Tecnologias Usadas

- **Node.js**
- **TypeScript**
- **Express**
- **PostgreSQL**
- **bcrypt** para hashing de senhas

## 🔒 Segurança com bcrypt

O projeto utiliza bcrypt para proteger as senhas dos usuários. As senhas são hasheadas antes de serem armazenadas no banco de dados, garantindo maior segurança. Durante o login, o hash da senha armazenado é comparado à senha fornecida pelo usuário para autenticação.

### Fluxo de Uso

- **Registro:** A senha é transformada em hash usando `bcrypt.hash()` e armazenada no banco.
- **Login:** A senha fornecida é comparada ao hash armazenado usando `bcrypt.compare()`.

### Código Relacionado

- Registro de usuário: `services/userService.js`
- Login de usuário: `services/authService.js`

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
```
/src
│
├── controllers/   # Lógica para gerenciar rotas
├── models/        # Definições de modelos de dados
├── routes/        # Definição de endpoints
├── services/      # Lógica de autenticação e negócios
├── helpers/       # Funções utilitárias (validações)
└── config/        # Configuração de banco de dados
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

## 🏃‍♂️ Como Rodar o Projeto Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/LucasSantos4NA/BookStore.git
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure o banco de dados PostgreSQL e ajuste o arquivo `.env` com suas credenciais:

   **Exemplo de arquivo .env:**
   ```
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=seu_usuario
   DB_PASSWORD=sua_senha
   DB_NAME=bookstore
   ```

4. Execute as migrações para configurar as tabelas no banco de dados:
   ```bash
   npm run migrate
   ```

5. Inicie o servidor:
   ```bash
   npm run dev
   ```

## 🧪 Testes (Opcional)

Se você implementar testes automatizados, pode rodá-los com:
```bash
npm run test
```

Sinta-se à vontade para contribuir ou relatar problemas! 📬
