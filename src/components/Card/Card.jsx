import { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Card.css";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";
const Card = (props) => {
  const [expended, setExopended] = useState(false);
  return (
    <AnimateSharedLayout>
      {expended ? (
        <ExpendedCard param={props} setExopended={() => setExopended(false)} />
      ) : (
        <CompactCard param={props} setExopended={() => setExopended(true)} />
      )}
    </AnimateSharedLayout>
  );
};
//CompactCard
function CompactCard({ param, setExopended }) {
  const Png = param.png;
  return (
    <motion.div
      className="compactCard"
      style={{
        background: param.color.background,
        boxShadow: param.color.boxShadow,
      }}
      onClick={setExopended}
      layoutId="expandAbleCard"
    >
      <div className="raidialBar">
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>
      <div className="detail">
        <Png />
        <span>${param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </motion.div>
  );
}
//ExpendedCard

function ExpendedCard({ param, setExopended }) {
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },
      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },
      fill: {
        color: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          show: true,
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:00:00.000Z",
          "2018-09-19T02:00:00.000Z",
          "2018-09-19T03:00:00.000Z",
          "2018-09-19T04:00:00.000Z",
          "2018-09-19T05:00:00.000Z",
          "2018-09-19T06:00:00.000Z",
        ],
      },
    },
  };
  return (
    <motion.div
      className="expendedCard"
      style={{
        background: param.color.background,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandAbleCard"
    >
      <div className="close-icon" onClick={setExopended}>
        <UilTimes />
      </div>
      <span>{param.title}</span>
      <div className="chartContainer">
        <Chart series={param.series} type="area" options={data.options} />
      </div>
      <span>last 24 hours</span>
    </motion.div>
  );
}
export default Card;
