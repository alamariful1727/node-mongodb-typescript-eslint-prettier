import { Router } from "express";
import {
	createProductHandler,
	getAllProductsHandler,
} from "@src/modules/product/product.controller";
import validateResource from "@src/middleware/zodValidation";
import { createProductValidation } from "@src/modules/product/product.validation";
const router = Router();

router
	.route("/")
	.post(validateResource(createProductValidation), createProductHandler)
	.get(getAllProductsHandler);

export default router;
