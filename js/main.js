/* global module */

var Dice = require('./Dice');
var Combat = require('./Combat');
var Person = require('./Person');
var Fight = require('./Fight');
var WeaponFactory = require('./WeaponFactory');
//var Weapon = require('./Weapon');
//var Sword = require('./Sword');

var hw = function() {
    console.log("Hello")
};

module.exports = hw;

var my_config = {
    "a": "b"
};

module.exports = my_config;

module.exports = (function () {
  'use strict';
   
    //toHitRoll, attackBonus, weaponAdjustment, thac0, armorClass
    function attack(toHitRoll) {
        console.log("toHitRoll: " + toHitRoll + " " + c.toHit(toHitRoll)); 
    };
    
    
    console.log("my_config");
    console.log(my_config);
    console.log(my_config.a);
    
    /*
    console.log("Hllo");
    hw();
    console.log("my_config");
    console.log(my_config);
    console.log(my_config.a);
    var s = new Dice();
    var c = new Combat(s);
 
    
    attack(s.d20());
    attack(s.d20());
    attack(s.d20());
    attack(s.d20());
    attack(s.d20());
    attack(s.d20());
    */
        
    var f = new Fight();
    
    var bobInfo = {
        id: 1,
        name: "bob",
        health: 35,
        //weapon: "magicsword",
        weapon: "sword",
        thac0: 16,
        ac: 4
    };
    
    var bob = new Person(bobInfo);
    f.addMob(bob);    
    
    var steveInfo = {
        id: 2,
        name: "steve",
        health: 40,
        weapon: "mace",
        thac0: 15,
        ac: 3
    };
    
    var steve = new Person(steveInfo);
    f.addMob(steve);  
       
    var orcInfo3 = {
        id: 3,
        name: "orc3",
        health: 8,
        weapon: "sword",
        thac0: 19,
        ac: 6
    };
    
    var orc3 = new Person(orcInfo3);
    f.addMob(orc3);     
    
    var orcInfo4 = {
        id: 4,
        name: "orc4",
        health: 8,
        weapon: "sword",
        thac0: 19,
        ac: 6
    };
    
    var orc4 = new Person(orcInfo4);
    f.addMob(orc4);      

    var orcInfo5 = {
        id: 5,
        name: "orc5",
        health: 8,
        weapon: "sword",
        thac0: 19,
        ac: 6
    };
    
    var orc5 = new Person(orcInfo5);
    f.addMob(orc5);      
    
    var orcInfo6 = {
        id: 6,
        name: "orc6",
        health: 8,
        weapon: "sword",
        thac0: 19,
        ac: 6
    };
    
    var orc6 = new Person(orcInfo6);
    f.addMob(orc6);      
   
    var orcInfo7 = {
        id: 7,
        name: "orc7",
        health: 8,
        weapon: "sword",
        thac0: 19,
        ac: 6
    };
    
    var orc7 = new Person(orcInfo7);
    f.addMob(orc7);      
   
    var orcInfo8 = {
        id: 8,
        name: "orc8",
        health: 8,
        weapon: "sword",
        thac0: 19,
        ac: 6
    };
    
    var orc8 = new Person(orcInfo8);
    f.addMob(orc8);      
   
    //console.log(f);
    
    console.log(f.getMobs());
    console.log(f.getMobIds());
    f.setMobTarget(bob, orc3, orc4, orc5, orc6, orc7, orc8);
    f.setMobTarget(steve, orc8, orc7, orc6, orc5, orc4, orc3);
    
    f.setMobTarget(orc3, bob, steve);
    f.setMobTarget(orc4, bob, steve);
    f.setMobTarget(orc5, bob, steve);
    f.setMobTarget(orc6, steve, bob);
    f.setMobTarget(orc7, steve, bob);
    f.setMobTarget(orc8, steve, bob);
    
    
    console.log("orc5: " + f.isInFight(orc5));
    console.log("orc6: " + f.isInFight(orc6));
    f.showFights();
    f.doit();
    console.log(f.getTarget(bob));
    f.showFights();
    
    var c = new Combat();
    
    console.log(c.weaponDamage("sword"));
    
    //var weapon = new Weapon();
    //weapon.printName();
    //var sword = new Sword();
    //sword.printName();
    var weaponFactory = new WeaponFactory();
    var mace = weaponFactory.createWeapon("mace");
    mace.printName();
    
    var weaponFactory = new WeaponFactory();
    var sword = weaponFactory.createWeapon("sword");
    sword.printName();
    
    //console.log(f);
    /*
    var bob = new Person(bobInfo);
    var steve = new Person(steveInfo);
    //bob.info();
    //steve.info();
    
    var f = new Fight();
    //var f = new Fight(bob, steve);
    //f.doit();
    f.addMob(bob);
    //console.log(bob);
    //console.log(f.getMobs());
    f.addMob(steve);
    //console.log(steve);
    //console.log(f.getMobs());
    //console.log(f.getMobs().length);
    //console.log(f);
    */

}());  
