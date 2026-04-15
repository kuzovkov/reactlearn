import postgres from 'postgres';

const ssl = process.env.NODE_ENV === 'production' ? 'require' : false;

export const sql = postgres(process.env.POSTGRES_URL!, { ssl });
