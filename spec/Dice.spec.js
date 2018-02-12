
var Dice = require("../js/Dice");
var expect = require('chai').expect;
var assert = require('chai').assert;


var RandomNumberIsZero = function() {
	return 0;
}

var RandomNumberIsPointFive = function() {
	return 0.5;
}

var RandomNumberIsOne = function() {
	return 1;
}

describe('Testing Dice: ', function() {
    describe('functions are functions: ', function() {
        it('roll() is a function', function() {
            var die = new Dice();
            
            var actual = typeof die.roll;
            var expected = "function";
            
            expect(actual).to.equal(expected);
        });
        
        it('d6() is a function', function() {
            var die = new Dice();
            
            var actual = typeof die.d6;
            var expected = "function";
            
            expect(actual).to.equal(expected);
        });
        
        it('d10() is a function', function() {
            var die = new Dice();
            
            var actual = typeof die.d10;
            var expected = "function";
            
            expect(actual).to.equal(expected);
        });
                
        it('d12() is a function', function() {
            var die = new Dice();
            
            var actual = typeof die.d12;
            var expected = "function";
            
            expect(actual).to.equal(expected);
        });
        
        it('d20() is a function', function() {
            var die = new Dice();
            
            var actual = typeof die.d20;
            var expected = "function";
            
            expect(actual).to.equal(expected);
        });
    });
    
    
	describe('roll test suite: ', function() {
		it('when min = max the result should be min', function() {
			var die = new Dice()
            
			expect(die.roll(100, 100)).to.equal(100);
			expect(die.roll(0, 0)).to.equal(0);
			expect(die.roll(-1, -1)).to.equal(-1);
		});
        
		it('random equals zero result should be the minimum which is 1', function() {
			var die = new Dice(RandomNumberIsZero);
			
			expect(die.roll(1, 2)).to.equal(1);
			expect(die.roll(1, 10)).to.equal(1);
		});
        
		it('random equals 1 result should be the maximum which is 200', function() {
			var die = new Dice(RandomNumberIsOne);
			
			expect(die.roll(1, 200)).to.equal(200);
		});
	});
    
	describe('d6 test suite: ', function() {
		var DIEMIN = 1;
		var DIEMAX = 6;
		var DIEFLOORAVG = 3;
		it('random equals zero result should be the minimum which is 1', function() {
			var die = new Dice(RandomNumberIsZero);
			
			expect(die.d6()).to.equal(DIEMIN);
		});
		it('random equals 1 result should be the maximum which is 6', function() {
			var die = new Dice(RandomNumberIsOne);
			
			expect(die.d6()).to.equal(DIEMAX);
		});
		
		it('random equals 0.5 result should be 3', function() {
			var die = new Dice(RandomNumberIsPointFive);
			
			expect(die.d6()).to.equal(DIEFLOORAVG);
		});
		
		it('random d6 within range 1 to 6', function() {
			var die = new Dice();
			var result = die.d6();
			
            expect(result).to.be.at.least(DIEMIN);
			expect(result).to.be.at.most(DIEMAX);
		});
	});
       
	describe('d10 test suite: ', function() {
		var DIEMIN = 1;
		var DIEMAX = 10;
		var DIEFLOORAVG = 5;
		it('random equals zero result should be the minimum which is 1', function() {
			var die = new Dice(RandomNumberIsZero);
			
			expect(die.d10()).to.equal(DIEMIN);
		});
		it('random equals 1 result should be the maximum which is 10', function() {
			var die = new Dice(RandomNumberIsOne);
			
			expect(die.d10()).to.equal(DIEMAX);
		});
		
		it('random equals 0.5 result should be 5', function() {
			var die = new Dice(RandomNumberIsPointFive);
			
			expect(die.d10()).to.equal(DIEFLOORAVG);
		});
		
		it('random d10 within range 1 to 10', function() {
			var die = new Dice();
			var result = die.d10();
			
            expect(result).to.be.at.least(DIEMIN);
			expect(result).to.be.at.most(DIEMAX);
		});
	});
    
    describe('d12 test suite: ', function() {
		var DIEMIN = 1;
		var DIEMAX = 12;
		var DIEFLOORAVG = 6;
		it('random equals zero result should be the minimum which is 1', function() {
			var die = new Dice(RandomNumberIsZero);
			
			expect(die.d12()).to.equal(DIEMIN);
		});
		it('random equals 1 result should be the maximum which is 12', function() {
			var die = new Dice(RandomNumberIsOne);
			
			expect(die.d12()).to.equal(DIEMAX);
		});
		
		it('random equals 0.5 result should be 6', function() {
			var die = new Dice(RandomNumberIsPointFive);
			
			expect(die.d12()).to.equal(DIEFLOORAVG);
		});
		
		it('random d12 within range 1 to 12', function() {
			var die = new Dice();
			var result = die.d12();
			
            expect(result).to.be.at.least(DIEMIN);
			expect(result).to.be.at.most(DIEMAX);
		});
	});
	
	
	describe('d20 test suite: ', function() {
		var DIEMIN = 1;
		var DIEMAX = 20;
		var DIEFLOORAVG = 10;
		it('random equals zero result should be the minimum which is 1', function() {
			var die = new Dice(RandomNumberIsZero);
            
            var actual = die.d20();
			
			expect(actual).to.equal(DIEMIN);
			//expect(die.d20()).toBe(DIEMIN);
		});
		it('random equals 1 result should be the maximum which is 20', function() {
			var die = new Dice(RandomNumberIsOne);
			
			expect(die.d20()).to.equal(DIEMAX);
		});
		
		it('random equals 0.5 result should be 10', function() {
			var die = new Dice(RandomNumberIsPointFive);
			
			expect(die.d20()).to.equal(DIEFLOORAVG);
		});
		
		it('random d20 within range 1 to 20', function() {
			var die = new Dice();
			var result = die.d20();
			
            
			expect(result).to.be.at.least(DIEMIN);
			expect(result).to.be.at.most(DIEMAX);
		});
	});
    
	describe('d100 test suite: ', function() {
		var DIEMIN = 1;
		var DIEMAX = 100;
		var DIEFLOORAVG = 50;
		it('random equals zero result should be the minimum which is 1', function() {
			var die = new Dice(RandomNumberIsZero);
            
            var actual = die.d100();
			
			expect(actual).to.equal(DIEMIN);
		});
		it('random equals 1 result should be the maximum which is 100', function() {
			var die = new Dice(RandomNumberIsOne);
			
			expect(die.d100()).to.equal(DIEMAX);
		});
		
		it('random equals 0.5 result should be 50', function() {
			var die = new Dice(RandomNumberIsPointFive);
			
			expect(die.d100()).to.equal(DIEFLOORAVG);
		});
		
		it('random d100 within range 1 to 100', function() {
			var die = new Dice();
			var result = die.d100();
			
            
			expect(result).to.be.at.least(DIEMIN);
			expect(result).to.be.at.most(DIEMAX);
		});
	});
	
	
});