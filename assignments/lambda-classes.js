// CODE here for your Lambda Classes
// ## `lambda-classes` - We need a roster of Lambda School personnel. Build it!

// - We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
// - Lambda personnel can be broken down into three different types of `people`.
//   - **Instructors** - extensions of Person
//   - **Students** - extensions of Person
//   - **Project Managers** - extensions of Instructors
// - **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:

// ^^^^^^^ Person ^^^^^^^^^

// - First we need a Person class. This will be our `base-class`
// - Person receives `name` `age` `location` all as props
// - Person receives `speak` as a method.
// - This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

// ^^^^^^^ Instructor ^^^^^^

// - Now that we have a Person as our base class, we'll build our Instructor class.
// - Instructor uses the same attributes that have been set up by Person
// - Instructor has the following unique props:
//   - `specialty` what the Instructor is good at i.e. 'redux'
//   - `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   - `catchPhrase` i.e. `Don't forget the homies`
// - Instructor has the following methods:
//   - `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   - `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'

// ^^^^^^ Student ^^^^^^^^

// - Now we need some students!
// - Student uses the same attributes that have been set up by Person
// - Student has the following unique props:
//   - `previousBackground` i.e. what the Student used to do before Lambda School
//   - `className` i.e. CS132
//   - `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// - Student has the following methods:
//   - `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   - `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   - `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`

// #### Project Manager ^^^^^^^^

// - Now that we have instructors and students, we'd be nowhere without our PM's
// - ProjectManagers are extensions of Instructors
// - ProjectManagers have the following unique props:
//   - `gradClassName`: i.e. CS1
//   - `favInstructor`: i.e. Sean
// - ProjectManagers have the following Methods:
//   - `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   - `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

class Person {
    constructor(attrs) {
        this.name = attrs.name; // is this the right syntax
        this.age = attrs.age;
        this.location = attrs.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
} // end of person class

// ^^^^^^^ Person ^^^^^^^^^

class Instructor extends Person {
    constructor(attrs) {
        super(attrs);
        this.specialty = attrs.specialty;
        this.favLanguage = attrs.favLanguage;
        this.catchPhrase = attrs.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject} `;
    }
    testScore(student) {
        return `You recieved a ${Math.random(student.graded)}`;
    }
}

// ^^^^^^^ Instructor ^^^^^^

class Student extends Person {
    constructor(attrs) {
        super(attrs);
        this.previousBackground = attrs.previousBackground;
        this.className = attrs.className;
        this.favSubjects = attrs.favSubjects;
        this.grade = attrs.grade;
    }

    listSubjects() {
        return `${this.favSubjects} `;
    }
    PRAssignments(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

// ^^^^^^ Student ^^^^^^^^

class ProjectManagers extends Instructor {
    constructor(attrs) {
        super(attrs);
        this.gradClassName = attrs.gradClassName;
        this.favInstructor = attrs.favInstructor;
    }

    standUp(slackChannel) {
        return ` ${this.name} announces to ${slackChannel}, @channel standup times!​​​​​`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject} `;
    }
}

// #### Project Manager ^^^^^^^^

// ======= Person ========
const Aaron = new Person({
    name: "Aaron",
    location: "California",
    age: 32
});

const Spencer = new Person({
    name: "Spencer",
    location: "USA",
    age: 26
});

const Matt = new Person({
    name: "Matt",
    location: "somewhere",
    age: 22
});
// ======= Instructor ========
const Brit = new Instructor({
    name: "Brit",
    location: "Canada",
    age: 32,
    favLanguage: "Html",
    specialty: "Front-end",
    catchPhrase: `Don't forget the homies`
});
const Ryan = new Instructor({
    name: "Ryan",
    location: "USA",
    age: 26,
    favLanguage: "JavaScript",
    specialty: "Front-end",
    catchPhrase: `yo yo yo`
});
const Josh = new Instructor({
    name: "Josh",
    location: "somewhere",
    age: 31,
    favLanguage: "JavaScript and CSS",
    specialty: "Front-end",
    catchPhrase: `What up Gangsta`
});

// ======= Student ========
const Billy = new Student({
    name: "Billy",
    location: "Canada",
    age: 25,
    previousBackground: "Barista",
    className: "Web 80",
    favSubjects: ["Anything with Coffee", "Life", "People", "Math"],
    graded: 90
});
const Bobby = new Student({
    name: "Bobby",
    location: "USA",
    age: 25,
    previousBackground: "Astronaut",
    className: "Web 40",
    favSubjects: ["liberal Arts"],
    graded: 90
});
const Nathan = new Student({
    name: "Nathan",
    location: "Unknown",
    age: 31,
    previousBackground: "Mechanic",
    className: "Web 30",
    favSubjects: ["Biology", "life"],
    graded: 90
});

// ======= Project Manager========
const Juan = new ProjectManagers({
    name: "Juan",
    location: "New Mexico",
    age: 25,
    gradClassName: "Web 2",
    favInstructor: "Brit"
});
const Austin = new ProjectManagers({
    name: "Austin",
    location: "Idaho",
    age: 28,
    gradClassName: "Web 1",
    favInstructor: "Josh"
});
const Dylan = new ProjectManagers({
    name: "Dylan",
    location: "Sioux Falls",
    age: 31,
    gradClassName: "Web 4",
    favInstructor: "Brit"
});

// ======= ========

console.log(Aaron.speak());
console.log(Brit.demo("Html"));
console.log(Ryan.grade(Aaron, "Math"));
console.log(Billy.listSubjects());
console.log(Bobby.PRAssignments("Math"));
console.log(Nathan.sprintChallenge("Java"));
console.log(Juan.standUp("WEB 25"));
console.log(Austin.debugsCode(Billy, "JavaScript"));
console.log(Austin.testScore(Bobby));