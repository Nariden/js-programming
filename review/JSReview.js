
let variableName;

variableName = "JavaScript";

console.log(variableName);
console.log(typeof variableName);


console.log("================================================");

//let x = 100;

//let x = 200;

console.log("================================================");


let actualNumber = "20.5";

let expectedNumber = 20.5;

console.log( actualNumber == expectedNumber); // true
console.log( actualNumber === expectedNumber); // false

console.log(actualNumber !== expectedNumber);

console.log("================================================");

let browser = "chrome";

if(browser == "chrome"){
    console.log("Browser is Chrome");
} else if(browser == "firefox"){
    console.log("Browser is Firefox");
} else {
    console.log("Browser is not Chrome or Firefox");
}

console.log("================================================");


switch (browser) {
    case "chrome":
        console.log("Browser is Chrome");
        break;
    case "firefox":
        console.log("Browser is Firefox");
        break;
    default:
        console.log("Browser is not Chrome or Firefox");
}



console.log("================================================");


for(let i = 1; i <= 10; i++){
    console.log(i);
}


console.log("================================================");

let s = "JAVASCRIPT";

for(let e of s){
    console.log(e);
}

console.log("================================================");

let str = "123abcde45678fghiklmn90";

str = str.replace(/\d/g, ""); // Removes all digits from the string
console.log(str); // Output: "abcdefghiklmn"

console.log("================================================");

let expectedTitle = "Self Enrollment Portal";

let actualTitle = "self enrollment portal";

console.log(expectedTitle.toLowerCase() === actualTitle.toLowerCase());

console.log(`The expected title of the page is: ${expectedTitle}, and the actual title is ${actualTitle}`);



console.log("================================================");

let elements = [10, 20, 30, 40, 50 ];

console.log(elements);

// use for of loop to access each members of the array.
for( let each of elements){
    console.log(each);
}




