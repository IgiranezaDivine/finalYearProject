import dotenv from 'dotenv';
dotenv.config();


 const config = {
  port: process.env.PORT || 7000,
   db: process.env.DB_URL,
  password: process.env.DB_PASSWORD,
 secret: process.env.SECRET_KEY,
 service : process.env.SERVICE,
 host: process.env.HOST,
 pass:  process.env.PASS
};
export default config;