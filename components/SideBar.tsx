"use client";

import React, { useCallback, useState } from "react";
import { getCategories } from "../services/categoriesServices";
import CheckBox from "./common/CheckBox";
import { useRouter } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation";

const SideBar = ({categories}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;
  const [selectedCategories, setSelectedCategories] = useState([]);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );
    const returnnewArrry = (array) => {
      
    }
  const categoryHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if(selectedCategories.includes(value)) {
      const categories = selectedCategories.filter(c => c !== c);
      setSelectedCategories(categories)
      console.log('true')
    } else {
      setSelectedCategories([...selectedCategories, value]);
      router.push(pathname + "?" + createQueryString("category", [...selectedCategories, value]))
    }
  };
  console.log(selectedCategories)
  return (
    <div className="bg-white shadow-md p-6 rounded-xl">
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

export default SideBar;
