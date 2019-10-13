module.exports = function multiply(first, second) {
  

  preparedFirst = splitFunc(first);
  preparedSecond = splitFunc(second);

  preparedFirst = preparedFirst.reverse();
  preparedSecond = preparedSecond.reverse();

  

  string_result = digitMultiply(preparedFirst,preparedSecond).reverse().join('');
  


  return string_result;


}

function splitFunc(a) {
  
  let splitVar = a.split('');

  return splitVar;
}

function digitMultiply(firstNumber,secondNumber) {
  

  let resultMultiply;

  array = [];
  
  
  let k;
  let i;

  for( i = 0; i < firstNumber.length; i++){
    for( k = 0; k < secondNumber.length; k++){

      resultMultiply = firstNumber[i]*secondNumber[k];
      
      if(typeof array[i+k] == 'undefined'){

        array[i+k] = resultMultiply;
          
      }
      else{
        
        array[i+k] += resultMultiply;
        

      }
    }
  }

  for(i = 0; i < array.length; i++){

    let remainder = array[i] % 10;
    let transfer = Math.floor(array[i] / 10);
    array[i] = remainder;

    if (typeof array[i+k] != 'undefined'){
      array[i+1] += transfer;
      
    }
    else{
      if(transfer != 0){
        array[i+1] = transfer;
      }
    }
  }
  
  return array;

}

