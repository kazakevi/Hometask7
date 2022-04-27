/*
даны 2 4-хзначных числа с неповторяющимися цифрами, надо определить сколько цифр в этих числах совпадают по значению и позиции и сколько только по значению (3487 и 3794 ---> 1 и 2 )
*/

function countDigits(a,b){
    let ar1 = Array.from(a);
    let ar2 = Array.from(b); 
    let conterPositionValue = 0;
  
    for(i=0;i<ar1.length; i++){
        if ( ar1[i] == ar2[i]) {
            conterPositionValue++;
        }
    
    }

    let counterValue = 0; 
    for (let index = 0; index < ar1.length; index++) {
        let num1 = ar1[index];
        for (let i = 0; i < ar2.length; i++) {
            if (num1 == ar2[i] && i!=index) {
                counterValue++;
            }
          
        }
    }                   
       
   let ar3 = [conterPositionValue,counterValue ]     
   
return ar3;
}

let a ='4973';
let b = '3794';
let result2 = countDigits(a,b);
console.log(result2);