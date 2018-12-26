# teddy-secure

[<img src='http://i63.tinypic.com/59zu9u.jpg' height=60/>]('https://www.npmjs.com/package/teddy-secure') &nbsp;&nbsp; [<img src='http://i63.tinypic.com/j0jmh0.jpg' height=60/>]('https://github.com/bongdreams/teddy-secure') &nbsp;&nbsp; [<img src='http://i66.tinypic.com/29de8zt.jpg' height=60/>]('https://twitter.com/BoNgDrEaMs')

### Password Hashing with Salt and Pepper

An easy-to-use, opinionated, password hashing with randomized salt and pepper. This package can be installed easily by using the command  ``` npm install teddy-secure ```. This library is opinionated in the way one might use the Salt and Pepper to password hashing. 

The salt is randomly generated to each hash call, and is deemed to be saved in the password store along with the hash. On the event of comparing the hash with a new password entered in a call similar to that of Signing In or Login, the hash, along with the salt needs to be passed to the compare function.

The use of pepper is also simple, a set of characters is chosen from a string of characters, and used along with the actual password and the salt to hash the whole thing. While comparing the hash, all the characters are looped through and the password string to be hashed is created and hashed, unless the hash matches the hash stored in the password store.

### Usage

```
var teddy_sec = require('teddy-secure');

// To hash a password
teddy_sec.hash("some_new_password", function(result){
	console.log("hash: ", result.hash);
	console.log("salt: ", result.salt);
});

// To compare a password with the hash in the password store
teddy_sec.compare("some_password", hash_password_db, salt_password_db, function(result){
	console.log("bool result: ", result);
});

```
