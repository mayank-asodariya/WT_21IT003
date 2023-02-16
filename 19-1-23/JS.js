class Person {
    constructor(name, age) {
    this.name = name;
    this.age = age;
    }
    showDetails() {
    console.log(`name is ${this.name} and age is ${this.age}`);
    }
    }
    class Student extends Person {
    constructor(name, age, ID, semester) {
    super(name, age);
    this.ID = ID;
    this.semester = semester;
    }
}

const studentList = [];
const displayAt = document.getElementById("idShowData");
const ulele = document.createElement("u1");
function createAndAddStudent() {
    const name = documentLgetElementById("idName").value,
        age = 29,
        ID = document.getElementById("idRollNumber").value,
        semi = 4;
}

try {
    studentList.push(new Student(name, age, ID, sem));
    const lielement = document.createElement("li");
    lielement.textContent = `Name is ${name} and id ${ID}`;
    ulele.appendChild(lielement);
    displayAt.appendChild(ulele);
    } 
catch (e) {
    //console.log(e.message);
    document.getElementById("errMsg").textContent = e.message;
    }
    document.getElementById("idRollNumber").value = "";
    document.getElementById("idName").value = "";


document,getElementById("idBtn"),addEventListener("click", createAndAddStudent);