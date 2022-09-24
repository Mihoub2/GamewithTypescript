import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Memory from "./pages/Memory";
import Loser from "./pages/Loser";
import Winner from "./pages/Winner";
import Header from "./components/Header";

export interface IApplicationprops {}

const App: React.FunctionComponent<IApplicationprops> = (props) => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memory" element={<Memory />} />
        <Route path="/loser" element={<Loser />} />
        <Route path="/winner" element={<Winner />} />
      </Routes>
    </Router>
  );
};

export default App;
