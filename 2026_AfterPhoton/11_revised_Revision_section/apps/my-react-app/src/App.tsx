// // 1.Create a functional component that displays “Hello, World!”
// // import React from 'react';

// // import React, { useState } from "react"

// // export default function App () {

// //     return(
// //         <div>
// //             <h3>First Problem of React</h3>
// //             <h4> Hello world !</h4>
// //         </div>
// //     )
// // }
// // 2.Pass props to a child component and display them.
// // 
// // import React,{useState} from "react";
// // import ChildComponent from "./childComponent";

// // export default function App () {
// //     const [useName, setUserName] =  useState('Parent to Child Props');
// //     return(
// //         <div>
// //             <h3>2nd Problem  Pass Props to a child component and display</h3>
// //             <ChildComponent data={useName} />
// //         </div>
// //     )
// // }
// // 3.Create a counter app using useState with increment & decrement buttons.
// // import React, { useState } from "react";

// // export default function App () {
// //     const [count, setCount] = useState(0);

// //     return(
// //         <div>
// //             <h3> 3rd Problem counter App</h3>
// //             <h4> Counter</h4>
// //             <button onClick={()=>{setCount(prev => prev+1)}}>+</button>
// //             <p>{count}</p>
// //             <button onClick={()=>{setCount(prev => prev-1)}}>-</button>
// //         </div>
// //     )
// // }
// // 4.
// // 4.Render a list of items using .map() and unique key props.
// // import React, { useState }  from "react";

// // export default function App () {
// //     const [listData, setListData] = useState([
// //         'chennai', "madurai", "kumari", "nellai"
// //     ])
// //     return(
// //         <div>
// //             <h3>4th Render List item</h3>
// //             <ol>{listData.map((data,index)=>(
// //                 <li key={index}>{data}</li>
// //             ))}</ol>
// //         </div>
// //     )
// // }
// // 5.Implement conditional rendering: show “Login” if the user is not logged in, otherwise “Logout.”
// // import React, { useState } from "react";

// // export default function App () {
// //     const[login, SetLogin] = useState(false)
// //     return(
// //         <div>
// //             <h3>5th Conditional</h3>
// //             <button onClick={()=>SetLogin(prev=>!prev)}>{login?"Logout":"Login"}</button>
// //             <p>{login?"user Loged in":"user not Login"}</p>
// //         </div>
// //     )
// // }
// // 6.Build a to-do list with add, delete, and mark-as-complete functionality.
// // 6.
// // import React, { useState } from "react";

// // export default function App() {
// //     const [inputData, SetInputData] = useState('');
// //     const [todoList, SetTodoList] = useState([])
// //     const AddTodo = () => {
// //         const newTodo = { id: Date.now(), text: inputData, complete: false }
// //         SetTodoList([...todoList, newTodo]);
// //         SetInputData("");
// //     }
// //     const deleteTodo = (id) => {
// //         SetTodoList(prev => prev.filter(todoList => todoList.id != id))
// //     }

// //     const toggleComplete = (id) => {
// //         SetTodoList(prev => prev.map(todo =>
// //             todo.id === id ? { ...todo, completed: !todo.completed } : todo
// //         ));
// //     };

// //     return (
// //         <div>
// //             <h1>6th build Todo List</h1>
// //             <input type="text" value={inputData} onChange={(e) => SetInputData(e.target.value)} />
// //             <button onClick={AddTodo}>Add</button>
// //             <ul>
// //                 {todoList.map((data, index) => (
// //                     <li key={index}>
// //                         <span
// //                             onClick={() => toggleComplete(todoList.id)}
// //                             style={{
// //                                 textDecoration: todoList.completed ? "line-through" : "none",
// //                                 cursor: "pointer",
// //                                 marginRight: "10px"
// //                             }}
// //                         >
// //                             {data.text}
// //                         </span>
// //                         {/* <span>
// //                             {data.text}
// //                         </span> */}
// //                         <button onClick={() => deleteTodo(data.id)}>Delete</button>

