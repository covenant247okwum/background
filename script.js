/*var markName = 'Mark';
var johnName ='John';
var markMass = 50;
var johnMass = 70;
var markHeight = 2.2;
var johnHeight = 2.3;
var markBMIs = markMass / (markHeight*markHeight)
var johnBMIs= johnMass /  (johnHeight*johnHeight)

var markHigherBMIs = markBMIs > johnBMIs;
console.log('Is Mark\'s BMI higher than John\'s BMI' + ' '  +  markHigherBMIs);


var scoreJohn = (89 + 120 + 103) / 3;
var scoreMark = (116 + 94  + 123) / 3;
var scoreMary = (97 + 134 + 105) /3;

if (scoreJohn > scoreMark && scoreJohn > scoreMary) {
	console.log('John\'s team wins with' + ' '+ scoreJohn +' ' + 'points');
}else if (scoreMark > scoreJohn && scoreMark > scoreMary) {
	console.log('Mark\'s team wins with' + ' ' + scoreMark +' ' + 'points');
}else if (scoreMary > scoreJohn && scoreMary > scoreJohn){
	console.log('Mary\'s team wins with' + ' '+ scoreMary +' '+ 'points')
}
else {
	console.log('There is a draw');
}


function tipCalculator(bill) {
	var percentage;
	if (bill < 50) {
		percentage = .2;
	}else if (bill >= 50 && bill < 200) {
		percentage = .15;
	}else {
		percentage = .1;
	}
	return percentage * bill;
}

var bills = [124, 48, 268];
var tips =[tipCalculator(bills[0]),
	       tipCalculator(bills[1]),
	       tipCalculator(bills[2])];
var finalValues = [bills[0] + tips[0],
					bills[1] + tips[1],
					bills[2] + tips[2]];
console.log(tips);
console.log(finalValues);



var john ={
	fullName: 'john smith',
	mass: 92,
	height: 1.95,
	calcuBMI: function() {
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	}
}

var mark ={
	fullName: 'mark smith',
	mass: 62,
	height: 2.95,
	calcuBMI: function() {
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	}
}

john.calcuBMI();
mark.calcuBMI();
console.log(john, mark);

if (john.bmi > mark.bmi) {
	console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
}else if (mark.bmi > john.bmi) {
	console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
}else{
	console.log('They Both Have The Same BMI\'s');
}



function tipcalculator(bill){
	var percentage;
	if (bill < 50) {
		percentage= .2;
	}else if (bill >= 50 && bill < 200) {
		percentage= .15;
	}else	{
		percentage= .1;
	} return percentage * bill;
}

var bill = [124, 48, 268, 180, 42];
var tips = [tipcalculator(bill[0]),
	        tipcalculator(bill[1]),
	        tipcalculator(bill[2]),
	        tipcalculator(bill[3]),
	        tipcalculator(bill[4])];
var finalValue = [bill[0]+tips[0],
	              bill[1]+tips[1],
	              bill[2]+tips[2],
	              bill[3]+tips[3],
	              bill[4]+tips[4]
	              ];



function tipcalculator(bills) {
	var percentage;
	if (bills < 100) {
		percentage= .2;
	}else if (bills >= 100 && bills < 300) {
		percentage= .1;
	}else {
		percentage= .25;
	}
}
var bills = [77, 375, 110, 45];
var tips = [tipcalculator(bills[0]),
	        tipcalculator(bills[1]),
	        tipcalculator(bills[2]),
	        tipcalculator(bills[3])]
var finalValue = [bills[0]+tips[0],
	              bills[1]+tips[1],
	              bills[2]+tips[2],
	              bills[3]+tips[3]]
function calcAverageTips(averageTips){
	tips / 3;
}
console.log(averageTips)


//looping
var john = {
	fullName: 'john smith',
	bills: [128, 48, 268, 180, 42],
	calcTips: function() {
		this.tips = [];
		this.finalValue = [];

		for (var i = 0; i < this.bills.lenght; i++){
			// Determine percentage based on tipping rules
			var percentage;
			var bill = this.bills[i];
			if (bill < 50) {
				percentage= .2;
			}else if (bill >= 50 && bill < 200) {
				percentage= .15;
			}else {
				percentage= .1; 
			}
			this.tips[i] = bill * percentage;
		this.finalValue[i] = bill + bill * percentage;
		}
		
	}
}
john.calcTips();



var mark = {
	fullName: 'mark smith',
	bills: [77, 375, 110, 45],
	calcTips: function() {
		this.tips = [];
		this.finalValue = [];

		for (var i = 0; i < this.bills.lenght; i++){
			// Determine percentage based on tipping rules
			var percentage;
			var bill = this.bills[i];
			if (bill < 100) {
				percentage= .2;
			}else if (bill >= 100 && bill < 300) {
				percentage= .1;
			}else {
				percentage= .25; 
			}
			this.tips[i] = bill * percentage;
		this.finalValue[i] = bill + bill * percentage;
		}
		
	}
}

function calcAverage(tips) {
	var sum= 0;
	for (var i = 0; i < tips.length; i++) {
		sum=sum+tips[i];
	}
	return sum / tips.length;
}  

mark.calcTips();


john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);

console.log(mark);
console.log(john);

if (john.average > mark.average) {
	console.log(john.fullName + ' \'s family paid the highest tips with an average of $' + john.average);
}else if (mark.average > john.average) {
	console.log(mark.fullName + ' \'s family paid the highest tips with an average of $' + mark.average);
}else	{
	console.log(john.fullName + ' and' + mark.fullName + ' \'s family both paid the same tips with an average of $' + mark.average);
}
*/



