class Car{
    constructor(name, year){
        this.name = name,
        this.year = year
    }
    age(){
        const CarAge = new Date();
        return CarAge.getFullYear() - this.year;
    }
}

const myCar1 = new Car("toyota", 1999);
let x = "My " + myCar1.name + " is " + myCar1.age() + " years old";
document.getElementById("year").innerHTML = x;