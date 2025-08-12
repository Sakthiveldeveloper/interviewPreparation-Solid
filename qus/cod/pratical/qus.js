console.log('coding questions');
// 1.reverse string
function reverseString(inputParams){
    return inputParams.split("").reverse().join('');
}
console.log(reverseString('sakthi'))
function reverseStringWithFor(params){
   let finalValue = "";
   for(let i = params.length-1; i>=0; i--) {
    finalValue += params[i]
   }
   return finalValue;
}
console.log(reverseStringWithFor('checdk'))