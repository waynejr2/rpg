

var Dice = require('./Dice');
var Combat = require('./Combat');
//var MobFactory = require('./lib/Mobs/MobFactory');
//var Fight = require('./Fight');
var WeaponFactory = require('./lib/Weapons/WeaponFactory');

function mainHelper() {
//function mainHelper(f, mobFactory) {
    //this.f = f;
    //this.mobFactory = mobFactory;
}

mainHelper.prototype.doit = function(f, mobFactory) {
        
    var bobInfo = {
        id: 1,
        name: "bob",
        health: 35,
        weapon: "magicsword",
        //weapon: "sword",
        thac0: 16,
        ac: 4
    };
    
    console.log("f is: " + f);
    console.log("mobFactory is: " + mobFactory);
    var bob = mobFactory.createMob("human", bobInfo);    
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
    f.addMob(rick);
    
    var dorfInfo = {
        id: 111,
        name: "Dorf",
        health: 43,
        //weapon: "magicsword",
        weapon: "sword",
        thac0: 15,
        ac: 0
    };
    
    console.log("f is: " + f);
    console.log("mobFactory is: " + mobFactory);
    var dorf = mobFactory.createMob("dwarf", dorfInfo);    
    f.addMob(dorf);    

       
    var orcInfo3 = {
        id: 3,
        name: "orc3",
        health: 8,
        weapon: "sword",
        thac0: 19,
        ac: 6
    };
    
    var orc3 = mobFactory.createMob("orc", orcInfo3);
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
    f.addMob(orc8);
    
    ////console.log("helper: orc8: " + orc8.info());
        
    var hillgiantInfo = {
        id: 33,
        name: "hillgiant33"
    };
    var hillgiant33 = mobFactory.createMob("hillgiant", hillgiantInfo);
    f.addMob(hillgiant33);
    
   
    //console.log(f);
    
    console.log(f.getMobs());
    console.log(f.getMobIds());
    f.setMobTarget(bob, orc3, orc4, orc5, orc6, hillgiant33, orc7, orc8 );
    f.setMobTarget(steve, orc8, orc7, orc6, hillgiant33, orc5, orc4, orc3);
    f.setMobTarget(rick, hillgiant33, orc6, orc5, orc4, orc8, orc7, orc3);
    f.setMobTarget(dorf, hillgiant33, orc6, orc5, orc4, orc8, orc7, orc3 );
    
    f.setMobTarget(orc3, bob, hillgiant33, steve, dorf, rick);
    f.setMobTarget(orc4, dorf, bob, steve, rick, hillgiant33);
    f.setMobTarget(orc5, hillgiant33, rick, dorf, bob, steve);
    f.setMobTarget(orc6, rick, steve, dorf, bob, hillgiant33);
    f.setMobTarget(orc7, steve, rick, hillgiant33,  bob, dorf);
    f.setMobTarget(orc8, steve, rick, bob, hillgiant33, dorf);
    
    f.setMobTarget(hillgiant33, dorf, orc5, orc4, orc8, orc7, orc3, steve, rick, orc6,  bob);
   
    console.log("orc5: " + f.isInFight(orc5));
    console.log("orc6: " + f.isInFight(orc6));
    
};

module.exports = mainHelper;