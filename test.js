/*jslint node:true*/

'use strict';

var expect = require('chai').expect;
var encrypt = require('./encrypt.js');

describe('Hashing and Checking', function () {
	describe('Hashing', function () {
		it('hashing has two elements', function (done) {
			encrypt.hash("newPassword", function (result) {
				expect(result.salt).to.not.equal('');
				expect(result.hash).to.not.equal('');
				done();
			});
		});
	});

	describe('Compare if the hash matches when tested with the real password', function () {
		it('the compare function validates the hash', function (done) {
			var plainOpenPassword = "newPassword";
			encrypt.hash(plainOpenPassword, function (result) {
				encrypt.compare(plainOpenPassword, result.hash, result.salt, function (compareResultBoolean) {
					expect(compareResultBoolean).to.equal(true);
					done();
				});
			});
		});

		it('the compare function does not validate a wrong password with the hash', function (done) {
			var plainOpenPassword = "newPassword";
			encrypt.hash(plainOpenPassword, function (result) {
				encrypt.compare("x", result.hash, result.salt, function (compareResultBoolean) {
					expect(compareResultBoolean).to.equal(false);
					done();
				});
			});
		});

		it('the compare function does not validate a wrong salt with the hash', function (done) {
			var plainOpenPassword = "newPassword";
			encrypt.hash(plainOpenPassword, function (result) {
				encrypt.compare(plainOpenPassword, result.hash, 'some_other_salt', function (compareResultBoolean) {
					expect(compareResultBoolean).to.equal(false);
					done();
				});
			});
		});
	});
});
