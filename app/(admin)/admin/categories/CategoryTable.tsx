"use client";
import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useDeleteCategory } from "../../../../hook/useCagories";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

const CategoryTable = ({ categories }) => {
  const { mutateAsync } = useDeleteCategory();
  const queryClient = useQueryClient();
  const removeProductHandler = async (id) => {
    try {
      const { message } = await mutateAsync(id);
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["get-categories"] });
    } catch (error) {
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      }
    }
  };
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-right text-gray-500">
        <thead className="text-xs text-gray-700 bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              #
            </th>
            <th scope="col" className="px-6 py-3">
              عنوان
            </th>
            <th scope="col" className="px-6 py-3">
              توضیحات
            </th>
            <th scope="col" className="px-6 py-3">
              عنوان انگلیسی
            </th>
            <th scope="col" className="px-6 py-3">
              نوع
            </th>
            <th scope="col" className="px-6 py-3">
              عملیات
            </th>
          </tr>
        </thead>
        <tbody>
          {categories?.map((category, index) => (
            <tr key={category._id} className="bg-white border-b">
              <td className="px-6 py-4">{index}</td>
              <td className="px-6 py-4">{category.title}</td>
              <td className="px-6 py-4 max-w-[280px] whitespace-nowrap truncate">
                {category.description}
              </td>
              <td className="px-6 py-4 flex flex-col gap-y-1.5">
                {category.englishTitle}
              </td>
              <td className="px-6 py-4">
                <span className="bg-primary-900 text-white px-2.5 py-1 rounded-2xl">
                  {category.type}
                </span>
              </td>
              <td className="px-6 py-4 flex items-center gap-x-4">
                <Link href={`/admin/categories/${category._id}`}>
                  <EyeIcon className="w-6 h-6 text-primary-900" />
                </Link>
                <button onClick={() => removeProductHandler(category._id)}>
                  <TrashIcon className="w-6 h-6 text-red-500" />
                </button>
                <Link href={`/admin/categories/edit/${category._id}`}>
                  <PencilIcon className="w-6 h-6 text-secondary-400" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default CategoryTable;
