"use client";
import { useGetCoupons } from "../../../../hook/useCoupons";
import CouponsTable from "./CouponsTable";

const Coupons = () => {
  const { data, isLoading } = useGetCoupons();
  const { coupons } = data || {};
  
  if (isLoading) return <h1>loading</h1>;

  return (
    <div>
      <CouponsTable copuons={coupons} />
    </div>
  );
};

export default Coupons;
