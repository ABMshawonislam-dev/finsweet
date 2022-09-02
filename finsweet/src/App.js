import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/navbar/Navbar";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
