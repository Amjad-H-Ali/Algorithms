print("Luhn's Algorithm in Python!")


'''
	1. Multiply every other digit by 2, starting with the number’s second-to-last digit, and then add those products' digits together.
	2. Add the sum to the sum of the digits that weren’t multiplied by 2.
	3. If the total’s last digit is 0 (or, put more formally, if the total modulo 10 is congruent to 0), the number is valid!
	4. Start: AMEX: 34 or 37, MASTER CARD: [51-55], VISA: 4
	5. Lenght: AMEX: 15 digits, MASTERCARD: 16 digits, VISA: 13 and 16 digits. 
'''

# Main function
def luhns():

	try:
		ccNum = promptUserForCCNum()
		print(ccNum)
		everyOtherNum = getEveryOtherNum(ccNum)
		print(everyOtherNum)
	except:
		luhns()


# Returns list of every other number starting from second-to-last
def getEveryOtherNum(ccNum):
	# If number length even, filter numbers at even indexes. If length is odd, filter numbers at odd indexes.
	tuplesOfEveryOtherNum = list(filter(lambda i_e: i_e[0]%2 if len(ccNum)%2 else not i_e[0]%2, enumerate(ccNum)))

	# We have a tuple of (index, NumWeWant). return arrays of Nums we want.
	return [t[1] for t in tuplesOfEveryOtherNum]




# Get Credit Card Number from User
def promptUserForCCNum():

	# Prompt until valid number is entered
	while True:
		print('w')
		ccNum = input("Enter CC Number: ")

		if(int(ccNum) and len(ccNum) > 1): return ccNum

luhns()


'''
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
'''
