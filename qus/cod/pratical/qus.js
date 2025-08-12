console.log('coding questions');
// 1.reverse string
// function reverseString(inputReceived){
//     return inputReceived.split('').reverse().join('')
// }
// console.log(reverseString('java'))
// withour inbuild function 
// function reverseStringWithoutInbuild(params){
//     let revisedValue = '';
//     for(let i = params.length-1; i>=0; i--){
//         revisedValue += params[i]
//     }
//     return revisedValue;
// }
// console.log(reverseStringWithoutInbuild('check java'))

// 2.Check if a string is a palindrome.
// function checkPalindrome(inputParams){
//     let cleaedValue =  inputParams.toLowerCase();
//     function reverseValues(input){
//         return input.split('').reverse().join('')
//     }
//     const revisedValue = reverseValues(cleaedValue);
//     return cleaedValue == revisedValue
// }
// console.log(checkPalindrome('malayalam'))
// console.log(checkPalindrome('ramya'))

// 3.Find the factorial of a number (iterative and recursive).



// 4.Find the largest number in an array.

// function findLargestNumber(input){
//     let largestNum = input[0];
//     for(let i = 1; i<input.length; i++){
//         if(input[i]>largestNum){
//             largestNum = input[i]
//         }
//     }
//     return largestNum
// }
// console.log(findLargestNumber([10,22,77,2121,1,4,2,6]))

// 5.Find the second largest number in an array.




// 6.Remove duplicates from an array.

// Set
// function removeDuplicate(inputParams){
//     return [...new Set(inputParams)]
// }
// console.log(removeDuplicate([1,2,1,2,3,4,5,6,3,4,8,1,2]))
// filter and indexof
// function removeDuplicateFilter(inputParams){
//     return inputParams.filter((i,index,array)=>(array.indexOf(i)== index))
// }
// console.log(removeDuplicateFilter([1,2,3,4,5,6,1,2,3,8,9,0]))

// reduce
// function removeDupWithReduce(input){
//     return input.reduce((acc,cvalue)=>(acc.includes(cvalue)?acc : [...acc,cvalue]),[])
// }

// console.log(removeDupWithReduce([1,2,3,4,5,1,2,3,89,7,]))

// 7.Count the occurrences of each character in a string.
// function checkCharacterCont(inputParams){
//     let frequenctMap = {};
//     for (const element of inputParams) {
//         if(frequenctMap[element]){
//             frequenctMap[element]++;
//         } else {
//             frequenctMap[element] = 1
//         }
//     }
//     return frequenctMap
// }
// console.log(checkCharacterCont('sakthi is my name and i am a developer'))

// 8.Check if two strings are anagrams of each other.
// function checkAnagram(inputParams1, inputParams2){
//     inputParams1 = inputParams1.replace(/\s+/g, '').toLowerCase();
//     inputParams2 = inputParams2.replace(/\s+/g, '').toLowerCase();
//     if(inputParams1.length !== inputParams2.length){
//         return false
//     }

//     return inputParams1.split('').sort().join('') === inputParams2.split('').sort().join('')
// }
// console.log(checkAnagram('try', 'run'))
// console.log(checkAnagram('cat', 'act'))

// function checkAnagramWithoutinbuild(inputParams1, inputParams2){
//     inputParams1 = inputParams1.replace(/\s+/g, '').toLowerCase();
//     inputParams2 = inputParams2.replace(/\s+/g, '').toLowerCase();
//     if(inputParams1.length !== inputParams2.length){
//         return false
//     }
//     let charCount = {};
//     for (const element of inputParams1) {
//         charCount[element] = (charCount[element] || 0) + 1;
//     }
//     for (const element of inputParams2) {
//         if(!charCount[element]){
//             return false
//         }
//         charCount[element]--;
//     }
//     return true;
// }

// console.log(checkAnagramWithoutinbuild('silent', 'listen'))

// 9.Flatten a nested array (e.g., [1, [2, [3, 4]]] → [1, 2, 3, 4]).
// function FlattenArray (inputArray){
//     let finalArray = [];
//     for (let i = 0; i < inputArray.length; i++) {
//        if(Array.isArray(inputArray[i])){
//         finalArray = finalArray.concat(FlattenArray(inputArray[i]))
//        }else{
//         finalArray.push(inputArray[i])
//        }
//     }
//        return finalArray
// }

// console.log(FlattenArray([1,2,[3,4,[5]],6,7,[8,9]]))

// 10.FizzBuzz problem (1–100, multiples of 3 = "Fizz", 5 = "Buzz").

// 11.Find the missing number in an array of 1–N.
// function findMissingNumber(input){
//     const n =  input.length+1;
//     const expectednumber = (n*(n+1))/2;
//     const assumedNumber = input.reduce((acc, value)=>acc+value, 0)
//     return expectednumber - assumedNumber;
// }
// console.log(findMissingNumber([1,2,4,5]))

