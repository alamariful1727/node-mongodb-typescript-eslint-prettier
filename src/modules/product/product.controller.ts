import { Request, Response, NextFunction } from "express";
import { CreateProductInput } from "@src/modules/product/product.validation";
import { createProduct } from "./product.service";

export const createProductHandler = async (
	req: Request<unknown, unknown, CreateProductInput>,
	res: Response,
	next: NextFunction,
) => {
	try {
		const body = req.body;

		const product = await createProduct(body);

		return res.status(201).json({
			product,
		});
	} catch (error) {
		next(error);
	}
};
