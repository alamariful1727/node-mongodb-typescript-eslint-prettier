import { Document, Schema, model } from "mongoose";

const ProductSchema: Schema = new Schema(
	{
		name: {
			type: String,
			trim: true,
			minlength: 2,
			maxlength: 30,
			required: true,
		},
		description: {
			type: String,
			trim: true,
			maxlength: 100,
			default: "",
		},
	},
	{
		timestamps: true,
		versionKey: false,
	},
);

interface IProduct {
	name: string;
	description: string;
	createdAt: Date;
	updatedAt: Date;
}

interface IProductModel extends IProduct, Document {}

const ProductModel = model<IProductModel>("Product", ProductSchema);

export default ProductModel;
