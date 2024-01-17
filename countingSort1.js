function main() {

    arrays = [
        [1],
        [1, 1, 2],
        [0, 0, 1, 2, 1],
        [1,2,3,4,3,2,1]
    ]

    for (arr of arrays) {
        countingSort(arr);
        console.log('--------')

    }
}

function countingSort(arr) {
    // Write your code here
    var frecuency_arr = new Array(100).fill(0)
    for (let i = 0 ; i < arr.length ; i++){
        frecuency_arr[arr[i]]++
    }
    console.log(frecuency_arr)
    return frecuency_arr;
}

main()