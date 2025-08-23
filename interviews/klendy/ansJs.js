console.log('klendy interview preparation')

// 1. Reverse String without Reverse
// function ReverseString(InputParams){
//     // let reversedValue = '';
//     // for(let i = InputParams.length-1; i>=0; i--){
//     //     reversedValue += InputParams[i]
//     // }
//     // return reversedValue
//     return InputParams.split('').reverse().join('');
// }
// console.log(ReverseString('Sakthi'))

// 2.palindrome
// function CheckPalindrome(InputParams){
//     let CleanedValue = InputParams.toLowerCase();
//     function reversedValue (reverseParams){
//         let finalValue = '';
//         for(let i = reverseParams.length-1; i>=0; i--){
//             finalValue += reverseParams[i]
//         }
//         return finalValue
//     }
//     return CleanedValue === reversedValue(CleanedValue)
// }
// console.log(CheckPalindrome('sakthi'))
// console.log(CheckPalindrome('malayalam'))

// 3.remove Duplicate from array
// function removeDuplicate(InputParams){
//     // return [...new Set(InputParams)]
//     // return InputParams.filter((value, index, array)=> (array.indexOf(value)== index))
//     return InputParams.reduce((acc, value)=>(acc.includes(value)? acc: [...acc, value]),[])
// }
// console.log(removeDuplicate([1,2,3,2,3,1,4,5,6,]))

// 4.find largst Number in the Array
// function largestNumber(InputParams){
//     let largestValue = InputParams[0];
//     for(let e of InputParams){
//         if(largestValue<e){
//             largestValue = e
//         }
//     }
//     return largestValue
// }
// console.log(largestNumber([1,234,3,4,22,87]))

// 5.Find Second largest Nujmber in the array
// function secondLargest(InputParams){
//     // let largestValue = InputParams[0];
//     // let secondLargestNumber = '';
//     // for(let e of InputParams){
//     //     if(largestValue<e){
//     //         largestValue = e
//     //     }else if(e>secondLargestNumber && e<largestValue){
//     //         secondLargestNumber = e
//     //     }
//     // }
//     // return secondLargestNumber
//     let largestValue = -Infinity;
//     let secondLargestValue = -Infinity;
//     for(let a of InputParams){
//         if(a>largestValue){
//             secondLargestValue =largestValue
//             largestValue =a;
//         } else if(a>secondLargestValue&&a<largestValue){
//             secondLargestValue= a;
//         }
//     }
//         return secondLargestValue === -Infinity ? null : secondLargestValue

// }
// console.log(secondLargest([1,234,3,4,2227]))

// 6.Find the third maximum number in an array.
// function thirdLargestNum(InputParams){    
//     let firstLargest = -Infinity;
//     let secondLargest = -Infinity;
//     let thirdLargest = -Infinity;
//     for(let num of InputParams){
//         if(num>firstLargest){
//             thirdLargest = secondLargest;
//             secondLargest = firstLargest;
//             firstLargest = num;
//         }else if(num> secondLargest && num<firstLargest){
//             thirdLargest= secondLargest;
//             secondLargest =num
//         } else if (num> thirdLargest&& num<secondLargest && num<firstLargest){
//             thirdLargest =num
//         }
//     }
//     return thirdLargest === -Infinity ? null : thirdLargest
// }
// console.log(thirdLargestNum([1,672,665,113,73]))

// 7.Character Counts
// function CharacterCount(InputParams){
//     let finalValue ={};
//     for(let e of InputParams) {
//         if(finalValue[e]){
//             finalValue[e]++;
//         }else {
//             finalValue[e] = 1
//         }
//     }
//     return finalValue
// }
// console.log(CharacterCount('sakthivel is a developer'))

// 8.Check anagram
// function Anagram(InputParams1, InputParams2){
//     InputParams1 = InputParams1.replace(/\s+/g,'').toLowerCase();
//     InputParams2 = InputParams2.replace(/\s+/g,'').toLowerCase();
//     // let input1SortValue = InputParams1.split('').sort().join('');
//     // let input2SortValue = InputParams2.split('').sort().join('');
//     // return input1SortValue == input2SortValue
//     let input1SortValue = {};
//     for(let i of InputParams1){
//         // input1SortValue[i] = i
//         input1SortValue[i] = (input1SortValue[i]||0)+1

