const positiveSum = arr => arr.filter(arr => arr >0).reduce((acc,curr) => acc + curr,0)


console.log(positiveSum([]))