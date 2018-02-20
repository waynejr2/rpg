
//var dwarf = require("../js/lib/Mobs/Dwarf");
var expect = require('chai').expect;
var assert = require('chai').assert;
var path = require('path');
var basedir = path.resolve('./');
var Dwarf = require(path.resolve(basedir, 'js/lib/Mobs/Dwarf'));

describe('Testing Dwarf: ', function() {
    describe('functions are functions: ', function() {
        it('action() is a function', function() {
            var dwarf = new Dwarf();
            
            var actual = typeof dwarf.action;
            var expected = "function";
            
            expect(actual).to.equal(expected);            
        });
        
        it('actionScript() is a function', function() {
            var dwarf = new Dwarf();
            
            var actual = typeof dwarf.actionScript;
            var expected = "function";
            
            expect(actual).to.equal(expected);            
        });
        
        it('damage() is a function', function() {
            var dwarf = new Dwarf();
            
            var actual = typeof dwarf.damage;
            var expected = "function";
            
            expect(actual).to.equal(expected);            
        });
        
        it('getInfo() is a function', function() {
            var dwarf = new Dwarf();
            
            var actual = typeof dwarf.getInfo;
            var expected = "function";
            
            expect(actual).to.equal(expected);            
        });
        
        
        it('getId() is a function', function() {
            var dwarf = new Dwarf();
            
            var actual = typeof dwarf.getId;
            var expected = "function";
            
            expect(actual).to.equal(expected);            
        });
        
        it('info() is a function', function() {
            var dwarf = new Dwarf();
            
            var actual = typeof dwarf.info;
            var expected = "function";
            
            expect(actual).to.equal(expected);            
        });
        
        it('isAlive() is a function', function() {
            var dwarf = new Dwarf();
            
            var actual = typeof dwarf.isAlive;
            var expected = "function";
            
            expect(actual).to.equal(expected);            
        });
        
        it('list() is a function', function() {
            var dwarf = new Dwarf();
            
            var actual = typeof dwarf.list;
            var expected = "function";
            
            expect(actual).to.equal(expected);        
        });
        
        it('weaponDamage() is a function', function() {
            var dwarf = new Dwarf();
            
            var actual = typeof dwarf.weaponDamage;
            var expected = "function";
            
            expect(actual).to.equal(expected);            
        });
    });
    
    describe('Dwarf constructor test suite', function() {
        describe('dwarf creation using defaults', function() {
            it('default ac is 6', function() {
                var dwarf = new Dwarf();
                
                var data = dwarf.getInfo();
                var actual = data.ac;
                var expected = 6;
            
                expect(actual).to.equal(expected);             
            });
            
            it('default currentHealth is 8', function() {
                var dwarf = new Dwarf();
                
                var data = dwarf.getInfo();
                var actual = data.currentHealth;
                var expected = 8;
            
                expect(actual).to.equal(expected);             
            });
            
            it('default health is 8', function() {
                var dwarf = new Dwarf();
                
                var data = dwarf.getInfo();
                var actual = data.health;
                var expected = 8;
            
                expect(actual).to.equal(expected);             
            });
            
            it('default id is 0', function() {
                var dwarf = new Dwarf();
                
                var data = dwarf.getInfo();
                var actual = data.id;
                var expected = 0;
            
                expect(actual).to.equal(expected);             
            });
            
            it('default name is dwarf', function() {
                var dwarf = new Dwarf();
                
                var data = dwarf.getInfo();
                var actual = data.name;
                var expected = 'dwarf';
            
                expect(actual).to.equal(expected);             
            });
            
            it('default thac0 is 19', function() {
                var dwarf = new Dwarf();
                
                var data = dwarf.getInfo();
                var actual = data.thac0;
                var expected = 19;
            
                expect(actual).to.equal(expected);             
            });
            
            it('default weapon is sword', function() {
                var dwarf = new Dwarf();
                
                var data = dwarf.getInfo();
                var actual = data.weapon;
                var expected = 'sword';
                
                expect(actual).to.equal(expected);             
            });
            
            it('default weapon2 undefined', function() {
                var dwarf = new Dwarf();
                
                var data = dwarf.getInfo();
                var actual = typeof data.weapon2;
                var expected = 'undefined';
            
                expect(actual).to.equal(expected);             
            });
        });
        
        describe('dwarf creation using specified values', function() {
            describe('for ac', function() {
                it('ac is specified as -10', function() {
                    dwarfInfo = {
                        ac: -10
                    };
                    var dwarf = new Dwarf(dwarfInfo);
                
                    var data = dwarf.getInfo();
                    var actual = data.ac;
                    var expected = -10;
            
                    expect(actual).to.equal(expected);                  
                });
                
                it('ac is specified as 0', function() {
                    dwarfInfo = {
                        ac: 0
                    };
                    var dwarf = new Dwarf(dwarfInfo);
                
                    var data = dwarf.getInfo();
                    var actual = data.ac;
                    var expected = 0;
            
                    expect(actual).to.equal(expected);                  
                });   
                
                it('ac is specified as 9', function() {
                    dwarfInfo = {
                        ac: 9
                    };
                    var dwarf = new Dwarf(dwarfInfo);
                
                    var data = dwarf.getInfo();
                    var actual = data.ac;
                    var expected = 9;
            
                    expect(actual).to.equal(expected);                  
                });                                   
            });
            
            describe('for health', function() {
                it('health is specified as 100', function() {
                    dwarfInfo = {
                        health: 100
                    };
                    var dwarf = new Dwarf(dwarfInfo);
                
                    var data = dwarf.getInfo();
                    var actual = data.health;
                    var expected = 100;
            
                    expect(actual).to.equal(expected);                  
                });
                
                it('health is specified as 0', function() {
                    dwarfInfo = {
                        health: 0
                    };
                    var dwarf = new Dwarf(dwarfInfo);
                
                    var data = dwarf.getInfo();
                    var actual = data.health;
                    var expected = 0;
            
                    expect(actual).to.equal(expected);                  
                });   
                
                it('health is specified as 2', function() {
                    dwarfInfo = {
                        health: 2
                    };
                    var dwarf = new Dwarf(dwarfInfo);
                
                    var data = dwarf.getInfo();
                    var actual = data.health;
                    var expected = 2;
            
                    expect(actual).to.equal(expected);                  
                });                                   
            });
            
            describe('for id', function() {
                it('id is specified as 100', function() {
                    dwarfInfo = {
                        id: 100
                    };
                    var dwarf = new Dwarf(dwarfInfo);
                
                    var data = dwarf.getInfo();
                    var actual = data.id;
                    var expected = 100;
            
                    expect(actual).to.equal(expected);                  
                });
                
                it('id is specified as 0', function() {
                    dwarfInfo = {
                        id: 0
                    };
                    var dwarf = new Dwarf(dwarfInfo);
                
                    var data = dwarf.getInfo();
                    var actual = data.id;
                    var expected = 0;
            
                    expect(actual).to.equal(expected);                  
                });
                it('id is specified as 2', function() {
                    dwarfInfo = {
                        id: 2
                    };
                    var dwarf = new Dwarf(dwarfInfo);
                
                    var data = dwarf.getInfo();
                    var actual = data.id;
                    var expected = 2;
            
                    expect(actual).to.equal(expected);                  
                });
                           
            });
            
            describe('for name', function() {
                var nameval = 'XXXXXXXXXXXXXXXXXXXXXXXXX';
                it('name is specified as ' + nameval, function() {
                    dwarfInfo = {
                        name: nameval
                    };
                    var dwarf = new Dwarf(dwarfInfo);
                
                    var data = dwarf.getInfo();
                    var actual = data.name;
                    var expected = nameval;
            
                    expect(actual).to.equal(expected);                  
                });
            });
            
            describe('for thac0', function() {
                it('thac0 is specified as 0', function() {
                    dwarfInfo = {
                        thac0: 0
                    };
                    var dwarf = new Dwarf(dwarfInfo);
                
                    var data = dwarf.getInfo();
                    var actual = data.thac0;
                    var expected = 0;
            
                    expect(actual).to.equal(expected);                  
                });
            });
            
            describe('for type', function() {
                var typeval = 'TTTTTTTTTTTTTTTTTTTTTTTTT';
                it('type is specified as ' + typeval, function() {
                    dwarfInfo = {
                        type: typeval
                    };
                    var dwarf = new Dwarf(dwarfInfo);
                
                    var data = dwarf.getInfo();
                    var actual = data.type;
                    var expected = typeval;
            
                    expect(actual).to.equal(expected);                  
                });
            });
            
        });
    });
    
    describe('list test suite: ', function() {
        it('list returns array with newly created [Dwarf], aka return[this]', function() {
            var dwarf = new Dwarf();
            
            var actual = dwarf.list();
            var expected = [dwarf];            
            
            expect(actual).to.deep.equal(expected);
        });
    });
});