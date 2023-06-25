"use client";
import React, { useEffect, useState } from "react";
import GetOtpForm from "./GetOtpForm";
import { useMutation } from "@tanstack/react-query";
import { checkOtp, getOtp } from "../../../services/authServices";
import { toast } from "react-hot-toast";
import CheckOtpForm from "./CheckOtpForm";
import { useRouter } from "next/navigation";

const RESEND_TIME = 90;

const Auth = () => {
  const [otpCase, setOtpCase] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [time, setTime] = useState(RESEND_TIME);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();
  const { isLoading, mutateAsync: getOtpMutateAsync } = useMutation({
    mutationFn: getOtp,
  });
  const { mutateAsync: checkOtpMutateAsync } = useMutation({
    mutationFn: checkOtp,
  });
  const phoneNumberHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };
  const sendOtpHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { message } = await getOtpMutateAsync(phoneNumber);
      toast.success(message);
      setOtpCase(2);
      setTime(RESEND_TIME);
    } catch (error: any) {
      console.log(error);
    }
  };

  const checkOtpHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { user, message } = await checkOtpMutateAsync({ phoneNumber, otp });
      toast.success(message);
      if (user.isActive) {
        router.push("/");
      } else {
        router.push("/complete-profile");
      }
    } catch (error: any) {
      console.log(error);
    }
  };
  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  const renderOtpComponent = () => {
    switch (otpCase) {
      case 1:
        return (
          <GetOtpForm
            phoneNumber={phoneNumber}
            onChange={phoneNumberHandler}
            onSubmit={sendOtpHandler}
            isLoading={isLoading}
            error={error}
          />
        );
      case 2:
        return (
          <CheckOtpForm
            onBack={() => setOtpCase((step) => step - 1)}
            onSubmit={checkOtpHandler}
            isLoading={false}
            otp={otp}
            setOtp={setOtp}
            phoneNumber={phoneNumber}
            time={time}
            ResendOtpCode={sendOtpHandler}
          />
        );
    }
  };
  return <div className="">{renderOtpComponent()}</div>;
};

export default Auth;
