function palindrome(str) {

    let polishStr = str.replace(/\W+|_/g,"").toLowerCase();
    console.log(polishStr);
    let reverseStr= polishStr.split("").reverse().join("");
    return( polishStr != reverseStr) ? false : true;
}

// palindrome("eye");   
palindrome("0_0 (: /-\ :) 0-0")