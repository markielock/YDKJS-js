const SPENDING_THRESHOLD = 400;
const TAX_RATE = 5;
const PHONE_PRICE = 250;
const ACCESSORY_PRICE = 50;

var bank_balance = prompt("Please enter your bank balance: ");
var count = 1;

function calculate_price(price, added_price){
	return price + added_price;
}

function format_price(price){
	return "£" + price.toString();
}

function add_tax(price){
	var tax = price * TAX_RATE / 100;
	return price + tax;
}

while(bank_balance > PHONE_PRICE){
	var total_price = PHONE_PRICE;
	while(total_price <= SPENDING_THRESHOLD && total_price <= bank_balance){
		previous_price = total_price;
		temp = calculate_price(total_price, ACCESSORY_PRICE);
		total_price = add_tax(temp);
		if(total_price > SPENDING_THRESHOLD){
			total_price = previous_price;
			break;
		}
		console.log(total_price);
	}

	var formatted_price = format_price(total_price);

	console.log("Phone " + count + " is " + formatted_price);

	bank_balance = bank_balance - total_price;

	count++;
}