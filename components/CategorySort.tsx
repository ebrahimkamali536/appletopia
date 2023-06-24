"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

const sortItems = [
  { id: 1, value: "latest", label: "جدید ترین" },
  { id: 1, value: "earliest", label: "قدیمی ترین" },
  { id: 1, value: "popular", label: "محبوب ترین" },
];

const CategorySort = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const createQueryStrin = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );
  const [sort, setSort] = useState("latest");
  const sortHandler = (value: string) => {
    setSort(value);
    router.push(pathname + "?" + createQueryStrin("sort", value))
  };

  return (
    <div className="flex items-center justify-between bg-white shadow-product-card rounded-md px-6 py-2">
      <p className="font-bold">مرتب سازی بر اساس:</p>
      <div className="flex items-center gap-x-8">
        {sortItems.map((item) => (
          <button
            onClick={() => sortHandler(item.value)}
            className={`${
              item.value === sort
                ? "bg-primary-900 text-white"
                : "bg-gray-100 text-secondary-800 hover:text-primary-900"
            } transition-all px-4 py-1.5 rounded-md`}
            key={item.id}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySort;
