function grow(x){
    let total = x[0];
    for(i=0;i<=x.length;i++){
    total = total*x;
    return total;
    }
}

console.log(grow([1,2,4,5]));