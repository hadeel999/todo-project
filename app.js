'use strict';
var userName=prompt("Please enter your name.");
var gender=prompt("Please enter your gender.");
if(!(gender.toLocaleLowerCase()==="male"||gender.toLocaleLowerCase()==="female" )){
    gender=prompt("Please enter your gender as: Male or Female.");
}
var age =prompt("Please enter your age.")
if(age<=0){
    alert("You entered an age less than or equal zero.")
}
var skipWelcomePage =confirm("Would you like to skip the welcoming page?");
(!skipWelcomePage&&gender.toLocaleLowerCase()==="male")?alert("Welcome Mr. "+userName):
(!skipWelcomePage&&gender.toLocaleLowerCase()==="female")?alert("Welcome Ms. "+userName):
(!skipWelcomePage)?alert("Welcome."):
console.log("Welcome page is skipped!");
