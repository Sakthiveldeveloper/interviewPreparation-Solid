// import React, { useState } from "react";

// function SearchFilter() {
//     const [searchTerm, SetSearchTerm] = useState("");
//     const items = ["chennai", "madurai", "kovai", "thanjai", "nellai"];
//     const FilterItems = items.filter((item)=>{
//         item.toLowerCase().includes(searchTerm.toLowerCase());
//     })
//     return(
//         <div>
//             <h3>Search Filter</h3>
//             <input 
//             type="text"
//             onChange= {(e)=> SetSearchTerm(e.target.value)}
//             >
//             </input>
//             <ul>
//                 {FilterItems.length>0?(
//                       FilterItems.map((item, index) => <li key={index}>{item}</li>)
//                 ):(
//                     'No mnatch Found'
//                 )}
//             </ul>
//         </div>
//     )
// }
// export default SearchFilter
import React, { useState } from "react";

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample data
  const items = ["Apple", "Banana", "Orange", "Grapes", "Mango", "Pineapple"];

  // Filtered list
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Search Filter</h2>
      <input
        type="text"
        placeholder="Search fruits..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "5px", marginBottom: "10px" }}
      />

      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <li>No match found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchFilter;
