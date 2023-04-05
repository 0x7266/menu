import { Router } from "express";
import productsRouter from "./products.route";
import categoryRouter from "./category.route";
import authRouter from "./auth.route";

const router = Router();

router.use("/product", productsRouter);
router.use("/category", categoryRouter);
router.use("/auth", authRouter);

export default router;
