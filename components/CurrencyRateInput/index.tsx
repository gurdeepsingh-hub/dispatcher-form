import { useField } from "formik";

const CurrencyRateInput = ({
  name,
  label,
}: {
  name: string;
  label: string;
}) => {
  const [currencyField, currencyMeta, currencyHelpers] = useField(
    `${name}.currency`
  );
  const [rateField, rateMeta] = useField(`${name}.rate`);

  const handleCurrencyChange = (value: string) => {
    currencyHelpers.setValue(value);
  };

  return (
    <div className="flex flex-col col-span-1">
      <label className="block mb-1 text-sm font-medium">{label}</label>
      <div className="flex">
        <button
          type="button"
          className={`p-2 border shadow-sm ${
            currencyField.value === "CAD"
              ? "bg-blue-600 text-white"
              : "bg-gray-100"
          }`}
          onClick={() => handleCurrencyChange("CAD")}
        >
          C$
        </button>
        <button
          type="button"
          className={`p-2 border shadow-sm ${
            currencyField.value === "USD"
              ? "bg-blue-600 text-white"
              : "bg-gray-100"
          }`}
          onClick={() => handleCurrencyChange("USD")}
        >
          US$
        </button>
        {currencyMeta.touched && currencyMeta.error && (
          <div className="text-sm text-red-500">{currencyMeta.error}</div>
        )}
        <div className="col-span-1">
          <input
            {...rateField}
            className={`block w-full h-full p-2 border  shadow-sm ${
              rateMeta.touched && rateMeta.error
                ? "border-red-500"
                : "border-gray-300"
            } focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
          />
          {rateMeta.touched && rateMeta.error && (
            <div className="text-sm text-red-500">{rateMeta.error}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CurrencyRateInput;
