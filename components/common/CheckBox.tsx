import React from "react";
interface IProps {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}
const CheckBox = ({ id, name, label, value, onChange, checked }: IProps) => {
  return (
    <div className="flex items-center gap-x-2 mb-4 text-secondary-600 font-bold">
      <input
        onChange={onChange}
        id={id}
        type="checkbox"
        value={value}
        name={name}
        checked={checked}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
      />
      <label
        htmlFor={id}
        className="text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
