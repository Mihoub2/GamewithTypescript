import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

export interface IHomePageProps {}

const Home: React.FunctionComponent<IHomePageProps> = (props) => {
  return (
    <div className="homeContainer">
      <Link to="/memory">
        <button className="">Essaie mon jeu</button>
      </Link>
    </div>
  );
};

export default Home;
