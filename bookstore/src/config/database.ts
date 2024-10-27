import { Pool } from "pg";


const connectionString =
  "postgresql://postgres.ltmbnebhfzweyyefzcqk:NQXWW4VCpY9Hp2L7@aws-0-sa-east-1.pooler.supabase.com:6543/postgres";

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool;