// //                     </li>
// //                 ))}
// //             </ul>
// //         </div>
// //     )
// // }
// // 7.
// // 7.Build a form with controlled inputs for name and email, and display entered data on submit.
// // import React, { useState } from "react";

// // export default function RegistrationForm() {
// //     // State for form inputs
// //     const [formData, setFormData] = useState({ name: "", email: "" });
// //     // State to store and display submitted data
// //     const [submittedData, setSubmittedData] = useState(null);

// //     const handleChange = (e) => {
// //         const { name, value } = e.target;
// //         // Update specific field while preserving others
// //         setFormData((prev) => ({ ...prev, [name]: value }));
// //     };

// //     const handleSubmit = (e) => {
// //         e.preventDefault(); // Prevent page reload
// //         setSubmittedData(formData);
// //         // Optional: Clear form after submission
// //         setFormData({ name: "", email: "" });
// //     };

// //     return (
// //         <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
// //             <h3>7. Form with Controlled Inputs</h3>

// //             <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
// //                 <div style={{ marginBottom: "10px" }}>
// //                     <label>Name: </label>
// //                     <input
// //                         type="text"
// //                         name="name"
// //                         value={formData.name}
// //                         onChange={handleChange}
// //                         required
// //                     />
// //                 </div>
// //                 <div style={{ marginBottom: "10px" }}>
// //                     <label>Email: </label>
// //                     <input
// //                         type="email"
// //                         name="email"
// //                         value={formData.email}
// //                         onChange={handleChange}
// //                         required
// //                     />
// //                 </div>
// //                 <button type="submit">Submit</button>
// //             </form>

// //             {submittedData && (
// //                 <div style={{ padding: "10px", backgroundColor: "#f4f4f4", borderRadius: "5px" }}>
// //                     <h4>Submitted Information:</h4>
// //                     <p><strong>Name:</strong> {submittedData.name}</p>
// //                     <p><strong>Email:</strong> {submittedData.email}</p>
// //                 </div>
// //             )}
// //         </div>
// //     );
// // }

// //    8. Create a search filter that filters a list of items in real-time.
// // 

// // import React from "react"

// // export default function App() {
// //     const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

// //     const [searchTerm, setSearchTerm] = useState("");
// //     const filteredItems = items.filter((item) =>
// //         item.toLowerCase().includes(searchTerm.toLowerCase()))
// //     return (
// //         <div>
// //             <h3>8. Real time Search Filter</h3>
// //             <input
// //                 type="text"
// //                 placeholder="Search fruit..."
// //                 value={searchTerm}
// //                 onChange={(e) => setSearchTerm(e.target.value)}
// //                 style={{ marginBottom: "10px", padding: "5px" }}
// //             />

// //             <ul>
// //                 {filteredItems.map((item, index) => (
// //                     <li key={index}>{item}</li>
// //                 ))}
// //             </ul>

// //             {filteredItems.length === 0 && <p>No results found!</p>}
// //         </div>
// //     )
// // }

// // 9.Create a Like Button component.
// // 9.
// // import React, { useState } from "react";

// // export default function LikeButton() {
// //     const [liked, setLiked] = useState(false);
// //     const [count, setCount] = useState(0); // Starting with 100 likes

// //     const handleLike = () => {
// //         if (!liked) {
// //             setCount(prev => prev + 1);
// //         } else {
// //             setCount(prev => prev - 1);
// //         }
// //         setLiked(prev => !prev);
// //     };

// //     return (
// //         <div style={{ padding: "20px" }}>
// //             <button
// //                 onClick={handleLike}
// //                 style={{
// //                     padding: "10px 20px",
// //                     fontSize: "16px",
// //                     cursor: "pointer",
// //                     backgroundColor: liked ? "#ff4b5c" : "#f0f0f0",
// //                     color: liked ? "white" : "black",
// //                     border: "1px solid #ccc",
// //                     borderRadius: "5px",
// //                     transition: "0.2s"
// //                 }}
// //             >
// //                 {liked ? "❤️ Liked" : "🤍 Like"} | {count}
// //             </button>
// //         </div>
// //     );
// // }

