import { useMutation, useQuery } from "@tanstack/react-query";
import { addCoupons, getCoupons } from "../services/CouponsServices";

export const useGetCoupons = () =>
  useQuery({
    queryKey: ["get-coupons"],
    queryFn: getCoupons,
    retry: false,
  });

  export const useAddCoupons = () => useMutation({mutationFn: addCoupons})