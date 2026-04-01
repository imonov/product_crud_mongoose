import mongoose from "mongoose";
import { MONGO_URL } from "./app.config.js";

export async function connectDb() {
    if (!MONGO_URL) {
        console.log(`MONGO URL NOT EXISTS`);
        process.exit(1);
    }
    try {
        await mongoose.connect(MONGO_URL);
        console.log(`DB ULANDI ✅`);
    } catch (error) {
        console.log(`ULANISHDA XATOLIK ❌`);
        console.log(error);
    }
}
