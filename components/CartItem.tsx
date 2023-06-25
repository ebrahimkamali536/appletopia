"use client";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { toast } from "react-hot-toast";
import { useAddToCart, useDecrementFromCart } from "../hook/useCart";
import { useQueryClient } from "@tanstack/react-query";
import { toPersianNumber } from "../utils/toPersianNumber";
import Link from "next/link";

const CartItem = ({ cartItem }) => {
  const queryClient = useQueryClient();
  const { isLoading: isIncrementing, mutateAsync: addToCartMutateAsync } =
    useAddToCart();
  const { isLoading, mutateAsync: decrementFromCartMutateAsync } =
    useDecrementFromCart();
  const addToCartHandler = async () => {
    try {
      const { message } = await addToCartMutateAsync(cartItem._id);
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
    } catch (error) {
      if (error?.data?.response) {
        toast.error(error.data.response.message);
      }
    }
  };

  const decrementFromCart = async () => {
    try {
      const { message } = await decrementFromCartMutateAsync(cartItem._id);
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
    } catch (error) {
      if (error?.data?.response) {
        toast.error(error.data.response.message);
      }
    }
  };
  console.log(cartItem)
  return (
    <div className="flex items-end justify-between bg-white shadow-product-card rounded-md px-4 py-2 md:px-6 md:py-4">
      <div className="flex items-center gap-x-2">
        <Link href={`/products/${cartItem.slug}`}>
          <Image
            width={80}
            height={80}
            alt={cartItem.title}
            src="/assets/images/macbook-13.jpg"
            className="md:w-32 h-32"
          />
        </Link>
        <div className="flex flex-col gap-y-6">
          <Link href={`/products/${cartItem.slug}`} className="text-sm font-medium md:text-lg">{cartItem.title}</Link>
          <p className="text-xs font-medium md:text-base text-primary-900">
            {toPersianNumber(cartItem.offPrice)} <span>تومان</span>
          </p>
        </div>
      </div>
      <div className="flex items-center gap-x-1.5">
        <button
          onClick={addToCartHandler}
          className="bg-primary-900 text-white rounded-sm p-1"
        >
          <PlusIcon className="w-5 h-5" />
        </button>
        <span className="mt-1">{cartItem.quantity}</span>

        {cartItem.quantity <= 1 ? (
          <button
            onClick={decrementFromCart}
            className="bg-error text-white rounded-sm p-1"
          >
            <TrashIcon className="w-5 h-5" />{" "}
          </button>
        ) : (
          <button
            onClick={decrementFromCart}
            className="bg-warning text-white rounded-sm p-1"
          >
            <MinusIcon className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};
export default CartItem;
