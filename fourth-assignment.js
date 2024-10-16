//1.Find the product.
let arr0 = [1,2,3];
let temp0 = 1;

for (let i = 0; i < arr0.length; i++) {
  temp0 = temp0*arr0[i];
}
console.log(temp0);


//2.Find the sum.
let arr = [1,2,5,85,48];
let temp = 0;

for (let i = 0; i < arr.length; i++) {
  temp = temp+arr[i];
}
console.log(temp);


//Q3. Count Occurrences
let arr1 = [1,1,2,5,0,11,11];
let k = 11;
let temp1 = 0;

for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] == 11) {
    temp1 = temp1 + 1;
  }
}
console.log(temp1);

//Q4. Even Odd

let arr2 = [5,55,4,44,84];
let oddSum = 0;
let evSum = 0;

for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] % 2 == 0) {
    evSum = evSum + arr2[i];
  } else {
    oddSum = oddSum + arr2[i];
  }

}
console.log(`Sum of even element in array is: ${evSum}`);
console.log(`Sum of odd element in array is: ${oddSum}`);

//Q5. Find whether the number is present or not
let arr3 = [5,55,4];
let reqNum = 51;

for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] == reqNum) {
    console.log("YES");
    break;
  }
}
console.log("NO");

//Q6. Higher Age (return new array which contain age >= 18)
let arr4 = [54,18,5,8,20];
let ageArr4 = [];

for (let i = 0; i < arr4.length; i++) {
  if (arr4[i] >= 18 ) {
    ageArr4.push(arr4[i]);
  }
}
console.log(ageArr4);



//Q7. Increment the Array Elements
let arr5 = [1,2,3];
let tempArr5 = [ ];

for (let i = 0; i < arr5.length; i++) {
  tempArr5.push(arr5[i] + 1);
}
console.log(tempArr5);


//Q8. Pass or Fail
let arr6 = [11,8,88,65,48,32,48,78];
let result=0;

for(let i=0; i<=arr6.length;i++){
    if(arr6[i]<32){
        result++;
    }
}
if(result>0){
    console.log("Fail");
}else{
    console.log("Pass");
}