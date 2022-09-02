import './App.css';
import { useSelector, useDispatch } from 'react-redux'
function App() {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter);
  const increment = () => {
    dispatch({ type: "INCREMENT" })
  };
  const decrement = () => {
    dispatch({ type: "DECREMENT" })
  };
  const addBy=()=>{
    dispatch({type:"ADD",payload:10})
  }
  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{counter}</h2>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={addBy} >Add</button>
    </div>
  );
}

export default App;
