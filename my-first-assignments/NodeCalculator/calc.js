var readline = require("readline-sync");
const { ReadableStreamBYOBReader } = require("stream/web");

var operations = ['+', '-', '*', '/'];
var index = null;
var operator = null;
var firstNumber = 0;
var secondNumber = 0;

function operationQuestion(){
    operator = readline.question('What operation would you like to perform?'
        +'Options:'
        +'Sum ('+ operations[0]+')'
        +'Subtraction ('+ operations[1]+')'
        +'Multiplication ('+ operations[2]+')'
        +'Division ('+ operations[3]+')'
    );

if (!operations.includes(operator)) {
    console.log('That is not a valid operation');
    operationQuestion();
}

firstNumber = readline.questionInt('Type the first number: ');
secondNumber = readline.questionInt('Type the second number: ');

switch(operator) {
    case '+':
        console.log('The result of '+firstNumber+operator+secondNumber+' = '+ (firstNumber+secondNumber));
        break;
    case '-':
        console.log('The result of '+firstNumber+operator+secondNumber+' = '+ (firstNumber-secondNumber));
        break;
    case '*':
        console.log('The result of '+firstNumber+operator+secondNumber+' = '+ (firstNumber*secondNumber));
        break;    
    case '/':
        console.log('The result of '+firstNumber+operator+secondNumber+' = '+ ((firstNumber/secondNumber).tofixed(2)));
        break;    
    default:
        console.log('Something went wrong :(');
    
    }

}

operationQuestion();
