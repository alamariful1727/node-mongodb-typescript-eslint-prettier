import ProductModel from "./product.model";
import { CreateProductInput } from "./product.validation";

export const createProduct = (product: CreateProductInput) =>
	ProductModel.create(product);
