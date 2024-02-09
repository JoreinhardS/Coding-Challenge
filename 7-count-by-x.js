// function countBy(x, n) {
//     let z = [];
//     for(let i=0;i<=n-1;i++){
//         z.push((i+1)*x)
//     }
//     return z;
// }

// const countBy = (x,n) => [...Array(n)].map((_,i) => (i+1)*x);

const countBy =(x,n) => [...Array(n)].map((_,i) => ++i * x);

console.info(countBy(1,10))
console.info(countBy(2,5))