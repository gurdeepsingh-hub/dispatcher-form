import { useState } from "react";
import FormField from "../FormField";
import { useFormikContext } from "formik";
import CurrencyRateInput from "../CurrencyRateInput";
import { FaCircle, FaDotCircle, FaTruck } from "react-icons/fa";

export default function DispatchDetails() {
  const { setFieldValue, setFieldTouched, values } = useFormikContext<any>();

  const handleDispatchClear = () => {
    [
      "driver",
      "coDriver",
      "truckID",
      "trailerId",
      "carrier",
      "trailerType",
      "currency",
      "rate",
    ].map((item) => {
      setFieldValue(`dispatch.${item}`, "");
      setFieldTouched(`dispatch.${item}`, false);
    });
  };

  return (
    <div className="p-5 mb-4 space-y-4 border">
      <span className="flex justify-between ">
        <h2 className="mb-2 text-xl font-semibold">Dispatch Details</h2>
        <button
          type="button"
          className="bg-transparent "
          onClick={handleDispatchClear}
        >
          Clear
        </button>
      </span>
      <hr />
      <div className="relative flex justify-between w-full">
        <div className="relative flex-1 ">
          <FaCircle className="relative z-10 w-6 h-6 bg-white" />
        </div>
        <div className="relative flex-1 text-center">
          <FaTruck className="relative z-10 w-6 h-6 mx-auto bg-white" />
        </div>
        <div className="relative flex-1 text-center">
          <FaDotCircle className="relative z-10 w-6 h-6 ml-auto bg-white" />
        </div>
        <div className="absolute inset-0 flex items-center justify-between">
          <div className="w-full h-0.5 border-t-2 border-dashed border-gray-400"></div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="text-sm">
          <span className="text-base font-semibold">Pickup Details</span>
          <p>
            Shipper Name:{" "}
            {values &&
            values.pickups &&
            values.pickups[0] &&
            values.pickups[0].shipperName
              ? values.pickups[0].shipperName
              : ""}
          </p>
          <p>
            Date And Time:{" "}
            {values &&
            values.pickups &&
            values.pickups[0] &&
            values.pickups[0].appointmentDate
              ? values.pickups[0].appointmentDate
              : ""}
          </p>
          <p>
            Address:{" "}
            {values &&
            values.pickups &&
            values.pickups[0] &&
            values.pickups[0].pickupAddress
              ? values.pickups[0].pickupAddress
              : ""}
          </p>
        </div>
        <div className="text-sm text-right">
          <span className="text-base font-semibold">DropOff Details</span>
          <p>
            {values &&
            values.dropOffs &&
            values.dropOffs[0] &&
            values.dropOffs[0].receiverName
              ? values.dropOffs[0].receiverName
              : ""}{" "}
            : Shipper Name
          </p>
          <p>
            {values &&
            values.dropOffs &&
            values.dropOffs[0] &&
            values.dropOffs[0].appointmentDate
              ? values.dropOffs[0].appointmentDate
              : ""}{" "}
            : Date And Time
          </p>
          <p>
            {values &&
            values.dropOffs &&
            values.dropOffs[0] &&
            values.dropOffs[0].dropOffAddress
              ? values.dropOffs[0].dropOffAddress
              : ""}{" "}
            : Address
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center w-full gap-5">
        <FormField
          name="dispatch.driver"
          label="Driver Name"
          classname="w-full md:basis-1/3"
        />
        <FormField
          name="dispatch.coDriver"
          label="Co-Driver Name"
          classname="w-full md:basis-1/3"
        />
      </div>
      <div className="flex flex-wrap items-center w-full gap-5">
        <FormField
          name="dispatch.truckID"
          label="Truck ID"
          classname="w-full md:basis-1/3"
        />
        <FormField
          name="dispatch.trailerId"
          label="Trailer ID"
          classname="w-full md:basis-1/3"
        />
      </div>
      <div className="flex flex-wrap items-center w-full gap-5">
        <FormField
          name="dispatch.carrier"
          label="Carrier"
          classname="w-full md:basis-1/3"
        />
        <FormField
          name="dispatch.trailerType"
          label="Trailer Type"
          classname="w-full md:basis-1/3"
        />
        <CurrencyRateInput label="Rate" name="dispatch" />
      </div>
    </div>
  );
}
