/*
 * PROBLEM `checkData`: (easy)
 * Write a function that takes a string and checks to make sure that the string
 * has a length of exactly three. Return true if the string length is three or
 * false if it is not three.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function checkData(inputString) {

	if(typeof inputString !== "string"){
		throw "Invalid Input";
	}
	if(inputString.length === 3){
		return true;
	} else {
		return false;
	}
}

/*
 * PROBLEM `concatenateArrays`: (easy)
 * Write a function that, given two arrays of integers a and b, returns an array
 * that is formed by the elements of a followed by the elements of b.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function concatenateArrays(a, b) {

	if(Array.isArray(a) && Array.isArray(b)){

		for(var j = 0; j < a.length; j++){
			if(typeof a[j] !== "number"){
				throw "Invalid Input";
			} else if(a[j] !== Math.ceil(a[j])){
				throw "Invalid Input";
			}
		}
		for(var j = 0; j < b.length; j++){
			if(typeof b[j] !== "number"){
				throw "Invalid Input";
			} else if(b[j] !== Math.ceil(b[j])){
				throw "Invalid Input";
			}
		}

		for(var i = 0; i < b.length; i++) {
			a.push(b[i]);
		}
		return a;

	} else {
		throw "Invalid Input";
	}
	
}

/*
 * PROBLEM `fixProperNoun`: (easy)
 * Proper nouns always begin with a capital letter, followed by small letters.
 * Write a function called `fixProperNoun` that takes a potentially improperly
 * capitalized proper noun and returns the same noun with the proper
 * capitalization.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function fixProperNoun(noun) {

	if(typeof noun !== "string" || noun.length === 0){
		throw "Invalid Input";
	}
	var allLower = noun.toLowerCase();
	var stringArray = allLower.split("");
	var firstLetter = stringArray.shift();
	stringArray.unshift(firstLetter.toUpperCase());

	return stringArray.join("");
}

/*
 * PROBLEM `sortLetters`: (easy)
 * Write a function called `sortLetters` that returns a string that sorts all 
 * the letters from a given string in the alphabetical order.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function sortLetters(inputString) {

	if(typeof inputString !== "string"){
		throw "Invalid Input";
	}
	
	var stringArray = inputString.split("");
	var sortedArray = stringArray.sort();

	return sortedArray.join("");
}

/*
 * PROBLEM `absVal`: (easy)
 * Write a function called `absVal` that return the absolute value of a given 
 * integer. Don't use Math.abs(...)
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function absVal(integer) {

	if(typeof integer !== "number"){
		throw "Invalid Input";
	} else if(isNaN(integer)){
		throw "Invalid Input";
	} else if(integer !== Math.ceil(integer)){
		throw "Invalid Input";
	} else if (integer < 0){
		return -integer;
	} else {
		return integer;
	}
}

/*
 * PROBLEM `myMin`: (easy)
 * Write a function called `myMin` that takes two integers and returns the
 * smaller of the two numbers.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

 function myMin(a,b){

 	if(a !== Math.ceil(a) || b !== Math.ceil(b)){
		throw "Invalid Input";
	} else if(a > b){
 		return b;
 	} else {
 		return a;
 	}
 }

/*
 * PROBLEM `myMax`: (easy) - Actual Interview Question
 * Write a function called `myMax` that takes an array of integers ans returns
 * the largest.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 *
 * Insane mode: do this without using a for loop.
 */
 function myMax(a){
	if(!Array.isArray(a)){
		throw "Invalid Input";
	} else {	
		for(var j = 0; j < a.length; j++){
    			if(typeof a[j] !== "number"){
    				throw "Invalid Input";
    			} else if(a[j] !== Math.ceil(a[j])){
    				throw "Invalid Input";
    			}
    		}
    	}
    	 	var biggestInt = a[0];
    	 	for(var i = 0; i < a.length - 1; i++){
    	 		if(biggestInt < a[i+1]){
    	 			biggestInt = a[i+1];
    	 		} 
    	 	}
 	return biggestInt;
 }

