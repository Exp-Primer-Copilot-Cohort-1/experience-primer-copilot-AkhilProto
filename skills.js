function calculateNumbers(var1, var2){
    return var1 + var2;

}
// Take input of two numbers from user 
var num1 = prompt("Enter a number");
var num2 = prompt("Enter another number");

// Convert the string input to numbers
num1 = Number(num1);
num2 = Number(num2);

// Call the function and store the result in a new variable
var result = calculateNumbers(num1, num2);

// Print the result to the console
console.log(result);

