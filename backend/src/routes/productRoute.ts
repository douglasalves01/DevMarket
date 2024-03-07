import express from "express";
import { ProductController } from "../controllers/ProductController";

export const productRouter = express.Router();

productRouter.get("/product/all", ProductController.getProductAll);
productRouter.get("/product/:id", ProductController.getProductId);
