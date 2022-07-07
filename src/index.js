import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/authRoutes.js";


async function main() {
  dotenv.config();

  const app = express();

  app.use(cors);
  app.use(json);

  app.use(router)



  const PORT = process.env.PORT || 3333;

  app.listen(PORT, () => {
    console.log(`O servidor subiu na porta ${PORT}`);
  });
}
main().catch(console.error);
