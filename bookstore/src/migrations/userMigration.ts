import pool from "../config/database";


const createUsersTable = async () => {
    const client = await pool.connect();
    try {
        const queryText = `
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password_hash VARCHAR(255) NOT NULL,
                role VARCHAR(50) DEFAULT 'user',
                created_at TIMESTAMP DEFAULT NOW(),
                updated_at TIMESTAMP DEFAULT NOW(),
                last_login TIMESTAMP,
                status BOOLEAN DEFAULT true
            );
        `;
        await client.query(queryText);
        console.log('Tabela "users" criada com sucesso!');
    } catch (err) {
        console.error("Erro ao criar tabela users:", err);
    } finally {
        client.release();
    }
};


createUsersTable();