// // --------------------------------------------
// // Intermediate

// // 10.Fetch data from an API (e.g., JSONPlaceholder) using useEffect and display it.

// // import React, { useState, useEffect } from "react";

// // export default function UserList() {
// //     const [data, setData] = useState([]);
// //     const [loading, setLoading] = useState(true);
// //     const [error, setError] = useState(null);

// //     useEffect(() => {
// //         // Define the async function inside the effect
// //         const fetchData = async () => {
// //             try {
// //                 const response = await fetch("https://jsonplaceholder.typicode.com/users");

// //                 // Check if the response is okay (e.g., 200 OK)
// //                 if (!response.ok) {
// //                     throw new Error(`HTTP error! status: ${response.status}`);
// //                 }

// //                 const result = await response.json();
// //                 setData(result);
// //             } catch (err) {
// //                 setError(err.message);
// //             } finally {
// //                 setLoading(false); // Stop loading regardless of success or failure
// //             }
// //         };

// //         fetchData();
// //     }, []); // Empty dependency array means this runs once on mount

// //     if (loading) return <p>Loading users...</p>;
// //     if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

// //     return (
// //         <div>
// //             <h3>User Directory</h3>
// //             <ul>
// //                 {data.map((user) => (
// //                     <li key={user.id}>
// //                         <strong>{user.name}</strong> — {user.email}
// //                     </li>
// //                 ))}
// //             </ul>
// //         </div>
// //     );
// // }

// //    11. Implement pagination for API results.
// // 
// // import React, { useState, useEffect } from "react";

// // export default function PaginatedList() {
// //     const [data, setData] = useState([]);
// //     const [currentPage, setCurrentPage] = useState(1);
// //     const itemsPerPage = 10;

// //     useEffect(() => {
// //         const fetchData = async () => {
// //             // API request with page and limit parameters
// //             const response = await fetch(
// //                 `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${itemsPerPage}`
// //             );
// //             const result = await response.json();
// //             setData(result);
// //         };
// //         fetchData();
// //     }, [currentPage]); // Re-run whenever currentPage changes

// //     return (
// //         <div>
// //             <ul>
// //                 {data.map(item => <li key={item.id}>{item.title}</li>)}
// //             </ul>

// //             <button
// //                 disabled={currentPage === 1}
// //                 onClick={() => setCurrentPage(prev => prev - 1)}
// //             >
// //                 Previous
// //             </button>
// //             <span> Page {currentPage} </span>
// //             <button
// //                 onClick={() => setCurrentPage(prev => prev + 1)}
// //             >
// //                 Next
// //             </button>
// //         </div>
// //     );
// // }


// // 12.File Explorer (nested folder/file structure).
// // 
// // import React, { useState } from "react";

// // // 1. The Component logic (keep this as you have it)
// // const FileExplorer = ({ data }) => {
// //     const [isOpen, setIsOpen] = useState(false);
// //     if (!data) return null;

// //     if (!data.children) {
// //         return <div style={{ paddingLeft: "20px" }}>📄 {data.name}</div>;
// //     }

// //     return (
// //         <div style={{ paddingLeft: "20px" }}>
// //             <div onClick={() => setIsOpen(!isOpen)} style={{ cursor: "pointer", fontWeight: "bold" }}>
// //                 {isOpen ? "📂" : "📁"} {data.name}
// //             </div>
// //             {isOpen && data.children.map((child) => (
// //                 <FileExplorer key={child.id} data={child} />
// //             ))}
// //         </div>
// //     );
// // };

// // // 2. The Data (keep this outside or inside App)
// // const folderData = {
// //     id: "1",
// //     name: "root",
// //     children: [
// //         { id: "2", name: "index.html" },
// //         { id: "3", name: "src", children: [{ id: "4", name: "App.js" }] }
// //     ]
// // };

