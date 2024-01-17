
function main() {


    const s = '12:05:45PM'

    timeConversion(s);
}

function timeConversion(s) {
    // Write your code here
    
    //AM or PM
    // 12 AM = 00
    // PM +12
    
    let time_arr = [s.substring(0,2),s.substring(3,5),s.substring(6,8),s.substring(s.length -2)];
    console.log(time_arr);
    if (time_arr[3] == 'AM'){
        if (time_arr[0] == '12') time_arr[0] = '00';
    }
    if (time_arr[3] == 'PM'){
        if (time_arr[0] != '12') {
            let hour_num = Number(time_arr[0]) + 12;
            console.log(hour_num)
            time_arr[0] = hour_num.toString()
        }
    }
    console.log(time_arr[0] + ':' + time_arr[1] + ':' + time_arr[2] )
}

// function timeConversion(s) {
//     // Write your code here VERSION 2
//     var time_arr=[s.substring(0,2),s.substring(3,5),s.substring(6,8),s.substring(8,10)]
//     var time_converted = ''
//     if (time_arr[3] == 'AM'){
//         if (time_arr[0] == 12) time_arr[0] = '00';
//     }else if (time_arr[0] != '12'){
//         time_arr[0] = +time_arr[0] + 12
//     }
    
//     time_converted = time_arr[0] + ':' + time_arr[1]+ ':' +time_arr[2];
//     console.log(time_converted);
//     return time_converted;
// }




main();