import { Request, Response, NextFunction } from "express";
import {
	CreateProductInput,
	GetProductInput,
} from "@src/modules/product/product.validation";
import { createProduct, getAllProducts, getProduct } from "./product.service";

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

export const getAllProductsHandler = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	try {
		const products = await getAllProducts();

		return res.status(200).json({
			products,
		});
	} catch (error) {
		next(error);
	}
};

export const getProductHandler = async (
	req: Request<GetProductInput>,
	res: Response,
	next: NextFunction,
) => {
	try {
		const productId = req.params.id;

		const product = await getProduct(productId);

		if (!product) {
			return res.status(404).json({
				message: "Product not found",
			});
		}

		return res.status(200).json({
			product,
		});
	} catch (error) {
		next(error);
	}
};
