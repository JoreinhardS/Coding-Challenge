// const arrayPlusArray = (arr1, arr2) => [...arr1, ...arr2].reduce((acc,curr) => acc+curr)

const arrayPlusArray = (arr1, arr2) => arr1.concat(arr2).reduce((acc,curr) => acc + curr)

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))