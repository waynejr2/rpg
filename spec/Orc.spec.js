
//var orc = require("../js/lib/Mobs/Orc");
var expect = require('chai').expect;
var assert = require('chai').assert;
var path = require('path');
var basedir = path.resolve('./');
var Orc = require(path.resolve(basedir, 'js/lib/Mobs/Orc'));

describe('Testing Orc: ', function() {
    describe('functions are functions: ', function() {
        it('action() is a function', function() {
            var orc = new Orc();
            
            var actual = typeof orc.action;
            var expected = "function";
            
            expect(actual).to.equal(expected);            
        });
        
        it('actionScript() is a function', function() {
            var orc = new Orc();
            
            var actual = typeof orc.actionScript;
            var expected = "function";
            
            expect(actual).to.equal(expected);            
        });
        
        it('damage() is a function', function() {
            var orc = new Orc();
            
            var actual = typeof orc.damage;
            var expected = "function";
            
            expect(actual).to.equal(expected);            
        });
        
        it('getInfo() is a function', function() {
            var orc = new Orc();
            
            var actual = typeof orc.getInfo;
            var expected = "function";
            
            expect(actual).to.equal(expected);            
        });
        
        
        it('getId() is a function', function() {
            var orc = new Orc();
            
            var actual = typeof orc.getId;
            var expected = "function";
            
            expect(actual).to.equal(expected);            
        });
        
        it('info() is a function', function() {
            var orc = new Orc();
            
            var actual = typeof orc.info;
            var expected = "function";
            
            expect(actual).to.equal(expected);            
        });
        
        it('isAlive() is a function', function() {
            var orc = new Orc();
            
            var actual = typeof orc.isAlive;
            var expected = "function";
            
            expect(actual).to.equal(expected);            
        });
        
        it('list() is a function', function() {
            var orc = new Orc();
            
            var actual = typeof orc.list;
            var expected = "function";
            
            expect(actual).to.equal(expected);        
        });
        
        it('weaponDamage() is a function', function() {
            var orc = new Orc();
            
            var actual = typeof orc.weaponDamage;
            var expected = "function";
            
            expect(actual).to.equal(expected);            
        });
    });
    
    describe('Orc constructor test suite', function() {
        describe('orc creation using defaults', function() {
            it('default ac is 6', function() {
                var orc = new Orc();
                
                var data = orc.getInfo();
                var actual = data.ac;
                var expected = 6;
            
                expect(actual).to.equal(expected);             
            });
            
            it('default currentHealth is 8', function() {
                var orc = new Orc();
                
                var data = orc.getInfo();
                var actual = data.currentHealth;
                var expected = 8;
            
                expect(actual).to.equal(expected);             
            });
            
            it('default health is 8', function() {
                var orc = new Orc();
                
                var data = orc.getInfo();
                var actual = data.health;
                var expected = 8;
            
                expect(actual).to.equal(expected);             
            });
            
            it('default id is 0', function() {
                var orc = new Orc();
                
                var data = orc.getInfo();
                var actual = data.id;
                var expected = 0;
            
                expect(actual).to.equal(expected);             
            });
            
            it('default name is orc', function() {
                var orc = new Orc();
                
                var data = orc.getInfo();
                var actual = data.name;
                var expected = 'orc';
            
                expect(actual).to.equal(expected);             
            });
            
            it('default thac0 is 19', function() {
                var orc = new Orc();
                
                var data = orc.getInfo();
                var actual = data.thac0;
                var expected = 19;
            
                expect(actual).to.equal(expected);             
            });
            
            it('default weapon is OrcClub', function() {
                var orc = new Orc();
                
                var data = orc.getInfo();
                var actual = data.weapon;
                var expected = 'sword';
                
                expect(actual).to.equal(expected);             
            });
            
            it('default weapon2 undefined', function() {
                var orc = new Orc();
                
                var data = orc.getInfo();
                var actual = typeof data.weapon2;
                var expected = 'undefined';
            
                expect(actual).to.equal(expected);             
            });
        });
        
        describe('orc creation using specified values', function() {
            describe('for ac', function() {
                it('ac is specified as -10', function() {
                    orcInfo = {
                        ac: -10
                    };
                    var orc = new Orc(orcInfo);
                
                    var data = orc.getInfo();
                    var actual = data.ac;
                    var expected = -10;
            
                    expect(actual).to.equal(expected);                  
                });
                
                it('ac is specified as 0', function() {
                    orcInfo = {
                        ac: 0
                    };
                    var orc = new Orc(orcInfo);
                
                    var data = orc.getInfo();
                    var actual = data.ac;
                    var expected = 0;
            
                    expect(actual).to.equal(expected);                  
                });   
                
                it('ac is specified as 9', function() {
                    orcInfo = {
                        ac: 9
                    };
                    var orc = new Orc(orcInfo);
                
                    var data = orc.getInfo();
                    var actual = data.ac;
                    var expected = 9;
            
                    expect(actual).to.equal(expected);                  
                });                                   
            });
            
            describe('for health', function() {
                it('health is specified as 100', function() {
                    orcInfo = {
                        health: 100
                    };
                    var orc = new Orc(orcInfo);
                
                    var data = orc.getInfo();
                    var actual = data.health;
                    var expected = 100;
            
                    expect(actual).to.equal(expected);                  
                });
                
                it('health is specified as 0', function() {
                    orcInfo = {
                        health: 0
                    };
                    var orc = new Orc(orcInfo);
                
                    var data = orc.getInfo();
                    var actual = data.health;
                    var expected = 0;
            
                    expect(actual).to.equal(expected);                  
                });   
                
                it('health is specified as 2', function() {
                    orcInfo = {
                        health: 2
                    };
                    var orc = new Orc(orcInfo);
                
                    var data = orc.getInfo();
                    var actual = data.health;
                    var expected = 2;
            
                    expect(actual).to.equal(expected);                  
                });                                   
            });
            
            describe('for id', function() {
                it('id is specified as 100', function() {
                    orcInfo = {
                        id: 100
                    };
                    var orc = new Orc(orcInfo);
                
                    var data = orc.getInfo();
                    var actual = data.id;
                    var expected = 100;
            
                    expect(actual).to.equal(expected);                  
                });
                
                it('id is specified as 0', function() {
                    orcInfo = {
                        id: 0
                    };
                    var orc = new Orc(orcInfo);
                
                    var data = orc.getInfo();
                    var actual = data.id;
                    var expected = 0;
            
                    expect(actual).to.equal(expected);                  
                });
                it('id is specified as 2', function() {
                    orcInfo = {
                        id: 2
                    };
                    var orc = new Orc(orcInfo);
                
                    var data = orc.getInfo();
                    var actual = data.id;
                    var expected = 2;
            
                    expect(actual).to.equal(expected);                  
                });
                           
            });
            
            describe('for name', function() {
                var nameval = 'XXXXXXXXXXXXXXXXXXXXXXXXX';
                it('name is specified as ' + nameval, function() {
                    orcInfo = {
                        name: nameval
                    };
                    var orc = new Orc(orcInfo);
                
                    var data = orc.getInfo();
                    var actual = data.name;
                    var expected = nameval;
            
                    expect(actual).to.equal(expected);                  
                });
            });
            
            describe('for thac0', function() {
                it('thac0 is specified as 0', function() {
                    orcInfo = {
                        thac0: 0
                    };
                    var orc = new Orc(orcInfo);
                
                    var data = orc.getInfo();
                    var actual = data.thac0;
                    var expected = 0;
            
                    expect(actual).to.equal(expected);                  
                });
            });
            
            describe('for type', function() {
                var typeval = 'TTTTTTTTTTTTTTTTTTTTTTTTT';
                it('type is specified as ' + typeval, function() {
                    orcInfo = {
                        type: typeval
                    };
                    var orc = new Orc(orcInfo);
                
                    var data = orc.getInfo();
                    var actual = data.type;
                    var expected = typeval;
            
                    expect(actual).to.equal(expected);                  
                });
            });
            
        });
    });
    
    describe('list test suite: ', function() {
        it('list returns array with newly created [Orc], aka return[this]', function() {
            var orc = new Orc();
            
            var actual = orc.list();
            var expected = [orc];            
            
            expect(actual).to.deep.equal(expected);
        });
    });
});