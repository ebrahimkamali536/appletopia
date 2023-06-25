import { useMutation } from "@tanstack/react-query";
import { addToCart, decrementFromCart } from "../services/cartServices";

export const useAddToCart = () => {
  return useMutation({
    mutationFn: addToCart,
  });
};

export const useDecrementFromCart = () => {
  return useMutation({
    mutationFn: decrementFromCart
  })
}