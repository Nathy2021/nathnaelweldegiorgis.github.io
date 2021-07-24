function myFunctionTest(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

function max(x, y) {

    if (x > y) {
        return x;
    }
    else {
        return y;
    }
}

function maxOfThree(x, y, z) {
    return max(max(x, y), z);

}

function isVowel(vowel) {
    if (vowel == null || vowel == undefined) return false;
    if (vowel.length > 1) return false;

    if (vowel === 'e' || vowel === 'E' || vowel === 'a' || vowel === 'A' ||
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

const multiplyBy10 = (arr, key) => {
    const result = arr.map(function (elem, i, array) {
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

console.log("Expected output of maxOfThree(45,14,54) is 54  " + myFunctionTest(54, maxOfThree(45, 14, 54)));
console.log("Expected output of maxOfThree(45,14,54) is 54  " + myFunctionTest(14, maxOfThree(45, 14, 54)));

console.log("Expected output of checkVowel('0') is true " + myFunctionTest(true, isVowel('o')));
console.log("Expected output of checkVowel('x') is false " + myFunctionTest(false, isVowel('x')));

console.log("Expected output of sum([10,20,30,40,50]) is 150 " + myFunctionTest(150, sum([10, 20, 30, 40, 50])));
console.log("Expected output of sum([10,20,30,40,50,60]) is 210 " + myFunctionTest(170, sum([10, 20, 30, 40, 50, 60])));

console.log("Expected output of product([1,2,3,4,5]) is 120 " + myFunctionTest(120, product([1, 2, 3, 4, 5])));
console.log("Expected output of product([1,2,3,4,5,6]) is 120 " + myFunctionTest(620, product([1, 2, 3, 4, 5, 6])));

console.log("Expected output of reverse('Hello Java Script') is <tpircS avaJ olleH> " + myFunctionTest('tpircS avaJ olleH', reverse('Hello Java Script')));
console.log("Expected output of reverse('Hello Java Script') is <tpircS avaJ olleH> " + myFunctionTest('tpircS Java olleH', reverse('Hello Java Script')));

console.log("Expected output of findLongestWord(['ab','abc','abcd','abcde']) is 5 " + myFunctionTest(5, findLongestWord(['ab', 'abc', 'abcd', 'abcde'])));
console.log("Expected output of findLongestWord(['ab11','abc112278','abcd34','abcde52']) is 7 " + myFunctionTest(7, findLongestWord(['ab11', 'abc112278', 'abcd34', 'abcde52'])));

console.log("Expected output of filterLongWords(['ab','abc','abcd','abcde']) is ['abcd','abcde'] " + myFunctionTest('abcd,abcde', filterLongWords(['ab', 'abc', 'abcd', 'abcde'], 3).toString()));
console.log("Expected output of filterLongWords(['ab','abc1','abcd1','abcde1']) is ['abc1','abcd1','abcde1'] " + myFunctionTest(['abcd1', 'abcde1'], filterLongWords(['ab', 'abc1', 'abcd1', 'abcde1'], 3)));

console.log("Expected output of multiplyBy10([1,2,5,3,3],10) is [10,20,50,30,30] " + myFunctionTest([10, 20, 50, 30, 30].toString(), multiplyBy10([1, 2, 5, 3, 3], 10).toString()));
console.log("Expected output of multiplyBy10([1,2,5,3,3],10) is [10,20,50,30,30] " + myFunctionTest([1, 20, 50, 30, 30], multiplyBy10([1, 2, 5, 3, 3], 10)));

console.log("Expected output of elementsEqualTo([1,3,5,3,3],3) is [3,3,3] " + myFunctionTest([3, 3, 3].toString(), elementsEqualTo([1, 3, 5, 3, 3], 3).toString()));
console.log("Expected output of elementsEqualTo([1,3,5,3,3],3) is [5,3,1] " + myFunctionTest([5, 3, 1], elementsEqualTo([1, 3, 5, 3, 3], 3)));

console.log("Expected output of productOfAllElements([1,2,5,3,3]) is [90] " + myFunctionTest(90, productOfAllElements([1, 2, 5, 3, 3])));
console.log("Expected output of productOfAllElements([1,2,5,3,3]) is [90] " + myFunctionTest(100, productOfAllElements([1, 2, 5, 3, 3])));