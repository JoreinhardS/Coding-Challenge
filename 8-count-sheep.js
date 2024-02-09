// const countSheep = function (num){
//     let result = ''
//     for(i=0;i<num;i++){
//         result = result + (i+1) + ' sheep...'
//     }
//     return result
// }

// const countSheep = (num) => [...Array(num)].map((_,i) => ++i + 'sheep...').join('')

// const countSheep = num => [...Array(num).keys()].map(x=> `${x+1} sheep...`).join('') //jadi tujuan keys ini untuk ngambil nilai indexnya aja dari array

const countSheep = length => Array.from({length},(_,i) => ++i + 'sheep... ').join('')

console.info(countSheep(5))