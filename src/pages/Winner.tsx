import React from "react";
import { Link } from "react-router-dom";
import "../styles/winner.css";
import success from "../assets/sucess.webp";

export interface ILoserPageProps {}

const Winner: React.FunctionComponent<ILoserPageProps> = (props) => {
  return (
    <div
      className="winnerContainer"
      style={{
        backgroundImage: `url(${success})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="textWinnerContainer">
        Bien joué!
        <Link className="" to="/memory">
          <button className="">Essaie encore!!</button>
        </Link>
      </div>
    </div>
  );
};

export default Winner;
