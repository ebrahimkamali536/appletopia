"use client";
import React from "react";
import { useGetUser } from "../../../hook/useAuth";
import {
  BellIcon,
  CalendarIcon,
  ChatBubbleLeftIcon,
  ClipboardIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { toLocalDateStringShort } from "../../../utils/toLocalDateStringShort";
import Link from "next/link";

const Profile = () => {
  const { data } = useGetUser();
  const { user } = data || {};
  console.log(user)
  const date = new Date();

  return (
    <div className="flex flex-col gap-y-6 px-6 py-6 lg:py-10">
      {/* first section */}
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
        <div className="bg-white rounded-md flex items-center justify-center flex-col gap-y-2 py-10 lg:col-span-4">
          <p className="text-lg font-bold text-secondary-800">{user?.name}</p>
          <p className="font-medium text-secondary-700">{user?.email}</p>
          <Link href="/profile/edit" className="btn--primary flex items-center gap-x-1 rounded-lg">
            <UserIcon className="w-5 h-5" />
            <span>مشخصات</span>
          </Link>
        </div>
        <div className="bg-primary-900 text-white rounded-md flex items-center justify-between p-8 lg:col-span-2">
          <div>
            <p className="text-lg font-bold">تاریخ عضویت</p>
            <p className="flex items-center gap-x-1">
              <CalendarIcon className="w-5 h-5" />
              <span>{toLocalDateStringShort(user?.createdAt)}</span>
            </p>
          </div>
          <div>
            <p className="text-lg font-bold">امروز</p>
            <p className="flex items-center gap-x-1">
              <CalendarIcon className="w-5 h-5" />
              <span>{toLocalDateStringShort(date.toString())}</span>
            </p>
          </div>
        </div>
      </div>
      {/* second section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-md flex items-start justify-center flex-col gap-y-2 py-10 px-8">
          <div className="text-lg font-bold text-blue-600 w-10 h-10 rounded-full flex items-center justify-center bg-blue-100">
            <BellIcon className="w-5 h-5" />
          </div>
          <p className="font-bold text-secondary-800 text-lg">اطلاعیه ها</p>
          <p className="font-medium text-secondary-600">
            اطلاعیه جدید وجود ندارد
          </p>
        </div>
        <div className="bg-white rounded-md flex items-start justify-center flex-col gap-y-2 py-10 px-8">
          <div className="text-lg font-bold text-orange-600 w-10 h-10 rounded-full flex items-center justify-center bg-orange-100">
            <ChatBubbleLeftIcon className="w-5 h-5" />
          </div>
          <p className="font-bold text-secondary-800 text-lg">نظرات</p>
          <p className="font-medium text-secondary-600">
          ۰ دیدگاه ثبت کرده اید.
          </p>
        </div>
        <div className="bg-white rounded-md flex items-start justify-center flex-col gap-y-2 py-10 px-8">
          <div className="text-lg font-bold text-green-600 w-10 h-10 rounded-full flex items-center justify-center bg-green-100">
            <ClipboardIcon className="w-5 h-5" />
          </div>
          <p className="font-bold text-secondary-800 text-lg">سفارشات</p>
          <Link href="/profile/order-list" className="font-medium text-secondary-600">مشاهده لیست سفارشات</Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
