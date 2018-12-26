/*jslint node:true*/

'use strict';

var crypto = require('crypto');


var getRandomSalt = function (callback) {
	return callback(crypto.randomBytes(10).toString('hex'));
};

var getRandomPepper = function (callback) {
	var alphabets = "abcdefghijklmnopqrstuvwxyz"
	return callback(alphabets[Math.floor(Math.random() * alphabets.length)]);
};

module.exports = {
	hash: function (plainOpenPassword, callback) {
		getRandomSalt(function (salt) {
			getRandomPepper(function (pepper) {
				var newPasswordToHash = pepper + salt + plainOpenPassword + salt + pepper;
				return callback({
					"hash": crypto.createHash('sha256').update(newPasswordToHash).digest('hex'),
					"salt": salt
				});
			});
		});
	},

	compare: function (plainOpenPassword, hashFromPasswordStore, salt, callback) {
		var alphabets = "abcdefghijklmnopqrstuvwxyz";

		for (var i = 0; i < alphabets.length; i++) {
			var newPasswordToHash = alphabets[i] + salt + plainOpenPassword + salt + alphabets[i];
			var hash = crypto.createHash('sha256').update(newPasswordToHash).digest('hex');
			if (hash === hashFromPasswordStore) {
				return callback(true);
			}
		}
		return callback(false);
	}
};
