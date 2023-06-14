import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';

function App() {
  const memoFunc = (func) => {

    const cache = {}
    console.log(cache)
    return (input) => {
  
        return cache[input]  || (cache[input] = func[input] )
    }
}

const fib =memoFunc((n)=> {
 
    if(n <= 1){
   return n 
    }
    return  fib(n-1) + fib(n-2)
})

console.log(fib(3))

console.log(fib(5))

  return (
    <div className="App">
     <Todo/>
    </div>
  );
}

export default App;
