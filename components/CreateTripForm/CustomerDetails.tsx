"use client";
import { useField, useFormikContext } from "formik";
import InputField from "../InputField"; // Ensure you have this component or create it if not

export default function CustomerDetails() {
  const { setFieldValue, setFieldTouched } = useFormikContext();
  const [nameField, nameMeta] = useField("customer.name");
  const [phoneField, phoneMeta] = useField("customer.phone");
  const [addressField, addressMeta] = useField("customer.address");
  const [address2Field, address2Meta] = useField("customer.address2");
  const [cityField, cityMeta] = useField("customer.city");
  const [postalCodeField, postalCodeMeta] = useField("customer.postalCode");

  const handleClear = () => {
    setFieldValue("customer.name", "");
    setFieldValue("customer.phone", "");
    setFieldValue("customer.address", "");
    setFieldValue("customer.address2", "");
    setFieldValue("customer.city", "");
    setFieldValue("customer.postalCode", "");
    // Optionally reset touched fields
    setFieldTouched("customer.name", false);
    setFieldTouched("customer.phone", false);
    setFieldTouched("customer.address", false);
    setFieldTouched("customer.address2", false);
    setFieldTouched("customer.city", false);
    setFieldTouched("customer.postalCode", false);
  };
  return (
    <div className="mt-20 mb-20">
      <span className="flex justify-between">
        <h2 className="mb-2 text-xl font-semibold">Customer Details</h2>
        <button type="button" className="bg-transparent " onClick={handleClear}>
          Clear
        </button>
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1">
          <InputField
            label="Name"
            name="customer.name"
            type="text"
            placeholder="Name"
            meta={nameMeta}
            field={nameField}
          />
        </div>
        <div className="col-span-1">
          <InputField
            label="Phone"
            name="customer.phone"
            type="tel"
            placeholder="Phone"
            meta={phoneMeta}
            field={phoneField}
          />
        </div>
        <div className="col-span-1 md:col-span-2">
          <InputField
            label="Address"
            name="customer.address"
            type="text"
            placeholder="Address"
            meta={addressMeta}
            field={addressField}
          />
        </div>
        <div className="col-span-1 md:col-span-2">
          <InputField
            label="Address 2 (Optional)"
            name="customer.address2"
            type="text"
            placeholder="Address 2"
            meta={address2Meta}
            field={address2Field}
          />
        </div>
        <div className="col-span-1">
          <InputField
            label="City"
            name="customer.city"
            type="text"
            placeholder="City"
            meta={cityMeta}
            field={cityField}
          />
        </div>
        <div className="col-span-1">
          <InputField
            label="Postal Code"
            name="customer.postalCode"
            type="text"
            placeholder="Postal Code"
            meta={postalCodeMeta}
            field={postalCodeField}
          />
        </div>
      </div>
    </div>
  );
}
