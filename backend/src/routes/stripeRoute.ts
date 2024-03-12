import express from "express";
import { StripeController } from "../controllers/StripeController";

export const stripeRouter = express.Router();

stripeRouter.post("/create-checkout-session", StripeController.checkoutSession);
stripeRouter.get("/session-status", StripeController.sessionStatus);
