/*
записать в массив ряд фибаначи начиная с N члена с длинной массива M
*/
function getFiban(max,n){
    let fibAr = [0,1];
    for (let i = 2; i < max; i++) {
        fibAr.push(fibAr[i-1]+fibAr[i-2])
    }

    let begin = n-1;    
    let finalAr = fibAr.slice(begin,max)
    return finalAr;
}

let arFibanachi = getFiban(6,3);
console.log(arFibanachi);