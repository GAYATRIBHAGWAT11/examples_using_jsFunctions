let a=0;
let b=1;
let c;
function fibbonacci(n){
    for(let i=1; i<=n; i++){
        console.log(a)
        c=a+b;
        a=b;
        b=c;
    }
    return a;
   
}
console.log(fibbonacci(7))