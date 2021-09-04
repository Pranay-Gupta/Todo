import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import todoRoutes from './routes/todos.js'

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config({path:'./.env'});
const PORT = process.env.PORT;

// Db
const URL = process.env.CONNECTION_URL;

mongoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> console.log("Connected to DB")
).catch(()=>console.log("DB connection error"))

//API

app.use('/todos', todoRoutes);

//Listen

app.listen(PORT, () => {
    console.log(`server is running at port no ${PORT}`);
})
