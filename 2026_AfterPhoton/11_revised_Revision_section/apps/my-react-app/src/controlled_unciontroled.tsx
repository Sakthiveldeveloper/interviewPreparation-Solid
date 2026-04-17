
// // contollred component
// // import React,{useState} from 'react';

// // export default function App(){
// // const [ updateValue, setupdateValue] = useState("")
// //   return(
// //     <div>
// //       <h3>Contolled componet</h3>
// //       <input type="text" value={updateValue} onChange={(e)=>(setupdateValue(e.target.value))} />
// //       <p>{`InputValue  is ${updateValue}`}</p>
// //     </div>
// //   )
// // }
// // uncontrolled Component
// import React, {useRef} from "react";

// export default function App (){
// const inputRef  = useRef(null);

// const handleOnclick = () =>{
//   alert(`Input Value is : ${inputRef.current.value}`)
// }
//   return (
//     <div>
//       <h3>Uncontrolled Component</h3>
//       <input type="text" ref={inputRef} placeholder="Enter you words"/>
//       <div><button onClick={handleOnclick}>Click</button></div>
//     </div>
//   )
// }