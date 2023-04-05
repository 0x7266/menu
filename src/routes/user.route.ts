import { Router } from "express";
import {
	deleteUser,
	getAllUsers,
	getUser,
	updateUser,
} from "../controllers/users.controller";

const router = Router();

router.get("/", getAllUsers);
router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

export default router;
