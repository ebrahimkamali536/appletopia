import React from "react";
import { IProduct } from "../interface/type";
import Image from "next/image";
import Link from "next/link";
import { toPersianNumber } from "../utils/toPersianNumber";
import { HeartIcon } from "@heroicons/react/24/outline";

interface IProps {
  product: IProduct;
}
const ProductCard = ({ product }: IProps) => {
  return (
    <div className="bg-white shadow-product-card p-4 rounded-lg flex flex-col justify-between">
      <div>
        <Link href={`/products/${product.slug}`}>
          <div className="bg-[#E2E2E2] p-2.5 rounded-md mb-5">
            <Image
              src={`/assets/images/macbook-13.jpg`}
              alt={"عکس"}
              width={80}
              height={80}
              className="w-full mix-blend-multiply"
            />
          </div>
        </Link>
        <Link href={`/products/${product.slug}`}>
          <h3 className="mb-4 font-medium">{product.title}</h3>
        </Link>
      </div>
      <div>
        <p className="text-left font-medium text-lg text-primary-700">
          {toPersianNumber(product.offPrice)}{" "}
          <span className="text-primary-800">تومان</span>
        </p>
      </div>
      <div className="border-t mt-2.5 pt-2.5">
        <Link
          href={`/products/${product.slug}`}
          className="font-bold text-center text-lg block text-primary-900"
        >
          مشاهده و سفارش
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
