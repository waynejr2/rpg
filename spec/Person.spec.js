
//var Person = require("../js/lib/Mobs/Person");
var expect = require('chai').expect;
var assert = require('chai').assert;
var path = require('path');
var basedir = path.resolve('./');
var Person = require(path.resolve(basedir, 'js/lib/Mobs/Person'));

describe('Testing Person: ', function() {
    describe('functions are functions: ', function() {
        it('action() is a function', function() {
            var person = new Person();
            
            var actual = typeof person.action;
            var expected = "function";
            
            expect(actual).to.equal(expected);
            
        });
        
        it('actionScript() is a function', function() {
            var person = new Person();
            
            var actual = typeof person.actionScript;
            var expected = "function";
            
            expect(actual).to.equal(expected);
            
        });
        
        it('damage() is a function', function() {
            var person = new Person();
            
            var actual = typeof person.damage;
            var expected = "function";
            
            expect(actual).to.equal(expected);
            
        });
        
        it('getId() is a function', function() {
            var person = new Person();
            
            var actual = typeof person.getId;
            var expected = "function";
            
            expect(actual).to.equal(expected);
            
        });
        
        it('info() is a function', function() {
            var person = new Person();
            
            var actual = typeof person.info;
            var expected = "function";
            
            expect(actual).to.equal(expected);
            
        });
        
        it('isAlive() is a function', function() {
            var person = new Person();
            
            var actual = typeof person.isAlive;
            var expected = "function";
            
            expect(actual).to.equal(expected);
            
        });
        
        it('list() is a function', function() {
            var person = new Person();
            
            var actual = typeof person.list;
            var expected = "function";
            
            expect(actual).to.equal(expected);
            
        });
        
        it('weaponDamage() is a function', function() {
            var person = new Person();
            
            var actual = typeof person.weaponDamage;
            var expected = "function";
            
            expect(actual).to.equal(expected);
            
        });
    });
    
    describe('list test suite: ', function() {
        it('list returns array with newly created [person], aka return[this]', function() {
            var person = new Person();
            
            var actual = person.list();
            var expected = [person];            
            
            expect(actual).to.deep.equal(expected);
        });
    });
});