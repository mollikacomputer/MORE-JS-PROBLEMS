const stringLetter = 'Hello!';

function reverseString(text){
        let reversed = '';
    for(let letter of text){
            reversed = letter + reversed;
            console.log(letter);
    }return reversed;
}
const reverse = reverseString(stringLetter);

console.log(reverse);
// const greetings = 'Hello, How are you?';

// function reverseString(text){
//     let reversed = '';
//     for(const letter of text){
        
//         reversed = letter + reversed;
//         console.log(reversed);
//     }return reversed;
// }
// const reverse = reverseString(greetings);
// console.log(reverse);
// const greetings = 'Hello How are you?';

// function reverseString(text){
    
//     for(const letter of text){
//         console.log(letter);
//     }
// }
// const reverse = reverseString(greetings);
// console.log(reverse);