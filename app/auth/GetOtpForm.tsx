import React, { ChangeEventHandler } from "react";
import TextField from "../../components/common/TextField";

interface IProps {
  phoneNumber: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: Boolean,
}
const GetOtpForm = ({ phoneNumber, onChange, onSubmit, isLoading }: IProps) => {
  return (
    <div className="w-full flex items-center justify-center mt-20 px-6">
      <form
        onSubmit={onSubmit}
        className="w-full lg:w-[400px] flex flex-col gap-y-6"
      >
        <TextField
          label="شماره موبایل"
          name="phoneNumber"
          value={phoneNumber}
          onChange={onChange}
        />
        <button disabled={!!isLoading} className="btn--primary w-full rounded-xl disabled:opacity-50 disabled:cursor-not-allowed">
          ارسال کد تایید
        </button>
      </form>
    </div>
  );
};

export default GetOtpForm;
