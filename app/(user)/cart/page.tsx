"use client";

import Link from "next/link";
import { useGetUser } from "../../../hook/useAuth";
import CartItem from "../../../components/CartItem";
import CartSummery from "../../../components/CartSummery";
import Image from "next/image";

const Cart = () => {
  const { data, isLoading } = useGetUser();
  const { user, cart } = data || {};

  if (isLoading) return <p>Loading ...</p>;

  if (!user)
    return (
      <div className="flex items-center justify-center flex-col gap-y-2.5 mt-52">
        <h1 className="font-bold text-xl mb-4">
          برای مشاهده سبد خرید وارد حساب کاربری شوید!
        </h1>
        <Link href="/auth" className="border border-primary-900 text-primary-900 rounded-lg px-4 py-2.5 font-bold">
          رفتن به صفحه لاگین؟
        </Link>
      </div>
    );

  if (!user?.cart?.products.length)
    return (
      <div className="flex items-center justify-center flex-col gap-y-2.5 mt-52">
        <h1 className="font-bold text-l ">سبد خرید شما خالیست!</h1>
        <p className="text-secondary-600 font-medium">میتوانید برای خرید محصول به لینک زیر مراجعه کنید</p>
        <Link href="/products" className="border border-secondary-900 rounded-lg px-4 py-2.5 font-bold">مشاهده محصولات</Link>
      </div>
    );

  return (
    <div className="grid lg:grid-cols-12 gap-6 px-6 py-4">
      <div className="lg:col-span-9">
        <div className="flex items-center justify-between mb-6">
          <h1 className="font-bold text-xl">ثبت خرید</h1>
          <Link href="/" className="text-primary-900 font-bold">
            بازگشت به خانه
          </Link>
        </div>
        <div className="grid gap-4">
          {cart &&
            cart.productDetail.map((cartItem) => (
              <CartItem key={cartItem._id} cartItem={cartItem} />
            ))}
        </div>
      </div>
      {/* cart pay detail */}
      <CartSummery payDetail={cart.payDetail} />
    </div>
  );
};
export default Cart;
