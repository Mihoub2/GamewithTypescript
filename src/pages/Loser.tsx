import React from "react";
import { Link } from "react-router-dom";
import "../styles/loser.css";
import fail from "../assets/fail2.jpg";

export interface ILoserPageProps {}

const Loser: React.FunctionComponent<ILoserPageProps> = (props) => {
  return (
    <div
      className="loserContainer"
      style={{
        backgroundImage: `url(${fail})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="textLoserContainer">
        Ahh... C'est raté!
        <Link className="" to="/memory">
          <button className="">Essaie encore!!</button>
        </Link>
      </div>
    </div>
  );
};

export default Loser;
