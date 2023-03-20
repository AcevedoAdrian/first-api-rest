import config from 'dotenv/config';
import express from "express";
import cors from "cors";

const port =process.env.PORT || 3001;
const app = express();

app.use(cors());
app.listen(port, ()=>{
  console.log(`Escuchando en el puerto ${port}`);
});