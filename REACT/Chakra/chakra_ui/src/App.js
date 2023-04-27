import logo from "./logo.svg";
import "./App.css";

import WithSubnavigation from "./Components/Navbar";
import { MobileNav } from "./Components/MobileNav";


function App() {
  return (
    <div>
      <WithSubnavigation />
      <MobileNav/>
    </div>
  );
}

export default App;
