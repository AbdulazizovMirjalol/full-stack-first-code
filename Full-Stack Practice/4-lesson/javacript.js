// alert("Salom dunyo!");
// let ism  = "Mirjalol";
// let familya = "Abdulazizov";
// let yosh = 18;
// console.log(ism,familya);
// console.log(yosh);

// let mirjalolName = "Mirjalol";
// console.log(mirjalolName);

// let age = Number(prompt("Yoshingizni kriting: "));

// if (age >= 18){
//     console.log("Siz voyaga yetgansiz!")
// }

// else
//     if (age >= 16 && age <= 18)
//     {
//         console.log("siz balog'atga yetgansiz!");
//     }
//     if (age >= 100)
//     {
//         console.log("Siz juda ulug' yoshdasiz! sizga yanada ko'p umiz tilayman!")
//     }
//     else{
//         console.log("Siz balog'atga yetmagansiz!");
//     }

// let a = 18, b = 20;

// if (a !== b){
//     console.log(a + b)
// }
// else{
//     a = 0 
//     b = 0
//     console.log(a,b)
// }

// let x = Number(prompt("Ixtiyori son kriting: "));
// let y = Number(prompt("Ixtiyorish son kriting: "));

// if (x === 0 && y === 0){
//     console.log(0);
// }
// else if (x !== 0 && y === 0){
//     console.log(1);
// }else if (x === 0 && y !== 0){
//     console.log(2);
// }else {
//     console.log(3);
// }

// let x = Number(prompt("Ixtiyoriy son kiriting: "));
// let y = Number(prompt("Ixtiyoriy son kiriting: "));

// if (x === 0 && y === 0) {
//   console.log(0);
// } else if (x !== 0 && y === 0) {
//   console.log(1);
// } else if (x === 0 && y !== 0) {
//   console.log(2);
// } else {
//   console.log(3);
// }


// //Ternary
// let age = 18;
// console.log (age >= 18 ? "Voyaga yetgansiz!" : "Voyaga yetmagansiz!")

// let kun = Number(prompt("Hafta sonini kriting: "));

// switch(kun % 7){
//     case 1:
//         console.log("Duyshanba")
//         break;
//     case 2:
//         console.log("Seyshanba")
//         break;
//     case 3:
//         console.log("Chorshanba")
//         break;
//     case 4:
//         console.log("Payshanba")
//         break;
//     case 5:
//         console.log("Juma")
//         break;
//     case 6:
//         console.log("Shanba")
//         break;
//     case 0:
//         console.log("Yakshanba")
//         break;
//     default: 
//         console.log("Bunday kun yo'q")
//         break;
// }


let k = 7, n = 15;

for(let i = 1; i <= n; i++){
    console.log(`${i} - martta => `,k);
}