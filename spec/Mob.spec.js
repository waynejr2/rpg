
//var mob = require("../js/lib/Mobs/Mob");
var expect = require('chai').expect;
var assert = require('chai').assert;
var path = require('path');
var basedir = path.resolve('./');
var Mob = require(path.resolve(basedir, 'js/lib/Mobs/Mob'));

describe('Testing Mob: ', function() {
    describe('functions are functions: ', function() {
        it('action() is a function', function() {
            var mob = new Mob();
            
            var actual = typeof mob.action;
            var expected = "function";
            
            expect(actual).to.equal(expected);
            
        });
        
        it('actionScript() is a function', function() {
            var mob = new Mob();
            
            var actual = typeof mob.actionScript;
            var expected = "function";
            
            expect(actual).to.equal(expected);
            
        });
        
        it('damage() is a function', function() {
            var mob = new Mob();
            
            var actual = typeof mob.damage;
            var expected = "function";
            
            expect(actual).to.equal(expected);
            
        });
        
        it('getId() is a function', function() {
            var mob = new Mob();
            
            var actual = typeof mob.getId;
            var expected = "function";
            
            expect(actual).to.equal(expected);
            
        });
        
        it('info() is a function', function() {
            var mob = new Mob();
            
            var actual = typeof mob.info;
            var expected = "function";
            
            expect(actual).to.equal(expected);
            
        });
        
        it('isAlive() is a function', function() {
            var mob = new Mob();
            
            var actual = typeof mob.isAlive;
            var expected = "function";
            
            expect(actual).to.equal(expected);
            
        });
        
        it('list() is a function', function() {
            var mob = new Mob();
            
            var actual = typeof mob.list;
            var expected = "function";
            
            expect(actual).to.equal(expected);
            
        });
        
        it('weaponDamage() is a function', function() {
            var mob = new Mob();
            
            var actual = typeof mob.weaponDamage;
            var expected = "function";
            
            expect(actual).to.equal(expected);
            
        });
    });
    
    describe('list test suite: ', function() {
        it('list returns array with newly created [Mob], aka return[this]', function() {
            var mob = new Mob();
            
            var actual = mob.list();
            var expected = [mob];            
            
            expect(actual).to.deep.equal(expected);
        });
    });
});