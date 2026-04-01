import { Router } from "express";
import {
    createProduct,
    getAllProduct,
} from "../controller/product.controller.js";

export const productRouter = Router();
productRouter.get("/products", getAllProduct).post("/products", createProduct);
