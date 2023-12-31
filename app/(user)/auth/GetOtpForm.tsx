import React, { ChangeEventHandler } from "react";
import TextField from "../../../components/common/TextField";

interface IProps {
  phoneNumber: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: Boolean;
  error: string;
}
const GetOtpForm = ({
  phoneNumber,
  onChange,
  onSubmit,
  isLoading,
  error,
}: IProps) => {
  return (
    <div className="w-full flex items-center justify-center mt-20 px-6">
      <div className="w-full bg-white py-10 px-6 rounded-xl shadow-md md:max-w-[400px]">
        <form
          onSubmit={onSubmit}
          className="w-full flex flex-col gap-y-6"
        >
          <div className="relative">
            <TextField
              label="شماره موبایل"
              name="phoneNumber"
              value={phoneNumber}
              onChange={onChange}
            />
            <span className="absolute text-xs right-1 text-error">{error}</span>
          </div>

          <button
            disabled={!!isLoading}
            className="btn--primary w-full rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ارسال کد تایید
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetOtpForm;
