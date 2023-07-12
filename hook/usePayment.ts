import { useQuery } from "@tanstack/react-query";
import { getPayment } from "../services/paymentServices";

export const useGetPayments = () =>
  useQuery({
    queryKey: ["get-categories"],
    queryFn: getPayment,
    retry: false,
  });
