let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "Color", "Size", "Price", null,];
console.log(arr);
console.log(`Количество элементов в массиве: ${arr.length}`);
 
let even = 0;
let odd = 0;
let nullEl = 0;
 
function arrInfo() {
 
for(i = 0; i < arr.length; i++)
{
if(typeof(arr[i])== "number" )
    {
  
  if (arr[i]%2 == 0) 
    
  {if(arr[i] ==0){nullEl=++nullEl}
   else {even =++even}}
  else 
  {odd=++odd}
    }
else
{}
 
}
console.log(`Количество чётных чисел: ${even}`)
console.log(`Количество нечётных чисел: ${odd}`)
console.log(`Количество нулевых элементов: ${nullEl}`)
 
let text = arr.length - (even + odd + nullEl);
 
console.log(`Количество нечисловых элементов: ${text}`);
}
arrInfo()