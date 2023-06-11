import React from "react";
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div>
        <div className="relative flex items-center justify-between p-4 text-white rounded-b-2xl bg-primary-900 mb-4">
          <div>
            <Bars3Icon className="w-8 h-8" />
          </div>
          <div>
            <Image src="/assets/images/logo.svg" width={40} height={40} alt="logo"  />
          </div>
        </div>

        <div className="px-4 flex items-center gap-x-4 border border-secondary-300 rounded-lg mx-6">
            <MagnifyingGlassIcon className="w-5 h-5 text-secondary-300" />
            <input type="text" placeholder="جستجو محصول مورد نظر" className="py-[11px] placeholder:text-xs" />
        </div>
      </div>
    </header>
  );
};

export default Header;
