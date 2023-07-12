"use client";
import { useState } from "react";
import TextField from "../../../../../components/common/TextField";
import { useGetCategories } from "../../../../../hook/useCagories";
import { toast } from "react-hot-toast";
import { useAddProduct } from "../../../../../hook/useProducts";
import { useRouter } from "next/navigation";

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

const AddProduct = () => {
  const { data, isLoading } = useGetCategories();
  const { categories } = data || {};
  const router = useRouter();
  const { mutateAsync } = useAddProduct();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    slug: "",
    imageLink: "",
    brand: "",
    price: "",
    discount: "",
    offPrice: "",
    countInStock: "",
  });
  const [selectedCategory, setSelectedCategory] = useState("");

  const formDataHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const selectedCategoryHandler = (e) => {
    setSelectedCategory(e.target.value);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync({
        ...formData,
        category: selectedCategory,
        tags: [],
      });
      toast.success(message);
      router.push("/admin/products");
    } catch (error) {
      if (error?.data?.response?.message) {
        toast.error(error.data.response.message);
      }
    }
  };
  console.log(selectedCategory)

  if (isLoading) return <h1>loading</h1>;

  return (
    <div className="px-6 py-10">
      <form className="" onSubmit={submitHandler}>
        <div className="grid md:grid-cols-2 gap-6 mb-4">
          {formItems.map((item) => (
            <TextField
              key={item.id}
              label={item.title}
              value={formData[item.value]}
              name={item.value}
              onChange={formDataHandler}
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
            onChange={selectedCategoryHandler}
            id="category"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
};

export default AddProduct;
