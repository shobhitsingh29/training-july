
import {square} from "./exportSquareFunc";

/*function square(a){

    return a*a;
}*/
class DoubleSq{

    constructor(){
        console.log((" parent"));
    }
     doubleSquare(b) {
       var xyz=square(b)*square(b);
         console.log(xyz);
    }

}
let abc=new DoubleSq();
abc.doubleSquare(8);
