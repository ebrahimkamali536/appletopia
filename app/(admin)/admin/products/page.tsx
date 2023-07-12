"use client";
import Link from "next/link";
import { useGetProducts } from "../../../../hook/useProducts";
import ProductsTable from "./ProductsTable";
import { PlusCircleIcon, PlusIcon } from "@heroicons/react/24/outline";

const Products = () => {
  const { data, isLoading } = useGetProducts();
  const {products} = data || {}
  
  if(isLoading) return <h1>loading</h1>
  return (
    <div className="px-6 py-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-bold text-2xl">لیست محصولات</h1>
        <div>
          <Link href="/admin/products/add" className="flex items-center gap-x-1 text-primary-900 font-bold">
            <span>اضافه کردن محصول</span>
            <PlusIcon className="w-6 h-6" />
          </Link>
        </div>
      </div>
      <ProductsTable products={products} />
    </div>
  );
};

export default Products;
