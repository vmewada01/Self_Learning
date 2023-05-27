import "./styles.css";
import useState from "react"
import Button from "./Components/Button";
import Todo from "./Components/Todo";

export default function App() {


  return (
    <div className="App">
      <Button/>
      <Todo />
    </div>
  );
}
