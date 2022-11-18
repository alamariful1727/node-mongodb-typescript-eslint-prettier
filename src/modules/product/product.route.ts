import { Router } from "express";
import {
	createProductHandler,
	getAllProductsHandler,
	getProductHandler,
} from "@src/modules/product/product.controller";
import validateResource from "@src/middleware/zodValidation";
import {
	createProductValidation,
	getProductValidation,
} from "@src/modules/product/product.validation";
const router = Router();

router
	.route("/")
	.post(validateResource(createProductValidation), createProductHandler)
	.get(getAllProductsHandler);

router
	.route("/:id")
	.get(validateResource(getProductValidation), getProductHandler);

export default router;
