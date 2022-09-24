import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Memory from "./pages/Memory";
import Loser from "./pages/Loser";

export interface IApplicationprops {}

const App: React.FunctionComponent<IApplicationprops> = (props) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memory" element={<Memory />} />
        <Route path="/loser" element={<Loser />} />
      </Routes>
    </Router>
  );
};

export default App;
