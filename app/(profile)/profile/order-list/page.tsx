"use client";
import { useGetUser } from "../../../../hook/useAuth";
import { toLocalDateStringShort } from "../../../../utils/toLocalDateStringShort";
import { toPersianNumber } from "../../../../utils/toPersianNumber";

const OrderList = () => {
  const { data, isLoading } = useGetUser();
  const { payments, user } = data || {};
  console.log(payments);
  if (isLoading) return <h1>loading</h1>;

  return (
    <div className="mt-6 md:mt-8 px-6 md:px-8">
      <h1 className="font-bold text-xl mb-6">
        لیست سفارشات <span className="text-primary-900">{user.name}</span>
      </h1>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-right text-gray-500">
          <thead className="text-xs text-gray-700 bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                شماره فاکتور
              </th>
              <th scope="col" className="px-6 py-3">
                توضیحات
              </th>
              <th scope="col" className="px-6 py-3">
                محصولات
              </th>
              <th scope="col" className="px-6 py-3">
                مبلغ
              </th>
              <th scope="col" className="px-6 py-3">
                تاریخ
              </th>
              <th scope="col" className="px-6 py-3">
                موفقیت
              </th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={payment._id} className="bg-white border-b">
                <td className="px-6 py-4">{index}</td>
                <td className="px-6 py-4">{payment.invoiceNumber}</td>
                <td className="px-6 py-4 max-w-[280px] whitespace-nowrap truncate">
                  {payment.description}
                </td>
                <td className="px-6 py-4 flex flex-col gap-y-1.5">
                  {payment.cart.productDetail.map((product) => (
                    <span
                      key={product._id}
                      className="whitespace-nowrap inline-block bg-primary-900 text-white py-1 px-2 text-xs font-medium w-auto rounded-xl"
                    >
                      {product.title}
                    </span>
                  ))}
                </td>
                <td className="px-6 py-4">{toPersianNumber(payment.amount)}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {toLocalDateStringShort(payment.createdAt)}
                </td>
                <td className="px-6 py-4">
                  {payment.status === "COMPLETED" ? (
                    <span className="bg-green-500 text-white px-2 py-0.5 rounded-lg">
                      موفق
                    </span>
                  ) : (
                    <span className="bg-green-red text-white px-2 py-0.5 rounded-lg">
                      ناموفق
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default OrderList;
