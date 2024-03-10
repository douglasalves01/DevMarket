import express from "express";
import { run } from "./db/conn";
import { productRouter } from "./routes/productRoute";
import cors from "cors";
const app = express();
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());
app.use("/", productRouter);
try {
  app.listen(3000, () => {
    console.log("rodando........");
  });
  run();
} catch (error) {
  if (error) {
    console.log(error);
  }
}
