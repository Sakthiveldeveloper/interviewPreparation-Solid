console.log('run coiding js')
// 1.reverse String
// function reverseString(input){
//     let reversedValue = '';
//     for(let i = input.length-1; i>=0; i--){
//         reversedValue += input[i]
//     }
//     return reversedValue
// }
// console.log(reverseString('sakthi'))
// 2.check palindrome
// function palindromeCheck(input){
//     let cleaedValue =  input.toLowerCase();
//     function revisedValue (inputRevise){
//         return inputRevise.split('').reverse().join('');
//     }
//     return cleaedValue == revisedValue(cleaedValue)
// }
// console.log(palindromeCheck('malayalam'))
// console.log(palindromeCheck('check'))
// 4.find larget number in Array
// function largestNumberFind(input){
//     let largestNumber = input[0];
//     for(let i =0; i<input.length; i++){
//         if(input[i]>largestNumber){
//             largestNumber = input[i]
//         }
//     }
//     return largestNumber;
// }
// console.log(largestNumberFind([1,2,88,11,22,66,21]))

// 6.remove the duplicates in Array
// function removeDuplicate(input){
//     // return [...new Set(input)]
//     // return input.filter((value, index, array)=>(array.indexOf(value)==index))
//     return input.reduce((acc, value) => (acc.includes(value)?acc: [...acc, value]),[])
// }
// console.log(removeDuplicate([1,2,3,4,1,2,3,4,1,2,6,7,8,5,5]))

// 7.count Each Character in String
// function CountEachChar(input){
//    let finalValue = {};
//    for(let e of input){
//     if(finalValue[e]){
//         finalValue[e]++
//     } else {
//         finalValue[e] = 1
//     }
//    }
//     return finalValue
// }
// console.log(CountEachChar('sakthi'))
// 8.anagrams
// function checkAnagram(i1, i2){
//     i1 = i1.replace(/\s+/g, '').toLowerCase()
//     i2 = i2.replace(/\s+/g, '').toLowerCase()
//     // let input1Sorted =  i1.split('').sort().join('');
//     // let input2Sorted =  i2.split('').sort().join('');
//     // return input1Sorted == input2Sorted
//     let input1Sort = {};
//     for(let e of i1){
//         input1Sort[e] = (input1Sort[e]|| 0) + 1;
//     }
//     // console.log(input1Sort)

//     for(let y of i2){
//         if(!input1Sort[y]){
//             return false 
//         }  else {
//             input1Sort[y] --
//         } 
//         return true
//     }
// }
// console.log(checkAnagram('listen', 'silent'))
// console.log(checkAnagram('try', 'silent'))
// function checkAnagram(i1, i2){
//     i1= i1.replace(/\s+/g, '').toLowerCase();
//     i2= i2.replace(/\s+/g, '').toLowerCase();
//     let i1Sorted= {};
//     for(let e of i1){
//         i1Sorted[e]=e
//     }
//     for(let y of i2){
//         if(!i1Sorted[y]){
//             return false 
//         }
//     return true
//     }
// }
// console.log(checkAnagram('test', 'rest'))
// console.log(checkAnagram('test', 'test'))
// console.log(checkAnagram('act', 'cat'))
// console.log(checkAnagram('silent', 'listen'))
// console.log(checkAnagram('sakthi', 'listen'))

// 9.fallaten Array
// function FlattenArray(inputArray){
//     let falttedArray = [];
//     for(let i =0;i<inputArray.length; i++){
//         if(Array.isArray(inputArray[i])){
//             falttedArray = falttedArray.concat(FlattenArray(inputArray[i]))
//         }else {
//             falttedArray.push(inputArray[i])
//         }
//     }
//     return falttedArray
// }
// console.log(FlattenArray([1,2,[3,4,[5,6]]]))
11.
// function findMissingNumber(input){
//     const n = input.length+1
//     const expectedValue = (n*(n+1))/2;
//     const assumedValue = input.reduce((acc, value)=>acc+value, 0)
//     return expectedValue - assumedValue
// }
// console.log(findMissingNumber([1,2,4,5]))
// 11.debouce 

// function debouce(func, delay){
//     let timer;
//     return function(...args){
//         clearTimeout(timer);
//         timer = setTimeout (()=>{
//             func.apply(this, args)
//         }, delay)
//     }
// }
// function getName(name){
//     console.log(`check name ${name}`)
// }
// const deboncer =  debouce(getName, 1000);
// deboncer('sakthi')

