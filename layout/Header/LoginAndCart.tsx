"use client";
import {
  ShoppingBagIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import { useGetUser } from "../../hook/useAuth";

const LoginAndCart = () => {
  const { data } = useGetUser();
  const { user, cart } = data || {};
  console.log(cart);
  return (
    <div className="flex items-center gap-x-2.5">
      <div>
        {user ? (
          <Link
            href="/profile"
            className="flex items-center gap-x-2 md:bg-[#F2F2F2] text-secondary-900 font-bold rounded-md px-2 md:px-4 py-2.5"
          >
            <span className="hidden md:block text-sm">{user.name}</span>
            <UserCircleIcon className="md:w-6 md:h-6 w-9 h-9" />
          </Link>
        ) : (
          <Link
            href="/auth"
            className="flex items-center gap-x-2 md:bg-[#F2F2F2] text-secondary-900 font-bold rounded-md px-2 md:px-4 py-2.5"
          >
            <span className="hidden md:block text-sm">ورود / ثبت نام</span>
            <UserCircleIcon className="md:w-6 md:h-6 w-9 h-9" />
          </Link>
        )}
      </div>
      <div>
        <Link
          href="/cart"
          className="flex items-center gap-x-2 md:bg-[#F2F2F2] text-secondary-900 font-bold rounded-md px-2 md:px-4 py-2.5 relative"
        >
          <span className="hidden md:block text-sm">سبد خرید</span>
          <button className="relative">
            <ShoppingBagIcon className="md:w-6 md:h-6 w-9 h-9" />
            {!!cart?.productDetail?.length && (
              <span className="text-xs text-white bg-primary-900 w-5 h-5 md:w-4 md:h-4 rounded-full flex items-center justify-center absolute top-0 md:-top-1 -left-1">
                {cart.productDetail.length}
              </span>
            )}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LoginAndCart;
