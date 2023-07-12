import { toLocalDateStringShort } from "../../../../utils/toLocalDateStringShort";
import { toPersianNumber } from "../../../../utils/toPersianNumber";

const PaymentsTable = ({ payments }) => {
  return (
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
              کاربر
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
          {payments?.map((payment, index) => (
            <tr key={payment._id} className="bg-white border-b">
              <td className="px-6 py-4">{index}</td>
              <td className="px-6 py-4">{payment.invoiceNumber}</td>
              <td className="px-6 py-4 max-w-[280px] whitespace-nowrap truncate">
                {payment.description}
              </td>
              <td className="px-6 py-4">
                <div className="flex flex-col ga[-y-1 whitespace-nowrap text-sm">
                  <span>{payment.user.name}</span>
                  <span>{payment.user.email}</span>
                  <span className="font-bold">{payment.user.phoneNumber}</span>
                </div>
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
  );
};
export default PaymentsTable;
