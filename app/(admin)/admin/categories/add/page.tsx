"use client";
import { useState } from "react";
import CategoryForm from "../../../../../components/CategoryForm";
import { useAddCategory } from "../../../../../hook/useCagories";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const AddCategory = () => {
  const [formData, setFormData] = useState({});
  const [categoryType, setCategoryType] = useState("");
  const { mutateAsync } = useAddCategory();
  const router = useRouter();
  const formDataHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log({ ...formData, type: categoryType });
    try {
      const { message } = await mutateAsync({
        ...formData,
        type: categoryType,
      });
      toast.success(message);
      router.push("/admin/categories");
    } catch (error) {
      if (error?.response?.data?.message) {
        toast.error(error.respomse.data.message);
      }
    }
  };

  return (
    <div>
      <CategoryForm
        categoryDataOnChange={formDataHandler}
        categoryData={formData}
        categoryType={categoryType}
        onSubmit={submitHandler}
        setCategoryType={setCategoryType}
      />
    </div>
  );
};

export default AddCategory;
