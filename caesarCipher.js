function main() {

    // var s = 'middle-Outz';
    // var s = 'Always-Look-on-the-Bright-Side-of-Life';
    var s = '!m-rB`-oN!.W`cLAcVbN/CqSoolII!SImji.!w/`Xu`uZa1TWPRq`uRBtok`xPT`lL-zPTc.BSRIhu..-!.!tcl!-U';
    // var s = 'abc';
    var k = 62;

    caesarCipher(s, k);

}

function caesarCipher(s, k) {
    // Write your code here

    var alphabet = 'abcdefghijklmnopqrstuvwxyz'
    var upper_case = alphabet.toUpperCase();
    var ciphered = ''

    for (let letter of s) {

        if (alphabet.includes(letter)) {
            console.log(alphabet.substr((alphabet.indexOf(letter)), 1))

            var position = alphabet.indexOf(letter) + (k % alphabet.length)
            if (position >= alphabet.length) {
                position = position - alphabet.length
            }
            
           ciphered = ciphered + (alphabet.at(position));

        } else if (upper_case.includes(letter)){
            var position = upper_case.indexOf(letter) + (k % alphabet.length)
            if (position >= upper_case.length) {
                position = position - upper_case.length
            }
            
           ciphered = ciphered + (upper_case.at(position));
        }
        else {
            ciphered = ciphered + letter;
        }

    }
    console.log(ciphered)
    return ciphered
}

main()