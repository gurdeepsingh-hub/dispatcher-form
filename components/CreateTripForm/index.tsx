import { Formik, Form } from "formik";
import * as Yup from "yup";
import TripDetails from "./TripDetails";
import CustomerDetails from "./CustomerDetails";
import { useState } from "react";
import FormPage from "./FormPage";

const validationSchema = Yup.object().shape({
  tripDetails: Yup.object().shape({
    date: Yup.date().required("Date is required"),
    orderNumber: Yup.string().required("Order number is required"),
    currency: Yup.string()
      .oneOf(["CAD", "USD"], "Invalid currency")
      .required("Currency is required"),
    rate: Yup.number()
      .typeError("Only numbers are allowed")
      .positive("Rate must be positive")
      .required("Rate is required"),
    delivered: Yup.boolean(),
  }),
  customer: Yup.object().shape({
    name: Yup.string().required("Customer name is required"),
    phone: Yup.number()
      .typeError("Only numbers are allowed")
      .max(9999999999, "Max 10 digits")
      .required("Customer phone is required"),
    address: Yup.string().required("Customer address is required"),
    address2: Yup.string(), // Optional field
    city: Yup.string().required("Customer city is required"),
    postalCode: Yup.number()
      .typeError("Only numbers are allowed")
      .required("Customer postal code is required"),
  }),
  pickup: Yup.array().of(
    Yup.object().shape({
      appointmentDate: Yup.date().required("Appointment date is required"),
      appointmentTime: Yup.string(),
      shipperName: Yup.string().required("Shipper name is required"),
      shipperPhone: Yup.string(),
      pickupAddress: Yup.string().required("Pickup address is required"),
      pickupCity: Yup.string().required("Pickup city is required"),
      pickupPostalCode: Yup.number()
        .typeError("Only numbers are allowed")
        .required("Pickup postal code is required"),
      pickupNumber: Yup.string(),
      contactPerson: Yup.string(),
    })
  ),
  dropOff: Yup.array().of(
    Yup.object().shape({
      appointmentDate: Yup.date().required("Appointment date is required"),
      appointmentTime: Yup.string().required("Appointment time is required"),
      receiverName: Yup.string().required("Receiver name is required"),
      receiverPhone: Yup.string().required("Receiver phone is required"),
      dropOffAddress: Yup.string().required("Drop-off address is required"),
      dropOffCity: Yup.string().required("Drop-off city is required"),
      dropOffPostalCode: Yup.number()
        .typeError("Only numbers are allowed")
        .required("Drop-off postal code is required"),
    })
  ),
  dispatch: Yup.object().shape({
    driver: Yup.string().required("Driver name is required"),
    coDriver: Yup.string(),
    truckID: Yup.string().required("Truck ID is required"),
    trailerId: Yup.string().required("Trailer ID is required"),
    carrier: Yup.string().required("Carrier is required"),
    trailerType: Yup.string().required("Trailer type is required"),
    currency: Yup.string()
      .oneOf(["CAD", "USD"], "Invalid currency")
      .required("Currency is required"),
    rate: Yup.number()
      .typeError("Only numbers are allowed")
      .positive("Rate must be positive")
      .required("Rate is required"),
  }),
});

export default function CreateTripForm() {
  const [page, setPage] = useState(1);

  const handlePageChange = (direction: string) => {
    setPage((prevPage) => {
      if (direction === "next") return Math.min(prevPage + 1, 3);
      else return Math.max(prevPage - 1, 1);
    });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md ">
      <h1 className="mb-4 text-2xl font-bold">Create a Trip</h1>
      <Formik
        initialValues={{
          tripDetails: {
            date: "",
            orderNumber: "",
            currency: "CAD",
            rate: "",
            delivered: false,
          },
          customer: {
            name: "",
            phone: "",
            address: "",
            address2: "",
            city: "",
            postalCode: "",
          },
          pickups: [
            {
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
              temprature: "",
              skids: "",
              cases: "",
              weights: "",
            },
          ],
          dropOffs: [
            {
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
            },
          ],
          dispatch: {
            driver: "",
            coDriver: "",
            truckID: "",
            trailerId: "",
            carrier: "",
            trailerType: "",
            currency: "CAD",
            rate: "",
          },
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Form submitted:", values);
        }}
      >
        {({ handleSubmit, values }) => (
          <Form onSubmit={handleSubmit}>
            <TripDetails />
            <CustomerDetails />
            <FormPage page={page} values={values} />

            <div className="relative flex justify-between mt-6">
              {page > 1 && (
                <button
                  type="button"
                  onClick={() => handlePageChange("prev")}
                  className="px-4 py-2 text-white transition bg-gray-500 rounded-md shadow hover:bg-gray-600"
                >
                  Previous
                </button>
              )}
              <div className="flex gap-2 mx-auto">
                {[1, 2, 3].map((item) => (
                  <p
                    key={item}
                    className={`${
                      page === item
                        ? "scale-150 underline text-blue-600"
                        : "text-black"
                    }`}
                  >
                    {item}
                  </p>
                ))}
              </div>

              {page < 3 ? (
                <button
                  type="button"
                  onClick={() => handlePageChange("next")}
                  className="px-4 py-2 text-white transition bg-indigo-600 rounded-md shadow hover:bg-indigo-700"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-4 py-2 text-white transition bg-indigo-600 rounded-md shadow hover:bg-indigo-700"
                >
                  Submit
                </button>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
