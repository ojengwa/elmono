document.write('<b>list of package.json:' + '</b></br>')

const fs = require('fs')
contents = fs.readFileSync('./package.json', 'utf8')

let p = JSON.parse(contents)
iter(p)

function iter (p) {
	for (var key in p) {
		if (typeof(p[key]) == 'object') {
			document.write(key + ':</br>');
	     	 iter(p[key]);
	    } else {
	      document.write(key + ' => ' + p[key] + '</br>');
	    }  
	    // key is key
	    // value is p[key]
	}
}