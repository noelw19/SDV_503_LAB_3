

/*if(marks <= 100 &&  marks >= 85) {
    grade = "A+";
} else if(marks >= 80 && marks <= 84){
    grade = "A";
}else if(marks >= 75 && marks <= 79){
    grade = "A-"
}else if(marks >= 70 && marks <= 74){
    grade = "B+";
}else if(marks >= 65 && marks <= 69){
    grade = "B";
}else if(marks <= 64 && marks >= 60){
    grade = "B-";
}else if(marks >= 55 && marks <= 59){
    grade = "C+";
}else if(marks >= 50 && marks <= 54){
    grade = "C";
}else if(marks >= 40 && marks <= 49){
    grade = "D";
}else{
    grade = "E";
}

console.log(grade);*/
let grade;
let marks = 49;
let result;



switch(true){
    case (marks <= 100 &&  marks >= 85):
        grade = "A+";
        result 
        break;
    case (marks >= 80 && marks <= 84):
        grade = "A";
        break;
    case (marks >= 75 && marks <= 79):
        grade = "A-";
        break;
    case (marks >= 70 && marks <= 74):
        grade = "B+";
        break;
    case (marks >= 65 && marks <= 69):
        grade = "B";
        break;
    case (marks >= 60 && marks <= 64):
        grade = "B-";
        break;
    case (marks >= 55 && marks <= 59):
        grade = "C+";
        break;
    case (marks >= 50 && marks <= 54):
        grade = "C";
        break;
    case (marks >= 40 && marks <= 49):
        grade = "D";
        break;
    case (marks >= 0 && marks <=39):
        grade = "E";
        break;
}

if(grade == "A+" || grade == "A" || grade == "A-"){
    result = "Passed with distinction! You got an"
}else if(grade == "B+" || grade == "B" || grade == "B-"){
    result = "Passed with merit! You got a";
}else if(grade == "C+" || grade == "C"){
    result = "Passed! You got a ";
}else{
    result = "Failed! Try again! You got a ";
}

console.log(result + " " + grade + "!");


//Ternary

let bartender = {
    name: "Johnny",
    skilled: null,
    flair: "yes"
};

bartender.skilled = bartender.flair == "yes" ? "yes" : "no";

console.log(bartender.skilled);

/* with the above example i find it easier to read as "if bartender flair equals yes, append the
bartender skilled property with yes, if the flair property does not equal yes then append the 
skilled property to no" */



