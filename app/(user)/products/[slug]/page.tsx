import Image from "next/image";
import {
  getProducts,
  getSingleProduct,
} from "../../../../services/productServices";
import {
  GiftIcon,
  TruckIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import AddToCart from "../../../../components/AddToCart";
import { toPersianNumber } from "../../../../utils/toPersianNumber";
import Link from "next/link";

export const dynamicParams = false;

const ProductDetails = async ({ params }) => {
  const { slug } = params;
  const { product } = await getSingleProduct(slug);
  console.log(product);
  return (
    <div className="p-4">
      <div className="grid md:grid-cols-12 gap-6">
        <div className="md:col-span-5">
          <Image
            src="/assets/images/macbook-13.jpg"
            width={1000}
            height={1000}
            alt={product.title}
            className=""
          />
        </div>
        <div className="flex flex-col justify-between md:col-span-7 col-span-10 gap-y-4">
          <div>
            <p className="font-bold text-2xl mb-5">{product.title}</p>
            <div className="flex items-center gap-x-2 bg-gray-200 text-secondary-700 rounded-md w-fit px-4 py-2.5 mb-8">
              <p>دسته بندی:</p>
              <Link href={"/"} className="text-primary-900 font-medium">
                {product.category.title}
              </Link>
            </div>

            <div className="font-bold text-primary-900 mb-8">
              {product.discount ? (
                <div className="flex items-center gap-x-4">
                  <p className="text-secondary-700 text-xl">
                    {product.offPrice} تومان
                  </p>
                  <p className="text-sm line-through text-secondary-500">
                    {product.price}
                  </p>
                </div>
              ) : (
                <p>{product.price}</p>
              )}
            </div>

            <div className="font-bold w-1/2">
              <p className="text-secondary-800 mb-4 text-lg">توضیحات محصول:</p>
              <p className="text-secondary-400 text-sm">
                {product.description}
              </p>
            </div>
          </div>

          <AddToCart product={product} />
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;

export async function generateStaticParams() {
  const { products } = await getProducts();

  return products.map((product) => ({
    slug: product.slug,
  }));
}
