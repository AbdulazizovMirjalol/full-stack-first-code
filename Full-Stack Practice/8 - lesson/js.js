function greet (name,age){
    let result = `Salom mening ismim ${name}, va yoshim ${age} da`;
    return  result
}
console.log(greet("Mirjalol",19));

function maxOFTWO(A,B){
    if (A>B){
        return A;
    }else if(A == B){
        return A * B;   
    }else{
        return B;
    }
}

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




