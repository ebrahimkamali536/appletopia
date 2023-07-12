import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getCategories,
  getCategoryById,
  updateCategory,
  addCategory,
  removeCategoryById,
} from "../services/categoriesServices";

export const useGetCategories = () =>
  useQuery({
    queryKey: ["get-categories"],
    queryFn: getCategories,
    retry: false,
  });

export const useGetCategory = (id: string) =>
  useQuery({
    queryKey: ["get-category", id],
    queryFn: () => getCategoryById(id),
    retry: false,
  });

export const useUpdateCategory = () => {
  return useMutation({
    mutationFn: updateCategory,
  });
};

export const useAddCategory = () => {
  return useMutation({
    mutationFn: addCategory,
  });
};
export const useDeleteCategory = () => {
  return useMutation({
    mutationFn: removeCategoryById,
  });
};
