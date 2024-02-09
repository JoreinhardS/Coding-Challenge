// const makeNegative = num => num.toString()[0] === '-' ? num : num*(-1) 

// const makeNegative = num => num < 0 ? num : -num

const makeNegative = num => -Math.abs(num)

console.log(makeNegative(3));