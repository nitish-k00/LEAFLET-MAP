import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mobile from "./Components/Mobile";
import CustomIcons from "./Components/CustomIcons";
import AccessibleMaps from "./Components/AccessibleMaps";
import Navbar from "./Components/Navbar";
import Test from "./Components/Test";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Mobile />}></Route>
          <Route path="/Mobile" element={<Mobile />}></Route>
          <Route path="/CustomIcons" element={<CustomIcons />}></Route>
          <Route path="/AccessibleMaps" element={<AccessibleMaps />}></Route>
          <Route path="/test" element={<Test />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
