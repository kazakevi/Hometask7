/*
сортировка массива по возрастанию/убыванию
*/
function sortDescending(ar){
    ar.sort((a, b) => b - a); 
    return ar;
}


let ar = [3, 3, 1, -10, 8];
sortDescending(ar);
console.log(ar);

function sortAscending(ar){
    ar.sort((a, b) => a - b); 
    return ar;
}

sortAscending(ar);
console.log(ar);