// // function salom (){
// //     console.log("salom Mirjalol");
// // }
// // salom();

// // function qoshish (a, b){
// //     return a + b;
// // }
// // console.log(qoshish(7,10));

// // let ism = "Abdulazizov Mirjalol";

// // function m(){
// //     console.log(ism);
// // }
// // m();

// // function test(){
// //     let yosh = 20;
// //     console.log(yosh);
// // }
// // test();

// // let n = 10;

// // function start(){
// //     for(i = 1; i < 10; i++){
// //         console.log(start)
// //     }
// // }

// // for (i = 0; i < 5; i++){
// //     console.log(i)
// // }

// // mevalar = ["olma","nok","hurmo","uzum"]
// // // talabaMirjalol =
// // //     m = "Mirjalol",
// // //     surname = "Abdulazizov",
// // //     age = 18

// // for (const m of mevalar) {
// //     console.log(m,talabaMirjalol);

// // }

// let data = [
//     {
//         name: "Mirjalol",
//         surname: "Abdulazizov",
//         age: 18,
//         isMarried: false
//     },
//     {
//         name: "Javlon",
//         surname: "Abduxaliqov",
//         age: 18,
//         isMarried: false
//     },
//     {
//         name: "Abzalbek",
//         surname: "Toshpo'latov",
//         age: 27,
//         isMarried: true
//     }
// ]

// // for (const i of data) {
// //     console.log(`ismi ${i.name}, familya ${i.surname}, yoshi ${i.age}, holati: ${i.isMarried ? "Uylangan" : "Uylanmagan"}`);
// // }

// // let str1 = "Axror";
// // let str2 = 'Salom, O\'zbekiston';
// // console.log(str2);

// // let str3 = `Salom ${str2}`;
// // console.log(str3);

// // let str4 = 123;
// // let str5 = String(str4);
// // console.log(typeof str5);
// // let str6 = "Javascript";
// // console.log(str6. length);

// // let str7 = "Salom Dunyo";
// // console.log(str7.indexOf("Dunyo"));
// // console.log(str7.lastIndexOf("o"));
// // console.log(str7.includes("Salom"));
// // console.log(str7.startsWith("Dunyo"));
// // console.log(str7.endsWith("yo"));
// // console.log(str7.search("m"));

// // function fun1(a, b) {
// //   let result = a.indexOf(b);
// //   if (result === -1) {
// //     return "Mavjud emas"
// //   } else {
// //     return result
// //   }
// // }
// // console.log(fun1("Salon","al"));

// let ism = "Mirjalol Abdulazizov";

// console.log(ism.toUpperCase());
// console.log(ism.toLowerCase());
// console.log(ism.trim());
// console.log(ism.trimStart());
// console.log(ism.trimEnd());
// console.log(ism.replace("M", 7));
// console.log(ism.replaceAll("A", 1));

function almashtirish (a,s,d){
    return  a.replace(s,d)
}
console.log(almashtirish("Salom mening ismim Azamat !","Azamat","Mirjalol"))
