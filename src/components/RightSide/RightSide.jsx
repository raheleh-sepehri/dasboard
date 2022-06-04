import CustomerReview from "../CustonerRevirw/CustomerReview";
import Updates from "../Updates/Updates";
import "./RightSide.css";
const RightSide = () => {
  return (
    <div className="right-side">
      <div className="right-side__updates">
        <h3>Updates</h3>
        <Updates />
      </div>
      <div className="right-side__customer">
        <h3>Customer Review </h3>
        <CustomerReview />
      </div>
    </div>
  );
};

export default RightSide;
