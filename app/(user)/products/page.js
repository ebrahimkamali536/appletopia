import React from "react";
import {getProducts} from "../../../services/productServices"
import ProductCard from "../../../components/ProductCard";
import SideBar from "../../../components/SideBar";
import { getCategories } from "../../../services/categoriesServices";
import queryString from "query-string";

export const dynamic = "force-dynamic"

const Products = async ({ searchParams }) => {
  const { products } = await getProducts(queryString.stringify(searchParams));
  const { categories } = await getCategories();

  return (
    <div className="container lg:max-w-screen-xl px-4">
      <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
        <div className="md:col-span-2">
          <SideBar categories={categories} />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:col-span-8">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
