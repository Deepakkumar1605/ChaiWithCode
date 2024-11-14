// console.log(2 < 1 );
// console.log(2 <= 1 );
// console.log(2 > 1 );
// console.log(2 >= 1 );
// console.log(2 == 1 );
// console.log(2 != 1 );

// console.log("2" > 1); //Automatically js converted this 2 to Number
// console.log("02" > 1);

// console.log( null > 0);
// console.log( null == 0);
// console.log( null >= 0);  

// The reasson is that an equality check == and comaparison > < >= <= work differently.
// Comparison coverts null to a number, treating as 0.
// That's why (3) null >= 0 is true and (1) null > 0 is false. 

// console.log(undefined == 0);
// console.log(undefined < 0);
// console.log(undefined > 0);

// strict check(===)
console.log("2" == 2);
console.log("4" === 4);


