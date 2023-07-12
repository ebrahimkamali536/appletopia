import { useMutation, useQuery } from "@tanstack/react-query";

import {
  addProduct,
  getAllProduct,
  getProductById,
  updateProduct,
} from "../services/productServices";

export const useGetProducts = () =>
  useQuery({
    queryKey: ["get-products"],
    queryFn: getAllProduct,
    retry: false,
  });

export const useAddProduct = () => {
  return useMutation({
    mutationFn: addProduct,
  });
};
export const useUpdateProduct = () => {
  return useMutation({
    mutationFn: updateProduct,
  });
};

export const useGetProduct = (id: string) =>
  useQuery({
    queryKey: ["get-products", id],
    queryFn: () => getProductById(id),
    retry: false,
  });
