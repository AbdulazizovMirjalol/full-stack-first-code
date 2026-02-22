function add(a, b) { return a + b; }
function sub(a, b) { return a - b; }
function mul(a, b) { return a * b; }

function div(a, b)
{
  if (b === 0) return "0 ga bo'lib bo'lmaydi";
  return a / b;
}

console.log(add(10, 5)); // 15
console.log(div(10, 0)); // "0 ga bo‘lib bo‘lmaydi"