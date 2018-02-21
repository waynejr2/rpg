/*
this is an experimental code playground. We have to deal with special situations, abilities, defense/attacks, etc
*/

/*
List of some examples.  Perhaps in order of attempt to implement.

Skeleton:  1/2 damage from sharp/edged weapons
+2 Giant Slaying Sword:  vs Giants: +3 tohit and damage, double damage


Dwarf:  +1 to hit orcs
Dwarf:  +4 AC vs Giants

Dwarf:  constitution bonus
Ranger: +1 dmg per level vs "giant class".  Perhaps "testgiantclass function, runs check on type vs list" Maybe special tests are good? or really bad.

ring of fire resistance
*/

/*
Skeleton:  1/2 damage from sharp/edged weapons

skeletons with sword fighting
Human with mace
Dwarf with sword

checks to make
Dwarf with sword attacks skeleton
    result:  half damage    => damagecontainer.addPenaltyMultiplier
    How did we get result? what checks are made?
    

Human with mace attacks skeleton


DamageContainer passes around? do we need something more that damage?  attackcontainer, with all the rolls and such put into then put into an attack/action resolution queue(ARQ).
then at the end of each simultanous round, you resolve all members of the attack/action resolution queue(ARQ).  Benefits to the ARQ, suppose an attack has several things going on?
ex: 1) hits and does damage => ARQ  hitcheck seems to be needed before adding to ARQ
    2) if it hit has fire attack on defender that lasts for N rounds/ticks (perhaps if ST fails) => ARQ
    3) defender gets debuff to AC -1 for N rounds = ARQ

ex: 1) spell called "fire fingers" targets 3 defenders
    2) defender1 fire fingers => ARQ
    3) defender2 fire fingers => ARQ
    4) defender3 fire fingers => ARQ

ex: 1) spell targets attackers group for buff.  each member gets buff =>ARQ

MORE MESSY STUFF:
recalculate mobs stats, props, etc when things change:  spells on/off, each tick spell could say weaken strength, magic ring on/off, 
potion of heroism buffs mob's level and special health bonus (dmg comes off special health first!). potions wear off/end.

AH!  we need basestats and currentstats.  Like health vs currenthealth.  We use currentstats for work and base is starting point.
Althought currenthealth is trick. might be [30, 20, 20] so the first position is the 'base' current health and the others are from buffs. So when a buff ends, 
you set currenthealth = [30] then recalculate! so in this exmaple we still have one buff and currenthealth is recalculated at [30, 20].  How does damage & healing work?
currenthealth = [30, 20, 20]
ex1) 10 points of fire damage -> currenthealth = [30, 20, 10]
ex2) 30 points of fire damage -> currenthealth = [30, 10, 0]    //do we remove the 0?  perhaps although if the buff still exists what happens then if we recalculate? *
ex3) 60 points of fire damage -> currenthealth = [10, 0, 0]     //do we remove the 0?  perhaps although if the buff still exists what happens then if we recalculate? *
ex4) 15 points of healing -> currenthealth = [25]
ex5) now drink potion of heroism -> currenthealth = [25, 20]
* the potion of heroism might be two buffs:  1 buff to level & 1 to HP that we remove after buffing or hide.  buff groups? [[][]].  This buffing hp by potion is kind
of tricky.  Have to think the buff thing through. Do we need IDs for this too? [ [0, 25], [444, 20] [699, 20] ] then 
buffs: [ [buffid=400, obj], [699, obj], [444, obj]] so we tracking them.  Also, [0, 25] should 0 be self? aka this mob? consistant! 

    



*/

/*
function cat()
{
    var animal = 'kitties';

    function getAnimal()
    {
        return animal;
    }

    return {
        getAnimal: getAnimal
    };
};
console.log("cat: " + cat);
var x = cat();
console.log("x: " + x.getAnimal());
*/


/*
mobMaker = function() {
    
    function check(weapon, dc) {
    }
    
    return { 
        check : check
    }
};
*/


/*
skeletonMaker = function() {
    
    var specialProperties = [];
    
    function check2(attacker, defender, weapon, dc) {
        
            if ( weaponprop == "sharp" ) {
                dc.addPenaltyMultiplier(.5);
                console.log("sharp!");
            } 
            if ( weaponprop == "gold star" ) {
                dc.addPenaltyMultiplier(.5);
                console.log("gold star!");
            }
            
    }    
        
  
    function check(attacker, defender, weapon, dc) {
        var weaponprop;
        var weaponprops = weapon.getProperties();
        for (var i = 0; i < weaponprops.length; i++) {
            weaponprop = weaponprops[i];
            if ( weaponprop == "sharp" ) {
                dc.addPenaltyMultiplier(.5);
                console.log("sharp!");
            } 
            if ( weaponprop == "gold star" ) {
                dc.addPenaltyMultiplier(.5);
                console.log("gold star!");
            }
            
        }    
        
        
    }
    
    return { 
        check : check
    }
};
*/

