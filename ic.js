
const sentence =  `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`;
function countWords(sentence) {
var array = [];
var result=sentence.split(' ');
for(let i=0;i<result.length;i++) {
	if(result[i].length > 1) {
	array.push(result[i]);
  }
   }
    return array.length;
}
console.log(countWords(sentence));