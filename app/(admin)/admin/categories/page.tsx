"use client";
import Link from "next/link";
import { useGetCategories } from "../../../../hook/useCagories";
import CategoryTable from "./CategoryTable";
import { PlusIcon } from "@heroicons/react/24/outline";

const Categories = () => {
  const { data, isLoading } = useGetCategories();
  const { categories } = data || {};
  console.log(categories);
  if (isLoading) return <h1>loading....</h1>;
  return (
    <div className="px-6 py-10">
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
      <CategoryTable categories={categories} />
    </div>
  );
};

export default Categories;
