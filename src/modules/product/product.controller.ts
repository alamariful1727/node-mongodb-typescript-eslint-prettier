import { Request, Response, NextFunction } from "express";

export const createProduct = async (
	req: Request,
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
