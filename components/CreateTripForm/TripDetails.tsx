"use client";
import { useField, useFormikContext } from "formik";
import InputField from "../InputField";
import { number } from "yup";
import CurrencyRateInput from "../CurrencyRateInput";

export default function TripDetails() {
  const { setFieldValue, setFieldTouched } = useFormikContext();
  const [currencyField, currencyMeta, currencyHelpers] = useField(
    "tripDetails.currency"
  );
  const [rateField, rateMeta] = useField("tripDetails.rate");

  const handleCurrencyChange = (value: string) => {
    // Use Formik's setValue helper to update the value correctly
    currencyHelpers.setValue(value);
  };

  const handleClear = () => {
    setFieldValue("tripDetails.date", "");
    setFieldValue("tripDetails.orderNumber", "");
    setFieldValue("tripDetails.currency", "CAD");
    setFieldValue("tripDetails.rate", "");
    // Optionally reset touched fields
    setFieldTouched("tripDetails.date", false);
    setFieldTouched("tripDetails.orderNumber", false);
    setFieldTouched("tripDetails.currency", false);
    setFieldTouched("tripDetails.rate", false);
  };
  return (
    <div className="mb-6 px-10 py-5 bg-[#f5f5f0]">
      <span className="flex justify-between">
        <h2 className="mb-2 text-xl font-semibold">Trip Details</h2>
        <button type="button" className="bg-transparent " onClick={handleClear}>
          Clear
        </button>
      </span>
      <div className="grid items-center grid-cols-3 gap-4">
        <InputField
          label="Date *"
          name="tripDetails.date"
          type="date"
          required
          icon={<span className="mr-2">📅</span>}
        />
        <InputField
          label="Order Number *"
          name="tripDetails.orderNumber"
          type="text"
          placeholder="Order Number"
          required
        />
        <CurrencyRateInput label="Rate *" name="tripDetails" />
        <div className="flex items-center col-span-3">
          <input
            type="checkbox"
            name="tripDetails.delivered"
            id="isDelivered"
            className="w-5 h-5 text-indigo-600 form-checkbox"
          />
          <label htmlFor="isDelivered" className="ml-2 text-sm font-medium">
            Is this load already delivered?
          </label>
        </div>
      </div>
    </div>
  );
}
