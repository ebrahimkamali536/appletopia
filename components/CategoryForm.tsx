import TextField from "./common/TextField";
const formItems = [
  { id: 1, title: "عنوان", value: "title" },
  { id: 2, title: "توضیحات", value: "description" },
  { id: 3, title: "عنوان انگلیسی", value: "englishTitle" },
];
const selectOptions = [
  {
    id: "post",
    title: "پست",
  },
  {
    id: "product",
    title: "محصول",
  },
  {
    id: "ticket",
    title: "تیکت",
  },
  {
    id: "comment",
    title: "نظر",
  },
];

const CategoryForm = ({
  categoryDataOnChange,
  categoryData,
  categoryType,
  setCategoryType,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit}>
      {formItems.map((item) => (
        <TextField
          key={item.id}
          label={item.title}
          value={categoryData[item.value]}
          onChange={categoryDataOnChange}
          name={item.value}
        />
      ))}
      <div className="mb-6">
        <label
          htmlFor="category"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          دسته بندی
        </label>
        <select
          value={categoryType}
          onChange={(e) => setCategoryType(e.target.value)}
          id="category"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          {selectOptions.map((item) => (
            <option key={item.id} value={item.id}>
              {item.title}
            </option>
          ))}
        </select>
      </div>

      <button className="bg-primary-900 w-full text-white py-2.5 rounded-xl">
        ویرایش دسته
      </button>
    </form>
  );
};
export default CategoryForm;
