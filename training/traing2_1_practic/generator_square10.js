function* squareTen (arr){
    var init=0;
    var count=10;
    while(init<count){
        yield arr[init]*arr[init];
        init++;
    }

}
let sqT=squareTen([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]);
console.log(sqT.next());
console.log(sqT.next());
console.log(sqT.next());
console.log(sqT.next());
console.log(sqT.next());
console.log(sqT.next());
console.log(sqT.next());
console.log(sqT.next());
console.log(sqT.next());
console.log(sqT.next());
console.log(sqT.next());
console.log(sqT.next());
console.log(sqT.next());
console.log(sqT.next());
console.log(sqT.next());
console.log(sqT.next());
console.log(sqT.next());
console.log(sqT.next());
console.log(sqT.next());
console.log(sqT.next());
