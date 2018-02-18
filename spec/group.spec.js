
//var Person = require("../js/lib/Mobs/Person");
var expect = require('chai').expect;
var assert = require('chai').assert;
var path = require('path');
var basedir = path.resolve('./');
var Group = require(path.resolve(basedir, 'js/Group'));
var MobFactory = require(path.resolve(basedir, 'js/lib/Mobs/MobFactory'));
//var MobFactory = require('../js/lib/Mobs/MobFactory');

describe('Testing Group: ', function() {
    describe('functions are functions', function() {
        it('add is a function', function() {
            var group = new Group();
            
            var actual = typeof group.add;        
            var expected = "function"
            
            expect(actual).to.equal(expected);
        });
        
        it('list is a function', function() {
            var group = new Group();
            
            var actual = typeof group.list;        
            var expected = "function"
            
            expect(actual).to.equal(expected);
        });
    });
    
    describe('add test suite', function() {
        it('no add has been run, should have empty list', function() {
            var group = new Group();
            var mobFactory = new MobFactory();
            var person = mobFactory.createMob("orc");
            
            var actual = group.list();
            var expected = [];
            
            expect(actual).to.deep.equal(expected);
        });
        
        describe('add one at a time', function() {
            it('add one mob to group', function() {
                var group = new Group();
                var mobFactory = new MobFactory();
                var mob = mobFactory.createMob("orc");
            
                group.add(mob);            
                var actual = group.list();
                var expected = [mob];
            
                expect(actual).to.deep.equal(expected);
            });
            
            it('add two mobs to group', function() {
                var group = new Group();
                var mobFactory = new MobFactory();
                var mob1 = mobFactory.createMob("orc");
                var mob2 = mobFactory.createMob("orc");
            
                group.add(mob1);           
                group.add(mob2);            
                var actual = group.list();
                var expected = [mob1, mob2];
            
                expect(actual).to.deep.equal(expected);
            });
            
            it('add three mobs to group', function() {
                var group = new Group();
                var mobFactory = new MobFactory();
                var mob1 = mobFactory.createMob("orc");
                var mob2 = mobFactory.createMob("orc");
                var mob3 = mobFactory.createMob("orc");
            
                group.add(mob1);
                group.add(mob2);
                group.add(mob3);
                var actual = group.list();
                var expected = [mob1, mob2, mob3];
            
                expect(actual).to.deep.equal(expected);
            });
        
            it('add two groups containing three mobs each to group1', function() {
                var group1 = new Group();
                var group2 = new Group();
                var group3 = new Group();
                var mobFactory = new MobFactory();
                var mob1 = mobFactory.createMob("orc");
                var mob2 = mobFactory.createMob("orc");
                var mob3 = mobFactory.createMob("orc");
            
                group2.add(mob1);
                group2.add(mob2);
                group2.add(mob3);   
                group3.add(mob1);
                group3.add(mob2);
                group3.add(mob3);
                group1.add(group2);
                group1.add(group3);
                var actual = group1.list();
                var expected = [mob1, mob2, mob3, mob1, mob2, mob3];
            
                expect(actual).to.deep.equal(expected);
            });
                
            it('add 3 mobs to group 4 then nest groups: 4 into 3, 3 into 2, and 2 into 1', function() {
                var group1 = new Group();
                var group2 = new Group();
                var group3 = new Group();
                var group4 = new Group();
                var mobFactory = new MobFactory();
                var mob1 = mobFactory.createMob("orc");
                var mob2 = mobFactory.createMob("orc");
                var mob3 = mobFactory.createMob("orc");
            
                group4.add(mob1);
                group4.add(mob2);
                group4.add(mob3); 
                group3.add(group4);
                group2.add(group3);
                group1.add(group2);
                var actual = group1.list();
                var expected = [mob1, mob2, mob3];
            
                expect(actual).to.deep.equal(expected);
            });
            
            describe('add order dependency', function() {
                it('group mob group', function() {
                    var group = new Group();
                    var group1 = new Group();
                    var group2 = new Group();
                    var mobFactory = new MobFactory();
                    var mob1 = mobFactory.createMob("orc");
                    var mob2 = mobFactory.createMob("orc");
                    var mob3 = mobFactory.createMob("orc");
                
                    group1.add(mob1);
                    group2.add(mob3);
                    group.add(group1);
                    group.add(mob2);
                    group.add(group2);
                    var actual = group.list();
                    var expected = [mob1, mob2, mob3];
                
                    expect(actual).to.deep.equal(expected);    
                });
                
                it('mob group mob', function() {
                    var group = new Group();
                    var group2 = new Group();
                    var mobFactory = new MobFactory();
                    var mob1 = mobFactory.createMob("orc");
                    var mob2 = mobFactory.createMob("orc");
                    var mob3 = mobFactory.createMob("orc");
                
                    group.add(mob1);
                    group2.add(mob2);
                    group.add(group2);
                    group.add(mob3);
                    var actual = group.list();
                    var expected = [mob1, mob2, mob3];
                
                    expect(actual).to.deep.equal(expected);                   
                });                
            });
        });

        describe('add multiples in a single call to add', function() {
            it('add two mobs to group', function() {
                var group = new Group();
                var mobFactory = new MobFactory();
                var mob1 = mobFactory.createMob("orc");
                var mob2 = mobFactory.createMob("orc");
            
                group.add(mob1, mob2);        
                var actual = group.list();
                var expected = [mob1, mob2];
            
                expect(actual).to.deep.equal(expected);
            });
            
            it('add three mobs to group', function() {
                var group = new Group();
                var mobFactory = new MobFactory();
                var mob1 = mobFactory.createMob("orc");
                var mob2 = mobFactory.createMob("orc");
                var mob3 = mobFactory.createMob("orc");
            
                group.add(mob1, mob2, mob3);
                var actual = group.list();
                var expected = [mob1, mob2, mob3];
            
                expect(actual).to.deep.equal(expected);
            });
        
            it('add two groups containing three mobs each to group1', function() {
                var group1 = new Group();
                var group2 = new Group();
                var group3 = new Group();
                var mobFactory = new MobFactory();
                var mob1 = mobFactory.createMob("orc");
                var mob2 = mobFactory.createMob("orc");
                var mob3 = mobFactory.createMob("orc");
            
                group2.add(mob1, mob2, mob3);
                group3.add(mob1, mob2, mob3);
                group1.add(group2, group3);
                var actual = group1.list();
                var expected = [mob1, mob2, mob3, mob1, mob2, mob3];
            
                expect(actual).to.deep.equal(expected);
            });
                
            it('add 3 mobs to group 4 then nest groups: 4 into 3, 3 into 2, and 2 into 1', function() {
                var group1 = new Group();
                var group2 = new Group();
                var group3 = new Group();
                var group4 = new Group();
                var mobFactory = new MobFactory();
                var mob1 = mobFactory.createMob("orc");
                var mob2 = mobFactory.createMob("orc");
                var mob3 = mobFactory.createMob("orc");
            
                group4.add(mob1, mob2, mob3);
                group3.add(group4);
                group2.add(group3);
                group1.add(group2);
                var actual = group1.list();
                var expected = [mob1, mob2, mob3];
            
                expect(actual).to.deep.equal(expected);
            });
            
            describe('add order dependency', function() {
                it('group mob group', function() {
                    var group = new Group();
                    var group1 = new Group();
                    var group2 = new Group();
                    var mobFactory = new MobFactory();
                    var mob1 = mobFactory.createMob("orc");
                    var mob2 = mobFactory.createMob("orc");
                    var mob3 = mobFactory.createMob("orc");
                               
                    group1.add(mob1);
                    group2.add(mob3);
                    group.add(group1, mob2, group2);
                    var actual = group.list();
                    var expected = [mob1, mob2, mob3];
                
                    expect(actual).to.deep.equal(expected);    
                });
                
                it('mob group mob', function() {
                    var group = new Group();
                    var group2 = new Group();
                    var mobFactory = new MobFactory();
                    var mob1 = mobFactory.createMob("orc");
                    var mob2 = mobFactory.createMob("orc");
                    var mob3 = mobFactory.createMob("orc");
         
                    group2.add(mob2);
                    group.add(mob1, group2, mob3);
                    var actual = group.list();
                    var expected = [mob1, mob2, mob3];

                    expect(actual).to.deep.equal(expected);                   
                });                
            });
        });          
    });
    
    describe('list test suite', function() {
        it('no add has been run, should have empty list', function() {
            var group = new Group();
            var mobFactory = new MobFactory();
            var mob = mobFactory.createMob("orc");
            
            var actual = group.list().length;
            var expected = 0;
            
            expect(actual).to.deep.equal(expected);
        });
        
        it('add 10 mobs, list length should be 10', function () {
            var group = new Group();
            var mobFactory = new MobFactory();
            var mob = mobFactory.createMob("orc");
            
            group.add(mob, mob, mob, mob, mob, mob, mob, mob, mob, mob);
            var actual = group.list().length;
            var expected = 10;
            
            expect(actual).to.equal(expected);
        });
        
        it('add 10 groups with 1 mob each and list length should be 10', function () {
            var group = new Group();
            var group2 = new Group();
            var mobFactory = new MobFactory();
            var mob = mobFactory.createMob("orc");
            
            group2.add(mob);
            group.add(group2);
            group.add(group2);
            group.add(group2);
            group.add(group2);
            group.add(group2);
            group.add(group2);
            group.add(group2);
            group.add(group2);
            group.add(group2);
            group.add(group2);
            var actual = group.list().length;
            var expected = 10;
            
            expect(actual).to.equal(expected);
        });
        
        it('add 10 groups with 1 mob each with single add and list length should be 10', function () {
            var group = new Group();
            var group2 = new Group();
            var mobFactory = new MobFactory();
            var mob = mobFactory.createMob("orc");
            
            group2.add(mob);
            group.add(group2, group2, group2, group2, group2, group2, group2, group2, group2, group2);
            var actual = group.list().length;
            var expected = 10;
            
            expect(actual).to.equal(expected);
        });
        
    });
        
});