//https://www.codewars.com/kata/training-js-number-19-methods-of-string-object-touppercase-tolowercase-and-replace/train/javascript
function alienLanguage(str) {
    let strUpper = str.toUpperCase().split(' ');
    for (let i in strUpper) {
        let sliceLetter = strUpper[i].slice(0, -1);
        let lastLetter = strUpper[i].slice(-1).toLowerCase();
        strUpper[i] = sliceLetter + lastLetter;
    }
    return strUpper.join(' ');
}  
