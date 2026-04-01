import { Router } from "express";
import { productRouter } from "./product.router.js";

export const apiRouter = Router();
apiRouter.use(productRouter);
