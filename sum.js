function sum(n)
    {
        if(n>0){ 
            //10 + sum(9)
            // 10 + ( 9 + sum(8) )
           // 10 + ( 9 + ( 8 + sum(7) ) )
         // ...
        // 10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 + sum(0)
       // 10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 + 0
            return n + sum(n - 1)                      
        }else{
            return 0;
        }
    }
    console.log(sum(10))
