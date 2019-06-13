// CODE here for your Lambda Classes

class Person {
    constructor(properties) {
        this.name = properties.name;
        this.age = properties.name;
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