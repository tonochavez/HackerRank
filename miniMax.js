function miniMaxSum(arr) {
    // Write your code here
    var min = 1000000000;
    var max = 1;

    for (let dont_add = 0 ; dont_add < arr.length; dont_add++){
        var sum = 0;
        for (let i = 0 ; i < arr.length ; i++){
            if (i == dont_add) continue;
            sum = sum + arr[i];
        }
        if (dont_add == 0){
            min = sum;
            max = sum;
        }
        if (sum > max ) max = sum;
        if (sum < min ) min = sum;         
    }
    console.log (`${min} ${max}`)
    
}

function main() {
    const arr = [140638725,436257910,953274816,734065819,362748590];

    miniMaxSum(arr);
}
main();