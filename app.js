'use strict';
var userName=prompt("Please enter your name.");
var gender=prompt("Please enter your gender.");
while(!(gender.toLocaleLowerCase()==="male"||gender.toLocaleLowerCase()==="female" )){
    gender=prompt("Please enter your gender as: Male or Female.");
}
var age =prompt("Please enter your age.");
while(age<=0){
    alert("You entered an age less than or equal zero.");
    age =prompt("Please enter your age.");
}
var skipWelcomePage =confirm("Would you like to skip the welcoming page?");
(!skipWelcomePage&&gender.toLocaleLowerCase()==="male")?alert("Welcome Mr. "+userName):
(!skipWelcomePage&&gender.toLocaleLowerCase()==="female")?alert("Welcome Ms. "+userName):
(!skipWelcomePage)?alert("Welcome."):
console.log("Welcome page is skipped!");

let questions=["Did you eat your breakfast?","Do you like eating meat?","Do you like eating Knafeh"];
let answers=[];
let askUser = (question) => {return prompt(question)}
let getAnswers = () => { 
    let answer;
    for(let i=0;i<3;i++){
        answer=askUser(questions[i]);
        (answer=="")?answers.push("invalid"):
        answers.push(answer);
        console.log(answers[i]);
     }
}

getAnswers();