// // // 3. THE MISSING PART: You must render it in your main App export
// // export default function App() {
// //     return (
// //         <div className="App">
// //             <h3>File Explorer</h3>
// //             <FileExplorer data={folderData} />
// //         </div>
// //     );
// // }

// // 13
// //    13. Build an EMI Calculator.
// // 
// // import React, { useState, useEffect } from "react";

// // export default function EMICalculator() {
// //     const [p, setP] = useState(100000);
// //     const [r, setR] = useState(7);
// //     const [n, setN] = useState(5);
// //     const [emi, setEmi] = useState(0);

// //     useEffect(() => {
// //         const monthlyRate = r / 12 / 100;
// //         const months = n * 12;

// //         if (monthlyRate === 0) {
// //             setEmi((p / months).toFixed(0));
// //         } else {
// //             const emiValue = (p * monthlyRate * Math.pow(1 + monthlyRate, months)) /
// //                 (Math.pow(1 + monthlyRate, months) - 1);
// //             setEmi(emiValue.toFixed(0));
// //         }
// //     }, [p, r, n]);

// //     return (
// //         <div style={{ padding: '20px', maxWidth: '400px', border: '1px solid #ccc' }}>
// //             <h3>EMI Calculator</h3>
// //             <div>
// //                 <label>Principal: </label>
// //                 <input type="number" value={p} onChange={(e) => setP(+e.target.value)} />
// //             </div>
// //             <div>
// //                 <label>Interest (%): </label>
// //                 <input type="number" value={r} onChange={(e) => setR(+e.target.value)} />
// //             </div>
// //             <div>
// //                 <label>Years: </label>
// //                 <input type="number" value={n} onChange={(e) => setN(+e.target.value)} />
// //             </div>
// //             <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
// //                 Monthly EMI: ₹{emi}
// //             </div>
// //         </div>
// //     );
// // }

// // 14.
// // 14.    Create a Password Generator.

// // import React, { useState, useCallback, useEffect } from "react";

// // export default function PasswordGenerator() {
// //     const [length, setLength] = useState(12);
// //     const [includeNumbers, setIncludeNumbers] = useState(true);
// //     const [includeSymbols, setIncludeSymbols] = useState(true);
// //     const [password, setPassword] = useState("");

// //     const generatePassword = useCallback(() => {
// //         let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
// //         if (includeNumbers) charset += "0123456789";
// //         if (includeSymbols) charset += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

// //         let generatedPassword = "";
// //         for (let i = 0; i < length; i++) {
// //             const index = Math.floor(Math.random() * charset.length);
// //             generatedPassword += charset.charAt(index);
// //         }
// //         setPassword(generatedPassword);
// //     }, [length, includeNumbers, includeSymbols]);

// //     // Generate on initial load
// //     useEffect(() => {
// //         generatePassword();
// //     }, [generatePassword]);

// //     const copyToClipboard = () => {
// //         window.navigator.clipboard.writeText(password);
// //         alert("Password copied!");
// //     };

// //     return (
// //         <div style={{ padding: '20px', maxWidth: '350px', border: '1px solid #ddd', borderRadius: '8px' }}>
// //             <h3>Password Generator</h3>

// //             <div style={{ display: 'flex', marginBottom: '10px' }}>
// //                 <input readOnly value={password} style={{ flex: 1 }} />
// //                 <button onClick={copyToClipboard}>Copy</button>
// //             </div>

// //             <div>
// //                 <label>Length: {length}</label>
// //                 <input
// //                     type="range" min={6} max={50} value={length}
// //                     onChange={(e) => setLength(e.target.value)}
// //                     style={{ width: '100%' }}
// //                 />
// //             </div>

// //             <div>
// //                 <input
// //                     type="checkbox" checked={includeNumbers}
// //                     onChange={() => setIncludeNumbers(prev => !prev)}
// //                 />
// //                 <label> Numbers</label>
// //             </div>

