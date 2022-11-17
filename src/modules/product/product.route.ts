import { Router } from "express";
import { createProduct } from "@src/modules/product/product.controller";
const router = Router();

router.route("/").post(createProduct);

export default router;
