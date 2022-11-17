import { Request, Response, NextFunction } from "express";
import { CreateProductInput } from "@src/modules/product/product.validation";

export const createProduct = async (
	req: Request<unknown, unknown, CreateProductInput>,
	res: Response,
	next: NextFunction,
) => {
	try {
		const body = req.body;

		return res.status(201).json({
			body,
		});
	} catch (error) {
		next(error);
	}
};
