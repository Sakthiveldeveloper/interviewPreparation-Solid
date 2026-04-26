import React, { useState } from 'react';

export default function App() {
  const [updateValue, setUpdateValue] = useState(0);
  const updateValueData = (data: number) => {
    setUpdateValue(data)
  }

  return (
    <div>
      <h2>Lifiting Data up : Child to Parent</h2>
      <Child data={updateValueData} />
      <p>updated Value is :{updateValue}</p>
    </div>
  )
}
function Child(props) {
  const updateValue = (e) => {
    props.data(e.target.value)
  }
  return (
    <div>
      <input type="number" onChange={updateValue} />
    </div>
  )
}