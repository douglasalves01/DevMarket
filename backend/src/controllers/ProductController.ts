import { Request, Response } from "express";
import { client } from "../db/conn";
import { ErrorDescription, ObjectId } from "mongodb";

export class ProductController {
  static async getProductId(req: Request, res: Response) {
    const productId = req.params.id;
    try {
      const data = await client
        .db("dev-market")
        .collection("produtos")
        .findOne({ _id: new ObjectId(productId) });

      res.status(200).json({ message: "Busca concluída", data: data });
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  }
  static async getProductAll(req: Request, res: Response) {
    try {
      const data = await client
        .db("dev-market")
        .collection("produtos")
        .find()
        .toArray();
      res.status(200).json({ message: "Busca concluída", data: data });
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  }
}
