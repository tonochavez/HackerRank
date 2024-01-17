function main(){

    // var x1 = 2;
    // var v1 = 1;
    // var x2 = 1;
    // var v2 = 2;
    
    // var x1 = 0;
    // var v1 = 2;
    // var x2 = 5;
    // var v2 = 3;
    
    var x1 = 45;
    var v1 = 7;
    var x2 = 56;
    var v2 = 2;
    
    // var x1 = 4602;
    // var v1 = 8519;
    // var x2 = 7585;
    // var v2 = 8362;
    
    // var x1 = 0;
    // var v1 = 3;
    // var x2 = 4;
    // var v2 = 2;
    
    // var x1 = 2081;
    // var v1 = 8403;
    // var x2 = 9107;
    // var v2 = 8400;

    kangaroo(x1, v1, x2, v2)

}

function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    var k1 = [];
    var same = 'NO'
    var jumps = 0

    if (v2 >= v1) {
        console.log(same);
        return same;
    }

    // for (let i = x1 ; i <= 1000000 ; i = i + v1){
    //     k1.push(i);
    // }
 
    // for (let i = x2 ; i <= 1000000 ; i = i + v2){
    //     jumps++;
    //     if (k1.includes(i) && (k1.indexOf(i) + 1) == jumps){
    //         same = 'YES';
    //         break;
    //     }    
    // }
    // console.log(same)
    // return same;

    if (((x2 - x1) / (v1 - v2)) % 1 == 0 ){
        same = 'YES'        
    }

    console.log(x2 - x1)
    console.log(v1 - v2)
    console.log((x2 - x1) / (v1 - v2))
    console.log(same)
    return same;
}

main();
