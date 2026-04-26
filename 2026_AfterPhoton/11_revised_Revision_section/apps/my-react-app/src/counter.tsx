import React,{useState} from 'react';

export default function App(){
  const[count, setCount] = useState(0);
  return(
    <div>
      <h1>Counter Application</h1>
      <button onClick={()=>(setCount(prev=> prev+1))} >Count: {count}</button>
    </div>
  )
}