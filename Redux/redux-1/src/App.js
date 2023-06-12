import logo from "./logo.svg";
import "./App.css";
import Counter from "./Components/Counter";
import Todo from "./Todo/Todo";
import Todo_Id from "./Todo/Todo_Id";
import { useSelector } from "react-redux";


function App() {
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);
 
  return (
    <div className="App">
      <Counter />
     <Todo_Id />
     {isAuth &&  <Todo />}
    </div>
  );
}

export default App;
