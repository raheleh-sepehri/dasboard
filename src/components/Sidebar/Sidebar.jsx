import "./Sidebar.css";
import Logo from "../../imgs/logo.png";
import { sidebarData } from "../../Data/Data.js";
import { UilSignOutAlt, UilBars } from "@iconscout/react-unicons";
import { useState } from "react";
import { motion } from "framer-motion";
const Sidebare = () => {
  const [selected, setSelected] = useState(0);
  const clickHandler = (index) => {
    console.log(index);
    setSelected(index);
  };
  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };
  const [expended, setExpended] = useState(false);
  return (
    <>
      <div
        className="bars"
        style={expended ? { left: "53%" } : { left: "5%" }}
        onClick={() => setExpended(!expended)}
      >
        <UilBars />
      </div>
      <motion.div
        className="sidebr"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 && `${expended}`}
      >
        {/* logo */}
        <div className="logo">
          <img src={Logo} alt="logo" />
          <span>
            Sh<span>o</span>ps
          </span>
        </div>
        {/* menu */}
        <div className="menu">
          <ul>
            {sidebarData.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={() => clickHandler(index)}
                  className={selected === index ? "active" : ""}
                >
                  <span>
                    <item.icon />
                  </span>
                  <span>{item.heading}</span>
                </li>
              );
            })}
            <li onClick={() => setExpended(!expended)}>
              <UilSignOutAlt />
            </li>
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebare;
