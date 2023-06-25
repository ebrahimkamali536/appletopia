"use client";
import {
  Bars3Icon,
  BuildingStorefrontIcon,
  HeartIcon,
  HomeIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Bars3Icon onClick={() => setOpen(true)} className="w-10 h-10" />
      <div>
        <nav
          className={`transition-all duration-300 ${
            open
              ? "bg-primary-900 w-3/4 z-20 fixed top-0 right-0 h-screen py-6 px-4 translate-x-0"
              : "translate-x-full bg-primary-900 w-3/4  z-20 fixed top-0 right-0 h-screen py-6 px-4"
          }`}
        >
          <div className="flex items-center justify-between border-b border-secondary-100 mb-8 pb-4">
            <Image
              src="/assets/images/logo.svg"
              alt="logo"
              width={40}
              height={40}
            />
            <XMarkIcon
              className="w-10 h-10 text-white"
              onClick={() => setOpen(false)}
            />
          </div>
          <ul onClick={() => setOpen(false)} className="flex flex-col gap-y-4 text-white">
            <li>
              <Link href="/" className="flex items-center gap-x-2.5">
                <HomeIcon className="w-8 h-8" />
                <span className="text-lg font-medium">خانه</span>
              </Link>
            </li>
            <li>
              <Link href="/products" className="flex items-center gap-x-2.5">
                <BuildingStorefrontIcon className="w-8 h-8" />
                <span className="text-lg font-medium">محصولات</span>
              </Link>
            </li>
            <li>
              <Link href="/favorite" className="flex items-center gap-x-2.5">
                <HeartIcon className="w-8 h-8" />
                <span className="text-lg font-medium">علاقه مند‌ها</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div
          onClick={() => setOpen(false)}
          className={`${
            open
              ? "fixed top-0 left-0 right-0 bottom-0 bg-black/30 z-10"
              : "hidden"
          }`}
        />
      </div>
    </>
  );
};

export default MobileMenu;
