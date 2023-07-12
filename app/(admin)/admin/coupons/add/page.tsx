"use client";
import { useState } from "react";
import CouponsForm from "../../../../../components/CouponsForm";
import { useAddCoupons } from "../../../../../hook/useCoupons";
import { useGetProducts } from "../../../../../hook/useProducts";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const AddCoupons = () => {
  const [formData, setFomrData] = useState({
    code: "",
    amount: "",
    usageLimit: "",
  });

  const [type, setType] = useState("percent");
  const [expireDate, setExpireDate] = useState(new Date());
  const [productIds, setProductIds] = useState([]);
  const router = useRouter();
  const { mutateAsync } = useAddCoupons();

  const { data, isLoading } = useGetProducts();

  const { products } = data || {};

  const couponsDataHandler = (e) => {
    const { name, value } = e.target;
    setFomrData({ ...formData, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

  };
  if (isLoading) return <h1>loading...</h1>;

  return (
    <div>
      <CouponsForm
        couponsData={formData}
        couponsDataOnChange={couponsDataHandler}
        type={type}
        setType={setType}
        products={products}
        setProductIds={setProductIds}
        expireDate={expireDate}
        setExpireDate={setExpireDate}
        onSubmit={submitHandler}
      />
    </div>
  );
};

export default AddCoupons;
