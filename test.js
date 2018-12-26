/*jslint node:true*/

'use strict';

var expect = require('chai').expect;
var encrypt = require('./encrypt.js');

describe('Hashing and Checking', function () {
	describe('Hashing', function () {
		it('hashing has two elements', function (done) {
			encrypt.hash("newPassword", function (result) {
				expect(result.salt).to.not.equal('');
				done();
			});
		});
	});
});
