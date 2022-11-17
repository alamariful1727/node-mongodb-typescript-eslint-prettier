import { Router } from "express";
import { createProduct } from "@src/modules/product/product.controller";
import validateResource from "@src/middleware/zodValidation";
import { createProductValidation } from "@src/modules/product/product.validation";
const router = Router();

router
	.route("/")
	.post(validateResource(createProductValidation), createProduct);

export default router;
