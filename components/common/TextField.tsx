import React, { ChangeEventHandler } from "react";

interface IProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  label: string;
  name: string;
}

const TextField = ({ label, value, onChange, name }: IProps) => {
  return (
    <div className="flex flex-col gap-y-2 mb-2">
      <label>{label}</label>
      <input
        type="text"
        onChange={onChange}
        value={value}
        name={name}
        id={name}
        className="textField__input"
      />
    </div>
  );
};

export default TextField;
