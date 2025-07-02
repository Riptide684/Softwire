const max_n = Number(process.argv[2]);

for (let n=1; n<=max_n; n++) {
    	var txt = [];
	if (n%3 == 0) {txt.push("Fizz");}
   	if (n%13 == 0) {txt.push("Fezz")}
	if (n%5 == 0) {txt.push("Buzz");}
    	if (n%7 == 0) {txt.push("Bang");}
    	if (n%11 == 0) {
        	if (txt.includes("Fezz")) {txt = ["Fezz", "Bong"];}
        	else {txt = ["Bong"];}
    	}
    	if (n%17 == 0) {txt.reverse();}

    	if (txt.length == 0) {console.log(n);}
    	else {console.log(txt.join());}
}
