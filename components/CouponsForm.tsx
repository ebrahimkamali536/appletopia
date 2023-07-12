import TextField from "./common/TextField";
import RadioInput from "./common/RadioInput";
import Select from "react-select";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
const formItems = [
  { id: 1, label: "کد", value: "code" },
  { id: 2, label: "مقدار", value: "amount" },
  { id: 3, label: "ظرفیت", value: "usageLimit" },
];
interface IProps {
  couponsDataOnChange: any;
  couponsData: any;
  type: any;
  setType: any;
  products: { title: string; _id: string }[];
  setProductIds: any;
  expireDate: any;
  setExpireDate: any;
  onSubmit: any;
}
const CouponsForm = ({
  couponsDataOnChange,
  couponsData,
  type,
  setType,
  products,
  setProductIds,
  expireDate,
  setExpireDate,
  onSubmit,
}: IProps) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          {formItems.map((item) => (
            <TextField
              key={item.id}
              label={item.label}
              value={couponsData[item.value]}
              onChange={couponsDataOnChange}
              name={item.value}
            />
          ))}
        </div>
        <div className="flex items-center mb-4 justify-between">
          <RadioInput
            id="percent-type"
            name="type"
            label="درصد"
            checked={type === "percent"}
            value="percent"
            onChange={(e) => setType(e.target.value)}
          />
          <RadioInput
            id="fixedProduct-type"
            name="type"
            label="ثابت"
            checked={type === "fixedProduct"}
            value="fixedProduct"
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <Select
          instanceId="products"
          isMulti
          onChange={setProductIds}
          options={products}
          getOptionLabel={(option) => option.title}
          getOptionValue={(option) => option._id}
        />
        <DatePicker
          inputClass="textField__input"
          value={expireDate}
          onChange={(date) => setExpireDate(date)}
          format="YYYY/MM/DD"
          calendar={persian}
          locale={persian_fa}
        />
        <button
          type="submit"
          className="bg-primary-900 w-full py-2.5 rounded-md text-white"
        >
          تایید
        </button>
      </form>
    </div>
  );
};

export default CouponsForm;
