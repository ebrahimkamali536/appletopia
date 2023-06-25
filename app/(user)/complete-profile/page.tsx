"use client";
import React, { useState } from "react";
import TextField from "../../../components/common/TextField";
import { useMutation } from "@tanstack/react-query";
import { completeUserProfile } from "../../../services/authServices";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const CompleteProfile = () => {
  const [input, setInput] = useState({ name: "", email: "" });
  const router = useRouter();
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prevState) => ({ ...prevState, [name]: value }));
  };
  const { mutateAsync } = useMutation({
    mutationFn: completeUserProfile,
  });
  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { user, message } = await mutateAsync({
        name: input.name,
        email: input.email,
      });
      toast.success(message);
      window.location.href = "/";
    } catch (error: any) {
      let message = "Unknown Error";
      if (error instanceof Error) message = error.message;
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className="w-full flex items-center justify-center mt-20 px-6">
      <div className="w-full bg-white py-10 px-6 rounded-xl shadow-md md:max-w-[400px]">
        <form onSubmit={submitHandler}>
          <TextField
            label="نام و نام خانوادگی"
            value={input.name}
            onChange={inputHandler}
            name="name"
          />
          <TextField
            label="ایمیل"
            value={input.email}
            onChange={inputHandler}
            name="email"
          />
          <button className="btn--primary w-full rounded-xl disabled:opacity-50 disabled:cursor-not-allowed mt-4">
            ارسال کد تایید
          </button>
        </form>
      </div>
    </div>
  );
};

export default CompleteProfile;
