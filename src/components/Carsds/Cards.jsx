import "./Cards.css";
import Card from "../Card/Card";
import { cardsData } from "../../Data/Data";
const Cards = () => {
  return (
    <div className="cards">
      {cardsData.map((card, index) => {
        return (
          <div key={index} className="parent-container">
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
