class Person{

    showId(){
        console.log(("99"));
    }
}
let person =new Person();
console.log((typeof Person));
console.log((person instanceof Person));
person.showId();
console.log((person.showId==Person.prototype.showId));