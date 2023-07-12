import {
  Bars3Icon,
  BuildingStorefrontIcon,
  HeartIcon,
  HomeIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import LoginAndCart from "./LoginAndCart";
import SearchForm from "./SearchForm";

const Header = () => {
  return (
    <header>
      <div className="bg-white px-4 py-2.5 lg:py-4 shadow-md">
        <div className="flex items-center justify-between mb-2.5 lg:mb-4">
          {/* mobile menu */}
          <div className="lg:hidden">
            <MobileMenu />
          </div>

          {/* logo */}
          <Link href="/">
            <Image
              src="/assets/images/logo.svg"
              alt="logo"
              width={50}
              height={50}
            />
          </Link>
          <div className="hidden lg:block ml-auto mr-10 w-[500px]">
            <SearchForm />
          </div>
          {/* login&basket */}
          <LoginAndCart />
        </div>
        <div className="lg:hidden">
          <SearchForm />
        </div>
        <nav className="hidden lg:block">
          <ul className="flex gap-x-8 text-[#0a2942]">
            <li>
              <Link href="/" className="flex items-center gap-x-1.5">
                <HomeIcon className="w-5 h-5" />
                <span className="text-lg font-medium">خانه</span>
              </Link>
            </li>
            <li>
              <Link href="/products" className="flex items-center gap-x-1.5">
                <BuildingStorefrontIcon className="w-5 h-5" />
                <span className="text-lg font-medium">محصولات</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
