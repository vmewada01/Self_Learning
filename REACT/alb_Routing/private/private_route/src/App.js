import logo from "./logo.svg";
import "./App.css";
import Link_Files from "./components/Link_Files";
import { Routes } from "react-router-dom";
import AllRoutes from "./pages/AllRoutes";

function App() {
  return (
    <div className="App">
  
      <Link_Files />
      <AllRoutes />
    </div>
  );
}

export default App;
