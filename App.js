import "./App.css";
import Homepage from "./Homepage";
import About from "./About";
import Contact from "./Contact";
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div> 
    <nav>
	  <Link to="/" className="nav-item">Sonali Kushwah</Link>
    <Link to="/About" className="nav-item">About me</Link>
    <Link to="/Contact" className="nav-item">Contact me</Link>
    </nav>
      <Routes> 
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
};

export default App;