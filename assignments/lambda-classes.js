// CODE here for your Lambda Classes

class Person {
    constructor(properties) {
        this.name = properties.name;
        this.age = properties.age;
        this.location = properties.location;
    };
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    };
};

class Instructor extends Person {
    constructor(properties) {
        super(properties);
        this.specialty = properties.specialty;
        this.favLanguage = properties.favLanguage;
        this.catchPhrase = properties.catchPhrase;
    };
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    };
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    };
};

class Student extends Person {
    constructor(properties) {
        super(properties);
        this.background = properties.background;
        this.className = properties.className;
        this.favSubjects = properties.favSubjects;
    };
    listsSubjects() {
        console.log(...this.favSubjects);
    };
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    };
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    };
};

class ProjectManager extends Instructor {
    constructor(properties) {
        super(properties);
        this.gradClassName = properties.gradClassName;
        this.favInstructor = properties.favInstructor;
    };
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    };
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    };
};

const joseph = new Person({
    name: 'Joseph',
    age: 25,
    location: 'Hollywood, CA'
});

const eli = new Person({
    name: 'Eli',
    age: 29,
    location: 'Orlando, FL'
});

joseph.speak();
eli.speak();

const james = new Instructor({
    name: 'James',
    age: 30,
    location: 'Phoenix, AZ',
    specialty: 'React',
    favLanguage: 'JavaScript',
    catchPhrase: 'Wubalubbadubdub!'
});

const sharon = new Instructor({
    name: 'Sharon',
    age: 41,
    location: 'Denver, CO',
    specialty: 'JavaScript',
    favLanguage: 'JavaScript',
    catchPhrase: 'A bird in the hand is probably gonna try to get out.'
});

sharon.demo('CSS');
james.grade(joseph, 'HTML');
console.log(sharon.catchPhrase);

const lily = new Student({
    name: 'Lily',
    age: 22,
    location: 'Austin, TX',
    background: 'Worked retail',
    className: 'WEB21',
    favSubjects: ['HTML', 'CSS', 'JavaScript']
});

const levi = new Student({
    name: 'Levi',
    age: 24,
    location: 'Ogden, UT',
    background: 'Customer Service',
    className: 'WEB21',
    favSubjects: ['HTML', 'CSS', 'JavaScript', 'Python']
});


levi.listsSubjects();
lily.PRAssignment('Intro to Computer Science');
lily.sprintChallenge('Intro to Computer Science');
console.log(levi.location);

const maggie = new ProjectManager({
    name: 'Maggie',
    age: 24,
    location: 'Albany, NY',
    gradClassName: 'WEB12',
    favInstructor: 'James'
});

const jenni = new ProjectManager({
    name: 'Jenni',
    age: 27,
    location: 'San Francisco, CA',
    gradClassName: 'WEB14',
    favInstructor: 'Sharon'
});

jenni.standUp('WEB21_Jenni');
maggie.debugsCode(lily, 'JavaScript');
console.log(jenni.age);