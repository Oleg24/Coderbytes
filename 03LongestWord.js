/*Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. 
*/

function LongestWord(sen){
	var maxWordLength = 0;
	var Longest_Word = 0;
	var words = sen.split(' ');
	for (var i=0; i<words.length; i++){
		if(words[i].length>maxWordLength){
			maxWordLength = words[i].length;
			Longest_Word = words[i];
			}
			}
			return Longest_Word;
			}
