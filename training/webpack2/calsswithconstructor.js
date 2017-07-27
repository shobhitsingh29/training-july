class Person{

    constructor(){
        console.log((" parent constructor called"));
    }
     static personId1() {
        return 8;
    }

}
console.log((Person.personId1()));/*
class child extends Person{
       personId(){
        console.log((101));
    }
}

let child1=new child();
child1.personId();*/