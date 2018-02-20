
//var human = require("../js/lib/Mobs/Human");
var expect = require('chai').expect;
var assert = require('chai').assert;
var path = require('path');
var basedir = path.resolve('./');
var Human = require(path.resolve(basedir, 'js/lib/Mobs/Human'));

describe('Testing Human: ', function() {
    describe('functions are functions: ', function() {
        it('action() is a function', function() {
            var human = new Human();
            
            var actual = typeof human.action;
            var expected = "function";
            
            expect(actual).to.equal(expected);            
        });
        
        it('actionScript() is a function', function() {
            var human = new Human();
            
            var actual = typeof human.actionScript;
            var expected = "function";
            
            expect(actual).to.equal(expected);            
        });
        
        it('damage() is a function', function() {
            var human = new Human();
            
            var actual = typeof human.damage;
            var expected = "function";
            
            expect(actual).to.equal(expected);            
        });
        
        it('getInfo() is a function', function() {
            var human = new Human();
            
            var actual = typeof human.getInfo;
            var expected = "function";
            
            expect(actual).to.equal(expected);            
        });
        
        
        it('getId() is a function', function() {
            var human = new Human();
            
            var actual = typeof human.getId;
            var expected = "function";
            
            expect(actual).to.equal(expected);            
        });
        
        it('info() is a function', function() {
            var human = new Human();
            
            var actual = typeof human.info;
            var expected = "function";
            
            expect(actual).to.equal(expected);            
        });
        
        it('isAlive() is a function', function() {
            var human = new Human();
            
            var actual = typeof human.isAlive;
            var expected = "function";
            
            expect(actual).to.equal(expected);            
        });
        
        it('list() is a function', function() {
            var human = new Human();
            
            var actual = typeof human.list;
            var expected = "function";
            
            expect(actual).to.equal(expected);        
        });
        
        it('weaponDamage() is a function', function() {
            var human = new Human();
            
            var actual = typeof human.weaponDamage;
            var expected = "function";
            
            expect(actual).to.equal(expected);            
        });
    });
    
    describe('Human constructor test suite', function() {
        describe('human creation using defaults', function() {
            it('default ac is 6', function() {
                var human = new Human();
                
                var data = human.getInfo();
                var actual = data.ac;
                var expected = 6;
            
                expect(actual).to.equal(expected);             
            });
            
            it('default currentHealth is 8', function() {
                var human = new Human();
                
                var data = human.getInfo();
                var actual = data.currentHealth;
                var expected = 8;
            
                expect(actual).to.equal(expected);             
            });
            
            it('default health is 8', function() {
                var human = new Human();
                
                var data = human.getInfo();
                var actual = data.health;
                var expected = 8;
            
                expect(actual).to.equal(expected);             
            });
            
            it('default id is 0', function() {
                var human = new Human();
                
                var data = human.getInfo();
                var actual = data.id;
                var expected = 0;
            
                expect(actual).to.equal(expected);             
            });
            
            it('default name is human', function() {
                var human = new Human();
                
                var data = human.getInfo();
                var actual = data.name;
                var expected = 'human';
            
                expect(actual).to.equal(expected);             
            });
            
            it('default thac0 is 19', function() {
                var human = new Human();
                
                var data = human.getInfo();
                var actual = data.thac0;
                var expected = 19;
            
                expect(actual).to.equal(expected);             
            });
            
            it('default weapon is sword', function() {
                var human = new Human();
                
                var data = human.getInfo();
                var actual = data.weapon;
                var expected = 'sword';
                
                expect(actual).to.equal(expected);             
            });
            
            it('default weapon2 undefined', function() {
                var human = new Human();
                
                var data = human.getInfo();
                var actual = typeof data.weapon2;
                var expected = 'undefined';
            
                expect(actual).to.equal(expected);             
            });
        });
        
        describe('human creation using specified values', function() {
            describe('for ac', function() {
                it('ac is specified as -10', function() {
                    humanInfo = {
                        ac: -10
                    };
                    var human = new Human(humanInfo);
                
                    var data = human.getInfo();
                    var actual = data.ac;
                    var expected = -10;
            
                    expect(actual).to.equal(expected);                  
                });
                
                it('ac is specified as 0', function() {
                    humanInfo = {
                        ac: 0
                    };
                    var human = new Human(humanInfo);
                
                    var data = human.getInfo();
                    var actual = data.ac;
                    var expected = 0;
            
                    expect(actual).to.equal(expected);                  
                });   
                
                it('ac is specified as 9', function() {
                    humanInfo = {
                        ac: 9
                    };
                    var human = new Human(humanInfo);
                
                    var data = human.getInfo();
                    var actual = data.ac;
                    var expected = 9;
            
                    expect(actual).to.equal(expected);                  
                });                                   
            });
            
            describe('for health', function() {
                it('health is specified as 100', function() {
                    humanInfo = {
                        health: 100
                    };
                    var human = new Human(humanInfo);
                
                    var data = human.getInfo();
                    var actual = data.health;
                    var expected = 100;
            
                    expect(actual).to.equal(expected);                  
                });
                
                it('health is specified as 0', function() {
                    humanInfo = {
                        health: 0
                    };
                    var human = new Human(humanInfo);
                
                    var data = human.getInfo();
                    var actual = data.health;
                    var expected = 0;
            
                    expect(actual).to.equal(expected);                  
                });   
                
                it('health is specified as 2', function() {
                    humanInfo = {
                        health: 2
                    };
                    var human = new Human(humanInfo);
                
                    var data = human.getInfo();
                    var actual = data.health;
                    var expected = 2;
            
                    expect(actual).to.equal(expected);                  
                });                                   
            });
            
            describe('for id', function() {
                it('id is specified as 100', function() {
                    humanInfo = {
                        id: 100
                    };
                    var human = new Human(humanInfo);
                
                    var data = human.getInfo();
                    var actual = data.id;
                    var expected = 100;
            
                    expect(actual).to.equal(expected);                  
                });
                
                it('id is specified as 0', function() {
                    humanInfo = {
                        id: 0
                    };
                    var human = new Human(humanInfo);
                
                    var data = human.getInfo();
                    var actual = data.id;
                    var expected = 0;
            
                    expect(actual).to.equal(expected);                  
                });
                it('id is specified as 2', function() {
                    humanInfo = {
                        id: 2
                    };
                    var human = new Human(humanInfo);
                
                    var data = human.getInfo();
                    var actual = data.id;
                    var expected = 2;
            
                    expect(actual).to.equal(expected);                  
                });
                           
            });
            
            describe('for name', function() {
                var nameval = 'XXXXXXXXXXXXXXXXXXXXXXXXX';
                it('name is specified as ' + nameval, function() {
                    humanInfo = {
                        name: nameval
                    };
                    var human = new Human(humanInfo);
                
                    var data = human.getInfo();
                    var actual = data.name;
                    var expected = nameval;
            
                    expect(actual).to.equal(expected);                  
                });
            });
            
            describe('for thac0', function() {
                it('thac0 is specified as 0', function() {
                    humanInfo = {
                        thac0: 0
                    };
                    var human = new Human(humanInfo);
                
                    var data = human.getInfo();
                    var actual = data.thac0;
                    var expected = 0;
            
                    expect(actual).to.equal(expected);                  
                });
            });
            
            describe('for type', function() {
                var typeval = 'TTTTTTTTTTTTTTTTTTTTTTTTT';
                it('type is specified as ' + typeval, function() {
                    humanInfo = {
                        type: typeval
                    };
                    var human = new Human(humanInfo);
                
                    var data = human.getInfo();
                    var actual = data.type;
                    var expected = typeval;
            
                    expect(actual).to.equal(expected);                  
                });
            });
            
        });
    });
    
    describe('list test suite: ', function() {
        it('list returns array with newly created [Human], aka return[this]', function() {
            var human = new Human();
            
            var actual = human.list();
            var expected = [human];            
            
            expect(actual).to.deep.equal(expected);
        });
    });
});