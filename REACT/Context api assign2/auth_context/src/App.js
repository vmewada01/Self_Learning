import logo from "./logo.svg";
import "./App.css";
import { AuthProvider } from "./components/AuthContext";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <AuthProvider>
        <Navbar/>
      </AuthProvider>
    </div>
  );
}

export default App;
