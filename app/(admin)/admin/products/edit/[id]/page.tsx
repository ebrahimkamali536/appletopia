"use client";
import { useParams } from "next/navigation";
import {
  useGetProduct,
  useUpdateProduct,
} from "../../../../../../hook/useProducts";
import ProductForm from "../../../../../../components/ProductForm";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useGetCategories } from "../../../../../../hook/useCagories";
import { useMutation } from "@tanstack/react-query";
import {
  getProductById,
  updateProduct,
} from "../../../../../../services/productServices";
import { includeObject } from "../../../../../../utils/objectUtils";

const includesProductKey = [
  "title",
  "description",
  "slug",
  "imageLink",
  "brand",
  "price",
  "discount",
  "offPrice",
  "countInStock",
];

const EditProduct = () => {
  const { id } = useParams();
  const { data: productData, isLoading: isProductLoading } = useGetProduct(id);
  const { data: categoryData, isLoading: isCategoryLoading } =
    useGetCategories();
  const { product } = productData || {};
  const { categories } = categoryData || {};
  const [formData, setFormData] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("");

  const { mutateAsync } = useUpdateProduct();

  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync({
        productId: product._id,
        productData: {
          ...formData,
          category: selectedCategory,
          tags: [],
        },
      });
      toast.success(message);
      router.push("/admin/products");
    } catch (error) {
      console.log(error);
    }
  };

  const formDataHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    if (product) {
      setFormData(includeObject(product, includesProductKey));
      if (product.category) {
        setSelectedCategory(product.category._id);
      }
    }
  }, [productData]);
  console.log(formData);
  if (isProductLoading) return <h1>loading....</h1>;

  return (
    <div>
      <ProductForm
        onSubmit={submitHandler}
        productData={formData}
        productDataOnchange={formDataHandler}
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </div>
  );
};

export default EditProduct;
