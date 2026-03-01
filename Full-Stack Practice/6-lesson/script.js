// function salom() {
//   console.log("Salom Mirjalol");
// }
// salom();

// function sum(a, b) {
//   return a * b;
// }
// console.log(sum(7, 8));

// function sum(m, r) {
//   return m + r;
// }
// let result = sum(10, 20);
// console.log(result);
// console.log(sum(10, 40));

// const sum = (a, b) => {
//   return a * b;
// };
// let result = sum(8,8)
// console.log(result)

// function powerA (a){
//     return a ** 3;
// }
// let result = powerA(3);
// console.log(result)

// function powerA234(a){
//     return console.log(`a ** 2 => ${a**2} a ** 3 => ${a ** 3} a ** 4 ${a ** 4}`)
// }
// powerA234(5)

// function Triangle(a) {
//   // a — tomon uzunligi
//   const P = 3 * a;
//   const S = (a * a * Math.sqrt(3)) / 4;
//   return { P, S };
// }

// // ---- Input ----
// const input = fs.readFileSync(0, "utf8").trim();
// const a = parseFloat(input);

// console.log("Perimetri:", P.toFixed(4));
// console.log("Yuzasi:", S.toFixed(4));

// function Triangle(a){
//     let p = 3 * a;
//     let s = a + a ** 2;
//     return {p,s}

//     }
// let natija = Triangle(5);
// console.log(natija)

function RectPS(x1, y1, x2, y2) {
  let a = Math.abs(x2 - x1);
  let b = Math.abs(y2 - y1);
  let p = 2 * (a + b);
  let s = a * b;
  return { p, s };
  
}

let r1 = RectPS(1, 2, 6, 8);
let r2 = RectPS(-3, 1, 2, 5);

console.log("1-rectangle:", r1);
console.log("2-rectangle:", r2);