/*
 * PROBLEM `getMonth`: (easy)
 * Write a function called `getMonth` that maps a given integer to a month.
 *
 * For example:
 * getMonth(1) == 'January'
 * getMonth(3) == 'March'
 * etc.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
 function getMonth(a) {
 	var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

 	if(typeof a !== "number"){
 		throw "Invalid Input";
 	} else if(a !== Math.ceil(a)){
		throw "Invalid Input";
	} else if(a <= 0 || a >= 13){
		throw "Invalid Input"
	} else { 		
		return months[a-1];
	}
 	
 }

/*
 * PROBLEM `randomElement`: (medium)
 * Create a function called `randomElement` that takes an array of values and
 * returns one randomly selected value from that array.
 */
 function randomElement(a){

 	return a[Math.floor(Math.random()*a.length)];
 }

/*
 * PROBLEM `studentPairs`: (medium)
 * Create a javascript function called `studentPairs` that takes an array of
 * student names and returns an array of randomly selected pairs of students
 * (array of arrays).
 */

 function studentPairs(a){
 	var pairs = [];
 	var pair = [];
 
    while (a.length >= 2){
	 	var rand1 = Math.floor(Math.random()*a.length)
		pair.push(a[rand1]);
	 	a.splice(rand1, 1);
	    var rand2 = Math.floor(Math.random()*a.length)
	 	pair.push(a[rand2]);
	 	a.splice(rand2, 1);
	 	pairs.push(pair);
	    var pair = [];
    }
    if(a.length === 1){
    	pairs[pairs.length-1].push(a[0]);
    }
    return pairs;
 }

/*
 * PROBLEM `sumSquares`: (medium)
 * Write a function called `sumSquares` that returns the sum of squares of all
 * integers from 1 up to and including a given positive, non-zero integer N.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

 function sumSquares(integer){
 	var newArray = [];
 	var sumOfSquaredArray = 0;
 	for(var i = 1; i <= integer; i++){
 		newArray.push(i);
 	}

 	for(var i = 0; i < newArray.length; i++){
 		sumOfSquaredArray += Math.pow(newArray[i],2);
 	}

 	return sumOfSquaredArray;

 }

/* 
 * PROBLEM `findMaxDiff`: (medium)
 * Given an array of integers, write a function called `findMaxDiff` that finds
 * the maximal difference between any two adjacent elements.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

 function findMaxDiff(a){

 	if(a.length === 1 || a.length === 0){
 		return 0;
 	}

 	var biggestDiff = Math.abs(a[0] - a[1]);
 	for(var i = 2; i < a.length - 1; i++){
 		if(biggestDiff < Math.abs(a[i] - a[i+1])){
 			biggestDiff = Math.abs(a[i] - a[i+1]);
 		} 
 	}

 	return biggestDiff;

 }

/*
 * PROBLEM `insertDashes`: (medium)
 * Write a function called `insertDashes` that transforms a given sentence into
 * a new one with dashes between each two consecutive letters.
 * For example: insertDashes('abba test') => a-b-b-a t-e-s-t
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
 function insertDashes(sentence){
 	var dashedSentence = [];
	var splitWord = sentence.split(" ");
	var splitLetters;

	for(var j = 0; j < splitWord.length; j++){
    	if(splitWord[j] === ""){
	        splitLetters  = splitWord[j].split();
	    } else {
    	    splitLetters  = splitWord[j].split("");
	    }
    
	    for(var i = 0; i < splitLetters.length; i++){
	        if(i !== splitLetters.length-1){
	            splitLetters.push(splitLetters.shift()+"-")
	        } else {
	            splitLetters.push(splitLetters.shift());
	            dashedSentence.push(splitLetters.join(""))
	        }
	    }
	}

	return dashedSentence.join(" ");
 	
 }


/* 
 * PROBLEM `mySubstring`mySubstring: (medium)
 * Implement a function called `mySubstring` that can output the substring of 
 * the given string within specified bounds.
 * 
 * For example: mySubstring('abcde', 2, 3) === 'cd'
 * 
 * Don't use String.substring in your solution.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
 function mySubstring(theString, start, end) {

 	var stringArray = theString.split("");
	var subString = stringArray.splice(start, end-1);

	return subString.join("")	

 }

/*
 * PROBLEM `splitSwap`: (medium)
 * Write a function called `splitSwap` that swaps two halves of a given array.
 * If the array has an odd number of elements the array should be split in half
 * by rounding down the number of elements divided by two.
 * 
 * For example: splitSwap([1,2,3,4,5]) === [3,4,5,1,2]
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

 function splitSwap(a){

 	var theSplit = Math.floor(a.length/2);
 	var cutPart = a.splice(theSplit, a.length-1);
 	var reverseArray = cutPart.reverse();
 	for(var i = 0; i < cutPart.length; i++){
 		a.unshift(reverseArray[i]);
 	}


 	return a;
 }

/*
 * PROBLEM `smallMultiples`: (medium)
 * For given n and k write a function called `smallMultiples` that returns the
 * count of the number of multiples of k that are not greater than n.
 *
 * For example smallMultiples(4, 1) === 3 because 1*2, 1*3 and 1*4 are not
 * greater than 4.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

 function smallMultiples(limit, k) {
 	var counter = 0;
 	var i = 2;
 	var result = 0;
 	
 	while(result < limit){

	 	result = k*i;

	 	if(result > limit){
	 		break;
	 	} else {
	 		i+=1;
	 		counter+=1;;
	 	}
 	}

 	return counter;
 	

 }

/* 
 * PROBLEM `rot13`: (hard)
 * Create a function called `rot13` that takes an unencrypted string and returns
 * the [ROT-13](http://en.wikipedia.org/wiki/ROT13) version of that string.
 *
 * The input should only contain lower-case alphabetic characters. If the input
 * is invalid throw an 'Invalid Input' exception.
 */
 function rot13(theString){
 	var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
 	var rot13Bet = ["n","o","p","q","r","s","t","u","v","w","x","y","z","a","b","c","d","e","f","g","h","i","j","k","l","m"];
 	var encrypted= [];
 	var splitString = theString.split("");
 	for(var i = 0; i < splitString.length; i++){
 		var index = alphabet.indexOf(splitString[i])
 		encrypted.push(rot13Bet[index]);
 	}

 	return encrypted.join("");
 }

