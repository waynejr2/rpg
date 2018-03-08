
var Combat = require("../js/Combat");
var expect = require('chai').expect;
var assert = require('chai').assert;

var dice = function() {

};

describe('Testing Combat: ', function() {
    describe('functions are functions: ', function() {
        it('toHit is a function', function() {
            var c = new Combat(dice);
            
            var actual = typeof c.toHit;
            var expected = 'function';
                        
            expect(actual).to.equal(expected);
        });
        
        it('didToHitSucceed is a function', function() {
            var c = new Combat(dice);
            
            var actual = typeof c.didToHitSucceed;
            var expected = "function";
            
            expect(actual).to.equal(expected);
        });
        
        
        it('calculateToBeHit is a function', function() {
            var c = new Combat(dice);
            
            var actual = typeof c.calculateToBeHit;
            var expected = "function";
            
            expect(actual).to.equal(expected);
        });
        
        it('calculateToHit is a function', function() {
            var c = new Combat(dice);
            
            var actual = typeof c.calculateToHit;
            var expected = "function";
            
            expect(actual).to.equal(expected);
        });        
    });
    
    describe('didToHitSucceed test suite', function() {
        it('toHit > toBeHit didToHitSucceed returns true', function() {  
            var c = new Combat(dice);
            var toHit = 11;
            var toBeHit = 10;
                        
            var actual = c.didToHitSucceed(toHit, toBeHit);
            var expected = true;
            
            expect(actual).to.equal(expected);       
        });
        
        it('toHit = toBeHit didToHitSucceed returns true', function() {  
            var c = new Combat(dice);
            var toHit = 10;
            var toBeHit = 10;
                        
            var actual = c.didToHitSucceed(toHit, toBeHit);
            var expected = true;
            
            expect(actual).to.equal(expected);       
        });
        
        it('toHit < toBeHit didToHitSucceed returns false', function() {  
            var c = new Combat(dice);
            var toHit = 10;
            var toBeHit = 11;
                        
            var actual = c.didToHitSucceed(toHit, toBeHit);
            var expected = false;
            
            expect(actual).to.equal(expected);       
        });
        
    });
        
    describe('calculateToHit test suite', function() {
        it('toHitRoll = attackBonus = weaponAdjustment = 0 calculateToHit returns 0', function() {  
            var c = new Combat(dice);
            var toHitRoll = 0;
            var attackBonus = 0;
            var weaponAdjustment = 0;
                        
            var actual = c.calculateToHit(toHitRoll, attackBonus, weaponAdjustment);
            var expected = 0;
            
            expect(actual).to.equal(expected);       
        });
        
        it('toHitRoll = 1, attackBonus = weaponAdjustment = 0 calculateToHit returns 1', function() {  
            var c = new Combat(dice);
            var toHitRoll = 1;
            var attackBonus = 0;
            var weaponAdjustment = 0;
                        
            var actual = c.calculateToHit(toHitRoll, attackBonus, weaponAdjustment);
            var expected = 1;
            
            expect(actual).to.equal(expected);       
        });
        
        it('toHitRoll = attackBonus = 1, weaponAdjustment = 0 calculateToHit returns 2', function() {  
            var c = new Combat(dice);
            var toHitRoll = 1;
            var attackBonus = 1;
            var weaponAdjustment = 0;
                        
            var actual = c.calculateToHit(toHitRoll, attackBonus, weaponAdjustment);
            var expected = 2;
            
            expect(actual).to.equal(expected);       
        });
        
        it('toHitRoll = attackBonus = weaponAdjustment = 1 calculateToHit returns 3', function() {  
            var c = new Combat(dice);
            var toHitRoll = 1;
            var attackBonus = 1;
            var weaponAdjustment = 1;
                        
            var actual = c.calculateToHit(toHitRoll, attackBonus, weaponAdjustment);
            var expected = 3;
            
            expect(actual).to.equal(expected);       
        });
    });
      
    describe('calculateToBeHit test suite', function() {
        describe('Regression tests', function() {
            it('when armorClass is 0, thac0 is 15, calculateToBeHit should be 15', function() {
                var c = new Combat(dice);
                var thac0 = 15;
                var armorClass = 0;
                        
                var actual = c.calculateToBeHit(thac0, armorClass);
                var expected = 15;
            
                expect(actual).to.equal(expected);
                
            });
        });
        
        it('when armorClass is 0, thac0 will be the same as ToBeHit', function() {
            var c = new Combat(dice);
            var thac0 = 10;
            var armorClass = 0;
                        
            var actual = c.calculateToBeHit(thac0, armorClass);
            var expected = 10;
            
            expect(actual).to.equal(expected);
        });
        
        it('armorClass 5, thac0 10 means 5 ToBeHit', function() {
            var c = new Combat(dice);
            var thac0 = 10;
            var armorClass = 5;
                        
            var actual = c.calculateToBeHit(thac0, armorClass);
            var expected = 5;
            
            expect(actual).to.equal(expected);
        });
        
        it('armorClass -5, thac0 10 means 15 ToBeHit', function() {
            var c = new Combat(dice);
            var thac0 = 10;
            var armorClass = -5;
                        
            var actual = c.calculateToBeHit(thac0, armorClass);
            var expected = 15;
            
            expect(actual).to.equal(expected);
            
        });
        
    });
  
    describe('toHit test suite: ', function() {
        describe("regression tests", function() {
            it('running toHit more than once will overwrite toHit function with integer/non-function', function() {
                var c = new Combat(dice);
                
                c.toHit();
                c.toHit();
                var actual = typeof c.toHit;
                var expected = 'function';
                        
                expect(actual).to.equal(expected);                          
           }); 
        });        
        describe('testing defaults: ', function() {
            it('using all defaults toHit should be false', function() {
                var c = new Combat(dice);
            
                var actual = c.toHit(null, null, null, null, null);
                var expected = false;
            
                expect(actual).to.equal(expected);
            });
            
            it('with toHitRoll = 10 and all others default, should be true', function() {
                var c = new Combat(dice);
            
                var actual = c.toHit(10, null, null, null, null);
                var expected = true;
            
                expect(actual).to.equal(expected);
            });

            it('with toHitRoll = 9 and all others default, should be false', function() {
                var c = new Combat(dice);
            
                var actual = c.toHit(9, null, null, null, null);
                var expected = false;
            
                expect(actual).to.equal(expected);
            });

            it('with attackBonus = 10 and all others default, should be true', function() {
                var c = new Combat(dice);
            
                var actual = c.toHit(null, 10, null, null, null);
                var expected = true;
            
                expect(actual).to.equal(expected);                
            });
            
            it('with attackBonus = 9 and all others default, should be false', function() {
                var c = new Combat(dice);
            
                var actual = c.toHit(null, 9, null, null, null);
                var expected = false;
            
                expect(actual).to.equal(expected);                
            });            

            it('with weaponAdjustment = 10 and all others default, should be true', function() {
                var c = new Combat(dice);
            
                var actual = c.toHit(null, null, 10, null, null);
                var expected = true;
            
                expect(actual).to.equal(expected);                
            });
            
            it('with weaponAdjustment = 9 and all others default, should be false', function() {
                var c = new Combat(dice);
            
                var actual = c.toHit(null, null, 9, null, null);
                var expected = false;
            
                expect(actual).to.equal(expected);                
            });                      

            it('with thac0 = 10 and all others default, should be true', function() {
                var c = new Combat(dice);
            
                var actual = c.toHit(null, null, null, 10, null);
                var expected = true;
            
                expect(actual).to.equal(expected);                
            });
            
            it('with thac0 = 11 and all others default, should be false', function() {
                var c = new Combat(dice);
            
                var actual = c.toHit(null, null, null, 11, null);
                var expected = false;
            
                expect(actual).to.equal(expected);                
            }); 
            
            it('with armorClass = 20 and all others default, should be true', function() {
                var c = new Combat(dice);
            
                var actual = c.toHit(null, null, null, null, 20);
                var expected = true;
            
                expect(actual).to.equal(expected);                
            });
            
            it('with armorClass = 19 and all others default, should be false', function() {
                var c = new Combat(dice);
            
                var actual = c.toHit(null, null, null, null, 19);
                var expected = false;
            
                expect(actual).to.equal(expected);                
            });
            
            it('with armorClass = 0, tohit = 5, thac0 is 15 and all others default, should be false', function() {
                var c = new Combat(dice);
            
                var actual = c.toHit(5, null, null, 15, 0);
                var expected = false;
            
                expect(actual).to.equal(expected);                
            });
            

        });

    });
    /*
    describe('weaponDamage test suite', function() {
        it('', function() {
            var c = new Combat(dice);
            var att = (function() {
                function weaponDamage () { return 9};
                
                return { weaponDamage: weaponDamage()};
            })();
            console.log(typeof att.weaponDamage);
            
            var actual = c.weaponDamage(att);
            var expected = 9;
            
            expect(actual).to.equal(expected);
        });
    });*/
});
