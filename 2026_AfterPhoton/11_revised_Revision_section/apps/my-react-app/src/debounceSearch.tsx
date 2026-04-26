import React, { useEffect, useState } from "react";

export default function App() {
  const [searchValue, setSearchValue] = useState('');
  const [debounceSearch, setDebounceSearch] = useState('')

  useEffect(() => {
    function debounce (func, delay){
      let timmer;
      return function(...args){
        clearTimeout(timmer);
        timmer = setTimeout(()=>{
          func.apply(this, args)
        }, delay)
      }
    }
    const hanldeSearch = debounce (()=>{
      setDebounceSearch(searchValue)
    }, 2000)
    if (searchValue) {
      hanldeSearch()
    }
  }, [searchValue])

  return (
    <div>
      <h2>Debounce Search</h2>
      <input type="text" onChange={(e) => setSearchValue(e.target.value)} />
      <p> Normal Search Value: {searchValue}</p>
      <p>Debounce Search: {debounceSearch}</p>
    </div>
  )
}