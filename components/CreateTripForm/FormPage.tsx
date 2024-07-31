// components/FormPage.js

import PickupDetails from "../PickupDetails";
import DropOffDetails from "../DropOffDetails";
import DispatchDetails from "../DispatchDetails";

const FormPage = ({ page, values }: { page: number; values: any }) => {
  return (
    <div className="space-y-4">
      {page === 1 && <PickupDetails />}

      {page === 2 && <DropOffDetails />}

      {page === 3 && <DispatchDetails />}
    </div>
  );
};

export default FormPage;
