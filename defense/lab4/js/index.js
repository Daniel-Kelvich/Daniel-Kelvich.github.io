function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

function Search(){

  let word = prompt("Array1 size:");
  let word1 = prompt("Array2 size:");
  let arr2 = [];
  let arr1 = [];

  for ( let i = 0; i < word; i++ ) {
    arr2.push( Math.round( Math.random() * 50 ));

  }

  for ( let i = 0; i < word1; i++ ) {
    arr1.push( Math.round( Math.random() * 50 ));
  }

document.write( "First array: " + arr2 + ";");
  document.write('<br/>');
 document.write('<br/>');
  document.write( "Second array: " + arr1 + ";");
  document.write('<br/>');

  arr2 = arr2.sort((a,b) => a-b);
  arr1 = arr1.sort((a,b) => a-b);

  let arr3 = unique(arr2).concat(unique(arr1));
  arr3 = arr3.sort((a,b) => a-b);
  let ks=[];

  for(let value of arr3){
    ks[value] = (ks[value]||0)+1;
  }

  let arr22 =[];

  for(let i in arr3) {
    if ( ks[ arr3[i] ] > 1 ) {
        arr22.push(arr3[i]);
    }
}

  
 
  document.write('<br/>');
  document.write( "Result array: " + arr2 + ";");
  document.write('<br/>');
  document.write('<br/>');
  document.write( "Smallest number: " + Math.min(...arr22) + ";");

}
Search();
