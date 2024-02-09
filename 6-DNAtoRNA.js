// function DNAtoRNA(dna) {
//     let result = ''
//     for(let i=0;i<dna.length;i++){
//         if(dna[i] === 'T'){
//             result += 'U'
//         }
//         else{
//             result += dna[i]
//         }
//     }
//     return result
// }

// function DNAtoRNA(dna){
//     return dna.split('').map((el) => el === 'T' ? 'U' : el).join('') //disini split itu untuk memechkan dna menjadi array, terus di mapping itu maksudnya dibuat array baru dengan fungsi dan parameter tertentu baru di join lagi
// }

// const DNAtoRNA = (dna) => dna.split('').map((el) => el == 'T' ? 'U' : el).join('')

const DNAtoRNA = (dna) => dna.replace("T/g","U"); // /g itu untuk biar semuanya di replace, kalo ga cuma T yang paling depan di replace. g means global

console.info(DNAtoRNA('TTTT'))


