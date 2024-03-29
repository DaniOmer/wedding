import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Program from "./pages/Program/Program";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/program" element={<Program />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
