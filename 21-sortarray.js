// const sortArray = array => {
//     const result=[]
//     const oddNumber = array.filter(number => number%2 == 1).sort((a,b)=> a-b)
//     for(i=0,j=0;i<array.length;i++){
//         if(array[i]%2 === 0){
//             result.push(array[i]);
//         }
//         else{
//             result.push(oddNumber[j++]);
//         }
//     }
//     return result
// }

const sortArray = array => {
    const oddNumbers = array.filter(num => num % 2 !== 0).sort((a, b) => a - b);
    return array.map(num => num % 2 !== 0 ? oddNumbers.shift() : num);
}


console.log(sortArray([5, 3, 2, 8, 1, 4]))