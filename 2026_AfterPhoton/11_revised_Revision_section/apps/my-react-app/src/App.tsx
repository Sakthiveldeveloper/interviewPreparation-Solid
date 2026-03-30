import react  from  'react';
import { useDebounce } from './useDebounce';


export default function App () {
  function debounce (func, delay){
    let timmer = '';
    return function (...args){
      clearTimeout(timmer);
     timmer = setTimeout(()=>{
      func.apply(...args)
     },delay)
    }
  }

  const getData = debounce(()=>{
    console.log('getDated')
  },500)
  getData()
  return(
    <>
      <h1>Debouce Function</h1>
    </>
  )
}