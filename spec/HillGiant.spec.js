
//var hillgiant = require("../js/lib/Mobs/HillGiant");
var expect = require('chai').expect;
var assert = require('chai').assert;
var path = require('path');
var basedir = path.resolve('./');
var HillGiant = require(path.resolve(basedir, 'js/lib/Mobs/HillGiant'));

describe('Testing HillGiant: ', function() {
    describe('functions are functions: ', function() {
        it('action() is a function', function() {
            var hillgiant = new HillGiant();
            
            var actual = typeof hillgiant.action;
            var expected = "function";
            
            expect(actual).to.equal(expected);            
        });
        
        it('actionScript() is a function', function() {
            var hillgiant = new HillGiant();
            
            var actual = typeof hillgiant.actionScript;
            var expected = "function";
            
            expect(actual).to.equal(expected);            
        });
        
        it('damage() is a function', function() {
            var hillgiant = new HillGiant();
            
            var actual = typeof hillgiant.damage;
            var expected = "function";
            
            expect(actual).to.equal(expected);            
        });
        
        it('getInfo() is a function', function() {
            var hillgiant = new HillGiant();
            
            var actual = typeof hillgiant.getInfo;
            var expected = "function";
            
            expect(actual).to.equal(expected);            
        });
        
        
        it('getId() is a function', function() {
            var hillgiant = new HillGiant();
            
            var actual = typeof hillgiant.getId;
            var expected = "function";
            
            expect(actual).to.equal(expected);            
        });
        
        it('info() is a function', function() {
            var hillgiant = new HillGiant();
            
            var actual = typeof hillgiant.info;
            var expected = "function";
            
            expect(actual).to.equal(expected);            
        });
        
        it('isAlive() is a function', function() {
            var hillgiant = new HillGiant();
            
            var actual = typeof hillgiant.isAlive;
            var expected = "function";
            
            expect(actual).to.equal(expected);            
        });
        
        it('list() is a function', function() {
            var hillgiant = new HillGiant();
            
            var actual = typeof hillgiant.list;
            var expected = "function";
            
            expect(actual).to.equal(expected);        
        });
        
        it('weaponDamage() is a function', function() {
            var hillgiant = new HillGiant();
            
            var actual = typeof hillgiant.weaponDamage;
            var expected = "function";
            
            expect(actual).to.equal(expected);            
        });
    });
    
    describe('HillGiant constructor test suite', function() {
        describe('hillgiant creation using defaults', function() {
            it('default ac is 6', function() {
                var hillgiant = new HillGiant();
                
                var data = hillgiant.getInfo();
                var actual = data.ac;
                var expected = 4;
            
                expect(actual).to.equal(expected);             
            });
            
            it('default currentHealth is 37', function() {
                var hillgiant = new HillGiant();
                
                var data = hillgiant.getInfo();
                var actual = data.currentHealth;
                var expected = 37;
            
                expect(actual).to.equal(expected);             
            });
            
            it('default health is 37', function() {
                var hillgiant = new HillGiant();
                
                var data = hillgiant.getInfo();
                var actual = data.health;
                var expected = 37;
            
                expect(actual).to.equal(expected);             
            });
            
            it('default id is 0', function() {
                var hillgiant = new HillGiant();
                
                var data = hillgiant.getInfo();
                var actual = data.id;
                var expected = 0;
            
                expect(actual).to.equal(expected);             
            });
            
            it('default name is hillgiant', function() {
                var hillgiant = new HillGiant();
                
                var data = hillgiant.getInfo();
                var actual = data.name;
                var expected = 'hillgiant';
            
                expect(actual).to.equal(expected);             
            });
            
            it('default thac0 is 12', function() {
                var hillgiant = new HillGiant();
                
                var data = hillgiant.getInfo();
                var actual = data.thac0;
                var expected = 12;
            
                expect(actual).to.equal(expected);             
            });
            
            it('default weapon is HillGiantClub', function() {
                var hillgiant = new HillGiant();
                
                var data = hillgiant.getInfo();
                var actual = data.weapon;
                var expected = 'HillGiantClub';
                
                expect(actual).to.equal(expected);             
            });
            
            it('default weapon2 undefined', function() {
                var hillgiant = new HillGiant();
                
                var data = hillgiant.getInfo();
                var actual = typeof data.weapon2;
                var expected = 'undefined';
            
                expect(actual).to.equal(expected);             
            });
        });
        
        describe('hillgiant creation using specified values', function() {
            describe('for ac', function() {
                it('ac is specified as -10', function() {
                    hillgiantInfo = {
                        ac: -10
                    };
                    var hillgiant = new HillGiant(hillgiantInfo);
                
                    var data = hillgiant.getInfo();
                    var actual = data.ac;
                    var expected = -10;
            
                    expect(actual).to.equal(expected);                  
                });
                
                it('ac is specified as 0', function() {
                    hillgiantInfo = {
                        ac: 0
                    };
                    var hillgiant = new HillGiant(hillgiantInfo);
                
                    var data = hillgiant.getInfo();
                    var actual = data.ac;
                    var expected = 0;
            
                    expect(actual).to.equal(expected);                  
                });   
                
                it('ac is specified as 9', function() {
                    hillgiantInfo = {
                        ac: 9
                    };
                    var hillgiant = new HillGiant(hillgiantInfo);
                
                    var data = hillgiant.getInfo();
                    var actual = data.ac;
                    var expected = 9;
            
                    expect(actual).to.equal(expected);                  
                });                                   
            });
            
            describe('for health', function() {
                it('health is specified as 100', function() {
                    hillgiantInfo = {
                        health: 100
                    };
                    var hillgiant = new HillGiant(hillgiantInfo);
                
                    var data = hillgiant.getInfo();
                    var actual = data.health;
                    var expected = 100;
            
                    expect(actual).to.equal(expected);                  
                });
                
                it('health is specified as 0', function() {
                    hillgiantInfo = {
                        health: 0
                    };
                    var hillgiant = new HillGiant(hillgiantInfo);
                
                    var data = hillgiant.getInfo();
                    var actual = data.health;
                    var expected = 0;
            
                    expect(actual).to.equal(expected);                  
                });   
                
                it('health is specified as 2', function() {
                    hillgiantInfo = {
                        health: 2
                    };
                    var hillgiant = new HillGiant(hillgiantInfo);
                
                    var data = hillgiant.getInfo();
                    var actual = data.health;
                    var expected = 2;
            
                    expect(actual).to.equal(expected);                  
                });                                   
            });
            
            describe('for id', function() {
                it('id is specified as 100', function() {
                    hillgiantInfo = {
                        id: 100
                    };
                    var hillgiant = new HillGiant(hillgiantInfo);
                
                    var data = hillgiant.getInfo();
                    var actual = data.id;
                    var expected = 100;
            
                    expect(actual).to.equal(expected);                  
                });
                
                it('id is specified as 0', function() {
                    hillgiantInfo = {
                        id: 0
                    };
                    var hillgiant = new HillGiant(hillgiantInfo);
                
                    var data = hillgiant.getInfo();
                    var actual = data.id;
                    var expected = 0;
            
                    expect(actual).to.equal(expected);                  
                });
                it('id is specified as 2', function() {
                    hillgiantInfo = {
                        id: 2
                    };
                    var hillgiant = new HillGiant(hillgiantInfo);
                
                    var data = hillgiant.getInfo();
                    var actual = data.id;
                    var expected = 2;
            
                    expect(actual).to.equal(expected);                  
                });
                           
            });
            
            describe('for name', function() {
                var nameval = 'XXXXXXXXXXXXXXXXXXXXXXXXX';
                it('name is specified as ' + nameval, function() {
                    hillgiantInfo = {
                        name: nameval
                    };
                    var hillgiant = new HillGiant(hillgiantInfo);
                
                    var data = hillgiant.getInfo();
                    var actual = data.name;
                    var expected = nameval;
            
                    expect(actual).to.equal(expected);                  
                });
            });
            
            describe('for thac0', function() {
                it('thac0 is specified as 0', function() {
                    hillgiantInfo = {
                        thac0: 0
                    };
                    var hillgiant = new HillGiant(hillgiantInfo);
                
                    var data = hillgiant.getInfo();
                    var actual = data.thac0;
                    var expected = 0;
            
                    expect(actual).to.equal(expected);                  
                });
            });
            
            describe('for type', function() {
                var typeval = 'TTTTTTTTTTTTTTTTTTTTTTTTT';
                it('type is specified as ' + typeval, function() {
                    hillgiantInfo = {
                        type: typeval
                    };
                    var hillgiant = new HillGiant(hillgiantInfo);
                
                    var data = hillgiant.getInfo();
                    var actual = data.type;
                    var expected = typeval;
            
                    expect(actual).to.equal(expected);                  
                });
            });
            
        });
    });
    
    describe('list test suite: ', function() {
        it('list returns array with newly created [HillGiant], aka return[this]', function() {
            var hillgiant = new HillGiant();
            
            var actual = hillgiant.list();
            var expected = [hillgiant];            
            
            expect(actual).to.deep.equal(expected);
        });
    });
});