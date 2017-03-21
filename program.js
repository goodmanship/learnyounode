let sum = 0;
process.argv.slice(2).forEach(arg => sum = sum + Number(arg))
console.log(sum);