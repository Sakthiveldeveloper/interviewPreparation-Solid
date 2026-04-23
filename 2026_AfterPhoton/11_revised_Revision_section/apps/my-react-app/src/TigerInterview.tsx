import React, { useState, useEffect } from "react";

export default function App() {
  const url = 'https://jsonplaceholder.typicode.com/todos/';
  const [apiData, setApiData] = useState([])
  useEffect(() => {
    const getApiData = async (url) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setApiData(data)
      } catch (error) {
        console.log(`error from APIv ${error}`)
      }
    }
    if (url) {
      getApiData(url)
    }
  }, [url])
  console.log('data', apiData)
  return (
    <div>
      <h2> Data show from API</h2>
      {/* <p>Title: {apiData.title}</p>
      <p> Complete: {.completed ?'false' :'No'}</p> */}
      {/* {apiData.map((data, index) => (
          <p key={index}>{data.title}</p>
        ))} */}
      <table style={{ background: 'whitesmoke', width: '100%' }}>
        <thead style={{}}>
          <td style={{ alignItems: 'center', width: '10%' }}>S.No</td>
          <td style={{ alignItems: 'center', width: '40%' }}>Title</td>
          <td style={{ alignItems: 'center', width: '40%' }}>completed</td>
        </thead>
        {apiData.map((data) => (
          <tbody style={{}}>
            <td style={{ alignItems: 'center' }}>{data.id}</td>
            <td style={{ alignItems: 'center' }}>{data.title}</td>
            <td style={{ alignItems: 'center' }}>{data.completed == false ? 'No' : 'Yes'}</td>
          </tbody>
        ))}
      </table>


    </div>
  )
}