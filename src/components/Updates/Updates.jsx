import { updatsData } from "../../Data/Data";
import "./Updates.css";
const Updates = () => {
  return (
    <div className="Updates">
      {updatsData.map((item) => {
        return (
          <div className="update">
            <img src={item.img} alt="" />
            <div className="noti">
              <div className="update-detail">
                <span>{item.name}</span>
                <span>{item.noti}</span>
                <span>{item.time}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Updates;