/*
 * PROBLEM `derot13`: (hard)
 * Create a function called `derot13` that takes a ROT-13 encrypted string and
 * returns the decrypted version of that string.
 *
 * The input should only contain lower-case alphabetic characters. If the input
 * is invalid throw an 'Invalid Input' exception.
 */
 function derot13(theString){
 	var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
 	var rot13Bet = ["n","o","p","q","r","s","t","u","v","w","x","y","z","a","b","c","d","e","f","g","h","i","j","k","l","m"];
 	var dencrypted= [];
 	var splitString = theString.split("");
 	for(var i = 0; i < splitString.length; i++){
 		var index = alphabet.indexOf(splitString[i])
 		dencrypted.push(rot13Bet[index]);
 	}

 	return dencrypted.join("");
 }

/*
 * PROBLEM `rotn`: (hard)
 * Create a function called `rotn` that takes an unencrypted string and an
 * integer (n) and returns the ROT-N version of that string.
 *
 * The input should only contain lower-case alphabetic characters. If the input
 * is invalid throw an 'Invalid Input' exception.
 */
 function rotn(theString, key){

 	var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	var newRotArray = [];
	var dencrypted= [];

 	for(var i = 0; i < alphabet.length; i++){    
	    var encryptedIndex = (i + key)%26;
	    newRotArray.splice(encryptedIndex, 0, alphabet[i]);
	}
 		
 	var splitString = theString.split("");
 	for(var i = 0; i < splitString.length; i++){
 		var index = alphabet.indexOf(splitString[i])
 		dencrypted.push(newRotArray[index]);
 	}

 	return dencrypted.join("");
 }
 

