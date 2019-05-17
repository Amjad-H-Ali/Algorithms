let prompt = require('prompt'); // For prompt in CLI instead of using process.stdin.on

console.log("Luhn's Algorithm in JS!");
/*
	1. Multiply every other digit by 2, starting with the number’s second-to-last digit, and then add those products' digits together.
	2. Add the sum to the sum of the digits that weren’t multiplied by 2.
	3. If the total’s last digit is 0 (or, put more formally, if the total modulo 10 is congruent to 0), the number is valid!
*/



const main = async () => {

	let ccNum = await promptUserForCCNum();


	getEverOtherDigit(ccNum);
}



const getEverOtherDigit = (numString) => {
	let len = numString.length;

	// If num is Odd length, create array of nums at odd indexes. 
	// If Even length, make array of nums at even indexes.
	return [...numString].filter((e, i)=> len%2 ? i%2 : !(i%2));
}

const getCCNum = () => {
	return new Promise((resolve) => {
		prompt.start();

		prompt.get('Enter CC Num:', (err, result) => {
			resolve(result['Enter CC Num:']);
		})
	})
		
}

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