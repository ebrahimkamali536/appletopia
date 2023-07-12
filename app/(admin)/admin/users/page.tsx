"use client";
import { useEffect } from "react";
import { useGetUser, useGetUsers } from "../../../../hook/useAuth";
import { getUserList } from "../../../../services/authServices";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { toLocalDateStringShort } from "../../../../utils/toLocalDateStringShort";
import { PlusIcon } from "@heroicons/react/24/outline";

const UserList = () => {
  const { data, isLoading } = useGetUsers();
  const { users } = data || {};
  if (isLoading) return <h1>loading....</h1>;
  console.log(data);
  return (
    <div className="px-6 py-10  ">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-bold text-2xl">لیست دسته بندی</h1>
        <div>
          <Link
            href="/admin/categories/add"
            className="flex items-center gap-x-1 text-primary-900 font-bold"
          >
            <span>اضافه کردن دسته بندی</span>
            <PlusIcon className="w-6 h-6" />
          </Link>
        </div>
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-right text-gray-500">
          <thead className="text-xs text-gray-700 bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                نام
              </th>
              <th scope="col" className="px-6 py-3">
                ایمیل
              </th>
              <th scope="col" className="px-6 py-3">
                شماره موبایل
              </th>
              <th scope="col" className="px-6 py-3">
                محصولات
              </th>
              <th scope="col" className="px-6 py-3">
                تاریخ پیوستن
              </th>
              <th scope="col" className="px-6 py-3">
                مشاهده
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="bg-white border-b">
                <td className="px-6 py-4">{index}</td>
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4 max-w-[280px] whitespace-nowrap truncate">
                  {user.email}
                </td>
                <td className="px-6 py-4 flex flex-col gap-y-1.5">
                  {user.phoneNumber}
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col gap-y-1">
                    {user?.Products?.map((product, index) => (
                      <span key={index} className="whitespace-nowrap inline-block  py-1 px-2 text-xs font-medium w-auto rounded-xl bg-primary-900 text-white">
                        {product.title}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {toLocalDateStringShort(user.createdAt)}
                </td>

                <td className="px-6 py-4">
                  <Link href="/admin/users">مشاهده جزئیات</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
