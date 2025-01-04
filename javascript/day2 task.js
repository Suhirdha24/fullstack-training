//BIT WISE EVEN OR ODD
/*
const number = 10; 
if ((number & 1) === 0) {
  console.log(number + " is even");
} else {
  console.log(number + " is odd");
}
*/

//with argumment with return type
/*
function isEvenOrOdd(number) {
    return (number & 1) === 0 ? 
  }
  
  console.log(isEvenOrOdd(42)); 
*/
//without argument with  return type
/*
function isEvenOrOdd() 
{
    const number = 9; 
    return (number & 1) === 0 ?
}
console.log(isEvenOrOdd()); 
  
//with argument wwithout return type 
/*
function isEvenOrOdd(number) {
  if ((number & 1) === 0) {
    console.log(`${number} is even`);
  } else {
    console.log(`${number} is odd`);
  }
}

isEvenOrOdd(10); 
*/

//without argument without return type
/*
function isEvenOrOdd() {
  const number = 5; 
  if ((number & 1) === 0) {
    console.log(`${number} is even`);
  } else {
    console.log(`${number} is odd`);
  }
}

isEvenOrOdd(); // Example usage
*/

//REST OPERATOR 
/*
function checkEvenOrOdd(...numbers) {
  numbers.forEach((number) => {
    console.log(
      (number & 1) === 0 ? `${number} is even` : `${number} is odd`
    );
  });
}

checkEvenOrOdd(2,5); 
*/

