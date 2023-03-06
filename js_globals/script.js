// Varibles
// Datatypes
// Declaration of variables
// Operators
// object
// Array
// if
// if-else
// else-if
// switch
// while
// do-while
// for

// foreach
// break
// continue
// functions
// arrow function
// scope
// class

// ==============================================
// variables
a = 10;
b = 20;
console.log("Variables : " + (a + b));
console.log("Variabled Numbers" + (10 + 20));
// ========================================================
// Datatypes
// Character -> single letter
console.log("Character : " + "a");
// Group of charcters -> string
console.log("String : Gopal");
// integer -> Number
console.log("Integer : " + 10);
//Double
console.log("Double/Float : " + 10.5);
// ======================================================

//Declaration of Variables
// a;
// a=10;

// ========================================
//         + - * / % ^
console.log("Add : " + (10 + 20));
console.log("Sub : " + (10 - 20));
console.log("Multiple : " + 10 * 20);
console.log("Divide : " + 10 / 20);
console.log("Expo : " + (10 ^ 20));
// == === > < >= <=
console.log("Equal to : " + ("9" == 9));
console.log("Double Equal to : " + ("9" === 9));
console.log("Greater Than : " + (10 > 20));
console.log("Lesser Than : " + (10 < 20));
console.log("Greater Than or equal to : " + (10 >= 10));
console.log("Lesser Than or equal to : " + (10 <= 10));

// And (&&) Or(||) Not (!)
console.log("And : " + (10 == 10 && 20 == 20));
console.log("OR : " + (10 == 10 || 20 == 21));
console.log("NOT : " + (10 != 15));

// Object

h1 = {
  height: "10px",
  width: "100px",
  background: "black",
};
console.log(h1);
console.table(h1);

// Array

arr = ["gopal", "pavi", "aishu", "mohan", "bhuvana"];

console.log(arr[0]);
console.table(arr);

// IF

// syntax
// if(condition){

//    Function block

// }

// Eg:-

if (10 == 11) {
  console.log("True - Values are Equal");
}

// If-Else

// syntax

// if(condition){

// }else{

// }
// Eg:-
age = 20;
if (age >= 18) {
  console.log("Your permitted to Adult Games");
} else {
  console.log("Your permitted to childern Games");
}

// Else-If

// syntax

// if(condition){

// }else if(){

// }else if(){

// }else{

// }

// Eg:-
age = 5;

if (age >= 18 && age < 60) {
  console.log("Your permitted to Adult Games");
} else if (age < 18 && age > 10) {
  console.log("Your permitted to Childeren Games");
} else if (age >= 60) {
  console.log("Your not permitted to Any Games");
} else {
  console.log("Your Baby");
}


// switch

// syntax

// switch (key) {
//   case value:
    
//     break;

//   default:
//     break;
// }

// Eg:

// switch ('gopal') {
//   case 'gopal':
//     console.log("One");
//     break;
//   case 2:
//     console.log("Two");
//     break;
//   case 3:
//     console.log("Three");
//     break;
//   case 4:
//     console.log("Four");
//     break;

//   default:
//     console.log("Default");
//     break;
// }

// while

// syntax

// while (condition) {
  
// }

// eg:

var g=0;
while (g<10) {
  console.log(" This is while loop : " + g);
  g++;
}

// do-while

// syntax
// do {
  
// } while (condition);

// eg:

do {
  console.log("G is greated than 10");
  g++;
} while (g<10);

// For

// for (var i = 0; i < 265; i++) {
//   console.log("For Loop : " + i);


  
// }


// result = []
// for i in range(len(A)):

//     row = [] # the new row in new matrix
//     for j in range(len(B[0])):
        
//         product = 0 # the new element in the new row
//         for v in range(len(A[i])):
//             product += A[i][v] * B[v][j]
//         row.append(product) # append sum of product into the new row
        
//     result.append(row) # append the new row into the final result


// print(result)



