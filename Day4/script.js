// Day 4 Loops

// Activity 1  For Loop
    // Task 1   print numbers from 1 to 10
    for(num=1; num<=10; num++){
        console.log(num)
    }
    // console.log(num)

    // Task 2 maltilication table of five
    function Table5() {
        let five = 1;
        for(five; five<=10; five++){
          let final =   five*5;
            let fiv = 5;
          console.log(fiv + " " + " *  " + five + " " + "  =  " + final)
        }
    }

    Table5();


// Activity 2 While Loop
    // Task 3 
    function sum() {
        let number = 1;
        let s = 0;
        while (number<=10) {

              s =s+ number 
            number++;
        }
        console.log("Sum:",s);
    }
    

    sum();


        // task 4 print numbers from 10 to 1 

        let rev = 10;
        let resu ='';
        while(rev>=1){
            resu = resu + rev + " ";
            rev--;
        }
        console.log(resu.trim());



// Activity 3 Do...While Loop 
        // Task 5 print 1 to 5 

        let f = 1;
        do {

            console.log(f)
            f++;
        } while (f<=5);


        // Task 6 Calculate Factorial


        function Factoriall(params) {
            
            let facto = params;
            let factoMultipy = 1;
            do {
                factoMultipy = factoMultipy * facto
                facto--
            } while (facto>=1);
            console.log(factoMultipy)
        }
        
        Factoriall(6)




// Activity 4 Nested Loop
        // Task 7 Print a pattern
        let outerLoop = 1;
        let str = ""
        for(outerLoop; outerLoop<=5; outerLoop++){
            for(let j=outerLoop; j<=outerLoop; j++){
                
                let patt= str += "*"
                console.log(patt);
                }
                
           
        }


        
        
        // Example 2D array (matrix)
        // const matrix = [
            //     [1, 2, 3],
            //     [4, 5, 6],
            //     [7, 8, 9]
            // ];
            
            // Outer loop iterates over rows
// for (let i = 0; i < matrix.length; i++) {
    
//     // Inner loop iterates over columns
//     for (let j = 0; j < matrix[i].length; j++) {
    //             console.log(matrix[i][j]); 
    //         }
    // }
    




// Activity 5  Loop control statement
    
        // Task 8 Print numbers from 1 to 10 but skip 5
        for(let i = 1; i<=10; i++){
            if(i==5){
                continue;
            }
            console.log(i)
        }
  
        

        // Task 9 Print numbers from 1 to 10 but stops loop when 7
        for(let s = 1; s<=10; s++){
            if(s==7){
                break;
            }
            console.log(s)
        }