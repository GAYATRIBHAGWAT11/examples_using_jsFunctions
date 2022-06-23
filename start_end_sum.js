function sum(a, b){
    if(b>=a){
        return  b+ sum(a, b-1)

    }else{
        return 0;
    }
  

}
console.log(sum(5, 10))