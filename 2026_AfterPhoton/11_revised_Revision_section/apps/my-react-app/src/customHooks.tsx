import React, { useEffect, useState } from 'react';

export default function App() {
  const [result, setResult] = useState([]);
  const [url, setUrl] = useState('')
  const { data, error, loading } = useFetch(url);
  // setResult(data)

  return (
    <div>
      <h1>Custom Hook</h1>
      <button onClick={() => setUrl('https://jsonplaceholder.typicode.com/posts')} >Fetch Data</button>
      {/* <ol> */}
      {data.map((finalData, index) => (
        <li key={index}>{finalData.title}</li>
      ))}
      {/* </ol> */}
    </div>
  )
}

function useFetch(url) {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(true)
      }
    }
    if (url) {
      fetchData(url)
    }
  }, [url])
  return { data, error, loading }
}
// import React, { useState,useEffect } from 'react';

// export default function App() {
//   const [url, setUrl] = useState(null);

//   const { data, error, loading } = useFetch(url);

//   return (
//     <div>
//       <h1>Custom Hook</h1>

//       <button onClick={() => 
//         setUrl('https://jsonplaceholder.typicode.com/posts')
//       }>
//         Fetch Data
//       </button>

//       {loading && <p>Loading...</p>}
//       {error && <p>Error occurred</p>}

//       <ol>
//         {data &&
//           data.map((item) => (
//             <li key={item.id}>{item.title}</li>
//           ))}
//       </ol>
//     </div>
//   );
// }

// function useFetch(url) {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (!url) return;

//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch(url);
//         const result = await response.json();
//         setData(result);
//         setLoading(false);
//       } catch (err) {
//         setError(err);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [url]);

//   return { data, error, loading };
// }