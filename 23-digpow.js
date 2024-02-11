function digpow(num){
    const digits = num.toString().split('').map(Number);
    const sum = digits.reduce((acc,digit,index) => acc + Math.pow(digit,index+1),0)
    return sum === num
}

function sumDigPow(a,b){
    const result=[]
    for(let i=a;i<=b;i++){
        if(digpow(i)){
            result.push(i)
        }
    }
    return result
}

console.log(sumDigPow(1, 100))