// //             <div>
// //                 <input
// //                     type="checkbox" checked={includeSymbols}
// //                     onChange={() => setIncludeSymbols(prev => !prev)}
// //                 />
// //                 <label> Symbols</label>
// //             </div>

// //             <button onClick={generatePassword} style={{ marginTop: '10px', width: '100%' }}>
// //                 Regenerate
// //             </button>
// //         </div>
// //     );
// // }

// // 15.Implement a Progress Bar.
// // 15.
// // import React, { useState } from "react";

// // export default function ProgressBarApp() {
// //     const [progress, setProgress] = useState(50);

// //     return (
// //         <div style={{ padding: "20px", maxWidth: "400px" }}>
// //             <h3>Progress Bar</h3>

// //             {/* 1. Outer Container */}
// //             <div style={{
// //                 height: "20px",
// //                 width: "100%",
// //                 backgroundColor: "#e0e0df",
// //                 borderRadius: "10px",
// //                 overflow: "hidden"
// //             }}>
// //                 {/* 2. Inner Filler */}
// //                 <div style={{
// //                     height: "100%",
// //                     width: `${progress}%`,
// //                     backgroundColor: "#4caf50",
// //                     transition: "width 0.5s ease-in-out"
// //                 }} />
// //             </div>

// //             <p>{progress}% Complete</p>

// //             <input
// //                 type="range"
// //                 min="0"
// //                 max="100"
// //                 value={progress}
// //                 onChange={(e) => setProgress(e.target.value)}
// //             />
// //         </div>
// //     );
// // }

// // 16.
// // 16.Grid Lights game (toggle lights on click).

// // import React, { useState } from "react";

// // export default function GridLights() {
// //     // Initialize a 3x3 grid (9 cells) all set to false (off)
// //     const [grid, setGrid] = useState(Array(9).fill(false));

// //     const toggleLight = (index) => {
// //         setGrid((prevGrid) => {
// //             const newGrid = [...prevGrid];
// //             newGrid[index] = !newGrid[index]; // Toggle the specific cell
// //             return newGrid;
// //         });
// //     };

// //     return (
// //         <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px" }}>
// //             <h3>Grid Lights Game</h3>
// //             <div style={{
// //                 display: "grid",
// //                 gridTemplateColumns: "repeat(3, 100px)", // 3 columns
// //                 gap: "10px"
// //             }}>
// //                 {grid.map((isOn, index) => (
// //                     <div
// //                         key={index}
// //                         onClick={() => toggleLight(index)}
// //                         style={{
// //                             width: "100px",
// //                             height: "100px",
// //                             backgroundColor: isOn ? "#f1c40f" : "#34495e", // Yellow if on, Dark Blue if off
// //                             border: "2px solid #2c3e50",
// //                             borderRadius: "8px",
// //                             cursor: "pointer",
// //                             transition: "background-color 0.2s"
// //                         }}
// //                     />
// //                 ))}
// //             </div>
// //             <button
// //                 onClick={() => setGrid(Array(9).fill(false))}
// //                 style={{ marginTop: "20px", padding: "10px 20px" }}
// //             >
// //                 Reset Grid
// //             </button>
// //         </div>
// //     );
// // }

// // 17.
// // 17.OTP Login (6-digit input).

// // import React, { useState, useRef, useEffect } from "react";

// // export default function OtpLogin() {
// //     const [otp, setOtp] = useState(new Array(6).fill(""));
// //     const inputRefs = useRef([]);

// //     useEffect(() => { inputRefs.current[0]?.focus(); }, []);

// //     const handleChange = (val, index) => {
// //         if (isNaN(val)) return;
// //         const newOtp = [...otp];
// //         newOtp[index] = val.substring(val.length - 1); // Take last char
// //         setOtp(newOtp);
// //         if (val && index < 5) inputRefs.current[index + 1].focus();
// //     };

// //     const handleKeyDown = (e, index) => {
// //         if (e.key === "Backspace" && !otp[index] && index > 0) {
// //             inputRefs.current[index - 1].focus();
// //         }
// //     };

