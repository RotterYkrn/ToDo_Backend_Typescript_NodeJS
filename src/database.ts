import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config({ path: '../../.env' });

const DB_HOST = process.env['MYSQL_SERVER'] as string;
const DB_USER = process.env['MYSQL_USER'] as string;
const DB_PASSWORD = process.env['MYSQL_PASSWORD'] as string;
const DB_NAME = process.env['MYSQL_DATABASE'] as string;

if (!DB_HOST || !DB_USER || !DB_PASSWORD || !DB_NAME) {
  console.error('Missing environment variables');
  process.exit(1);
}

export const createConnection = async () => {
  try {
    const connection = await mysql.createConnection({
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
    });
    console.log('Connected to database');
    const [rows] = await connection.query('SHOW TABLES');
    console.log(rows);
    return connection;
  } catch (error) {
    console.error('Failed to connecting to database', JSON.stringify(error));
    process.exit(1);
  }
};
