// let flowerBed = [1, 0, 0, 0, 1];
// let n = 1;

// //if length of array is 0 return false
// if (flowerBed.length < 1) return false;
// //if length of array is 1 and value is 0 and n = 1 return true else return false
// if (flowerBed.length === 1 && flowerBed[0] === 0 && n <= 1) {
//   return true;
// } else if (flowerBed[0] === 1 || n >= 0) return false;

// //check the first element of the array,
// //also check if the second element is 0,
// //if both are 0 then set the first element to 1 and reduce n by 1
// let firstElement = flowerBed[0];
// let secondElement = flowerBed[1];

// if (firstElement === 0 && secondElement === 0) {
//   flowerBed[0] = 1;
//   n -= 1;
// }

// //if n is still greater than 0
// //check the last element is 0
// //also check if the second to the last element is 0
// //if both are 0 then set the last element to 1 and reduce n by 1
// let lastElement = flowerBed[flowerBed.length - 1];
// let secondLastElement = flowerBed[flowerBed.length - 2];
// if (n > 0 && lastElement === 0 && secondLastElement === 0) {
//   flowerBed[flowerBed.length - 1] = 1;
//   n -= 1;
// }

// //after the above checks - if the length of the array is greater than 4
// //start a loop from the third element
// //and the last element to be checked should be the third to the last element

// //if the value is not 0, move to the next element
// //if value is 0, check if the next element is 0,
// //if true, check if the previous element is 0,
// //if true, replace value 0 with 1, reduce n by 1 and check if n > 0,
// //then skip the next element and move to the next (i+2) and repeat (if the value is not 0, move to the next element) process
// //if previous element is not 0, then move to the next element, and repeat (if the value is not 0, move to the next element) process
// //if the next element is not 0 then skip the next 2 elements and move to (i+3) and repeat (if the value is not 0, move to the next element) process
// //if n becomes 0 at any case return true
// //if n > 0 after loop is complete return false

// if (flowerBed.length > 4 && n > 0) {
//   for (let i = 2; i < flowerBed.length - 2; i++) {
//     // console.log("here", flowerBed[i]);
//     if (
//       flowerBed[i] === 0 &&
//       flowerBed[i + 1] === 0 &&
//       flowerBed[i - 1] === 0
//     ) {
//       flowerBed[i] = 1;
//       n -= 1;

//       if (n > 0) i += 1;
//     } else if (
//       flowerBed[i] === 0 &&
//       flowerBed[i + 1] !== 0 &&
//       flowerBed[i - 1] === 0
//     ) {
//       i += 2;
//     }

//     if (n === 0) return true;
//   }

//   if (n !== 0) return false;
// }

function canPlaceFlowers(flowerBed, n) {
  // If no flowers need to be placed, return true
  if (n === 0) return true;

  // If length of array is 0, return false
  if (flowerBed.length < 1) return false;

  // If length of array is 1 and value is 0 and n = 1, return true; else return false
  if (flowerBed.length === 1) {
    return flowerBed[0] === 0 && n <= 1;
  }

  // Check the first element of the array
  // Also check if the second element is 0
  // If both are 0, set the first element to 1 and reduce n by 1
  if (flowerBed[0] === 0 && flowerBed[1] === 0) {
    flowerBed[0] = 1;
    n -= 1;
  }

  // If n is still greater than 0
  // Check if the last element is 0
  // Also check if the second to the last element is 0
  // If both are 0, set the last element to 1 and reduce n by 1
  if (
    n > 0 &&
    flowerBed[flowerBed.length - 1] === 0 &&
    flowerBed[flowerBed.length - 2] === 0
  ) {
    flowerBed[flowerBed.length - 1] = 1;
    n -= 1;
  }

  // After the above checks - if the length of the array is greater than 4
  // Start a loop from the third element
  // And the last element to be checked should be the third to the last element
  if (flowerBed.length > 4 && n > 0) {
    for (let i = 1; i < flowerBed.length - 1; i++) {
      // If the value is 0
      if (
        flowerBed[i] === 0 &&
        flowerBed[i - 1] === 0 &&
        flowerBed[i + 1] === 0
      ) {
        // Replace value 0 with 1, reduce n by 1
        flowerBed[i] = 1;
        n -= 1;

        // Skip the next element to prevent consecutive planting
        i += 1;

        // If n becomes 0, return true
        if (n === 0) return true;
      }
    }
  }

  // If n > 0 after the loop, return false
  return n === 0;
}
