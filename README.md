# 📚 BookStore

Um projeto para gerenciar uma livraria, incluindo funcionalidades de cadastro de usuários, login, gerenciamento de livros e pedidos.

## 🚀 Tecnologias Usadas

- **Node.js**
- **TypeScript**
- **Express**
- **PostgreSQL**
- **bcrypt** para hashing de senhas

## 📂 Estrutura do Projeto

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

## 📖 Endpoints Principais

### Usuários
- **POST** `/auth/register` - Registra um novo usuário
- **POST** `/auth/login` - Realiza login
- **GET** `/auth/users` - Lista todos os usuários

### Livros
- **GET** `/books` - Lista todos os livros
- **POST** `/books` - Adiciona um novo livro
- **GET** `/books/:id` - Visualiza um livro específico

## 🏃‍♂️ Como Rodar o Projeto Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/LucasSantos4NA/BookStore.git
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure o banco de dados PostgreSQL e ajuste o arquivo `.env` com suas credenciais.

4. Execute as migrações:
   ```bash
   npm run migrate
   ```

5. Inicie o servidor:
   ```bash
   npm run dev
   ```

---

Sinta-se à vontade para contribuir ou relatar problemas! 📬
