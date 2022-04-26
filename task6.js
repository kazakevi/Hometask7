// удалить из массива все повторяющиеся элементы

function arDeleteRepeats(ar){
  let arNew = [];
  for (let i = 0; i < ar.length; i++) {
      let element=ar[i];
      let found =false;
      let j=0;
      while (!found && j<arNew.length) {
          let equal =  element ==arNew[j]
          if (equal){
              found = true;
          }
          else{found =false;
          }
          j++;
      }
      if (!found) {
          arNew.push(ar[i]);  
      }
  }
  return arNew;
}

let ar=[1,2,3,1,4];
let ar2=arDeleteRepeats(ar);
console.log(ar2);