// //     return (
// //         <div style={{ display: "flex", gap: "5px" }}>
// //             {otp.map((data, index) => (
// //                 <input
// //                     key={index}
// //                     type="text"
// //                     maxLength="1"
// //                     value={data}
// //                     ref={(el) => (inputRefs.current[index] = el)}
// //                     onChange={(e) => handleChange(e.target.value, index)}
// //                     onKeyDown={(e) => handleKeyDown(e, index)}
// //                     style={{ width: "30px", height: "30px", textAlign: "center" }}
// //                 />
// //             ))}
// //         </div>
// //     );
// // }

// // 18.
// // 18.Build a Multi-select search dropdown.
// import React, { useState, useRef, useEffect } from "react";

// export default function MultiSelectDropdown() {
//     const options = ["Apple", "Banana", "Blueberry", "Cherry", "Grapes", "Lemon", "Mango"];
//     const [selected, setSelected] = useState([]);
//     const [search, setSearch] = useState("");
//     const [isOpen, setIsOpen] = useState(false);
//     const dropdownRef = useRef(null);

//     // Close dropdown when clicking outside
//     useEffect(() => {
//         const handleClickOutside = (e) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//                 setIsOpen(false);
//             }
//         };
//         document.addEventListener("mousedown", handleClickOutside);
//         return () => document.removeEventListener("mousedown", handleClickOutside);
//     }, []);

//     const filteredOptions = options.filter(
//         (opt) => opt.toLowerCase().includes(search.toLowerCase()) && !selected.includes(opt)
//     );

//     const toggleOption = (opt) => {
//         setSelected(prev => prev.includes(opt) ? prev.filter(i => i !== opt) : [...prev, opt]);
//         setSearch(""); // Clear search after selection
//     };

//     return (
//         <div ref={dropdownRef} style={{ width: "300px", position: "relative" }}>
//             <div
//                 onClick={() => setIsOpen(!isOpen)}
//                 style={{ border: "1px solid #ccc", padding: "5px", minHeight: "35px", display: "flex", flexWrap: "wrap", gap: "5px" }}
//             >
//                 {selected.map(item => (
//                     <span key={item} style={{ background: "#e0e0e0", padding: "2px 6px", borderRadius: "4px", fontSize: "12px" }}>
//                         {item} <button onClick={(e) => { e.stopPropagation(); toggleOption(item); }} style={{ border: "none", cursor: "pointer" }}>x</button>
//                     </span>
//                 ))}
//                 <input
//                     type="text"
//                     value={search}
//                     onChange={(e) => { setSearch(e.target.value); setIsOpen(true); }}
//                     placeholder={selected.length === 0 ? "Select items..." : ""}
//                     style={{ border: "none", outline: "none", flex: 1 }}
//                 />
//             </div>

//             {isOpen && (
//                 <ul style={{ position: "absolute", top: "100%", width: "100%", border: "1px solid #ccc", background: "white", listStyle: "none", margin: 0, padding: 0, zIndex: 10 }}>
//                     {filteredOptions.length > 0 ? (
//                         filteredOptions.map(opt => (
//                             <li key={opt} onClick={() => toggleOption(opt)} style={{ padding: "8px", cursor: "pointer", borderBottom: "1px solid #eee" }}>
//                                 {opt}
//                             </li>
//                         ))
//                     ) : (
//                         <li style={{ padding: "8px", color: "#999" }}>No results found</li>
//                     )}
//                 </ul>
//             )}
//         </div>
//     );
// }

// 19.
// 19.Job Board (filter jobs by role, location, etc.).
// import React, { useState, useMemo } from "react";

// const JOBS_DATA = [
//     { id: 1, title: "Frontend Developer", location: "Bangalore", role: "Engineering" },
//     { id: 2, title: "Product Manager", location: "Remote", role: "Product" },
//     { id: 3, title: "Backend Engineer", location: "Pune", role: "Engineering" },
//     { id: 4, title: "UI/UX Designer", location: "Remote", role: "Design" },
// ];

