
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
        
        it('getInfo() is a function', function() {
            var mob = new Mob();
            
            var actual = typeof mob.getInfo;
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
    
    describe('Mob constructor test suite', function() {
        describe('mob creation using defaults', function() {
            it('default ac is 10', function() {
                var mob = new Mob();
                
                var data = mob.getInfo();
                var actual = data.ac;
                var expected = 10;
            
                expect(actual).to.equal(expected);             
            });
            
            it('default currentHealth is 1', function() {
                var mob = new Mob();
                
                var data = mob.getInfo();
                var actual = data.currentHealth;
                var expected = 1;
            
                expect(actual).to.equal(expected);             
            });
            
            it('default health is 1', function() {
                var mob = new Mob();
                
                var data = mob.getInfo();
                var actual = data.health;
                var expected = 1;
            
                expect(actual).to.equal(expected);             
            });
            
            it('default id is 0', function() {
                var mob = new Mob();
                
                var data = mob.getInfo();
                var actual = data.id;
                var expected = 0;
            
                expect(actual).to.equal(expected);             
            });
            
            it('default name is noname', function() {
                var mob = new Mob();
                
                var data = mob.getInfo();
                var actual = data.name;
                var expected = 'noname';
            
                expect(actual).to.equal(expected);             
            });
            
            it('default thac0 is 20', function() {
                var mob = new Mob();
                
                var data = mob.getInfo();
                var actual = data.thac0;
                var expected = 20;
            
                expect(actual).to.equal(expected);             
            });
            
            it('default weapon is undefined', function() {
                var mob = new Mob();
                
                var data = mob.getInfo();
                var actual = typeof data.weapon;
                var expected = 'undefined';
                
                expect(actual).to.equal(expected);             
            });
            
            it('default weapon2 undefined', function() {
                var mob = new Mob();
                
                var data = mob.getInfo();
                var actual = typeof data.weapon2;
                var expected = 'undefined';
            
                expect(actual).to.equal(expected);             
            });
        });
        
        describe('mob creation using specified values', function() {
            describe('for ac', function() {
                it('ac is specified as -10', function() {
                    mobInfo = {
                        ac: -10
                    };
                    var mob = new Mob(mobInfo);
                
                    var data = mob.getInfo();
                    var actual = data.ac;
                    var expected = -10;
            
                    expect(actual).to.equal(expected);                  
                });
                
                it('ac is specified as 0', function() {
                    mobInfo = {
                        ac: 0
                    };
                    var mob = new Mob(mobInfo);
                
                    var data = mob.getInfo();
                    var actual = data.ac;
                    var expected = 0;
            
                    expect(actual).to.equal(expected);                  
                });   
                
                it('ac is specified as 9', function() {
                    mobInfo = {
                        ac: 9
                    };
                    var mob = new Mob(mobInfo);
                
                    var data = mob.getInfo();
                    var actual = data.ac;
                    var expected = 9;
            
                    expect(actual).to.equal(expected);                  
                });                                   
            });
            
            describe('for health', function() {
                it('health is specified as 100', function() {
                    mobInfo = {
                        health: 100
                    };
                    var mob = new Mob(mobInfo);
                
                    var data = mob.getInfo();
                    var actual = data.health;
                    var expected = 100;
            
                    expect(actual).to.equal(expected);                  
                });
                
                it('health is specified as 0', function() {
                    mobInfo = {
                        health: 0
                    };
                    var mob = new Mob(mobInfo);
                
                    var data = mob.getInfo();
                    var actual = data.health;
                    var expected = 0;
            
                    expect(actual).to.equal(expected);                  
                });   
                
                it('health is specified as 2', function() {
                    mobInfo = {
                        health: 2
                    };
                    var mob = new Mob(mobInfo);
                
                    var data = mob.getInfo();
                    var actual = data.health;
                    var expected = 2;
            
                    expect(actual).to.equal(expected);                  
                });                                   
            });
            
            describe('for id', function() {
                it('id is specified as 100', function() {
                    mobInfo = {
                        id: 100
                    };
                    var mob = new Mob(mobInfo);
                
                    var data = mob.getInfo();
                    var actual = data.id;
                    var expected = 100;
            
                    expect(actual).to.equal(expected);                  
                });
                
                it('id is specified as 0', function() {
                    mobInfo = {
                        id: 0
                    };
                    var mob = new Mob(mobInfo);
                
                    var data = mob.getInfo();
                    var actual = data.id;
                    var expected = 0;
            
                    expect(actual).to.equal(expected);                  
                });
                it('id is specified as 2', function() {
                    mobInfo = {
                        id: 2
                    };
                    var mob = new Mob(mobInfo);
                
                    var data = mob.getInfo();
                    var actual = data.id;
                    var expected = 2;
            
                    expect(actual).to.equal(expected);                  
                });
                           
            });
            
            describe('for name', function() {
                var nameval = 'XXXXXXXXXXXXXXXXXXXXXXXXX';
                it('name is specified as ' + nameval, function() {
                    mobInfo = {
                        name: nameval
                    };
                    var mob = new Mob(mobInfo);
                
                    var data = mob.getInfo();
                    var actual = data.name;
                    var expected = nameval;
            
                    expect(actual).to.equal(expected);                  
                });
            });
            
            describe('for thac0', function() {
                it('thac0 is specified as 0', function() {
                    mobInfo = {
                        thac0: 0
                    };
                    var mob = new Mob(mobInfo);
                
                    var data = mob.getInfo();
                    var actual = data.thac0;
                    var expected = 0;
            
                    expect(actual).to.equal(expected);                  
                });
            });
            
            describe('for type', function() {
                var typeval = 'TTTTTTTTTTTTTTTTTTTTTTTTT';
                it('type is specified as ' + typeval, function() {
                    mobInfo = {
                        type: typeval
                    };
                    var mob = new Mob(mobInfo);
                
                    var data = mob.getInfo();
                    var actual = data.type;
                    var expected = typeval;
            
                    expect(actual).to.equal(expected);                  
                });
            });
            
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