import React from "react";
import TextField from "./common/TextField";

const formItems = [
  { id: 1, title: "عنوان", value: "title" },
  { id: 2, title: "توضیحات", value: "description" },
  { id: 3, title: "نامک", value: "slug" },
  { id: 4, title: "عکس", value: "imageLink" },
  { id: 5, title: "برند", value: "brand" },
  { id: 6, title: "قیمت", value: "price" },
  { id: 7, title: "تخفیف", value: "discount" },
  { id: 8, title: "قیمت نهایی", value: "offPrice" },
  { id: 9, title: "موجودی", value: "countInStock" },
];

function ProductForm({
  onSubmit,
  productData,
  productDataOnchange,
  selectedCategory,
  setSelectedCategory,
  categories,
}) {
  return (
    <div className="px-6 py-10">
      <form className="" onSubmit={onSubmit}>
        <div className="grid md:grid-cols-2 gap-6 mb-4">
          {formItems.map((item) => (
            <TextField
              key={item.id}
              label={item.title}
              value={productData[item.value] ?? ""}
              name={item.value}
              onChange={productDataOnchange}
            />
          ))}
        </div>
        <div className="mb-6">
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            دسته بندی
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            id="category"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            defaultValue={selectedCategory}
          >
            {categories?.map((category) => (
              <option key={category._id} value={category._id}>
                {category.title}
              </option>
            ))}
          </select>
        </div>
        <button className="bg-primary-900 w-full text-white py-2.5 rounded-xl">
          افزودن محصول
        </button>
      </form>
    </div>
  );
}

export default ProductForm;
