"use client";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useGetUser } from "../hook/useAuth";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useAddToCart } from "../hook/useCart";
import { useQueryClient } from "@tanstack/react-query";
import { isInCart } from "../utils/isInCart";
import Link from "next/link";

const AddToCart = ({ product }) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { data, isLoading } = useGetUser();
  const { user } = data || {};
  const { mutateAsync } = useAddToCart();
  const addToCartHandler = async () => {
    if (!user) {
      toast.error("لطفا ابتدا لاگین کنید");
      router.push("/auth");
      return;
    }
    try {
      const { message } = await mutateAsync(product._id);
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
    } catch (error) {
      if (error?.response?.data) {
        toast.error(error.response.data.message);
      }
    }
  };
  console.log(user, product._id)

  return (
    <div>
      {isInCart(user, product._id) ? (
        <Link href="/cart">تکمیل سفارش</Link>
      ) : (
        <button
          onClick={addToCartHandler}
          className="flex items-center justify-center gap-x-4 btn--primary w-full rounded-lg"
        >
          <ShoppingCartIcon className="w-8 h-8" />
          <span>افزودن به سبد خرید</span>
        </button>
      )}
    </div>
  );
};
export default AddToCart;
