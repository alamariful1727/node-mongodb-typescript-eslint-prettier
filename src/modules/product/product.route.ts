import { Router } from "express";
import {
	createProductHandler,
	getAllProductsHandler,
	getProductHandler,
	updateProductHandler,
} from "@src/modules/product/product.controller";
import validateResource from "@src/middleware/zodValidation";
import {
	createProductValidation,
	getProductValidation,
	updateProductValidation,
} from "@src/modules/product/product.validation";
const router = Router();

router
	.route("/")
	.post(validateResource(createProductValidation), createProductHandler)
	.get(getAllProductsHandler);

router
	.route("/:id")
	.get(validateResource(getProductValidation), getProductHandler)
	.put(validateResource(updateProductValidation), updateProductHandler);

export default router;
