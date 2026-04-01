import { Router } from "express";
import {
    createProduct,
    deleteProduct,
    getAllProduct,
    updateProduct,
} from "../controller/product.controller.js";

export const productRouter = Router();
productRouter
    .get("/products", getAllProduct)
    .post("/products", createProduct)
    .put("/products/:id", updateProduct)
    .delete("/products/:id", deleteProduct);
