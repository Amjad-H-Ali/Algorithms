let prompt = require('prompt'); // For prompt in CLI instead of using process.stdin.on

console.log("Luhn's Algorithm in JS!");
/*
	1. Multiply every other digit by 2, starting with the number’s second-to-last digit, and then add those products' digits together.
	2. Add the sum to the sum of the digits that weren’t multiplied by 2.
	3. If the total’s last digit is 0 (or, put more formally, if the total modulo 10 is congruent to 0), the number is valid!
	4. Start: AMEX: 34 or 37, MASTER CARD: [51-55], VISA: 4
	5. Lenght: AMEX: 15 digits, MASTERCARD: 16 digits, VISA: 13 and 16 digits. 
*/



const main = async () => {

	let ccNum = await promptUserForCCNum();

	// Every other digit starting from second-to-last digit.
	let everyOtherDigit = getEverOtherDigit(ccNum);

	console.log(everyOtherDigit);

	let everyOtherDigitMultipliedByTwo = multiplyByTwo(everyOtherDigit);

	console.log(everyOtherDigitMultipliedByTwo);

	let sumOfProducts = addProducts(everyOtherDigitMultipliedByTwo);

	console.log(sumOfProducts);

	let otherNums = getOtherNumbers(ccNum);

	console.log(otherNums);

	let sumOfOtherNumbers = addNumbers(otherNums);

	console.log(sumOfOtherNumbers);

	let sum = sumOfProducts + sumOfOtherNumbers;

	console.log(sum);

	let isValidCCNum = validate(sum);

	console.log(isValidCCNum);


	
}


// Returns an array of every other number.
const getEverOtherDigit = (numString) => {
	let len = numString.length;

	// If num is Odd length, create array of nums at odd indexes. 
	// If Even length, make array of nums at even indexes.
	return [...numString].filter((e, i) => len%2 ? i%2 : !(i%2));
}

// Returns an array of other numbers 
const getOtherNumbers = (numString) => {
	let len = numString.length;

	// If num is Even length, create array of nums at odd indexes. 
	// If Odd length, make array of nums at even indexes.
	return [...numString].filter((e, i) => len%2 ? !(i%2) : i%2);
}

// Multiply Every other digit by two.
const multiplyByTwo = (numArray) => {
	// Multiplies every number by two.
	// Convert back to string since coerced to int.
	return numArray.map(e => (e*2).toString());
}

// Adds Product of multiplied numbers
const addProducts = (numArray) => {
	return numArray.map(e => {
		console.log(e.length);
		if(e.length == 2)
			// Add two digit number
			// Coerce string to int.
			return (e[0]-0)+(e[1]-0);
		else
			return (e-0);
		// Sum up array
	}).reduce((total, number) => {
		return total+number;
	});
}

// Returns Sum of numbers
const addNumbers = (numArray) => {
	return numArray.reduce((total, number) => (total-0) + (number-0) // Minus zero Coerces string to int.
	);
}

// Get CC Num from CLI. Returns Promise
const getCCNum = () => {
	return new Promise((resolve) => {
		prompt.start();

		prompt.get('Enter CC Num:', (err, result) => {
			resolve(result['Enter CC Num:']);
		})
	})
		
}

// Validate if credit card number
const validate = (num) => {
	// Check if last digit is zero.
	// Not 0, equals true.
	// Not 1, equals false.
	return !(num % 10);
}

// Keeps Prompting user for CC Num until valid input is entered.
const promptUserForCCNum = async () => {
	let ccNum;

	do {

		ccNum = await getCCNum();

	} while(!(ccNum > 0)); // Ensures no char is entered or number less than 0.
						  // Otherwise something like '1a2' < 0 evaluates to False. 

	prompt.stop();

	return ccNum;
}



main();


/*
	* Try These

	* 378282246310005 >> AMEX

	* 371449635398431 >> AMEX

	* 5555555555554444 >> MASTERCARD

	* 5105105105105100 >> MASTERCARD

	* 4111111111111111 >> VISA

	* 4012888888881881 >> VISA 

	* 1234567890 >> INVALID

	* 369421438430814 >> INVALID

	* 4062901840 >> INVALID

	* 5673598276138003 >> INVALID

	* 4111111111111113 >> INVALID

	* "foo" 

	* ""

*/