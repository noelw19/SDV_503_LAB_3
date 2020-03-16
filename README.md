# SDV_503_LAB_3
 LAB #


Journal 17/03/20

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

the code above yeiles the same result of person.driver = 'Yes';