import { Router } from "express";

const router = Router();

router.route("/").get(getAllProducts).post(createProduct);
router.route("/:id").get(getProduct).patch(updateProduct).delete(deleteProduct);

export default router;
