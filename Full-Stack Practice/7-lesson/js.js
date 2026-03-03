// function salom (){
//     console.log("salom Mirjalol");
// }
// salom();

// function qoshish (a, b){
//     return a + b;
// }
// console.log(qoshish(7,10));

// let ism = "Abdulazizov Mirjalol";

// function m(){
//     console.log(ism);
// }
// m();

// function test(){
//     let yosh = 20;
//     console.log(yosh);
// }
// test();

// let n = 10;

// function start(){
//     for(i = 1; i < 10; i++){
//         console.log(start)
//     }
// }

// for (i = 0; i < 5; i++){
//     console.log(i)
// }


// mevalar = ["olma","nok","hurmo","uzum"]
// // talabaMirjalol = 
// //     m = "Mirjalol",
// //     surname = "Abdulazizov",
// //     age = 18

// for (const m of mevalar) {
//     console.log(m,talabaMirjalol);
    
// }


let data = [
    {
        name: "Mirjalol",
        surname: "Abdulazizov",
        age: 18, 
        isMarried: false 
    },
    {
        name: "Javlon",
        surname: "Abduxaliqov",
        age: 18,
        isMarried: false
    },
    {
        name: "Abzalbek",
        surname: "Toshpo'latov",
        age: 27,
        isMarried: true
    }
]


for (const i of data) {
    console.log(`ismi ${i.name}, familya ${i.surname}, yoshi ${i.age}, holati: ${i.isMarried ? "Uylangan" : "Uylanmagan"}`);
}

