
let str = "(th(i(th(takni)c)u)uter)";

console.log(str.length);
let arr = str.split('');
let a = []
let aa, ab;

for (let j = 1; j <= 4; j++) {
  aa = arr.indexOf(")");
  ab = arr.lastIndexOf('(')
  a = [];

  for (let i = arr.indexOf(")") - 1; i >= arr.lastIndexOf('(') + 1; i--) {
    a.push(arr[i])
  }

  arr.splice(arr.lastIndexOf("(") + 1, arr.indexOf(")") - arr.lastIndexOf('(') - 1, a);
  arr = arr.flat()

  arr.splice(arr.indexOf(")"), 1);
  arr.splice(arr.lastIndexOf('('), 1);
}
str = arr.join("").toString();
console.log(str);
console.log(arr.length, "sss");

// (th(i(th(takni)c)u)uter)
// (th(i(thinkatc)u)uter)
// (th(ictaknithu)uter)
// (thuthinkatciuter)
// retuictaknihtuht