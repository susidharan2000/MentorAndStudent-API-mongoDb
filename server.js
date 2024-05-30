import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ConnectDB from "./Database/Config.js";
import MSRouter from "./Routers/MentorStudentRouter.js"

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
ConnectDB();

const port = process.env.PORT;

app.get("/",(req,res)=>{
    res.status(200).send("welcome to our app");
});
app.use("/api",MSRouter);

app.listen(port,()=>{
    console.log("App is running",port);
});