import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import userRoutes from "./routes/userRoutes.js"
import connect from "./config/database.js"

dotenv.config();
const app = express();
await connect();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get("/",(req,res)=>res.json("Hello"));
app.use("/users",userRoutes)

app.listen(process.env.PORT,()=>{console.log(`Server is running on http://localhost:${process.env.PORT}`)})