var array = [1, 2, 3, 4, 5]
var string = 'some-string'



for (let i = 0; i < string.length + 3; i++) {
    var position = i;
    if (position >= string.length) {
        position = position - string.length
    }
    console.log('position ' + position + ' ' + string[position])
}