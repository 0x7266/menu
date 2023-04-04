import { Router } from "express";
import productsRouter from "./products.route";
import authRouter from "./auth.route";

const router = Router();

router.use("/product", productsRouter);
router.use("/auth", authRouter);

export default router;
