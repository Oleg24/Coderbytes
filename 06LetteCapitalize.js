/* Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space. 
*/
function LetterCapitalize(str){
	var words = str.split(" ");
	for (var i=0; i<words.length; i++){
		var word = words[i].split('');
		word[0] = word[0].toUpperCase();
		words[i] = word.join(' ');
		}
		return words.join(" ");
		};
	
/* Initially this one was a bit tricky for me to picture in my head.  The way I see it now is that we first split the string into an array of words.  Then we take this array of words, and for each word, we quickly divide it into individual letters, capitalize the letter at index 0, put the word back together, and move onto the next word.  Afterwards we put the entire string back together. */  