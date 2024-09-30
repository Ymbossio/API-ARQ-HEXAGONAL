import express from "express";
import cors from 'cors'
import RouterApi from "./domains/routes/index.js";
import dotenv from 'dotenv';
import connectDataBase from "./domains/infrastructure/sequelize.js";

dotenv.config()

const app = express();

app.use(cors());
app.use(express.json());

RouterApi(app);

const port = 5930 || process.env.NODE_PORT_APLICATION;  

const startServer = async () => {
   await connectDataBase()
   app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
   });
};


startServer();



