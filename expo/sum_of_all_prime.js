function sumPrimes(num) {

    if(num<=1){
      return "number is negative"
    }
    let counter =2;
    let sum=0;
  
    while(counter <= num){
      if(isPrime(counter)){
        sum+=counter;
      }
      counter+=1;
    }
  
    return sum;
  }
  
  function isPrime(single){
    let counter=2;
    while (counter<single){
      if(single%counter ===0){
          return false;
      }
      counter +=1;
    }
    return true;
  }
  
  
  sumPrimes(10);