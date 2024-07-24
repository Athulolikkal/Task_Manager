import express, { urlencoded } from "express";
import cors from "cors";
import morgan from "morgan";
import authRouter from './routes/auth.js'
import taskRouter from './routes/task.js'
import connectDB from "./Db/db.js";
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(urlencoded({ extended: true }));

app.use('/auth', authRouter)
app.use('/task', taskRouter)

app.listen(3000, () => {
    console.log("port is running on 3000");
});

connectDB()
