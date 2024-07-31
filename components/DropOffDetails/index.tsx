import { useState } from "react";
import { useFormikContext, FieldArray } from "formik";
import FormField from "../FormField";
import { FaChevronDown, FaChevronUp, FaPlusCircle } from "react-icons/fa";
import { DiVim } from "react-icons/di";

export default function DropOffDetails() {
  const { setFieldValue, setFieldTouched, values } = useFormikContext();
  const [showAdvanced, setShowAdvanced] = useState(false);

  const [expanded, setExpanded] = useState(
    values && values.dropOffs ? values.dropOffs.length - 1 : 0
  );

  const handleToggleAdvanced = () => {
    setShowAdvanced((prev) => !prev);
  };

  const handleDropOffClear = (index) => {
    [
      "appointmentDate",
      "appointmentTime",
      "receiverName",
      "receiverPhone",
      "dropOffAddress",
      "dropOffCity",
      "dropOffPostalCode",
      "reference",
      "contactPerson",
      "commodity",
      "skids",
      "cases",
      "weights",
    ].forEach((item) => {
      setFieldValue(`dropOffs.${index}.${item}`, "");
      setFieldTouched(`dropOffs.${index}.${item}`, false);
    });
  };

  return (
    <FieldArray name="dropOffs">
      {({ push, remove }) => (
        <div className="space-y-4">
          {values &&
            values.dropOffs &&
            values.dropOffs.map((dropOff, index) => {
              return index === expanded ? (
                <div key={index} className="p-5 mb-4 space-y-4 border">
                  <span className="flex justify-between">
                    <h2 className="mb-2 text-xl font-semibold">
                      Drop-Off Details {index + 1}
                    </h2>
                    <div>
                      <button
                        type="button"
                        className="bg-transparent"
                        onClick={() => handleDropOffClear(index)}
                      >
                        Clear
                      </button>
                    </div>
                  </span>
                  <hr />
                  <div className="flex flex-wrap items-center w-full gap-5">
                    <FormField
                      name={`dropOffs.${index}.appointmentDate`}
                      type="date"
                      label="Appointment Date"
                    />
                    <FormField
                      name={`dropOffs.${index}.appointmentTime`}
                      type="time"
                      label="Appointment Time"
                    />
                  </div>
                  <div className="flex flex-wrap items-center w-full gap-5">
                    <FormField
                      name={`dropOffs.${index}.receiverName`}
                      label="Receiver Name"
                    />
                    <FormField
                      name={`dropOffs.${index}.receiverPhone`}
                      label="Receiver Phone"
                    />
                  </div>
                  <FormField
                    name={`dropOffs.${index}.dropOffAddress`}
                    label="Drop-Off Address"
                    classname="w-full"
                  />
                  <div className="flex flex-wrap items-center w-full gap-5">
                    <FormField
                      name={`dropOffs.${index}.dropOffCity`}
                      label="Drop-Off City"
                    />
                    <FormField
                      name={`dropOffs.${index}.dropOffPostalCode`}
                      label="Drop-Off Postal Code"
                    />
                  </div>
                  <div className="flex flex-wrap items-center w-full gap-5">
                    <FormField
                      name={`dropOffs.${index}.reference`}
                      label="Reference"
                      classname="basis-1/3"
                    />
                    <FormField
                      name={`dropOffs.${index}.contactPerson`}
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
                            name={`dropOffs.${index}.commodity`}
                            label="Commodity"
                            classname="w-full"
                          />
                          <FormField
                            name={`dropOffs.${index}.skids`}
                            label="Skids"
                            classname="w-full"
                          />
                        </div>
                        <div className="flex flex-wrap items-center w-full gap-5">
                          <FormField
                            name={`dropOffs.${index}.cases`}
                            label="Cases"
                            classname="w-full"
                          />
                          <FormField
                            name={`dropOffs.${index}.weights`}
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
                    {dropOff.shipperName ? dropOff.shipperName : "Reciver Name"}
                  </p>
                  <p>
                    {dropOff.appointmentDate ? dropOff.appointmentDate : "Date"}
                  </p>
                  <p>
                    {dropOff.appointmentTime ? dropOff.appointmentTime : "Time"}
                  </p>
                  <p>
                    {dropOff.receiverPhone ? dropOff.receiverPhone : "Phone"}
                  </p>
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
                receiverName: "",
                receiverPhone: "",
                dropOffAddress: "",
                dropOffCity: "",
                dropOffPostalCode: "",
                reference: "",
                contactPerson: "",
                commodity: "",
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
