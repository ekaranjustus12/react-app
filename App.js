
import './App.css';
import { useState } from 'react';

function App() {
  
const [count,setCount]= useState(0);
function Increase(){
  setCount(count + 1);
}
function Decrease(){
  setCount(count - 1);
}



  return (
    
    <div>
      <p>{count}</p>
      <button onClick={Increase}>increase</button>
      <button onClick={Decrease}>Decrease</button>
    </div>


  );
}

export default App;
