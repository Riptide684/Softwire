const max_n = Number(process.argv[2]);
const rules = JSON.parse(process.argv[3]);
const keys = Object.keys(rules)

// currently no way to assign ordering or overwrite previous rules

for (let n=1; n<=max_n; n++) {
    	var txt = [];
	for (let j=0; j<keys.length; j++) {
		var m = Number(keys[j]);
		var word = rules[m + ""];
		if (n%m == 0) {txt.push(word);}
	}

    	if (txt.length == 0) {console.log(n);}
    	else {console.log(txt.join());}
}
