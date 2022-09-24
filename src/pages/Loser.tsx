import React from "react";
import { Link } from "react-router-dom";

export interface ILoserPageProps {}

const Loser: React.FunctionComponent<ILoserPageProps> = (props) => {
  return (
    <div>
      Ahh... C'est raté!
      <Link className="" to="/memory">
        <button className="">Essaie encore!!</button>
      </Link>
    </div>
  );
};

export default Loser;
