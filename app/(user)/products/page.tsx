import React from "react";
import {getProducts} from "../../../services/productServices"
import ProductCard from "../../../components/ProductCard";
import CategorySidebar from "../../../components/CategorySidebar";
import { getCategories } from "../../../services/categoriesServices";
import queryString from "query-string";
import CategorySort from "../../../components/CategorySort";
import { cookies } from "next/headers";
import { toStringCookies } from "../../../utils/toStringCookies";


export const dynamic = "force-dynamic"

const Products = async ({ searchParams }) => {
  const cookieStore = cookies();

  const productsPromise = getProducts(queryString.stringify(searchParams));
  const categoryPromise = getCategories();
  const [{products}, {categories}] = await Promise.all([productsPromise, categoryPromise]);

  return (
    <div className="container lg:max-w-screen-xl px-4">
      <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
        <div className="md:col-span-2">
          <CategorySidebar categories={categories} />
        </div>
        <div className="grid gap-4 md:col-span-8">
          <div className="hidden md:block">
            <CategorySort />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
