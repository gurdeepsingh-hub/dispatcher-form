// components/InputField.js
import { useField } from "formik";

export default function InputField({ label, ...props }: any) {
  const [field, meta] = useField(props);

  return (
    <div className="col-span-1">
      <label className="block mb-1 text-sm font-medium">{label}</label>
      <input
        {...field}
        {...props}
        className={`mt-1 block w-full p-2 border  shadow-sm ${
          meta.touched && meta.error ? "border-red-500" : "border-gray-300"
        } focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
      />
      {meta.touched && meta.error && (
        <div className="text-sm text-red-500">{meta.error}</div>
      )}
    </div>
  );
}
