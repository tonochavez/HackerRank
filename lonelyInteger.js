function main() {

    arrays = [
        [1],
        [1, 1, 2],
        [0, 0, 1, 2, 1],
        [1,2,3,4,3,2,1]
    ]

    for (a of arrays) {
        lonelyinteger(a);
        console.log('--------')

    }
}

    function lonelyinteger(a) {
        // Write your code here
        var counts = new Array(101).fill(0)
        var position = 0
        console.log(a)
        for (let i = 0; i < a.length; i++) {
            position = +a[i];
            counts[position]++;        
        }
        console.log(counts.indexOf(1));
        return counts.indexOf(1);
    }

    main();