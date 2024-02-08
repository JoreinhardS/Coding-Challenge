function grow(x){
    let total = x[0];
    for(let i=1;i< x.length;i++){
        total = total*x[i];
    }
    return total;
}

console.log(grow([1,2,3,4]));