//     }
//     for(let s of InputParams2){
//         if(!input1SortValue[s]){
//             return false
//         }
//         input1SortValue[s]--
//     }
//     return true
// }
// console.log(Anagram('sakthi','ram'))
// console.log(Anagram('cat','act'))
// console.log(Anagram('listen','act'))
// console.log(Anagram('listen','silent'))

// 9.Mising number N-1
// function MissingNumber(value){
//     let n = value.length+1;
//     let expectedValue = (n*(n+1)/2);
//     let assumedValue = value.reduce((acc, value)=>(acc+value))
//     return expectedValue -assumedValue
// }
// console.log(MissingNumber([1,2,4,5,6]))

// 10.Flatten Array
// function flattenArray(InputParams){
//     let flattedArray = [];
//     for(let i =0; i<InputParams.length; i++){
//         if(Array.isArray(InputParams[i])){
//             flattedArray = flattedArray.concat(flattenArray(InputParams[i]))
//         } else {
//             flattedArray.push(InputParams[i])
//         }
//     }
//     return flattedArray
// }
// console.log(flattenArray([1,2,[3,4,[5,6]]]))

// 11.object intersection 
// function findInterSEction(arra1, ara2){
//     let set1 = new Set(arra1);
//     let result =[];
//     for(let a of ara2){
//         if(set1.has(a)){
//             result.push(a);
//             set1.delete(a);
//         }
//     }
//     return result;
// }
// console.log(findInterSEction([1,2,3,4],[1,2,3,4,5,6,7]))

// 12.object deep eqal
// function deepEqual(obj1, obj2){
//     let keys1 =Object.keys(obj1);
//     let keys2 =Object.keys(obj2);

//     for(let a of keys1){
//         if(!keys2.includes(a)){
//             return false
//         }
//     }
//     return true
// }
// console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })); // true
// console.log(deepEqual({ a: 1, b: 2,c: 1 }, { a: 1, b: 3 }));               // false
// console.log(deepEqual([1, 2, [3]], [1, 2, [3]]));     

13.
// Implement a function to check if an object is empty.
// function CheckobjectEmpty(InputParams){
//     return Object.keys(InputParams).length === 0
// }

// console.log(CheckobjectEmpty({}))
// console.log(CheckobjectEmpty({c:12}))

// 14.Implement a deep clone of an object.
// function DeepClone(obj1){
//     return JSON.parse(JSON.stringify(obj1))
// }
// console.log(DeepClone({"name":"sakthi"}))

// 15.sort array without sort


// Implement a debounce function.
// 16. debounce fdu
// function debounce (func, delay){
//     let timer;
//     return function(...args){
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             func.apply(this, args)
//         }, delay);
//     }
// }

// function getName(name){
//     console.log(`name of functio n ${name}`)
// }
// const debouncer = debounce(getName, 3000);
// console.log(debouncer('sakthi'))

17.
// 17.Implement a throttle function.
// function throttle (func, delay){
//      let lastcall = 0;
//     return function (...args){
//         let now = Date.now();
//         if(now-lastcall> delay){
//             func.apply(this, args);
//             lastcall = now;
//         }
//     }
// }

// function getName(name){
//     console.log(`name of functio n ${name}`)
// }
// const throttler = throttle(getName, 3000);
// console.log(throttler('rupi'))'

// 18. fetch data from API
// async function fetchData(url) {
//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log(data)
//         return data
//     } catch (err) {
//         console.log(`this is error ${err}`)
//     }
// }

// console.log(fetchData('https://jsonplaceholder.typicode.com/posts/1'))

// 19.POST data using fetch + async/await.
// async function postFetch(url, payload){
//     const response =  await fetch(url,{
//         'method': 'POST',
//         'headers':{
//             'Content-type':'application/json'
//         },
//         'body': JSON.stringify(payload)
//     });
//     const result = await response.json()
//     console.log(result);
// }
// postFetch("https://jsonplaceholder.typicode.com/posts", {
//   title: "Hello",
//   body: "This is a POST request",
//   userId: 1
// });

20.