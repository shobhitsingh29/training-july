import React from 'react'
import jest from 'jest'
class MyClass {
    sum(a,b){

        console.log(('sum'));
        return this.serviceCall(a,b)

    }
    serviceCall(a,b)
    {
        return a+b;
    }
}
it.only('pass through non func action',()=>{
    "use strict";

    let obj =new MyClass();
    MyClass.prototype.serviceCall=jest.fn(()=>3);
    let result =obj.sum(1,2);
    expect(result).toBe(3)

});