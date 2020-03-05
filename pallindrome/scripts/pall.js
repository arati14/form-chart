const button = document.querySelector('button');
button.onclick =function myFunction() {
  var word = String(document.getElementById("pall").value);
  let reversed = ``;
  for (let i = 0; i < word.length; i++) {
     reversed = word[i] + reversed;
   } 
  if(word==reversed) {
    document.getElementById("demo").innerHTML = "The inputted string is pallindrome";
  }
  else{
    document.getElementById("demo").innerHTML = "The inputted string is not pallindrome";
 }
}