import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Memory from "./pages/Memory";
import MemoryExpert from "./pages/MemoryExpert";
import Loser from "./pages/Loser";
import Winner from "./pages/Winner";
import Header from "./components/Header";
import AboutMe from "./pages/Aboutme";

export interface IApplicationprops {}

const App: React.FunctionComponent<IApplicationprops> = (props) => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memory" element={<Memory />} />
        <Route path="/memoryExpert" element={<MemoryExpert />} />
        <Route path="/loser" element={<Loser />} />
        <Route path="/winner" element={<Winner />} />
        <Route path="/aboutMe" element={<AboutMe />} />
      </Routes>
    </Router>
  );
};

export default App;