// 12.Implement a debounce function.
// function debounce(func, delay){
//     let timeOutId;
//     return function(...args){
//         clearTimeout(timeOutId);
        
//         timeOutId = setTimeout(()=>{
//             func.apply(this, args);
//         }, delay)
//     }
// }

// function handleSearchInput(event){
//     console.log(`searching for:`, event.target.value)
// }

// const debounceSearch = debounce(handleSearchInput, 500);
// const serachInput = document.getElementById('sear4chInput');
// if(serachInput){
//     serachInput.addEventListener('input', debounceSearch)
// }

// 13.Implement a throttle function.
// function throttle(func, delay) {
//   let inThrottle; // Flag to indicate if the function is currently throttled

//   return function(...args) {
//     const context = this; // Preserve the 'this' context

//     if (!inThrottle) {
//       func.apply(context, args); // Execute the function immediately
//       inThrottle = true; // Set the flag to true

//       setTimeout(() => {
//         inThrottle = false; // Reset the flag after the delay
//       }, delay);
//     }
//   };
// }

// 14.Implement a deep clone of an object
// function deepcloneObje(inputObj){
//     return JSON.parse(JSON.stringify(inputObj))
// }

// 15.Sort an array without using sort().


// 16.Find the intersection of two arrays.
// function intersectionAreray(array1, array2){
//     return array1.filter((i)=>(array2.includes(i)))
// }
// console.log(intersectionAreray([1,2,3,4], [3,4,5,6,7]))

//17. Implement a function to check if two objects are deeply equal.
// function findDeeplyObjEqual(obj1, obj2){
//     if(obj1 === obj2){
//         return true
//     }
//     if( typeof obj1 !=='object' || obj1 !== null || 
//         typeof obj2 !=='object' || obj2 !== null
//     ) {
//         return false
//     }

//     const obj1Keys=  Object.keys(obj1);
//     const obj2Keys=   Object.keys(obj2);
//     if(obj1Keys.length() !== obj2Keys.length()){
//         return false;
//     }

//     return true
// }
// function deepEqual(obj1, obj2) {
//   // Strict equality check: handles primitives, null, and same object reference
//   if (obj1 === obj2) {
//     return true;
//   }

//   // Check if both are objects and not null
//   if (typeof obj1 !== 'object' || obj1 === null ||
//       typeof obj2 !== 'object' || obj2 === null) {
//     return false;
//   }

//   // Get keys of both objects
//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);

//   // Check if they have the same number of keys
//   if (keys1.length !== keys2.length) {
//     return false;
//   }

//   // Iterate over keys and recursively compare values
//   for (const key of keys1) {
//     if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
//       return false;
//     }
//   }

//   // If all checks pass, objects are deeply equal
//   return true;
// }

// // Example Usage:
// const person1 = {
//   name: "Alice",
//   age: 30,
//   address: {
//     street: "123 Main St",
//     city: "Anytown"
//   }
// };

// const person2 = {
//   name: "Alice",
//   age: 30,
//   address: {
//     street: "123 Main St",
//     city: "Anytown"
//   }
// };

// const person3 = {
//   name: "Bob",
//   age: 25,
//   address: {
//     street: "456 Oak Ave",
//     city: "Othertown"
//   }
// };

// const person4 = {
//   name: "Alice",
//   age: 30,
//   address: {
//     street: "123 Main St",
//     city: "Anytown",
//     zip: "12345" // Extra property
//   }
// };
// console.log(deepEqual(person1, person2))

// 18.Implement a function to check if an object is empty.
// function checkEmptObj(obj){
//     if(typeof obj !== 'object' || obj === null){
//         return false;
//     }

//     return  Object.keys(obj).length=== 0;

// }

// const emptyObj = {};
// const nonEmptyObj = { a: 1 };
// const array = []; 

// console.log(checkEmptObj(emptyObj))
// console.log(checkEmptObj(nonEmptyObj))

// 19.Implement a function that fetches data from an API and logs it using async/await.
// async function getDataAsyn(url) {
//    try {
//      const response = await fetch(url) ;
//     const result = await response.json();
//     console.log(`Fetched Data ${result}`, result);
//    } catch(error){
//     console.error(`
//         Error is ${err.message}`)
//    }
// }

// 20.Implement a function that fetch as post data in js
// async function postData(url, payload){
//     try{
//         const response = await fetch(url, {
//             method: 'POST',
//             headers:{
//                 'content-type':'application/json'
//             },
//             body: JSON.stringify(payload)
//         })

//         const result = await response.json();
//         console.log(`final result is ${result}`)
//     }
// }
// 21.Implement a function to get query parameters from a URL.