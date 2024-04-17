import "dotenv/config";
import express from 'express';
import cors from 'cors';
import { router } from "./routes";
import db from "./config/mongo"
const PORT = process.env.PORT || 3000
const app = express()
app.use(cors());
//Para que reciba datos en formato json por el body
app.use(express.json());
app.use(router); 
db().then(() => console.log("Conexion Ready"));
app.listen(PORT, () => console.log(`Server UP in PORT ${PORT}`))
