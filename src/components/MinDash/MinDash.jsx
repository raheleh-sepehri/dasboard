import "./MinDash.css";
import Cards from "../Carsds/Cards";
import Table from "../Table/Table";

const MinDash = () => {
  return (
    <div className="minDash">
      <h1>Dashboard</h1>
      <Cards />

      <Table />
    </div>
  );
};

export default MinDash;
