import React, { useState, useEffect } from 'react';

export default function App() {
  const url = 'https://jsonplaceholder.typicode.com/users';
  const [userData, setUserData] = useState([])
  useEffect(() => {
    const getData = async (url: RequestInfo | URL) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setUserData(data);
        return data;
      } catch (error) {
        console.log(error)
      }
    }
    if (url) {
      getData(url);
    }
  }, [url])

  return (
    <div>
      <h2>get data from url and need to display </h2>
      <ol>
        {userData.map((data,)=>(
        <li key={index}> {data.name} </li>
      ))}
      </ol>
    </div>
  )
}