function main(){

        arr = [-4,3,-9,0,4,1];
        
    plusMinus(arr)
}

function plusMinus(arr) {
    // Write your code here
    var pos = 0;
    var neg = 0;
    var zero = 0;

    for (let i = 0; i < arr.length; i++){
        if (arr[i] == 0 ) {
            zero++;
            continue;
        }
        if (arr[i] > 0) {
            pos++;
        } else {
            neg++
        }     
    }
    console.log(`${(pos/(arr.length)).toFixed(6)}
    ${(neg/(arr.length)).toFixed(6)}
    ${(zero/(arr.length)).toFixed(6)} `)   

}

main();