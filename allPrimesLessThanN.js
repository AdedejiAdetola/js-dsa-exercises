//Initialize check for values less than
function allPrimesLessThanN(n) {
  //check for numbers less than two
  if (n <= 2) {
    console.log("No primes found");
    return [];
  }

  //mark all number till n as prime numbers
  let isPrime = Array(n).fill(true);

  //we loop through the prime array

  for (i = 2; i * i < n; i++) {
    //if the element in the array is true, check if there are multiples
    if (isPrime[i]) {
      for (j = i * i; j < n; j += i) {
        isPrime[j] = false; //set all values within the isPrime array to false as they are multiples of the i value being checked

        //console.log will start for example from
        //isPrime[2], then j will be 4 and set to false, since 4 is a square of 2
        //since j is still less than n, we increment j (which is 4) by 2, giving 6 and set it to 4 as well
      }
    }
  }

  let primes = [];
  for (i = 2; i < n; i++) {
    if (isPrime[i]) {
      primes.push(i);
    }
  }

  return primes;
}
