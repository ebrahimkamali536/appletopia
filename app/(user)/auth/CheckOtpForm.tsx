import {
    ArrowRightIcon,
    ChevronLeftIcon,
    ShieldCheckIcon,
  } from "@heroicons/react/24/outline";
  import React, { Dispatch, SetStateAction } from "react";
  import OTPInput from "react-otp-input";
  
  interface IProps {
    onSubmit: any;
    isLoading: Boolean;
    otp: string;
    setOtp: Dispatch<SetStateAction<string>>;
    onBack: () => void
    phoneNumber: string;
    time: number;
    ResendOtpCode: any;
  }
  
  const CheckOtpForm = ({
    onSubmit,
    isLoading,
    otp,
    setOtp,
    phoneNumber,
    time,
    ResendOtpCode,
    onBack,
  }: IProps) => {
    function formatTime(seconds: number) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
    }
    return (
      <div className="w-full mt-10 px-6">
        <div className="w-full lg:w-[400px] flex justify-center flex-col mx-auto">
          <div className="flex flex-col gap-y-6 mb-6">
            <button
              onClick={onBack}
              className="flex items-center justify-start gap-x-1 text-secondary-300"
            >
              <ArrowRightIcon className="w-4 h-4" />
              بازگشت
            </button>
            <div className="flex items-center gap-x-1.5 px-4 py-2 rounded-md bg-success/10 text-success/90 w-full">
              <ShieldCheckIcon className="w-5 h-5" />
              کد تایید به شماره {phoneNumber} ارسال گردید
            </div>
          </div>
          <form
            onSubmit={onSubmit}
            className="w-full lg:w-[400px] flex flex-col gap-y-6"
          >
            <p className="font-bold">کد تایید را وارد کنید</p>
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span>-</span>}
              renderInput={(props) => <input {...props} />}
              inputStyle={{
                width: "2.5rem",
                padding: ".5rem 0.2rem",
                border: "1px solid #000000",
                borderRadius: "0.5rem",
              }}
              containerStyle="flex gap-x-2 justify-center"
            />
            <button
              disabled={!!isLoading}
              className="btn--primary w-full rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ارسال کد تایید
            </button>
          </form>
          <div className="flex items-center justify-between mt-6 text-secondary-600 font-medium">
            {time > 0 ? (
              <div className="flex items-center group gap-x-1.5">
                <ChevronLeftIcon className="w-5 h-5 group-hover:-translate-x-2 duration-300 transition-all" />
                <p className="border-b-2 border-primary-900">
                  {formatTime(time)} تا ارسال مجدد کد
                </p>
              </div>
            ) : (
              <button
                className="flex items-center group gap-x-1.5"
                onClick={ResendOtpCode}
              >
                <ChevronLeftIcon className="w-5 h-5 group-hover:-translate-x-2 duration-300 transition-all" />
                ارسال مجدد کد تایید؟
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default CheckOtpForm;
  