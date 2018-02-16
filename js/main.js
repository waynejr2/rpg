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
    
 /*  
    var bobInfo = {
        id: 1,
        name: "bob",
        health: 35,
        weapon: "magicsword",
        //weapon: "sword",
        thac0: 16,
        ac: 4
    };
    
    var bob = mobFactory.createMob("human", bobInfo);
    //var bob = new Human(bobInfo);
    //var bob = new Person(bobInfo);
    f.addMob(bob);   
    
    var steveInfo = {
        id: 2,
        name: "steve",
        health: 40,
        weapon: "mace",
        thac0: 15,
        ac: 3
    };
    
    var steve = mobFactory.createMob("human", steveInfo);
    //var steve = new Human(steveInfo);    
    //var steve = new Person(steveInfo);
    f.addMob(steve);
    
    var rickInfo = {
        id: 22,
        name: "ensign ricky",
        health: 19,
        weapon: "sword",
        thac0: 18,
        ac: 4
    };
    
    var rick = mobFactory.createMob("human", rickInfo);
    //var rick = new Human(rickInfo);    
    //var steve = new Person(steveInfo);
    f.addMob(rick);  
       
    var orcInfo3 = {
        id: 3,
        name: "orc3",
        health: 8,
        weapon: "sword",
        thac0: 19,
        ac: 6
    };
    
    var orc3 = mobFactory.createMob("orc", orcInfo3);
    //var orc3 = new Orc(orcInfo3);
    f.addMob(orc3);
    /*
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
    
    var orc4 = mobFactory.createMob("orc", orcInfo4);
    //var orc4 = new Orc(orcInfo4);
    f.addMob(orc4);      

    var orcInfo5 = {
        id: 5,
        name: "orc5",
        health: 8,
        weapon: "sword",
        thac0: 19,
        ac: 6
    };
    
    var orc5 = mobFactory.createMob("orc", orcInfo5);
    //var orc5 = new Orc(orcInfo5);
    f.addMob(orc5);      
    
    var orcInfo6 = {
        id: 6,
        name: "orc6",
        health: 8,
        weapon: "sword",
        thac0: 19,
        ac: 6
    };
    
    var orc6 = mobFactory.createMob("orc", orcInfo6);
    //var orc6 = new Orc(orcInfo6);
    f.addMob(orc6);      
   
    var orcInfo7 = {
        id: 7,
        name: "orc7",
        health: 8,
        weapon: "sword",
        thac0: 19,
        ac: 6
    };
    
    var orc7 = mobFactory.createMob("orc", orcInfo7);
    //var orc7 = new Orc(orcInfo7);
    f.addMob(orc7);      
   
    var orcInfo8 = {
        id: 8,
        name: "orc8",
        health: 8,
        weapon: "sword",
        thac0: 19,
        ac: 6
    };

    var orc8 = mobFactory.createMob("orc", orcInfo8);
    //var orc8 = new Orc(orcInfo8);
    f.addMob(orc8);
    
    var hillgiantInfo = {
        id: 33,
        name: "hillgiant33"
    };
    var hillgiant33 = mobFactory.createMob("hillgiant", hillgiantInfo);
    f.addMob(hillgiant33);
    
   
    //console.log(f);
    
    console.log(f.getMobs());
    console.log(f.getMobIds());
    f.setMobTarget(bob, orc3, orc4, orc5, orc6, orc7, orc8, hillgiant33);
    f.setMobTarget(steve, orc8, orc7, orc6, hillgiant33, orc5, orc4, orc3);
    f.setMobTarget(rick, hillgiant33, orc6, orc5, orc4, orc8, orc7, orc3);
    
    f.setMobTarget(orc3, bob, hillgiant33, steve, rick);
    f.setMobTarget(orc4, bob, steve, rick, hillgiant33);
    f.setMobTarget(orc5, hillgiant33, rick, bob, steve);
    f.setMobTarget(orc6, rick, steve, bob, hillgiant33);
    f.setMobTarget(orc7, steve, rick, hillgiant33,  bob);
    f.setMobTarget(orc8, steve, rick, bob, hillgiant33);
    
    f.setMobTarget(hillgiant33, orc5, orc4, orc8, orc7, orc3, steve, rick, orc6,  bob);
   
    console.log("orc5: " + f.isInFight(orc5));
    console.log("orc6: " + f.isInFight(orc6));
    */
    
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
    
    //console.log(Math.floor(0.5 * 20) + 1); 
    
    //var weaponFactory = new WeaponFactory();
    //var sword = weaponFactory.createWeapon("sword");
    //sword.printName();
    
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
