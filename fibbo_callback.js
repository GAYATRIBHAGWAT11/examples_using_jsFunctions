// let a=0;
// let b=1;
 let c;
 function fibbonacci(n,a,b){
    if(n>0){    
        console.log(a)
        c=a+b;
         a=b;
         b=c;   
        return fibbonacci(n-1,a,b);  
    } 
    
   
}
console.log(fibbonacci(8,0,1));




// programme without recursion

//     for(let i=1; i<=n; i++){
//         console.log(a)
//         c=a+b;
//         a=b;
//         b=c;
//     }
//     return a;
   
// }
// console.log(fibbonacci(7))


    
    