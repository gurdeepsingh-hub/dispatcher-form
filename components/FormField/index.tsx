import { ErrorMessage, Field } from "formik";

const FormField = ({
  name,
  type = "text",
  label,
  as = "input",
  classname,
  ...props
}: {
  name: string;
  type?: string;
  label: string;
  as?: string;
  classname?: string;
}) => {
  return (
    <div className="space-y-2">
      <label className="block">
        <span className="text-gray-700">{label}</span>
        <Field
          name={name}
          type={type}
          as={as}
          className={`${classname} mt-1 block p-2 border border-gray-300 bg-gray-100 shadow-sm`}
          {...props}
        />
        <ErrorMessage
          name={name}
          component="div"
          className="mt-1 text-sm text-red-600"
        />
      </label>
    </div>
  );
};

export default FormField;
