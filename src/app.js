import express from "express";
import cors from "cors";
import { APP_PORT } from "./config/app.config.js";
import { connectDb } from "./config/database.config.js";
import { apiRouter } from "./router/index.js";

const app = express();

await connectDb();

app.use(express.json());
app.use(cors());

app.use("/api", apiRouter);

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(APP_PORT, () => {
    console.log(`SERVER LISTENING ON: http://127.0.0.1:${APP_PORT}`);
});
