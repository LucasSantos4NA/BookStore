import pool from "../config/database";

// cria books
const createBooksTable = async () => {
  const client = await pool.connect();
  try {
    const queryText = `
      CREATE TABLE IF NOT EXISTS books (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        author VARCHAR(255) NOT NULL,
        genre VARCHAR(100),
        price DECIMAL(10, 2) NOT NULL,
        stock INT NOT NULL,
        published_date DATE
      );
    `;
    await client.query(queryText);
    console.log('Tabela "books" criada com sucesso!');
  } catch (err) {
    console.error("Erro ao criar tabela books:", err);
  } finally {
    client.release();
  }
};

// criar customers
const createCustomersTable = async () => {
  const client = await pool.connect();
  try {
    const queryText = `
      CREATE TABLE IF NOT EXISTS customers (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
      );
    `;
    await client.query(queryText);
    console.log('Tabela "customers" criada com sucesso!');
  } catch (err) {
    console.error("Erro ao criar tabela customers:", err);
  } finally {
    client.release();
  }
};

//criar cart_items
const createCartItemsTable = async () => {
  const client = await pool.connect();
  try {
    const queryText = `
      CREATE TABLE IF NOT EXISTS cart_items (
        id SERIAL PRIMARY KEY,
        customer_id INT REFERENCES customers(id),
        book_id INT REFERENCES books(id),
        quantity INT NOT NULL,
        created_at TIMESTAMP DEFAULT NOW(),
        UNIQUE (customer_id, book_id)
      );
    `;
    await client.query(queryText);
    console.log('Tabela "cart_items" criada com sucesso!');
  } catch (err) {
    console.error("Erro ao criar tabela cart_items:", err);
  } finally {
    client.release();
  }
};

// criar orders
const createOrdersTable = async () => {
  const client = await pool.connect();
  try {
    const queryText = `
      CREATE TABLE IF NOT EXISTS orders (
        id SERIAL PRIMARY KEY,
        customer_id INT REFERENCES customers(id),
        total_price DECIMAL(10, 2) NOT NULL,
        status VARCHAR(50) DEFAULT 'PENDING',
        created_at TIMESTAMP DEFAULT NOW()
      );
    `;
    await client.query(queryText);
    console.log('Tabela "orders" criada com sucesso!');
  } catch (err) {
    console.error("Erro ao criar tabela orders:", err);
  } finally {
    client.release();
  }
};

// criar order_items
const createOrderItemsTable = async () => {
  const client = await pool.connect();
  try {
    const queryText = `
      CREATE TABLE IF NOT EXISTS order_items (
        id SERIAL PRIMARY KEY,
        order_id INT REFERENCES orders(id),
        book_id INT REFERENCES books(id),
        quantity INT NOT NULL,
        price DECIMAL(10, 2) NOT NULL
      );
    `;
    await client.query(queryText);
    console.log('Tabela "order_items" criada com sucesso!');
  } catch (err) {
    console.error("Erro ao criar tabela order_items:", err);
  } finally {
    client.release();
  }
};

// todas as migrations
const runMigrations = async () => {
  await createBooksTable();
  await createCustomersTable();
  await createCartItemsTable();
  await createOrdersTable();
  await createOrderItemsTable();
};

runMigrations();


