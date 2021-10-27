const args = process.argv.splice(2);
const count = parseInt(args[0])
const results = []
const diceroller = function(){
for (let i = 0; i < count; i++) {
results.push(Math.floor(Math.random() * (6 - 1 + 1)) + 1);
}
}
diceroller()
console.log(results)