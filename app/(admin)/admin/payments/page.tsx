"use client";

import { useGetPayments } from "../../../../hook/usePayment";
import PaymentsTable from "./PaymentsTable";

const Payments = () => {
  const { data, isLoading } = useGetPayments();
  const { payments } = data || {};

  if (isLoading) return <h1>loading...</h1>;

  return (
    <div className="px-6 py-10">
      <div className="mb-8">
        <h1 className="font-bold text-2xl">لیست سفارشات</h1>
      </div>
      <PaymentsTable payments={payments} />
    </div>
  );
};

export default Payments;
