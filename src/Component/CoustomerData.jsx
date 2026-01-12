import Issue from "./Issue";
import Status from "./Status";

const CustomerData = ({ fetchPromise }) => {
  return (
    <div className="   grid  grid-cols-12 gap-5">
      <Issue fetchPromise={fetchPromise}> </Issue>
      {/* Right side content */}
      <Status></Status>
    </div>
  );
};

export default CustomerData;
