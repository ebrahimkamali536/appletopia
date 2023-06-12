"use client";

import React, { useState } from "react";
import TextField from "../../components/common/TextField";
import { useMutation } from "@tanstack/react-query";
import { completeUserProfile } from "../../services/authServices";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const CompleteProfile = () => {
  const [input, setInput] = useState({ name: "", email: "" });
  const router = useRouter()
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
      router.push("/")
    } catch (error: any) {
      let message = "Unknown Error";
      if (error instanceof Error) message = error.message;
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div>
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
        <button className="btn--primary w-full rounded-xl disabled:opacity-50 disabled:cursor-not-allowed">
          ارسال کد تایید
        </button>
      </form>
    </div>
  );
};

export default CompleteProfile;
