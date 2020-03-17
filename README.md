# SDV_503_LAB_3
 LAB #


Journal 17/03/20

Ternary Operators

let person = {
    name: 'tony',
    age: 20,
    driver: null
};

if (person.age >= 16) {
    person.driver = "yes";
} else {
    person.driver = "no";
}

Shortened in ES6 as follows:

person.driver = person.age >=16 ? 'Yes' : 'No';

the code above yeilds the same result of person.driver = 'Yes';


LAB 3 Journal

with the class today 17/03/20, we worked on our lab 3 which essentially was writing all the code needed to grade students and display their grade aswell as their distinction such as a pass or pass with merit.

to do this I started with if else statements then realised we had to use switch and if statements to complete the task, things I struggled with on this was what expression to use for the switch statement and realised true would work fine, because if the case condition was evaluated to true then the block of code withing the case statement would run.

below the switch statement I inserted an if else statement to take the variable "grade" result from the switch statement and figure out what distinction the student should receive which is stored within the variable "switch".

LAB 3 Repo: https://github.com/noelw19/SDV_503_LAB_3/settings

