// Activity 1 Arithmetic Operators
    // Task 1 Add two numbers
        function addition ()  {
        let num1 = 23;
        let num2 = 12;

        let sum = num1 + num2;
        console.log(sum + " " +"sum");
        }

    addition();

    // Task 2 Subtract two numbers

    function subtraction ()  {
        let num1 = 23;
        let num2 = 12;
    
        let subtract = num1 - num2;
        console.log(subtract + " " +"subtract");
    }

    subtraction ()
  
    // Task 3 Multiply two numbers

    function Multipication ()  {
        let num1 = 23;
        let num2 = 12;
    
        let multipy = num1 * num2;
        console.log(multipy + " " +"multiply");
    }

    Multipication ()


    // Task 4 divide two numbers

    function Division ()  {
        let num1 = 23;
        let num2 = 12;
    
        let division = num1 / num2;
        console.log(division + " " +"divide");
    }

    Division ()


    // Task 5 Remainder two numbers

    function Remainder ()  {
        let num1 = 23;
        let num2 = 12;
    
        let remainder = num1 % num2;
        console.log(remainder + " " +"remainder");
    }

    Remainder ()


// Activity 2 Assignment Operators

     // Task 6 use += to add numbers

     function AssiOp1 ()  {
       let num1 = 23;
        let num2 = 12;

        // let num = 12;
        // let assiop1 = num +=23;
         
        let assiop1 = num1 += num2;
        console.log(assiop1 + " " +"(+= operator)");
    }

    AssiOp1 ()

     // Task 7 use -= to subtract numbers

     function AssiOp2 ()  {
       let num1 = 23;
        let num2 = 12;

        // let num = 12;
        // let assiop1 = num -=23;
         
        let assiop1 = num1 -= num2;
        console.log(assiop1 + " " +"(-= operator)");
    }

    AssiOp2 ()


// Activity 3 Comparison Operators
    //Task 8 compare two numbers unsing ( < ) ( > )

    function compareGreLess ()  {
         let num1 = 23;
         let num2 = 12;

         let greater = num1 > num2;
         let lessser = num1 < num2;
         console.log(greater + " " +"(23 Greater than 12)");
         console.log(lessser + " " +"(23 lesser than 12)");
     }
 
     compareGreLess ()


    //Task 9 compare two numbers unsing ( <= ) ( >= )

    function compareGreLessEqual ()  {
         let num1 = 23;
         let num2 = 31;
         let num3 = 31;

         let greaterEqual = num1 >= num2;
         let lessserEqual = num3 <= num2;
         console.log(greaterEqual + " " + "(" + num1 + " " + " Greater than and equal to " + " " + num2 + ")");
         console.log(lessserEqual + " " + "(" + num3 + " " + " lesser than and equal to  " + " " + num2 + ")");
     }
 
     compareGreLessEqual ()



    //Task 10 compare two numbers unsing ( == ) ( === )

    function compareEqality ()  {
         let num1 = '31';
         let num2 = 31;
         let num3 = '31';

         let doubleEqual = num1 == num2;
         let tripleEqual = num3 === num2;
         console.log(doubleEqual + " " + "(" + num1 + " " + " equal to " + " " + num2 + ")");
         console.log(tripleEqual + " " + "(" + num3 + " " + " equal to  " + " " + num2 + ")");
     }
 
     compareEqality ()


// Activity 4 Logical Operators

     // Task 11 compare two conditions using && operator
     function compareAndOpe ()  {
        let num1 = 31;
        let num2 = 57;
        let num3 = 28;

        let andOper1 = num1 > num3 && num2 > num3;
        let andOper2 = num3 < num2 && num2 < num1;
        console.log(andOper1 + " " + "(" + num1 + " " + "> " + " " + num3 + " " + "&&" + " " + num2 +  " > " + num3 + ")");
        console.log(andOper2 + " " + "(" + num3 + " " + "< " + " " + num2 + " " + "&&" + " " + num2 +  " < " + num1 + ")");
    }

    compareAndOpe()



     // Task 12 compare two conditions using || operator
     function compareOrOpe ()  {
        let num1 = 31;
        let num2 = 57;
        let num3 = 28;

        let orOper1 = num1 > num3 || num2 > num3;
        let orOper2 = num3 < num2 || num2 < num1;
        let orOper3 = num3 > num2 || num2 < num1;
        console.log(orOper1 + " " + "(" + num1 + " " + "> " + " " + num3 + " " + "||" + " " + num2 +  " > " + num3 + ")");
        console.log(orOper2 + " " + "(" + num3 + " " + "< " + " " + num2 + " " + "||" + " " + num2 +  " < " + num1 + ")");
        console.log(orOper3 + " " + "(" + num3 + " " + "> " + " " + num2 + " " + "||" + " " + num2 +  " < " + num1 + ")");
    }

    compareOrOpe()



     // Task 13 compare two conditions using ! operator
     function compareNotOpe ()  {
        let num1 = 31;
        let num2 = 57;
        let num3 = 28;

        let notOper1 = !(num1 > num3 || num2 > num3);
        let notOper2 = !(num3 < num2 || num2 < num1);
        let notOper3 = !(num3 > num2 || num2 < num1);
        console.log("-----------------------------------");
        console.log(notOper1 + " " + "(" + num1 + " " + "> " + " " + num3 + " " + "||" + " " + num2 +  " > " + num3 + ")");
        console.log(notOper2 + " " + "(" + num3 + " " + "< " + " " + num2 + " " + "||" + " " + num2 +  " < " + num1 + ")");
        console.log(notOper3 + " " + "(" + num3 + " " + "> " + " " + num2 + " " + "||" + " " + num2 +  " < " + num1 + ")");
    }

    compareNotOpe()


// Activity 5 Ternary Operators
    // Task 14
    function ternaryOpe ()  {
        let num1 = -31;
        let num2 = 57;

        let terOper1 = num1 > 0 ?  `${num1} is positive` : `${num1} is negative`;
        let terOper2 = num2 > 0 ? `${num2} is positve` : `${num2} is negative`;
        console.log(terOper1); 
        console.log(terOper2); 
    }

    ternaryOpe()

