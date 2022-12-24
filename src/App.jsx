import { Outlet } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import "./App.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app-container">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
