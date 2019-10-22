//first task  https://www.codewars.com/kata/training-js-number-17-methods-of-string-object-indexof-lastindexof-and-search/javascript
function firstToLast(str, c) {
    let firstIndex = str.indexOf(c);
    let lastIndex = str.lastIndexOf(c);
    if (firstIndex === -1) {
        return -1;
    } else {
        return lastIndex - firstIndex;
    }
}

//second task  https://www.codewars.com/kata/training-js-number-18-methods-of-string-object-concat-split-and-its-good-friend-join/javascript
function splitAndMerge(str, sp) {
    str = str.split(' ');
    for (i = 0; i < str.length; i++) {
        str[i] = str[i].split('').join(sp)
    }
    return str.join(' ');
}
