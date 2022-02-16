//let's create an object
let myTeacher = {
    name: "Josh B. Archer",
    officeHours: "Mon-Fri 9am",
    program: "Software Dev"
};

let classroom = {
    id: "SDEV 117",
    title: "Front-end Web Development",
    maxStudents: 30,
    curStudents: 13,
    teacher: {
        name: {
            first: "Josh",
            last: "Archer",
            middleInit: "B",
            nickname: "Teach"
        },
        officeHours: "Mon-Fri 9am",
        program: "Software Dev"
    },
    isVirtual: true,
    isRecorded: false,
    students: ["Tiffany", "Zack", "Charles"],
    printDetails: function() {
        console.log("Here is our classroom");
        console.log(`Title: ${this.title}`);
        console.log(`Max students: ${this.maxStudents}`);
    },
    printTeacher: function() {
        console.log(this.teacher);
    },
    calculateFullness: howFull
};

//print out the teacher's first name
console.log(`First name ${classroom.teacher.name.first}`);

//call a method on the object
let ratio = classroom.calculateFullness();

//convert to nice looking percentage
ratio *= 100;
ratio = ratio.toFixed(1);

console.log(`How full is the class? ${ratio}%`);

function howFull()
{
    return this.curStudents / this.maxStudents;
}

//print out the entire object (for debugging)
console.log(classroom);

//let's interact with the object
console.log(`Name: ${classroom.title}`);

for (let i = 0; i < classroom.students.length; i++)
{
    let student = classroom.students[i];
    console.log(`Student #${i}: ${student}`);
}

if (classroom.curStudents < 10)
{
    console.log("This classroom is small-ish");
}
else if (classroom.curStudents <= 24)
{
    //between 10-24
    console.log("This classroom is regular sized...");
}

//access the properties of a nested object
console.log(`Teacher: ${classroom.teacher.name}`);
console.log(classroom.teacher.officeHours);

//call a function attached to an object (AKA method)
classroom.printDetails();
classroom.printTeacher();





