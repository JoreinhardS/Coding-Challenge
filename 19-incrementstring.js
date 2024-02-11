const incrementString = str => /\d+$/.test(str) ? str.replace(/\d+$/,match => String(parseInt(match) + 1).padStart(match.length,'0')) : str + '1';

console.log(incrementString("foobar000"))