for (let n=1; n<=100; n++) {
    var txt = "";
	if (n%3 == 0) {txt = txt + "Fizz";}
	if (n%5 == 0) {txt = txt + "Buzz";}

    if (txt == "") {console.log(n);}
    else {console.log(txt);}
}