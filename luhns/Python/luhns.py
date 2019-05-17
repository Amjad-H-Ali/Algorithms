print("Luhn's Algorithm in Python!")

def luhns():

	try:
		ccNum = promptUserForCCNum()
		print(ccNum)
	except:
		luhns()






# Get Credit Card Number from User
def promptUserForCCNum():

	# Prompt until valid number is entered
	while True:
		print('w')
		ccNum = input("Enter CC Number: ")

		if(int(ccNum) and len(ccNum) > 1): return ccNum

luhns()