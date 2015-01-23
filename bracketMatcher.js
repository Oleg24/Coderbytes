// Using the JavaScript language, have the function BracketMatcher(str) take the str parameter being passed and return 1 
// if the brackets are correctly matched and each one is accounted for. Otherwise return 0. 

// For example: if str is "(hello (world))", then the output should be 1, but if str is "((hello (world))" 
// the the output should be 0 because the brackets do not correctly match up. Only "(" and ")" will be used as brackets.
// If str contains no brackets return 1. 

function BracketMatcher(str) { 

	var obj = {
		open: 0,
		closed: 0,
	};

	str.split('').forEach(function(val){
		if(val === ')'){
			obj.open++;
		}
		if(val === '('){
			obj.closed++;
		}
	});

	if(obj['open'] === obj['closed'] || obj['open'] === 0 && obj['closed'] === 0){
		return 1;
	}
		return 0;  

         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
BracketMatcher(readline());                            

