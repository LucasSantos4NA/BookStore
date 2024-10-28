import pool from "../config/database";

const updateUsersTable = async () => {
  const client = await pool.connect();
  try {
    const queryText = `
      ALTER TABLE users
      ADD COLUMN password_hash VARCHAR(255) NOT NULL;
    `;
    await client.query(queryText);
    console.log('Coluna "password_hash" adicionada na tabela "users" com sucesso!');
  } catch (err) {
    console.error("Erro ao adicionar coluna password_hash:", err);
  } finally {
    client.release();
  }
};

updateUsersTable();
