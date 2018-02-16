/* global module */

var helper = require('./mainHelper');
var Dice = require('./Dice');
var Combat = require('./Combat');
var MobFactory = require('./lib/Mobs/MobFactory');
//var Person = require('./lib/Mobs/Person');
//var Human = require('./lib/Mobs/Human');
//var Orc = require('./lib/Mobs/Orc');
var Fight = require('./Fight');
var WeaponFactory = require('./lib/Weapons/WeaponFactory');

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
    
    
 
        
    var f = new Fight();
    var mobFactory = new MobFactory();
    var mainhelper = new helper();
    //var mainhelper = new helper(f, mobFactory);
    mainhelper.doit(f, mobFactory);
    console.log(f);
    var listofmobs = f.listMobs();
    console.log("listofmobs length: " + listofmobs.length);
    for (var wji = 0; wji < listofmobs.length; wji++) {
        console.log("   index: " + wji + " name: " + listofmobs[wji][0].name);
    }
     
    
    f.showFights();
    f.doit();
    //f.doit();
    
    
    //console.log(f.getTarget(bob));
    
    
    f.showFights();
    f.deadMobReport();
    
    /*
    var c = new Combat();
    
    console.log(c.weaponDamage("sword"));
    */
    //var weapon = new Weapon();
    //weapon.printName();
    //var sword = new Sword();
    //sword.printName();
    var weaponFactory = new WeaponFactory();
    var mace = weaponFactory.createWeapon("mace");
    mace.printName();
    
    var orcInfo9 = {
        id: 11,
        name: "orc11",
        health: 18,
        weapon: "sword",
        thac0: 19,
        ac: 6
    };

    var orcInfo10 = {
        id: 10,
        name: "orc10",
    };
    
    var humanInfo20 = {
        id: 20,
        name: "Andy",
    };
    
    
    var orc9 = mobFactory.createMob("orc", orcInfo9);    
    //var orc9 = new Orc(orcInfo9);
    console.log(orc9.info());
    console.log("################################orc9 list: " + orc9.list()[0].info());

    var orc10 = mobFactory.createMob("orc", orcInfo10);
    //var orc10 = new Orc(orcInfo10);
    console.log(orc10.info());
    
    var andy = mobFactory.createMob("human", humanInfo20);
    console.log(andy.info());
    
    orc10.action(andy);
    andy.action(orc10);
    
    console.log("************************************************************* orc40");
    var orcInfo40 = {
        id: 40,
        name: "orc40",
    };
    var orc40 = mobFactory.createMob("orc", orcInfo40);
  
    console.log(orc40.type);
 

}());  
