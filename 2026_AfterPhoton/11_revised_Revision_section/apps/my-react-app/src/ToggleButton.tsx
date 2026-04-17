/* eslint-disable react-hooks/set-state-in-render */
import React, {useState} from 'react';

export default function App() {
  const[show, setShow] = useState(false)
  
  return (
      <div>
        <h2>Toggle</h2>
        <button onClick={()=>setShow(prev=> !prev)} >{show? 'Hide': 'Show'}</button>
        {show? "Now conten is Open": "Content is now closed"}
      </div>
  )
}