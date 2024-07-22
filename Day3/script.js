        // Day 3 Control Structures

// Activity 1 if-else statement
    
    // Task 1 To check number is positive, negative or zero

    function CheckNumber(num) {
       
        if (num == 0 ) {
            console.log('Enter number is zero')
        } else if(num < 0){
            console.log('Enter number is negative')
        } else{
            console.log('Enter number is positive')
        }
    }
     CheckNumber(-23)


     // Task 2 Eligible for voting

     function Vote(age) {
        if(age>=18){
            console.log('You are eligible for voting')
        }else{
            console.log('Your age is '+ " " + age + " " + 'You are not eligible for voting because you are under 18')

        }

        let checkAge = age >=18 ? 'Go for vote' : 'wait until turn to 18'
        console.log(checkAge)
     }


     Vote(20)


// Activity 2 Nested if-else statement

     // Task 3 Find largest of three numbers

     function FindLargest(num1,  num3, num2) {
        // let num1 = 60;
        // let num2 = 50;
        // let num3 = 40;

        if(num1>num2 && num1 > num3){
            console.log(num1 + " " + 'is a largest number')
        }else if (num2 > num1 && num2 > num3){
            console.log(num2 + " " + 'is a largest number')
            
        }else{
            console.log(num3 + " " + 'is a largest number')

        }
        console.log(num2)
        console.log(num3)
     }

     FindLargest(20, 140, 100);



// Activity 3 Switch case
     // Task 4 Day of a week 

     function DayCheck(day) {

        switch(day){
        case 1:
            console.log('monday');
            break;
        case 2: 
            console.log('tuesday');
            break;

        case 3:
            console.log('wednesday')
            break;

        case 4:
            console.log('thursday')
            break;

        case 5:
            console.log('friday')
            break;

        case 6:
            console.log('saturday')
            break;

        case 7:
            console.log('sunday')
            break;

        default:
            console.log('Please choose a number between 1 and 7')

        }
     }


     DayCheck(8);



     // Task 5 Assign Grades 

     function AssignGrades(grades) {
        switch( true ){
            case grades > 90 && grades <=100:
                console.log('A');
                break;

            case grades > 80 && grades <=90:
                console.log('B');
                break;
            case grades > 60 && grades <=70:
                console.log('C');
                break;
            case grades >= 50 && grades <=60:
                console.log('D');
                break;

            default:
                console.log('F');
        }
     }

     AssignGrades(49);




// Activity 4 Conditional (Ternary) operator

     // Task 6 Print even and odd numbers

     let myNum = 0;
     let checkNum = myNum % 2 == 0 ? 'Number is even ' : 'Number is odd';
     console.log(checkNum);



// Activity 5 Combining Conditions

     // Task 7 Leap Year

     function LeapYear(jan,feb,mar,apr,may,jun,jul,aug,sep,oct,nov,dec) {
        // let months = jan+feb+mar+apr+may+jun+jul+aug+sep+oct+nov+dec;
        // let totalDays = months == 366? 'This year is leap year':'This year is not a leap year';
        // console.log(totalDays);

        if(feb >=28 && feb <= 29){
        let february = feb % 4 == 0 ? 'Not leap Year'  : 'Leap Year'
        console.log(february)
    }   else{
        console.log('Please Enter Valid Days')
    }
     }


LeapYear(31,29,31,30,31,30,31,31,30,31,30,31)


     // Example from chatgpt

     function isLeapYear(year) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            return true;
        } else {
            return false;
        }
    }
    
    let year = 2025;
    if (isLeapYear(year)) {
        console.log(year + " is a leap year.");
    } else {
        console.log(year + " is not a leap year.");
    }
    
