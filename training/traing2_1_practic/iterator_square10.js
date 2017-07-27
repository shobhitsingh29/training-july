let squareTen = {[Symbol.iterator](arr)
{\
    var init = -1;
    var count = 9;
    var len = arr.length;

    return {

        next()
    {
        if (init < count) {
            init++;


            return {
                value: (arr[init] * arr[init]),
                done: true
            }


        } else {
            return {
                value: null,
                done: false
            }
        }

    }
}


}
}

let it = squareTen[Symbol.iterator]([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]);
console.log((it.next()));
console.log((it.next()));
console.log((it.next()));
console.log((it.next()));
console.log((it.next()));
console.log((it.next()));
console.log((it.next()));
console.log((it.next()));
console.log((it.next()));
console.log((it.next()));
console.log((it.next()));
console.log((it.next()));

console.log((it.next()));
console.log((it.next()));
console.log((it.next()));
console.log((it.next()));
console.log((it.next()));
console.log((it.next()));