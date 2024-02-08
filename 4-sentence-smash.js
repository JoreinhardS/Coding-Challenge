// function smash (words) {
//     return words.join('  ') //join itu untuk menggabungkan semua value pada array menggunakan sebuah delimiter
// };

const smash = (words) => words.join(' ');

// function smash(words){
//     let result = '';
//     for(let i=0;i<words.length;i++){
//         result += words[i];
//         if(i != words.length -1){
//             result += ' '
//         }
//     }
//     return result
// }

console.log(smash(["hello", "world"]))