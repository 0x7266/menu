import { Router } from "express";
import authRouter from "./auth.route";
import categoryRouter from "./category.route";
import productRouter from "./product.route";
import userRouter from "./user.route";
import { requireAuth } from "../middlewares/requireAuth";

const router = Router();

router.use("/auth", authRouter);

router.use(requireAuth);

router.use("/category", categoryRouter);
router.use("/product", productRouter);
router.use("/user", userRouter);

export default router;
