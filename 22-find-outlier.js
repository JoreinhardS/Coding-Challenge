function findOutlier(integers){
    const oddNumber = integers.filter(num => num%2 !== 0)
    const evenNumber = integers.filter(num => num%2 == 0)
    const result = oddNumber.length < evenNumber.length ? oddNumber[0] : evenNumber[0];
    return result;
}

console.log(findOutlier([0, 1, 2]))