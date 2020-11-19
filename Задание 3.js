function funcOne(num1) {
    return function funcTwo(num2) {
        return num1 + num2;
    }
}
 
const result = funcOne(10);
 
console.log(result(5));