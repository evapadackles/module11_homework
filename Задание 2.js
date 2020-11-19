function numbers(a) {
  if (a === 2) {
    const str = 'Это простое число';
    return str;
  }
  
  if (a > 1 && a <= 1000) {
    for (let i = 2; i < a; i++) {
      if (a % i === 0) {
        const str2 = 'Это составное число';
        return str2;
 
      }
      
    }
    
     for (let i = 2; i < a; i++) {
       if (a % i != 0) {
         const str3 = 'Это просто число';
         return str3;
       }
     }
    
  } else return 'Убедитесь, что число > 1 и < 1000'
  
}
 
const result = `${numbers()}`;
console.log(result);