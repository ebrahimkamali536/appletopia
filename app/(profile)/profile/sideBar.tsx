"use client";
import React from "react";
import { useGetUser } from "../../../hook/useAuth";
import {
  BellIcon,
  ChatBubbleLeftIcon,
  ClipboardIcon,
  PencilSquareIcon,
  PowerIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const SideBar = () => {
  const { data } = useGetUser();
  const { user } = data || {};
  return (
    <div className="h-full bg-primary-900">
      <div className="h-20 flex items-center bg-black/10">
        <p className="text-white text-lg font-bold px-6">{user?.name}</p>
      </div>
      <nav>
        <ul className="mt-10 px-6 flex flex-col gap-y-6">
          <li>
            <Link href="/" className="flex items-center gap-x-2">
              <div
                className={`w-8 h-8 bg-white flex justify-center items-center rounded-md`}
              >
                <WrenchScrewdriverIcon className={`w-4 h-4`} />
              </div>
              <span className={`text-white`}>داشبورد</span>
            </Link>
          </li>
          <li>
            <Link href="/" className="flex items-center gap-x-2">
              <div
                className={`w-8 h-8 bg-white flex justify-center items-center rounded-md`}
              >
                <ClipboardIcon className={`w-4 h-4`} />
              </div>
              <span className={`text-white`}>سفارشات</span>
            </Link>
          </li>
          <li>
            <Link href="/" className="flex items-center gap-x-2">
              <div
                className={`w-8 h-8 bg-white flex justify-center items-center rounded-md`}
              >
                <PencilSquareIcon className={`w-4 h-4`} />
              </div>
              <span className={`text-white`}>مشخصات</span>
            </Link>
          </li>
          <li>
            <Link href="/" className="flex items-center gap-x-2">
              <div
                className={`w-8 h-8 bg-white flex justify-center items-center rounded-md`}
              >
                <BellIcon className={`w-4 h-4`} />
              </div>
              <span className={`text-white`}>اطلاعیه</span>
            </Link>
          </li>
          <li>
            <Link href="/" className="flex items-center gap-x-2">
              <div
                className={`w-8 h-8 bg-white flex justify-center items-center rounded-md`}
              >
                <ChatBubbleLeftIcon className={`w-4 h-4`} />
              </div>
              <span className={`text-white`}>نظرات</span>
            </Link>
          </li>
          <li>
            <Link href="/" className="flex items-center gap-x-2">
              <div
                className={`w-8 h-8 bg-white flex justify-center items-center rounded-md`}
              >
                <PowerIcon className={`w-4 h-4`} />
              </div>
              <span className={`text-white`}>خروج</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
