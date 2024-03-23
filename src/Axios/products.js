import axiosInstance from "./config";

export const getProducts = () => {
  return axiosInstance.get("/products");
};
export const getProductById = (productID) => {
  return axiosInstance.get(`/products/${productID}`);
};