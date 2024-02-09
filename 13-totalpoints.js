// const points = (games) => [...games].map((el,i) => el[0] > el[2] ? 3 : (el[0] == el[2] ? 1 : 0)).reduce((acc,cur) => acc+cur)

const points = g => g.reduce((a, [x, _, y]) => a + (x > y ? 3 : x == y), 0)

console.log(points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]))