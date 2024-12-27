const flowerBed = [1, 0, 0, 0, 0, 1];
const n = 1;

//if length of array is 0 return false
//if length of array is 1 and value is 0 and n = 1 return true else return false

//check the first element of the array,
//also check if the second element is 0,
//if both are 0 then set the first element to 1 and reduce n by 1

//if n is still greater than 0
//check the last element is 0
//also check if the second to the last element is 0
//if both are 0 then set the last element to 1 and reduce n by 1

//after the above checks - if the length of the array is greater than 4
//start a loop from the third element
//and the last element to be checked should be the third to the last element

//if the value is not 0, move to the next element
//if value is 0, check if the next element is 0,
//if true, check if the previous element is 0,
//if true, replace value 0 with 1, reduce n by 1 and check if n > 0,
//then skip the next element and move to the next (i+2) and repeat (if the value is not 0, move to the next element) process
//if previous element is not 0, then move to the next element, and repeat (if the value is not 0, move to the next element) process
//if the next element is not 0 then skip the next 2 elements and move to (i+3) and repeat (if the value is not 0, move to the next element) process
//if n becomes 0 at any case return true
//if n > 0 after loop is complete return false
