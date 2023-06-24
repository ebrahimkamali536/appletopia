import Image from "next/image";
import {
  getProducts,
  getSingleProduct,
} from "../../../../services/productServices";
import {
  GiftIcon,
  ShoppingCartIcon,
  TruckIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

export const dynamicParams = false;

const ProductDetails = async ({ params }) => {
  const { slug } = params;
  const { product } = await getSingleProduct(slug);

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="flex flex-col gap-y-4 md:w-2/3 md:justify-between">
          <div>
            <h1 className="text-2xl text-secondary-900 font-bold">
              {product.title}
            </h1>
            <p className="text-secondary-400 font-medium">
              <span className="text-secondary-700">دسته بندی:</span>{" "}
              {product.category.title}
            </p>
          </div>
          {/* price and add to cart */}
          <div className="flex-col gap-y-4 md:w-1/2 lg:w-1/3 hidden md:flex">
            <div>
              <p className="font-medium text-lg text-primary-900">
                قیمت محصول:{" "}
                <span
                  className={`${
                    product.discount ? "line-through" : "font-bold"
                  }`}
                >
                  {product.price}
                </span>
                <span className="text-sm pr-1">تومان</span>
              </p>
              {!!product.discount && (
                <div>
                  <p className="text-xl font-bold">
                    قیمت با تخفیف: {product.offPrice}
                  </p>
                  <div className="bg-red-500 px-2 py-0.5 rounded-xl text-white text-sm">
                    {product.discount} %
                  </div>
                </div>
              )}
            </div>
            <button className="flex items-center justify-center gap-x-4 btn--primary w-full rounded-lg">
              <ShoppingCartIcon className="w-8 h-8" />
              <span>افزودن به سبد خرید</span>
            </button>
          </div>
        </div>
        <div className="md:w-1/3">
          <Image
            src={`/assets/images/macbook-13.jpg`}
            alt={"عکس"}
            width={1000}
            height={1000}
            className="w-full mix-blend-multiply"
          />
        </div>
      </div>
      {/* price and add to cart */}
      <div className="flex flex-col gap-y-4 md:w-1/2 lg:w-1/3 md:hidden">
        <div>
          <p className="font-medium text-lg text-primary-900">
            قیمت محصول:{" "}
            <span
              className={`${product.discount ? "line-through" : "font-bold"}`}
            >
              {product.price}
            </span>
            <span className="text-sm pr-1">تومان</span>
          </p>
          {!!product.discount && (
            <div>
              <p className="text-xl font-bold">
                قیمت با تخفیف: {product.offPrice}
              </p>
              <div className="bg-red-500 px-2 py-0.5 rounded-xl text-white text-sm">
                {product.discount} %
              </div>
            </div>
          )}
        </div>
        <button className="flex items-center justify-center gap-x-4 btn--primary w-full rounded-lg">
          <ShoppingCartIcon className="w-8 h-8" />
          <span>افزودن به سبد خرید</span>
        </button>
      </div>
      {/* service & customer */}
      <div className="bg-primary-100 flex flex-col gap-y-2 text-secondary-900 p-4 rounded-md mt-8">
        <div className="flex items-center gap-x-2.5">
          <GiftIcon className="w-6 h-6" />
          <p>دریافت اکسسوری رایگان</p>
        </div>
        <div className="flex items-center gap-x-2.5">
          <TruckIcon className="w-6 h-6" />
          <p>ارسال رایگان به سراسر کشور</p>
        </div>
        <div className="flex items-center gap-x-2.5">
          <WrenchScrewdriverIcon className="w-6 h-6" />
          <p>پشتیبانی و خدمات پس از فروش</p>
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
