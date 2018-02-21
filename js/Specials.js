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


DamageContainer passes around?



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
    console.log("damagecontaier before check " + JSON.stringify(damagecontainer));
    //attacker.check(attacker, defender, source, damagecontainer);
    defender.check(attacker, defender, source, damagecontainer);
    //weapon.check(attacker, defender, source, damagecontainer);
    console.log("damagecontaier after check " + JSON.stringify(damagecontainer));
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

var skeleton = (function () {
    
    var specialProps = [];
    // Constructor
    function skeleton () {
        init();
    }

    function init() {
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
    
    function addSpecialProps(value) {
        specialProps.push(value);
    };
    
    function privateFun (prefix) {
        console.log("privateFun " + specialProps);
        //return prefix + this._foo;
    }
    
    skeleton.prototype.check = function(attacker, defender, source, dc) {        
        console.log("CHECK: " + specialProps);
        for (var i = 0; i < specialProps.length; i++) {
            specialProps[i](attacker, defender, source, dc);
        }
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

var ranger = new rangerMaker();
var sword = new swordMaker();
var mace = new maceMaker();
var dc = new damageContainer(12);
var dc2 = new damageContainer(8);

attack(ranger, skeleton, sword, dc);
var dmg = dc.calculateDamage();
console.log("dmg: " + dmg);


attack(ranger, skeleton, mace, dc2);
var dmg = dc2.calculateDamage();
console.log("dmg: " + dmg);


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