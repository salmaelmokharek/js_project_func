//reverse a string
function reverseStr(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseStr("hey gomycode"));



//count char
function countChar(str) {
    return str.length;
}
console.log(countChar("salma el mokharek."));



//capitalize words
function capitalizeWords(sentence) {

    var words = sentence.split(' ');
    var cap_word = '';

    for (var i = 0; i < words.length; i++) {
        var word = words[i];

        if (word.length > 0) {
            cap_word += word.charAt(0).toUpperCase() + word.slice(1);
        }

        if (i < words.length - 1) {
            cap_word += ' ';
        }
    }
    return cap_word;
}
console.log(capitalizeWords("welcome to gomycode"));
