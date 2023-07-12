"use client";
import { useParams } from "next/navigation";
import CategoryForm from "../../../../../../components/CategoryForm";
import {
  useGetCategories,
  useGetCategory,
  useUpdateCategory,
} from "../../../../../../hook/useCagories";
import { useEffect, useState } from "react";
import { includeObject } from "../../../../../../utils/objectUtils";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { PlusIcon } from "@heroicons/react/24/outline";
const categoryKey = ["title", "description", "englishTitle"];
const EditCategory = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetCategory(id);
  const { category } = data || {};
  const [formData, setFormData] = useState({});
  const [categoryType, setCategoryType] = useState("");
  const router = useRouter();
  const { mutateAsync } = useUpdateCategory();

  const categoryDataHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    if (category) {
      setCategoryType(category.type);
      setFormData(includeObject(category, categoryKey));
    }
  }, [data]);
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync({
        id: category._id,
        data: {
          ...formData,
          type: categoryType,
        },
      });
      toast.success(message);
      router.push("/admin/categories");
    } catch (error) {}
  };
  if (isLoading) return <h1>loading...</h1>;

  return (
    <div>
      <CategoryForm
        categoryDataOnChange={categoryDataHandler}
        categoryData={formData}
        categoryType={categoryType}
        setCategoryType={setCategoryType}
        onSubmit={submitHandler}
      />
    </div>
  );
};

export default EditCategory;
