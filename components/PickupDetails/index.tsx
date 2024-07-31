import { useState } from "react";
import { useFormikContext, FieldArray } from "formik";
import FormField from "../FormField";
import { FaChevronDown, FaChevronUp, FaPlusCircle } from "react-icons/fa";

export default function PickupDetails() {
  const { setFieldValue, setFieldTouched, values } = useFormikContext<any>();
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [expanded, setExpanded] = useState(
    values && values.pickups ? values.pickups.length - 1 : 0
  );
  const handleToggleAdvanced = () => {
    setShowAdvanced((prev) => !prev);
  };

  const handlePickupClear = (index: number) => {
    [
      "appointmentDate",
      "appointmentTime",
      "shipperName",
      "shipperPhone",
      "pickupAddress",
      "pickupCity",
      "pickupPostalCode",
      "pickupNumber",
      "contactPerson",
      "commodity",
      "temperature",
      "skids",
      "cases",
      "weights",
    ].forEach((item) => {
      setFieldValue(`pickups.${index}.${item}`, "");
      setFieldTouched(`pickups.${index}.${item}`, false);
    });
  };

  return (
    <FieldArray name="pickups">
      {({ push, remove }) => (
        <div className="space-y-4">
          {values &&
            values.pickups &&
            values.pickups.map((pickup: any, index: number) => {
              return index === expanded ? (
                <div key={index} className="p-5 mb-4 space-y-4 border">
                  <span className="flex justify-between">
                    <h2 className="mb-2 text-xl font-semibold">
                      Pickup Details {index + 1}
                    </h2>
                    <button
                      type="button"
                      className="bg-transparent"
                      onClick={() => handlePickupClear(index)}
                    >
                      Clear
                    </button>
                  </span>
                  <hr />
                  <div className="flex flex-wrap items-center w-full gap-5">
                    <FormField
                      name={`pickups.${index}.appointmentDate`}
                      type="date"
                      label="Appointment Date"
                      classname="basis-1/3"
                    />
                    <FormField
                      name={`pickups.${index}.appointmentTime`}
                      type="time"
                      label="Appointment Time"
                      classname="basis-1/3"
                    />
                  </div>
                  <div className="flex flex-wrap items-center w-full gap-5">
                    <FormField
                      name={`pickups.${index}.shipperName`}
                      label="Shipper Name"
                      classname="basis-1/3"
                    />
                    <FormField
                      name={`pickups.${index}.shipperPhone`}
                      label="Shipper Phone"
                      classname="basis-1/3"
                    />
                  </div>
                  <FormField
                    name={`pickups.${index}.pickupAddress`}
                    label="Pickup Address"
                    classname="w-full"
                  />
                  <div className="flex flex-wrap items-center w-full gap-5">
                    <FormField
                      name={`pickups.${index}.pickupCity`}
                      label="Pickup City"
                      classname="basis-1/3"
                    />
                    <FormField
                      name={`pickups.${index}.pickupPostalCode`}
                      label="Pickup Postal Code"
                      classname="basis-1/3"
                    />
                  </div>
                  <div className="flex flex-wrap items-center w-full gap-5">
                    <FormField
                      name={`pickups.${index}.pickupNumber`}
                      label="Pickup Number"
                      classname="basis-1/3"
                    />
                    <FormField
                      name={`pickups.${index}.contactPerson`}
                      label="Contact Person"
                      classname="basis-1/3"
                    />
                  </div>

                  {/* Advanced Settings Accordion */}
                  <div>
                    <button
                      type="button"
                      onClick={handleToggleAdvanced}
                      className="flex justify-end w-full text-blue-500"
                    >
                      {showAdvanced ? (
                        <p className="flex items-center gap-2">
                          Hide Advanced Settings
                          <FaChevronUp />
                        </p>
                      ) : (
                        <p className="flex items-end gap-2">
                          Show Advanced Settings <FaChevronDown />
                        </p>
                      )}
                    </button>
                    {showAdvanced && (
                      <div className="mt-4 space-y-4">
                        <div className="flex flex-wrap items-center w-full gap-5">
                          <FormField
                            name={`pickups.${index}.commodity`}
                            label="Commodity"
                            classname="w-full"
                          />
                          <FormField
                            name={`pickups.${index}.temperature`}
                            label="Temperature"
                            classname="w-full"
                          />
                          <FormField
                            name={`pickups.${index}.skids`}
                            label="Skids"
                            classname="w-full"
                          />
                        </div>
                        <div className="flex flex-wrap items-center w-full gap-5">
                          <FormField
                            name={`pickups.${index}.cases`}
                            label="Cases"
                            classname="w-full"
                          />
                          <FormField
                            name={`pickups.${index}.weights`}
                            label="Weights"
                            classname="w-full"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div
                  key={index}
                  onClick={() => setExpanded(index)}
                  className="flex items-center justify-between w-full gap-2 px-3 py-2 text-base border"
                >
                  <p>
                    {pickup.shipperName ? pickup.shipperName : "Reciver Name"}
                  </p>
                  <p>
                    {pickup.appointmentDate ? pickup.appointmentDate : "Date"}
                  </p>
                  <p>
                    {pickup.appointmentTime ? pickup.appointmentTime : "Time"}
                  </p>
                  <p>{pickup.receiverPhone ? pickup.receiverPhone : "Phone"}</p>
                  <button
                    type="button"
                    className="text-sm text-gray-500"
                    onClick={(e) => {
                      e.stopPropagation();
                      remove(index);
                    }}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          <button
            type="button"
            onClick={() =>
              push({
                appointmentDate: "",
                appointmentTime: "",
                shipperName: "",
                shipperPhone: "",
                pickupAddress: "",
                pickupCity: "",
                pickupPostalCode: "",
                pickupNumber: "",
                contactPerson: "",
                commodity: "",
                temperature: "",
                skids: "",
                cases: "",
                weights: "",
              })
            }
            className="flex items-center justify-end w-full gap-3 text-gray-700"
          >
            <FaPlusCircle className="w-6 h-6" />
            Add Another Pickup
          </button>
        </div>
      )}
    </FieldArray>
  );
}
