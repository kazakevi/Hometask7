/*
поменять массив в обратном порядке - [1,2,3,4,5,6] [6,5,4,3,2,1]
*/
function arInvert(ar){
    let len = ar.length;
    let i = 0;

    while(i<len/2) {
        let a=ar[i];
        ar[i]=ar[len-i-1];
        ar[len-i-1]=a;
        i=i+1;
    }
}

let ar = [1,2,3,4,5,6];
arInvert(ar);
console.log(ar);