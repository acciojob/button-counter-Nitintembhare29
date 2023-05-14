
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
let [count, setCount] = useState(0);
let countClik = ()=>{
  setCount(count+1);
}

  return (
    <div>
        <p>Button clicke {count} times</p>
        <button onClick={countClik}>Click me</button>
    </div>
  )
} 

export default App
