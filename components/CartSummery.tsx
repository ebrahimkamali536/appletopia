import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toPersianNumber } from "../utils/toPersianNumber";
import { createPayment } from "../services/paymentServices";
import { toast } from "react-hot-toast";

const CartSummery = ({ payDetail }) => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation({
    mutationFn: createPayment,
  });
  const paymentHandler = async () => {
    try {
      const { message } = await mutateAsync();
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
    } catch (error) {
      if (error?.data?.response) {
        toast.error(error.data.response.message);
      }
    }
  };
  return (
    <div className="lg:col-span-3 ">
      <div className="bg-white rounded-lg p-4 shadow-md">
        <p className="mb-4 font-bold text-lg">اطلاعات پرداخت</p>
        <div className="mb-4 flex flex-col gap-y-2.5">
          <div className="flex items-center justify-between">
            <p className="font-medium text-secondary-800">مجموع کل</p>
            <p className="text-primary-800 font-medium">
              {toPersianNumber(payDetail.totalGrossPrice)} تومان
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p>تخفیف</p>
            <p className="text-primary-800 font-medium">
              {toPersianNumber(payDetail.totalOffAmount)} تومان
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p>مبلغ قابل پرداخت</p>
            <p className="text-primary-800 font-medium">
              {toPersianNumber(payDetail.totalPrice)} تومان
            </p>
          </div>
        </div>
        {isLoading ? (
          <h1>loading</h1>
        ) : (
          <button
            onClick={paymentHandler}
            className="bg-primary-900 w-full py-2.5 rounded-xl shadow-xl text-white font-bold"
          >
            ثبت سفارش
          </button>
        )}
      </div>
    </div>
  );
};
export default CartSummery;
