var crypto = require('crypto');

let key = "yzbqklnj"
let ans = null
let i = 0

let num = 6 // change per instructions

function md5(content) {
	var hash = crypto.createHash('md5');
	hash.update(content);
	return hash.digest('hex');
}

while(ans == null){
	i++
	let hash = md5(key + i).toString()
	if(hash.substring(0, num) == "0".repeat(num)){
		ans = hash
	}
}

console.log(i, ans)
