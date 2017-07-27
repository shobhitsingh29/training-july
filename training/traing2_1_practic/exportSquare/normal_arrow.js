var abc= {

    printThis:function (){
    console.log(this);
},

    printArrrowThis:printArrrowThis =()=>
{
    console.log(this);
}

}
abc.printThis();
abc.printArrrowThis();