/*
 * PROBLEM `findBoth`: (hard)
 * Write a function called `findBoth` that takes two arrays of integers a and b 
 * returns an array that includes only the elements that appear in both a and b.
 * A value should not appear more than once in the returned array.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
 function findBoth(a,b) {
 	var commonArray = [];
	var count;

	if(a.length <= b.length){
	    count = b.length
	} else {
	    count = a.length
	}
	 	for(var i = 0; i < count; i++){
	 		if(a.indexOf(b[i]) !== -1){
	 			commonArray.push(b[i]);
	 		}
	 	}
	 	
	 	commonArray.sort();
	    var sentinel = commonArray.length;
	 	while(sentinel > 0){
	     	for(var i = 0; i < commonArray.length-1; i++){
	     	    if(commonArray[i] === commonArray[i+1]){
	     	        commonArray.splice(i,1);
	     	    }
	     	}
	     	sentinel--
	 	}
	 	
	 	return commonArray;
 }

/*
 * PROBLEM `countBoth`: (hard)
 * Write a function called `countBoth` that takes two arrays of integers a and 
 * b. The function should return the number of elements that exist in both a and
 * b.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
 function countBoth(a,b){
 var commonArray = [];
	var count;

	if(a.length <= b.length){
	    count = b.length
	} else {
	    count = a.length
	}
	 	for(var i = 0; i < count; i++){
	 		if(a.indexOf(b[i]) !== -1){
	 			commonArray.push(b[i]);
	 		}
	 	}
	 	
	 	commonArray.sort();
	    var sentinel = commonArray.length;
	 	while(sentinel > 0){
	     	for(var i = 0; i < commonArray.length-1; i++){
	     	    if(commonArray[i] === commonArray[i+1]){
	     	        commonArray.splice(i,1);
	     	    }
	     	}
	     	sentinel--
	 	}
	 	
	 	return commonArray.length;
}

/* 
 * PROBLEM `isDiagonalMatrix`: (hard)
 * In linear algebra, a square matrix (array of arrays) is called a diagonal 
 * matrix if all entries outside the main diagonal are zero (the diagonal from 
 * the upper left to the lower right).
 * For example:
 * [
 *   [1, 0, 0],
 *   [0, 2, 0],
 *   [0, 0, 3]
 * ]
 * is a diagonal matrix.
 *
 * [
 *   [1, 0, 2],
 *   [0, 2, 0],
 *   [0, 0, 3]
 * ]
 * is not a diagonal matrix.
 *
 * [
 *   [1, 0, 0],
 *   [0, 2, 0]
 * ]
 * is not a diagonal matrix.
 *
 * Write a function called `isDiagonalMatrix` that takes a matrix and returns
 * true if the matrix is a diagonal matrix. Otherwise return false.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
 function isDiagonalMatrix(d){
 	if(d[0].length === d.length){
 		switch(d.length){
 			case 1: return true;
 			break;
 			case 2:
 				if(d[0][1] === 0 && d[1][0] === 0){
 					return true;
 				} else {
 					return false;
 				}
 			break;
 			case 3:
 				if(d[0][1] === 0 && d[0][2] === 0 && d[1][0] === 0 &&
 				   d[1][2] === 0 && d[2][0] === 0 && d[2][1] === 0){
 					return true;
 				} else {
 					return false;
 				}
 			break;
 			default: return "I don't do more than 3x3 matrices";
 			break;
 		}
 	} else {
 		return false;
 	}
 }

/*
 * PROBLEM `isAnagram`: (hard) - Actual Interview Question
 * An anagram is a type of word play, the result of rearranging the letters of a
 * word or phrase to produce a new word or phrase, using all the original
 * letters exactly once.
 *
 * Write a function called `isAnagram` that takes two arrays of strings of equal 
 * lengths arr1 and arr2. The function should return a new array of the same 
 * length as the input with boolean values at each position i. The boolean value
 * at position i of the result array should be true if the strings at position i
 * in arr1 and arr2 are anagrams of each other. Otherwise the boolean at
 * position i of the result array should be false.
 *
 * For example:
 * isAnagram(
 * 		['cinema', 'shot', 'aba', 'rain'],
 * 		['iceman', 'hots', 'bab', 'train']
 * ) === [true, true, false, false];
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
 function countStrings(a,b){
 	var commonArray = [];
	var count;
	var counter = 0;

	if(a.length <= b.length){
	    count = b.length
	} else {
	    count = a.length
	}
	 	for(var i = 0; i < count; i++){
	 		if(a.indexOf(b[i]) !== -1){
	 			commonArray.push(b[i]);
	 		}
	 	}
	 	
	 	commonArray.sort();
	    var sentinel = commonArray.length;
	 	while(sentinel > 0){
	     	for(var i = 0; i < commonArray.length-1; i++){
	     	    if(commonArray[i] === commonArray[i+1]){
	     	        commonArray.splice(i,1);
	     	        counter++;
	     	    }
	     	}
	     	sentinel--
	 	}
	 	
	if(counter > 0){
	 	    return false;
	 	} else {
	 	    return true;
	 	}
}

 function isAnagram(a,b){
   	var word1;
	var word2;
	var truthArray = [];
	var flag = true;
	
	 for(var i = 0; i < a.length; i++){
	    word1 = a[i].split("");
	    word2 = b[i].split("");

	    if(word1.length !== word2.length){
	        truthArray.push(false);
	    } else {
	        for(var j = 0; j < word1.length; j++){
	            if(word1.indexOf(word2[j]) === -1){
	                truthArray.push(false);
	                flag = false;
	                break;
	            }
	        }
	        if(flag){
	            if(countStrings(word1,word2)){
	                truthArray.push(true);
	            } else {
	                truthArray.push(false);
	            }
	        }
	    }
	}

	return truthArray;
}

/*
 * PROBLEM `validateParentheses`: (hard) - Actual Interview Question
 * Write a function called `validateParentheses` that takes a string of
 * parentheses. The string can contain the following characters repeated any
 * number of times in any order: ()[]{}
 *
 * The function should return true if the parentheses are in a valid order and
 * false if they are not. One type of parentheses cannot close before it has
 * been opened and one type of parentheses cannot be closed while a different
 * type of parentheses is open. All parentheses that are opened must also be
 * closed.
 *
 * For example:
 * validateParentheses(']') === false;
 * validateParentheses('[') === false;
 * validateParentheses('[]') === true;
 * validateParentheses('{[]}') === true;
 * validateParentheses('([)]') === false;
 * validateParentheses('{[(){()}]}') === true;
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
 function validateParentheses(theString){
	var parentheses = "{}()[]";
	var stack = [];
	var character;
	var pos;
	var flag;

	for(var i = 0; character = theString[i]; i++){
		pos = parentheses.indexOf(character);

		if(pos === -1){
			continue;
		}

		if(pos%2 === 0){
			stack.push(pos + 1);
		} else {
			if(stack.pop() !== pos){
				return false;
			}
		}
	}

	return stack.length === 0
 }

/* 
 * PROBLEM `flattenArray`: (hard) - Actual Interview Question
 * Write a function called flattenArray that takes an array of any type of
 * element, and flattens it, such that any element in the given array that is an
 * array is converted to a list of non-arrays. For example:
 *
 * flattenArray([1, {a: [2, 3]}, 4, [5, [6]], [[7], 8, 9], 10])
 * === [1, {a: [2, 3]}, 4, 5, 6, 7, 8, 9, 10]
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 *
 * Insane mode: do this without recursion.
 */
function flattenArray(a){
    for(var i = 0; i < a.length; i++){
    		switch(typeof a[i]){
    			case "number":
    				continue;
    			break;
    			case "object":
    				if(Array.isArray(a[i])){
    				    storage = a[i];
                        a.splice(i,1);
                        console.log(a);
                        for(var j = 0; j < storage.length; j++){
                          a.splice(i,0,storage[j]);
                          i++
                        }
                        flattenArray(a);
    				} else {
    					continue;
    				}
    			break;
    			case "string":
    				continue;
    			break;
    			default: continue;
    			break;
    		}
    }
    return a;
}


