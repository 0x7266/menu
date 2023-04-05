import { Router } from "express";
import {
	getAllCategories,
	createCategory,
	getCategory,
	updateCategory,
	deleteCategory,
} from "../controllers/categories.controller";

const router = Router();

router.route("/").get(getAllCategories).post(createCategory);
router
	.route("/:id")
	.get(getCategory)
	.patch(updateCategory)
	.delete(deleteCategory);

export default router;
