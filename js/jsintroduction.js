function myFunctionTest(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

function max(a, b) {

    if (a > b) {
        return a;
    }
    else {
        return b;
    }
}

function maxOfThree(a, b, c) {
    return max(max(a, b), c);

}

function isVowel(vowel) {
    if (vowel == null || vowel == undefined) return false;
    if (vowel.length > 1) return false;

    if (vowel === 'a' || vowel === 'A' || vowel === 'e' || vowel === 'E' ||
        vowel === 'o' || vowel === 'O' || vowel === 'u' || vowel === 'U' ||
        vowel === 'v' || vowel === 'V') return true;
    else {
        return false;
    }
}

const sum = (arr) => {
    return arr.reduce((summation, elem) => summation + elem, 0);
};
const product = (arr) => {
    return arr.reduce((product, elem) => product * elem, 1);
};

function reverse(str) {

    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");

    return joinArray;
}

const findLongestWord = arrayOfWords => {
    if (arrayOfWords == null || arrayOfWords.length === 0 || arrayOfWords == undefined)
        return 0;

    let lengthOflongestWord = arrayOfWords[0].length;
    arrayOfWords.forEach(element => {
        if (element.length > lengthOflongestWord) {
            lengthOflongestWord = element.length;
        }
    });
    return lengthOflongestWord;
};


const filterLongWords = (words, key) => {
    const filteredArray = words.filter((elt, i, arr) => {
        return elt.length > key;
    });
    return filteredArray;
};

const multiplyBy10 = (list, key) => {
    const result = list.map(function (elem, i, array) {
        return elem * key;
    });
    return result;
}

const elementsEqualTo = (list, key) => {
    const equalTo = list.filter(function (elem, i, array) {
        return elem === key;
    });
    return equalTo;
}

const productOfAllElements = (list) => {
    const productAll = list.reduce((product, elt) => {
        return product * elt;
    }, 1);
    return productAll;
};

console.log("Expected output of max(11,20) is 20  " + myFunctionTest(20, max(11, 20)));
console.log("Expected output of max(11,20) is 20  " + myFunctionTest(11, max(11, 20)));

console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));

console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(4, maxOfThree(55, 4, 44)));

console.log("Expected output of checkVowel('a') is true " + myFunctionTest(true, isVowel('a')));
console.log("Expected output of checkVowel('b') is false " + myFunctionTest(false, isVowel('b')));

console.log("Expected output of product([1,2,3,4,5]) is 15 " + myFunctionTest(15, sum([1, 2, 3, 4, 5])));
console.log("Expected output of product([1,2,3,4,5,6]) is 15" + myFunctionTest(17, sum([1, 2, 3, 4, 5, 6])));

console.log("Expected output of product([1,2,3,4,5]) is 120 " + myFunctionTest(120, product([1, 2, 3, 4, 5])));
console.log("Expected output of product([1,2,3,4,5,6]) is 120" + myFunctionTest(520, product([1, 2, 3, 4, 5, 6])));

console.log("Expected output of reverse('Java Script') is <tpircS avaJ> " + myFunctionTest('tpircS avaJ', reverse('Java Script')));
console.log("Expected output of reverse('Functions in JS') is <sj ni snoitcnuf>" + myFunctionTest('sj ni snoitcnuF', reverse('Functions in JS')));

console.log("Expected output of findLongestWord(['ab','abc','abcd','abcde']) is 5 " + myFunctionTest(5, findLongestWord(['ab', 'abc', 'abcd', 'abcde'])));
console.log("Expected output of findLongestWord(['ab11','abc112278','abcd34','abcde52']) is 7" + myFunctionTest(7, findLongestWord(['ab11', 'abc112278', 'abcd34', 'abcde52'])));

console.log("Expected output of filterLongWords(['ab','abc','abcd','abcde']) is ['abcd','abcde'] " + myFunctionTest('abcd,abcde', filterLongWords(['ab', 'abc', 'abcd', 'abcde'], 3).toString()));
console.log("Expected output of filterLongWords(['ab','abc1','abcd1','abcde1']) is ['abc1','abcd1','abcde1'] " + myFunctionTest(['abcd1', 'abcde1'], filterLongWords(['ab', 'abc1', 'abcd1', 'abcde1'], 3)));

