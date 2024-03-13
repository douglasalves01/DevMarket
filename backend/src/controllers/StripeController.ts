import { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
const CHAVE_STRIPE = process.env.CHAVE_STRIPE || "";
const stripe = require("stripe")(CHAVE_STRIPE);

export class StripeController {
  static async checkoutSession(req: Request, res: Response) {
    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      line_items: [
        {
          price: "price_1OtUPLERUv4PNwqpx4bTD0sE",
          quantity: 1,
        },
      ],
      mode: "payment",
      return_url: `http://localhost:5173/return?session_id={CHECKOUT_SESSION_ID}`,
    });

    res.send({ clientSecret: session.client_secret });
  }
  static async sessionStatus(req: Request, res: Response) {
    const session = await stripe.checkout.sessions.retrieve(
      req.query.session_id,
    );

    res.send({
      status: session.status,
      customer_email: session.customer_details.email,
    });
  }
}
