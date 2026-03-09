// function greet (name,age){
//     let result = `Salom mening ismim ${name}, va yoshim ${age} da`;
//     return  result
// }
// console.log(greet("Mirjalol",19));

// function maxOFTWO(A,B){
//     if (A>B){
//         return A;
//     }else if(A == B){
//         return A * B;   
//     }else{
//         return B;
//     }
// }

console.log(maxOFTWO(10,10));
console.log(maxOFTWO(234,4643));

function sumTo(n){
    let sum = 0
    for (let i = 1; i <= n; i++){
        sum += i;
    }
    return sum;
}
console.log(sumTo(10));


function maxTwo(a,b){
    if (a > b){
        return a;
    }else if(a == b){
        return a * b;
    }else{
        return b;
    }
}
console.log(maxTwo(150,150));
console.log(maxTwo(150,10));
console.log(maxTwo(10,50));

// function validate(email, password) {
//   if (typeof email !== "string" || typeof password !== "string") {
//     return { ok: false, message: "Email va parol matn (string) bo'lishi kerak." };
//   }

//   // Email ichida @ bo'lishi shart
//   if (!email.includes("@")) {
//     return { ok: false, message: "Emailda @ belgisi bo'lishi kerak." };
//   }

//   // Password uzunligi 8 dan kam bo'lmasin
//   if (password.length < 8) {
//     return { ok: false, message: "Parol kamida 8 ta belgidan iborat bo'lishi kerak." };
//   }

//   return { ok: true, message: "Hammasi to'g'ri " };
// }

// // Misollar:
// console.log(validate("testgmail.com", "12345678")); // email xato
// console.log(validate("test@gmail.com", "1234"));    // parol xato
// console.log(validate("test@gmail.com", "12345678"));// ok


function two(n){
  let sum = 0;
  for (let i = 1; i <= n; i++){
    sum += i;
  }
  return sum
}
console.log(two(10));