13.
// throttle
// function throttle (func, delay){
//     let lastcall = 0;
//     return function (...args){
//         let now = Date.now();
//         if(now-lastcall> delay){
//             func.apply(this, args);
//             lastcall = now;
//         }
//     }
// }
// function getData(name){
//     console.log(`check throttler ${name}`)
// }
// const throttler = throttle(getData, 1000);
// throttler('sa')
// 14.  deep clne
// const data = {
//     'name': 'sakthi',
//     'age':27
// }
// function DeepClone(input){
//     return JSON.parse(JSON.stringify(input))
// }
// console.log(data)
// const copyData = DeepClone(data)
// copyData.name = 'ru'
// console.log(copyData)

// 16. check intersection of both arrays
// function intersectionCheck(input, input2){    
//     return input.filter((value)=> input2.includes(value))
// }
// console.log(intersectionCheck([1,2,3], [2,3,4]))

// 17.
// function CheckObjectKeys(obj1, obj2){
//     if(obj1 == obj2) return true;
//     const keys1 = Object.keys(obj1);
//     const keys2 = Object.keys(obj2);
//     for (let keys of keys1){
//         if(!keys2.includes(keys)){
//             return false
//         }
//     }
//         return true
// }
// const a = { name: "Sakthi", address: { city: "Chennai" } };
// const b = { name: "Sakthi", location: { down: "Chennai" } };
// console.log(CheckObjectKeys(a, b))
// 18.Implement a function to check if an object is empty.
// function checkObjectEmpty(input){
//     return Object.keys(input).length === 0 
// }
// console.log(checkObjectEmpty({'name':'sakthi'}))
// console.log(checkObjectEmpty({}))
// 19.Implement a function that fetches data from an API and logs it using async/await.
// async function fetchData(url){
// try{
//     const response  = await fetch(url);
//     const data = await response.json();
//     console.log(data)
//     return data
//     } catch (error){
//         console.log(`error is ${error}`)
//     }
// }
// console.log(fetchData("https://jsonplaceholder.typicode.com/posts/1"))
// 20.Implement a function that fetch as post data in js
// async function postData(url, payload){
//     try {
//         const response = await fetch(
//             url, {
//                 'method':'POST',
//                 'header':{
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(payload)
//             }
//         )
//         const  data = await response.json();
//         console.log(data)
//     }catch(err){
//         console.log(err)
//     }
// }


// postData("https://jsonplaceholder.typicode.com/posts", {
//   title: "Hello",
//   body: "This is a POST request",
//   userId: 1
// });
// 5.Find the second largest number in an array.
// function findSecondLargest (input){
//     let first = -Infinity;
//     let second = -Infinity;
//     for(let a of input){
//         if(a>first){
//             second = first;
//             first = a
//         } else if (a>second && first > a) {
//             second = a
//         }
//     }
//     return second === -Infinity ? null : second
// }
// console.log(findSecondLargest([1,22,6,131,76,54]))

// 15.Sort an array without using sort().
// function sortArray(arr) {
//   let n = arr.length;

//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         // swap arr[j] and arr[j+1]
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }

//   return arr;
// }

// // Example:
// console.log(sortArray([5, 2, 9, 1, 5, 6])); 
// // Output: [1, 2, 5, 5, 6, 9]

// 21.Implement a function to get query parameters from a URL.
// function getQueryParams(url) {
//   const params = {};
//   const queryString = url.split('?')[1];  // Get the part after '?'
//   if (!queryString) return params;

//   const searchParams = new URLSearchParams(queryString);

//   for (const [key, value] of searchParams.entries()) {
//     params[key] = value;
//   }

//   return params;
// }

// // Example:
// const url = "https://example.com/page?name=John&age=25&city=Chennai";
// console.log(getQueryParams(url));
// // Output: { name: "John", age: "25", city: "Chennai" }

// 22.Create a function that returns the Fibonacci sequence up to N.
// function fibonacci(n) {
//   if (n <= 0) return [];
//   if (n === 1) return [0];
//   if (n === 2) return [0, 1];

//   let seq = [0, 1];
//   for (let i = 2; i < n; i++) {
//     seq.push(seq[i - 1] + seq[i - 2]);
//   }
//   return seq;
// }

// // Example:
// console.log(fibonacci(1)); // [0]
// console.log(fibonacci(5)); // [0, 1, 1, 2, 3]
// console.log(fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// Implement Array.prototype.myMap() without using map().
// Array.prototype.myMap = function(callback, thisArg) {
//   if (typeof callback !== "function") {
//     throw new TypeError(callback + " is not a function");
//   }

//   let result = [];
//   for (let i = 0; i < this.length; i++) {
//     // only process if the index exists (to handle sparse arrays)
//     if (i in this) {
//       result.push(callback.call(thisArg, this[i], i, this));
//     }
//   }
//   return result;
// };

// // Example:
// const numbers = [1, 2, 3, 4];
// const doubled = numbers.myMap(num => num * 2);

// console.log(doubled); // [2, 4, 6, 8]
