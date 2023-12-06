let textInput = document.getElementById('text');
function buttonclick(e){
    textInput.value+= e;
}
function operation(oper){
    textInput.value+=oper
}
function clr(){
    textInput.value= "";
}

function applyOperator(operators, operands) {
    const operator = operators.pop();
    const operand2 = operands.pop();
    const operand1 = operands.pop();
  
           // Perform the operation based on the operator and push the result onto the operands stack
    switch (operator) {
      case '+':
        operands.push(operand1 + operand2);
        break;
      case '-':
        operands.push(operand1 - operand2);
        break;
      case '*':
        operands.push(operand1 * operand2);
        break;
      case '/':
        operands.push(operand1 / operand2);
        break;
    }
  }
  
          // Function to check if the first operator has higher or equal precedence than the second operator
  function hasHigherPrecedence(operator1, operator2) {
    // const precedence = { '+': 1, '-': 1, '*': 2, '/': 2 };
    // return precedence[operator1] >= precedence[operator2];
    return false;
  }//always return false

function equalTo() {
  var expression = textInput.value;

  function evaluateExpression(expression) {
    const operators = [];
    const operands = [];

    for (const token of expression) {
      if (!isNaN(token)) {
        operands.push(parseFloat(token));
      } else { 
        // while (
        //   operators.length > 0 &&
        //   hasHigherPrecedence(operators[operators.length - 1], token)
        // ) {
        //   applyOperator(operators, operands);
        // }
        operators.push(token);
      }
    }

    while (operators.length > 0) {
      applyOperator(operators, operands);
    }

    return operands[0];
  }
  evaluateExpression(expression);
  console.log(evaluateExpression(expression));
  textInput.value=evaluateExpression(expression);
}

    










////////////////////
////////////////////
// var s = "123+234";
// var o = [];
// var currentNumber = " "//" "
// for (var i = 0; i < s.length; i++) {
//   var char = s[i];//-
//   if (char >= '0' && char <= '9') {//false
//     currentNumber = currentNumber + char;//"234"
//   }
//   else {
//     if (currentNumber !== '') {//true
//       o[o.length] = parseInt(currentNumber, 10);//o[0]=123,o=[123,+,234,]
//       currentNumber = '';
//     }
//     o[o.length] = char;//0[1]='+', o=[123,'+',234,'-']
//   }
// }
// if (currentNumber !== '') {
//   o[o.length] = parseInt(currentNumber, 10);//o=[123,'+',234,'-',123]
// }

// console.log(o);





///////////////
///////////////
// function evaluateExpression(expression) {
//   //creating empty arrays to split the expression to operators and operands
// const operators = [];
// const operands = [];

// for (const token of expression) {
//   if (typeof token === 'number') {123
//     operands.push(token); v
//   } else {
//     while (
//       operators.length > 0 &&
//       hasHigherPrecedence(operators[operators.length - 1], token)
//     ) {
//       applyOperator(operators, operands);
//     }
//     operators.push(token);
//   }
// }

// while (operators.length > 0) {
//   applyOperator(operators, operands);
// }

// return operands[0];
// }



//////
      // Function to apply an operator to the operands stack
// function applyOperator(operators, operands) {
//   const operator = operators.pop();
//   const operand2 = operands.pop();
//   const operand1 = operands.pop();

//          // Perform the operation based on the operator and push the result onto the operands stack
//   switch (operator) {
//     case '+':
//       operands.push(operand1 + operand2);
//       break;
//     case '-':
//       operands.push(operand1 - operand2);
//       break;
//     case '*':
//       operands.push(operand1 * operand2);
//       break;
//     case '/':
//       operands.push(operand1 / operand2);
//       break;
//   }
// }

//         // Function to check if the first operator has higher or equal precedence than the second operator
// function hasHigherPrecedence(operator1, operator2) {
//   const precedence = { '+': 1, '-': 1, '*': 2, '/': 2 };
//   return precedence[operator1] >= precedence[operator2];
// }