// export default function JobBoard() {
//     const [filters, setFilters] = useState({ role: "All", location: "All", search: "" });

//     // Compute filtered jobs on every render
//     const filteredJobs = useMemo(() => {
//         return JOBS_DATA.filter((job) => {
//             const matchRole = filters.role === "All" || job.role === filters.role;
//             const matchLocation = filters.location === "All" || job.location === filters.location;
//             const matchSearch = job.title.toLowerCase().includes(filters.search.toLowerCase());
//             return matchRole && matchLocation && matchSearch;
//         });
//     }, [filters]);

//     const handleFilterChange = (e) => {
//         const { name, value } = e.target;
//         setFilters((prev) => ({ ...prev, [name]: value }));
//     };

//     return (
//         <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
//             <h2>Job Board</h2>

//             {/* Filter Controls */}
//             <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
//                 <input
//                     name="search" placeholder="Search titles..."
//                     onChange={handleFilterChange}
//                 />
//                 <select name="role" onChange={handleFilterChange}>
//                     <option value="All">All Roles</option>
//                     <option value="Engineering">Engineering</option>
//                     <option value="Product">Product</option>
//                     <option value="Design">Design</option>
//                 </select>
//                 <select name="location" onChange={handleFilterChange}>
//                     <option value="All">All Locations</option>
//                     <option value="Bangalore">Bangalore</option>
//                     <option value="Pune">Pune</option>
//                     <option value="Remote">Remote</option>
//                 </select>
//             </div>

//             {/* Results List */}
//             <div>
//                 {filteredJobs.length > 0 ? (
//                     filteredJobs.map((job) => (
//                         <div key={job.id} style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "10px" }}>
//                             <h4>{job.title}</h4>
//                             <p>{job.role} • {job.location}</p>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No jobs match your criteria.</p>
//                 )}
//             </div>
//         </div>
//     );
// }

// 20.
// 20.    Breadcrumbs navigation.

// import { Link, useLocation } from "react-router-dom";

// export default function Breadcrumbs() {
//   const { pathname } = useLocation();
//   // Split path into segments and remove empty strings
//   const pathnames = pathname.split("/").filter((x) => x);

//   return (
//     <nav aria-label="breadcrumb">
//       <ol style={{ display: "flex", listStyle: "none", padding: 0 }}>
//         <li>
//           <Link to="/">Home</Link>
//           {pathnames.length > 0 && <span style={{ margin: "0 8px" }}>/</span>}
//         </li>
//         {pathnames.map((name, index) => {
//           const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
//           const isLast = index === pathnames.length - 1;

//           return (
//             <li key={routeTo}>
//               {isLast ? (
//                 <span aria-current="page">{name}</span>
//               ) : (
//                 <>
//                   <Link to={routeTo}>{name}</Link>
//                   <span style={{ margin: "0 8px" }}>/</span>
//                 </>
//               )}
//             </li>
//           );
//         })}
//       </ol>
//     </nav>
//   );
// }

// 21.
// 21.Stepper component (multi-step form wizard).
// import React, { useState } from 'react';

// const MultiStepForm = () => {
//     const [step, setStep] = useState(0);
//     const [formData, setFormData] = useState({ name: '', email: '', city: '' });

//     const nextStep = () => setStep((prev) => prev + 1);
//     const prevStep = () => setStep((prev) => prev - 1);

//     return (
//         <div className="stepper-container">
//             {/* Step Indicators */}
//             <div className="steps-header">Step {step + 1} of 3</div>

//             {/* Conditional Rendering of Steps */}
//             {step === 0 && <StepOne next={nextStep} data={formData} />}
//             {step === 1 && <StepTwo next={nextStep} back={prevStep} data={formData} />}
//             {step === 2 && <Review back={prevStep} data={formData} />}
//         </div>
//     );
// };

// 22.
// 22.Selectable Grid (select multiple cells).
// import React, { useState } from "react";

