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

      </div>
    </header>
  );
};

export default Header;
