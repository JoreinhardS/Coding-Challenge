// function toWeirdCase(string){
//     let result = ''
//     for(i=0;i<string.length;i++){
//         if(i%2==0){
//             result += string[i].toUpperCase();
//         }
//         else{
//             result += string[i];
//         }
//     }
//     return result
// }

// const toWeirdCase = string => string.split('').map((char,index)=> index%2==0 ? char.toUpperCase() : char).join('')

// const toWeirdCase = string => string.split(' ')

// function toWeirdCase(string){
//     const newString = string.split(' ')
    
//     let result=''
//     for(i=0;i<newString.length;i++){
//         const newestString = (newString,i) => newString[i].split('').map((char,index)=> index%2==0 ? char.toUpperCase() : char).join('')
//         result += ` ${newestString(newString,i)}`
//     }
//     return result;
// }

function toWeirdCase(string){
    return string.split(' ').map(function(word){
        return word.split('').map(function(letter, index){
            return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
        }).join('');
    }).join(' ');
}

console.log(toWeirdCase('This'))