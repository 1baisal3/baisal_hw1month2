
// 1 exercise

// for(let i = 1; i <= 7; i++) {
//     let row = '';
//     for (let j = 1; j <= i; j++){
//         row += '*';
//     }
//     console.log(row);
// }

// 2 exercise

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }

// 3 exercise

  function createChess(a, b) {
    var value1 = "# ";
    var value2 = " #";
    var odd = "";
    var even = "";
    for (var i = 0; i < a / 2; i += 1) {
      odd += value2;
      even += value1;
    }
  
    for (var j = 0; j < b; j += 1) {
      if (j % 2 != 0) {
        console.log(odd);
      } else {
        console.log(even);
      }
    }
  }
  
  createChess(16, 8);

  //////////////////////////////////////////

  // Доп 
  
// const name = ['Алекс', 'Анна', 'Олег']
// name.push(1,2,3)
// console.log(name);


function factorial(n) {
  if (n === 0 || n === 1) {
    return 1; 
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

const number = 7;
const result = factorial(number);
console.log(`Факториал числа ${number} равен ${result}`);