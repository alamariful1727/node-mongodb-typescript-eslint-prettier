import { z } from "zod";

const schema = {
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
};

export const createProductValidation = z.object({
	body: z.object({
		name: schema.name,
		description: schema.description,
	}),
});

export type CreateProductInput = z.TypeOf<
	typeof createProductValidation
>["body"];