/*
function Skeleton() {
    
    var specialProps = [];
    
    function Skeleton() {
        this.hey = function() {
            console.log("hey");
        }
    }

};
Skeleton.prototype.hello = function() {
    console.log('Hello');
    this.hey();
    return "hello";
}
*/

var damageContainer = require('./DamageContainer');

console.log("we got specials");

function attack(attacker, defender, source, damagecontainer) {
    console.log("damagecontainer before check " + JSON.stringify(damagecontainer));
    attacker.check(attacker, defender, source, damagecontainer);
    defender.check(attacker, defender, source, damagecontainer);
    //weapon.check(attacker, defender, source, damagecontainer);
    console.log("damagecontainer after check " + JSON.stringify(damagecontainer));
    console.log("attack source: " + source.getProperties());
    console.log("attack");
};

rangerMaker = function() {
    
    function check(attacker, defender, weapon, dc) {
    }
    
    return { 
        check : check
    }
};

var ranger = (function() {
    
    var props = ["ranger"];
    var specialProps = [];
    
    function ranger() {
        init();
    };
    
    function init() {
        buildSpecialProps();        
    };
    
    function addSpecialProps(value) {
        specialProps.push(value);
    };
    
    function buildSpecialProps() {
        addSpecialProps(function(attacker, defender, source, dc) {
            if (defender.getProperties().includes("undead")) {
                dc.addBonusDamage(10);
            }            
        });
    };
    
    ranger.prototype.check = function(attacker, defender, source, dc) {        
        console.log("rangerCHECK: " + specialProps);
        for (var i = 0; i < specialProps.length; i++) {
            specialProps[i](attacker, defender, source, dc);
        }
    };
    
    return ranger;
})();

var skeleton = (function () {
    
    var props = ["undead"];
    var specialProps = [];
    
    // Constructor
    function skeleton () {
        init();
    }
    
    function init() {
        buildSpecialProps();
    };
    
    function addSpecialProps(value) {
        specialProps.push(value);
    };
    
    function buildSpecialProps() {
        addSpecialProps(function(attacker, defender, source, dc) {
            if (source.getProperties().includes("sharp")) {
                dc.addPenaltyMultiplier(.5);
            }            
        });
        addSpecialProps(function(attacker, defender, source, dc) {
            if (source.getProperties().includes("gold star")) {
                dc.addPenaltyMultiplier(.5);
            }            
        });
    };

    function rebuildSpecialProps() {
        buildSpecialProps();
    };
    
    //function getProperties() {
    //    return properties;
    //};
 
    
    function privateFun (prefix) {
        console.log("skeleton privateFun " + specialProps);
        //return prefix + this._foo;
    }
    
    skeleton.prototype.check = function(attacker, defender, source, dc) {        
        console.log("skeleton CHECK: " + specialProps);
        for (var i = 0; i < specialProps.length; i++) {
            specialProps[i](attacker, defender, source, dc);
        }
    };

    skeleton.prototype.getProperties = function() {
        return props;
    };
    
    skeleton.prototype.publicFun = function () {
        return privateFun.call(this, '>>');
    }

    return skeleton;
})();


maceMaker = function() {
    var properties = ["green star", "blunt"];
    
    function getProperties() {
        return properties;
    }
    
    return {
        getProperties: getProperties
    }
};

swordMaker = function() {
    var properties = ["gold star", "sharp"];
    
    function getProperties() {
        return properties;
    }
    
    return {
        getProperties: getProperties
    }
};


var skeleton = new skeleton();
var ranger = new ranger();
//var ranger = new rangerMaker();
var sword = new swordMaker();
var mace = new maceMaker();
var dc = new damageContainer(12);
var dc2 = new damageContainer(8);

attack(ranger, skeleton, sword, dc);
console.log();
var dmg = dc.calculateDamage();
console.log("sworddmg: " + dmg);


attack(ranger, skeleton, mace, dc2);
var dmg = dc2.calculateDamage();
console.log("macedmg: " + dmg);


skeleton.publicFun();      // Returns '>>bar'
skeleton
//skeleton.privateFun('>>'); // ReferenceError: private is not defined


return
var skeleton = new Skeleton();
console.log("hello is : " + skeleton.hello());

//var skeleton = new skeletonMaker();
var ranger = new rangerMaker();
var sword = new swordMaker();
var mace = new maceMaker();
var dc = new damageContainer(12);
var dc2 = new damageContainer(8);

console.log("sword props: " + sword.getProperties());

/*
console.log("skeleton: " + skeleton);
console.log("skeleton: " + skeleton.check());
*/

attack(ranger, skeleton, sword, dc);
var dmg = dc.calculateDamage();
console.log("dmg: " + dmg);

attack(ranger, skeleton, mace, dc);
var dmg = dc2.calculateDamage();
console.log("dmg: " + dmg);


//attack("", skeleton, mace);

/*
module.exports = (function Specials() {
    
    function Specials() {
        
    };
    
    
    return Specials
}());*/