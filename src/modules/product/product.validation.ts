import { z } from "zod";

export const createProductValidation = z.object({
	body: z.object({
		name: z
			.string({
				required_error: "Name is required",
			})
			.trim()
			.min(2, "At least 2 characters long")
			.max(30, "Not more than 30 characters"),
		description: z
			.string({
				required_error: "Description is required",
			})
			.trim()
			.max(100, "Not more than 100 characters"),
	}),
});

export const getProductValidation = z.object({
	params: z.object({
		id: z.string({ required_error: "id is required" }),
	}),
});

export type CreateProductInput = z.TypeOf<
	typeof createProductValidation
>["body"];

export type GetProductInput = z.TypeOf<typeof getProductValidation>["params"];
