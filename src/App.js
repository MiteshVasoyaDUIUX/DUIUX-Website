import "./App.css";
import HomePage from "./pages/HomePage";
import LoadingScreen from "./pages/LoadingScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Lake from "./pages/Lake";
import Image3 from "./pages/Image3";
import Mhl from "./pages/Mhl";
import Header from "./components/Header";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/aboutus" element={<AboutUs />}></Route>
            <Route path="/contactus" element={<ContactUs />}></Route>
            <Route path="/portfolio" element={<Portfolio />}></Route>
            <Route path="/lake" element={<Lake />}></Route>
            <Route path="/alessandro" element={<Image3 />}></Route>
            <Route path="/mhl" element={<Mhl />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
