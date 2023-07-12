import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProductsTable = ({products}) => {
  console.log(products)
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
              دسته بندی
            </th>
            <th scope="col" className="px-6 py-3">
              قیمت
            </th>
            <th scope="col" className="px-6 py-3">
              تخفیف
            </th>
            <th scope="col" className="px-6 py-3">
              قیمت با تخفیف
            </th>
            <th scope="col" className="px-6 py-3">
              موجودی
            </th>
            <th scope="col" className="px-6 py-3">
              عملیات
            </th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product, index) => (
            <tr key={product._id} className="bg-white border-b">
              <td className="px-6 py-4">{index}</td>
              <td className="px-6 py-4">{product.title}</td>
              <td className="px-6 py-4 max-w-[280px] whitespace-nowrap truncate">
                {product.category ? <span>{product.category.title}</span> : <span>دسته بندی نشده</span>}
              </td>
              <td className="px-6 py-4 flex flex-col gap-y-1.5">
                {product.price}
              </td>
              <td className="px-6 py-4">{product.discount} %</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {product.offPrice}
              </td>
              <td className="px-6 py-4">
                {product.countInStock}
              </td>
              <td className="px-6 py-4 flex items-center gap-x-4">
                <Link href={`/admin/products/${product._id}`}>
                  <EyeIcon className="w-6 h-6 text-primary-900" />
                </Link>
                <button>
                  <TrashIcon className="w-6 h-6 text-red-500" />
                </button>
                <Link href={`/admin/products/edit/${product._id}`}>
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
export default ProductsTable;
