"use client";

import React, { useCallback, useState } from "react";
import CheckBox from "./common/CheckBox";
import { useRouter } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation";

const CategorySidebar = ({categories}) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [selectedCategories, setSelectedCategories] = useState(searchParams.get("category")?.split(",") || []);

 
  const createQueryString = useCallback(
    (name: string, value: (string | string[])) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value.toString());
      return params.toString()
    },
    [searchParams]
  )

  const categoryHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if(selectedCategories.includes(value)) {
      const categories = selectedCategories.filter(category => category !== value);
      setSelectedCategories(categories)
      router.push(pathname + "?" + createQueryString("category", categories))
    } else {
      setSelectedCategories([...selectedCategories, value])
      router.push(pathname + "?" + createQueryString("category", [...selectedCategories, value]))

    }
  }

  return (
    <div className="bg-white shadow-product-card p-6 rounded-xl">
      <h4 className="text-primary-900 mb-5 font-bold text-lg">فیلتر</h4>

      <ul className="flex flex-col gap-y-4">
        {categories.map((category) => (
          <CheckBox
            key={category._id}
            id={category._id}
            name="product-type"
            value={category.englishTitle}
            label={category.title}
            onChange={categoryHandler}
            checked={selectedCategories.includes(category.englishTitle)}
          />
        ))}
      </ul>
    </div>
  );
};

export default CategorySidebar;
