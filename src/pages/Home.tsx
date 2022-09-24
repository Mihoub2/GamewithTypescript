import React from "react";
import { Link } from "react-router-dom";

export interface IHomePageProps {}

const Home: React.FunctionComponent<IHomePageProps> = (props) => {
  return (
    <div>
      HOME !
      <Link className="" to="/memory">
        <button className="">Essaie mon jeu</button>
      </Link>
    </div>
  );
};

export default Home;
