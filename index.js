

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


switch(true){
    case (marks <= 100 &&  marks >= 85):
        grade = "A+";
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

console.log(grade);