function main(){
    var s= 2;
    var t= 3;
    var a= 1;
    var b= 5;
    var apples=[2];
    var oranges=[-2];


    countApplesAndOranges(s, t, a, b, apples, oranges)

}

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    var apple_count = 0;
    var orange_count = 0;

    for (let apple = 0 ; apple < apples.length; apple++){
        if ((a + apples[apple]) >= s && (a + apples[apple]) <= t )
        apple_count++; 
    }
    for (let orange = 0 ; orange < oranges.length; orange++){
        if ((b + oranges[orange]) >= s && (b + oranges[orange]) <= t )
        orange_count++; 
    }
   
    console.log(apple_count);
    console.log(orange_count);
}

main();