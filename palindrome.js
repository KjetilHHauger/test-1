// takes in a word and returns true if the word is a palindrome, false if it is not
export function isWordPalindrome(str) {
    if (typeof str !== "string") return false;
    const cleanedStr = str.toLowerCase(); 
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

// takes in a sentence and returns true if the sentence is a palindrome, false if it is not
export function isSentencePalindrome(str) {
    if (typeof str !== "string") return false;
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, ''); 
    return cleanedStr === cleanedStr.split('').reverse().join('');
}
