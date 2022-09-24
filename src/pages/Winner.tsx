import React from "react";
import { Link } from "react-router-dom";

export interface ILoserPageProps {}

const Winner: React.FunctionComponent<ILoserPageProps> = (props) => {
  return (
    <div>
      Bien joué!!
      <Link to="/memory">
        <button>Essaie encore!!</button>
      </Link>
    </div>
  );
};

export default Winner;
