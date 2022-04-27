/*
найти максимальное значение числа в массиве ([3,67,15...])
*/
function largestFromArray(ar) {
let largest = ar[0];
for (i=0; i<=largest;i++){
    if (ar[i]>largest) {
       largest=ar[i];
    }
}
return console.log(largest);
}

largestFromArray([10,10,9]);