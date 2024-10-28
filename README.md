📚 BookStore
Um projeto para gerenciar uma livraria, incluindo funcionalidades de cadastro de usuários, login, gerenciamento de livros e pedidos.

🚀 Tecnologias Usadas
Node.js
TypeScript
Express
PostgreSQL
bcrypt para hashing de senhas

📂 Estrutura do Projeto
bash
Copiar código
/src
│
├── controllers/    # Lógica para gerenciar rotas
├── models/         # Definições de modelos de dados
├── routes/         # Definição de endpoints
├── services/       # Lógica de autenticação e negócios
├── helpers/        # Funções utilitárias (validações)
└── config/         # Configuração de banco de dados


📖 Endpoints Principais
Usuários
POST /auth/register - Registra um novo usuário
POST /auth/login - Realiza login
GET /auth/users - Lista todos os usuários
Livros
GET /books - Lista todos os livros
POST /books - Adiciona um novo livro
GET /books/:id - Visualiza um livro específico

🏃‍♂️ Como Rodar o Projeto Localmente
Clone o repositório
bash
git clone https://github.com/LucasSantos4NA/BookStore.git
Instale as dependências
npm install
Configure o banco de dados PostgreSQL e ajuste o arquivo .env com suas credenciais.
Execute as migrações
npm run migrate
Inicie o servidor
npm run dev


