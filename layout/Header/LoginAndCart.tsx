import { ShoppingBagIcon, UserIcon } from "@heroicons/react/24/outline";
import React from "react";

const LoginAndCart = () => {
  return (
    <div className="flex items-center gap-x-2.5">
      <div>
        <UserIcon className="w-10 h-10" />
      </div>
      <div>
        <ShoppingBagIcon className="w-10 h-10" />
      </div>
    </div>
  );
};

export default LoginAndCart;