// export default function SelectableGrid({ rows = 10, cols = 10 }) {
//     const [selectedCells, setSelectedCells] = useState([]);
//     const [isMouseDown, setIsMouseDown] = useState(false);

//     const handleMouseDown = (index) => {
//         setIsMouseDown(true);
//         setSelectedCells([index]);
//     };

//     const handleMouseEnter = (index) => {
//         if (!isMouseDown) return;

//         const startIdx = selectedCells[0];
//         const startRow = Math.floor(startIdx / cols);
//         const startCol = startIdx % cols;
//         const endRow = Math.floor(index / cols);
//         const endCol = index % cols;

//         const minRow = Math.min(startRow, endRow);
//         const maxRow = Math.max(startRow, endRow);
//         const minCol = Math.min(startCol, endCol);
//         const maxCol = Math.max(startCol, endCol);

//         const newSelection = [];
//         for (let r = minRow; r <= maxRow; r++) {
//             for (let c = minCol; c <= maxCol; c++) {
//                 newSelection.push(r * cols + c);
//             }
//         }
//         setSelectedCells(newSelection);
//     };

//     return (
//         <div
//             onMouseUp={() => setIsMouseDown(false)}
//             style={{
//                 display: "grid",
//                 gridTemplateColumns: `repeat(${cols}, 40px)`,
//                 userSelect: "none"
//             }}
//         >
//             {Array.from({ length: rows * cols }).map((_, i) => (
//                 <div
//                     key={i}
//                     onMouseDown={() => handleMouseDown(i)}
//                     onMouseEnter={() => handleMouseEnter(i)}
//                     style={{
//                         width: "40px",
//                         height: "40px",
//                         border: "1px solid #ddd",
//                         backgroundColor: selectedCells.includes(i) ? "#3498db" : "#fff",
//                     }}
//                 />
//             ))}
//         </div>
//     );
// }

//23
// 23.Currency Converter (real-time rates).
// import React, { useState, useEffect } from "react";

// export default function CurrencyConverter() {
//     const [rates, setRates] = useState({});
//     const [amount, setAmount] = useState(1);
//     const [from, setFrom] = useState("USD");
//     const [to, setTo] = useState("INR");
//     const [result, setResult] = useState(0);

//     // Fetch rates when base currency changes
//     useEffect(() => {
//         fetch(`https://api.exchangerate-api.com/v4/latest/${from}`)
//             .then(res => res.json())
//             .then(data => setRates(data.rates));
//     }, [from]);

//     // Calculate result based on input and rates
//     useEffect(() => {
//         if (rates[to]) setResult((amount * rates[to]).toFixed(2));
//     }, [amount, to, rates]);

//     return (
//         <div>
//             <input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
//             <select value={from} onChange={e => setFrom(e.target.value)}>
//                 {Object.keys(rates).map(c => <option key={c}>{c}</option>)}
//             </select>
//             <select value={to} onChange={e => setTo(e.target.value)}>
//                 {Object.keys(rates).map(c => <option key={c}>{c}</option>)}
//             </select>
//             <h4>{amount} {from} = {result} {to}</h4>
//         </div>
//     );
// }

// -------------------------------------------
// advanced
    // Share state between components using useContext.
// 25.


// 26.
    // Build a Theme Switcher (light/dark mode) using Context API.

    // 27.

    // 28.
    // 29.
    // 30.
    //  Create a custom hook for fetching data from an API.
    // Optimize performance by using React.memo for a child component.
    // Prevent unnecessary re-renders using useCallback and useMemo.
    // Modal implementation using React Portals.
    // Handle form validation manually (without libraries).
    // Implement Debouncing for an input field (fetch API after user stops typing).
    // Implement useThrottle hook.
    // Lazy load a component using React.lazy and Suspense.
    // Error handling in React using Error Boundaries.
    // Drag-and-drop Notes app.
    // TikTok UI clone (infinite scroll + video autoplay).
    // Memory Game.
