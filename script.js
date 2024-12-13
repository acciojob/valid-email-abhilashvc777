function validEmail(str) {
  //your JS code here.
	let regex = /^[a-zA-Z0-9]+\@[a-z]+\.{1}[a-z]{1,4}\.?[a-z]{0,4}$/
	if(str.match(regex)){
		return true
	}else{
		return false
	}
}

// Do not change the code below.
const str = prompt("Enter an email address.");     
alert(validEmail(str));
