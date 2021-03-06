
   // Task --1
   //Calculator 
function getHistory(){
	return document.getElementById("history-value").innerText;
}
function printHistory(num){
	document.getElementById("history-value").innerText=num;
}
function getOutput(){
	return document.getElementById("output-value").innerText;
}
function printOutput(num){
	if(num==""){
		document.getElementById("output-value").innerText=num;
	}
	else{
		document.getElementById("output-value").innerText=getFormattedNumber(num);
	}	
}
function getFormattedNumber(num){
	if(num=="-"){
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}
var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="clear"){
			printHistory("");
			printOutput("");
		}
		else if(this.id=="backspace"){
			var output=reverseNumberFormat(getOutput()).toString();
			if(output){//if output has a value
				output= output.substr(0,output.length-1);
				printOutput(output);
			}
		}
		else{
			var output=getOutput();
			var history=getHistory();
			if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:reverseNumberFormat(output);
				history=history+output;
				if(this.id=="="){
					var result=eval(history);
					printOutput(result);
					printHistory("");
				}
				else{
					history=history+this.id;
					printHistory(history);
					printOutput("");
				}
			}
		}
		
	});
}
var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output=reverseNumberFormat(getOutput());
		if(output!=NaN){ //if output is a number
			output=output+this.id;
			printOutput(output);
		}
	});
}

<script type = "text/javascript">
      // Task--2
      // Form validation code will come here.
      function validate() {
      
         if( document.myForm.Name.value == "" ) {
            alert( "Please provide your name!" );
            document.myForm.Name.focus() ;
            return false;
         }
         if( document.myForm.EMail.value == "" ) {
            alert( "Please provide your Email!" );
            document.myForm.EMail.focus() ;
            return false;
         }
         if( document.myForm.Number.value == "" || isNaN( document.myForm.Zip.value ) ||
            document.myForm.Number.value.length !=  ) {
            
            alert( "Please provide a zip in the format #####." );
            document.myForm.Zip.focus() ;
            return false;
         }
         if( document.myForm.Country.value == "-1" ) {
            alert( "Please provide your country!" );
            return false;
         }
         return( true );
      }
   //-->
</script>






function formValidation()
{
var uname = document.registration.username;
var unumber = document.registration.Number;
var uemail = document.registration.email;
{
if(allLetter(uname))
{ 
if(allnumeric(unumber))
{
if(ValidateEmail(uemail))
 
}
} 
}

return false;

} 
function allLetter(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('Username must have alphabet characters only');
uname.focus();
return false;
}


function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
function allnumeric(unumber)
{ 
var letters = /^[0-9]+$/;
if(unumber.value.match(letters))
{
return true;
}
else
{
alert('User PhoneNumber must have allnumeric characters only');
unumber.focus();
return false;
}
}
// Task--3
//Palindrome and Anagram


function anagram(txt1,txt2)
{
	 var length1 = txt1.split(' ').length-1;
	 length1=parseInt(length1)
	 i=length1
	  var length2 = txt2.split(' ').length-1;
	  length2=parseInt(length2)
	  j=length2

if(txt1==txt2)
{
return true;
}

else 
{

var newstr1 = txt1.toLowerCase().split("").sort().join();

 var newstr2 = txt2.toLowerCase().split("").sort().join();
 
if(length1 >1 && length1==i)
{
	n1=newstr1.slice(i+2);

}
else if(length1==1 && length1==i)
{
	n1=newstr1.slice(i+1);
}
else
{
	n1=newstr1
}

 if(length2>1 && length2==j)
{
	n2=newstr2.slice(j+2);

}
else if(length2==1 && length2==j)
{
	n2=newstr2.slice(j+1);
}
else
{
	n2=newstr2;
}

 if(n1 == n2){
    return (true);
  }
  else{
    return (false);
  }
}
}


function palindrome( text)
{

if(text.length>2)
{

 str1=text.split("").reverse().join("");

 if(text==str1)
 {
 	return true;
 }
else
{
	return false;
}
}
else
{
	return false;
}
}

// Task --4
// GAME OF SERVIVE 


function text1()
{
	var gen=Math.floor(Math.random()*(1000-1))
	document.getElementById("t1").value=gen;
	return gen;

}
function text2()
{
	var gen1=Math.floor(Math.random()*(1000-1))
	document.getElementById("t2").value=gen1;
	return gen1;

}
function gamecheck(x,y)
{
  x=x%10;
  y=y%10;
  var map1 = new Map([[0,1],[1,1],[2,2],[3,3],[4,1],[5,1],[6,2],[7,2],[8,3],[9,3]]);
  x1=map1.get(x);
  y1=map1.get(y);
 
  var map = new Map([[1,"Human"],[2,"Cockroach"],[3,"Nuclear Bomb"],[4,"Tie"]]);

  if(x1==3 && y1==3 || x1==1 && y1==1 || x1==2 && y1==2)
  {
  	if(x1==1 && y1==1)
  	{
  		document.getElementById("h2").innerHTML=map.get(1)+" Vs "+map.get(1);
  	return "Offo!!"+(map.get(4));
  }
  if(x1==2 && y1==2)
  	{
  		document.getElementById("h2").innerHTML=map.get(2)+" Vs "+map.get(2);
  	return "Offo!!"+(map.get(4));
  }
  if(x1==3 && y1==3)
  	{
  		document.getElementById("h2").innerHTML=map.get(3)+" Vs "+map.get(3);
  	return "Offo!!"+(map.get(4));
  }
  }
  else if(x1==1 && y1==2 || x1==2 && y1==1)
  {
  	document.getElementById("h2").innerHTML=map.get(1)+" Vs "+map.get(2);
  	return "The winner is "+(map.get(1));
  }
   else if(x1==2 && y1==3 || x1==3 && y1==2)
   	
  {
  	document.getElementById("h2").innerHTML=map.get(2)+" Vs "+map.get(3);
  	return "The winner is "+(map.get(2));
  }
   else if(x1==1 && y1==3 || x1==3 && y1==1)
  
  {
  	 	document.getElementById("h2").innerHTML=map.get(1)+" Vs "+map.get(3);
  	return "The winner is "+(map.get(3));
  }

}