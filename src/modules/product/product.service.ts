import ProductModel from "./product.model";
import { CreateProductInput } from "./product.validation";

export const createProduct = (product: CreateProductInput) =>
	ProductModel.create(product);

export const getAllProducts = () => ProductModel.find();

export const getProduct = (id: string) => ProductModel.findById(id);
