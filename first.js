function countwords(){
var paragraph="I teaching If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love."
var word1="love"
var word2="you"

var count1=0;
var count2=0;
var regex = /[.,]/g;
var paragraph=paragraph.replace(regex,'')
var words=paragraph.split(' ')
console.log(words);
for(var i=0;i<words.length;i++){
if(words[i]== word1){
	console.log(i)
	count1++;
}if(words[i]== word2){
	count2++;
}
}
if(count1>count2){
	console.log( word1+" occours "+ count1+ "times");
}
else if(count2>count1){
	console.log( word2+" occours "+ count2 + "times");
}
else{
	console.log("both words occour "+ count1 + " times")
}
}
countwords()

