import { Router } from "express";
import {
    createProduct,
    getAllProduct,
    updateProduct,
} from "../controller/product.controller.js";

export const productRouter = Router();
productRouter
    .get("/products", getAllProduct)
    .post("/products", createProduct)
    .put("/products/:id", updateProduct);
