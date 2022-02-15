function strWithOnlyAlphaNumeric(str){
    // Take in any alpha numeric character and replace it with nothing
    return str.replace(/[\W_]/ig, "");
}
function strLowerCased(str){
    // Take in a string and return it in lower case
    return str.toLowerCase(str);
}
function strReversed(str){
    let result = "";
    // Start at the end of the string with condition is bigger or equal to zero and go one backwards
    for (let i = str.length -1; i  >= 0; i--){
        result += str[i];
    }
    return result;
}

function palindrome(str) {
    // Remove all alphanumeric characters
    const cleanedUpString = strWithOnlyAlphaNumeric (str);
    // Make all string lowercase
    const lowerCaseString = strLowerCased(cleanedUpString);
    // Reverse the string
    const reversedString = strReversed(lowerCaseString);
    // Return the comparison of the reversed string
    // Reversed string equals to lower case cleaned up string
    console.log(`Is "${lowerCaseString}" equals to "${reversedString}"?`);
return lowerCaseString == reversedString;
}

console.log(palindrome("0_0 (: /-\ :) 0-0"));
