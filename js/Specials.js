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

/*
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
*/
/*
var bspdata1 = ["source", "sharp", "dc", "PM", .5];
var bsp = function(){
    
};
*/

function attack(attacker, defender, source, damagecontainer) {
    console.log("damagecontainer before check " + JSON.stringify(damagecontainer));
    attacker.check(attacker, defender, source, damagecontainer);
    defender.check(attacker, defender, source, damagecontainer);
    source.check(attacker, defender, source, damagecontainer);
    console.log("damagecontainer after check " + JSON.stringify(damagecontainer));
    console.log("attack source: " + source.getProperties());
    console.log("attack");
    console.log("sending to ARQ");
}

rangerMaker = function() {
    
    function check(attacker, defender, weapon, dc) {
    }
    
    return { 
        check : check
    };
};

var checkp = function(attacker, defender, weapon, dc) {
    console.log("checkp");
    console.log("checkp : " + arguments.length);
    console.log("checkp: props" + JSON.stringify(props));
    //console.log("checkp: this.props" + JSON.stringify(this.props));
    //console.log("checkp " + a + " " + b + " " + c )
    //console.log("checkp : " + news);
};

var ranger = (function() {
    
    this.props = ['mob', "human", "ranger"];
    var specialProps = [];
    
    function ranger() {
        init();
    }
    
    function init() {
        buildSpecialProps();        
    }
    
    function addSpecialProps(value) {
        specialProps.push(value);
    }
    
    function buildSpecialProps() {
        addSpecialProps(function(attacker, defender, source, dc) {
            if (defender.getProperties().includes("undead")) {
                dc.addBonusDamage(7);
            }            
        });
    }
    
    ranger.prototype.getProperties = function() {
        return props;
    };
    
    ranger.prototype.check2 = function(attacker, defender, source, dc) {
        checkp.apply(this, arguments);
    };

    ranger.prototype.check = function(attacker, defender, source, dc) {        
        console.log("rangerCHECK: " + specialProps);
        for (var i = 0; i < specialProps.length; i++) {
            specialProps[i](attacker, defender, source, dc);
        }
    };
    
    return ranger;
})();

var mkskeleton = (function () {
    
    var props;
    var specialProps;
    var health;
    
    // Constructor
    function skeleton () {
        init();
    }
    
    function init() {
        props = ["mob", "undead"];
        specialProps = [];
        health = 8;
        buildSpecialProps();
    }

    function addSpecialProps(value) {
        specialProps.push(value);
    }
    
    function buildSpecialProps() {
        specialProps = [];
        addSpecialProps(function(attacker, defender, source, dc) {
            if (source.getProperties().includes("sharp")) {
                dc.addPenaltyMultiplier(0.5);
            }            
        });
        addSpecialProps(function(attacker, defender, source, dc) {
            if (source.getProperties().includes("gold star")) {
                dc.addPenaltyMultiplier(0.5);
            }            
        });
    }

    function rebuildSpecialProps() {
        buildSpecialProps();
    }
        
    function privateFun (prefix) {
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
        //console.log("skeleton privateFun " + specialProps);
        //return prefix + this._foo;
    }
    
    skeleton.prototype.check = function(attacker, defender, source, dc) {        
        console.log("skeleton CHECK: " + specialProps);
        for (var i = 0; i < specialProps.length; i++) {
            specialProps[i](attacker, defender, source, dc);
        }
    };

    skeleton.prototype.damage = function(dmg) {
        health -= dmg;
    };
    
    skeleton.prototype.getHealth = function() {
        return health;
    };
    
    skeleton.prototype.getProperties = function() {
        return props;
    };
    
    skeleton.prototype.publicFun = function () {
        return privateFun.call(this, '>>');
    };

    return skeleton;
})();

var mkgiant = (function () {
    
    var props;
    var specialProps;
    var health;
    
    // Constructor
    function giant () {
        init();
    }
    
    function init() {
        props = ["mob", "giant"];
        specialProps = [];
        health = 38;
        buildSpecialProps();
    }

    function addSpecialProps(value) {
        specialProps.push(value);
    }
    
    function buildSpecialProps() {
        specialProps = [];
    }

    function rebuildSpecialProps() {
        buildSpecialProps();
    }
        
    function privateFun (prefix) {
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
        //console.log("skeleton privateFun " + specialProps);
        //return prefix + this._foo;
    }
    
    giant.prototype.check = function(attacker, defender, source, dc) {        
        console.log("giant CHECK: " + specialProps);
        for (var i = 0; i < specialProps.length; i++) {
            specialProps[i](attacker, defender, source, dc);
        }
    };

    giant.prototype.damage = function(dmg) {
        health -= dmg;
    };
    
    giant.prototype.getHealth = function() {
        return health;
    };
    
    giant.prototype.getProperties = function() {
        return props;
    };
    
    giant.prototype.publicFun = function () {
        return privateFun.call(this, '>>');
    };

    return giant;
})();

var mkmace = (function() {
    
    var props;
    var specialProps;
    
    function mace() {
        init();
    }
    
    function init() {
        props = ["mace", "green star", "blunt"];
        specialProps = [];
        buildSpecialProps();
    }
    
    function addSpecialProps(value) {
        specialProps.push(value);
    }
    
    function buildSpecialProps() {
        addSpecialProps(function(attacker, defender, source, dc) {
            if (defender.getProperties().includes("undead")) {
                dc.addBonusDamage(7);
            }            
        });
        addSpecialProps(function(attacker, defender, source, dc) {
            if (attacker.getProperties().includes("ranger")) {
                dc.addBonusDamage(13);
            }            
        });
    }
    
    mace.prototype.check = function(attacker, defender, source, dc) {        
        console.log("source CHECK: " + specialProps);
        for (var i = 0; i < specialProps.length; i++) {
            specialProps[i](attacker, defender, source, dc);
        }
    };
    
    mace.prototype.check = function(attacker, defender, source, dc) {        
        console.log("source CHECK: " + specialProps);
        for (var i = 0; i < specialProps.length; i++) {
            specialProps[i](attacker, defender, source, dc);
        }
    };
    
    mace.prototype.getProperties = function() {
        return props;
    };
    
    return mace;
})();

var mksword = (function() {
    
    var props;
    var specialProps;
    
    function sword() {
        init();
    }
    
    function init() {
        props = ["sword", "gold star", "sharp"];
        specialProps = [];
        buildSpecialProps();
    }
    
    function addSpecialProps(value) {
        specialProps.push(value);
    }
    
    function buildSpecialProps() {
        addSpecialProps(function(attacker, defender, source, dc) {
            if (defender.getProperties().includes("giant")) {
                dc.addBonusMultiplier(3);
            }            
        });
        addSpecialProps(function(attacker, defender, source, dc) {
            if (attacker.getProperties().includes("ranger")) {
                dc.addBonusDamage(13);
            }            
        });
    }
    
    sword.prototype.check = function(attacker, defender, source, dc) {        
        console.log("source CHECK: " + specialProps);
        for (var i = 0; i < specialProps.length; i++) {
            specialProps[i](attacker, defender, source, dc);
        }
    };
    
    sword.prototype.check = function(attacker, defender, source, dc) {        
        console.log("source CHECK: " + specialProps);
        for (var i = 0; i < specialProps.length; i++) {
            specialProps[i](attacker, defender, source, dc);
        }
    };
    
    sword.prototype.getProperties = function() {
        return props;
    };
    
    return sword;
})();


maceMaker = function() {
    var properties = ["green star", "blunt"];
    
    function getProperties() {
        return properties;
    }
    
    return {
        getProperties: getProperties
    };
};

swordMaker = function() {
    var properties = ["gold star", "sharp"];
    
    function getProperties() {
        return properties;
    }
    
    return {
        getProperties: getProperties
    };
};

var wjrhelp = function(a, b, c) { 
    console.log("wjrhelp : " + arguments.length);
    console.log("wjrhelp " + a + " " + b + " " + c );
    console.log("wjrhelp : " + news);
};

var wjr = (function(){
    this.news = "news is fake";
    
    function wjr(){}
    wjr.prototype.x = function() {
        console.log("x : " + arguments.length);
        console.log("x news: " + news);
        wjrhelp.apply(this, arguments);
    };
    
    return wjr;
}());

var w = new wjr();
w.x(1,2,3);

//return
var skeleton = new mkskeleton();
console.log("skeleton health: " + skeleton.getHealth());
skeleton.damage(1);
console.log("skeleton health: " + skeleton.getHealth());
var skeleton2 = new mkskeleton();
//console.log(skeleton2.publicFun());
console.log("skeleton2 health: " + skeleton2.getHealth());
var skeleton3 = new mkskeleton();
var skeleton4 = new mkskeleton();
var ranger = new ranger();
//var ranger = new rangerMaker();
var sword = new mksword();
//var sword = new swordMaker();
var mace = new mkmace();
console.log(mace.getProperties());
console.log(typeof mace.check);
//var mace = new maceMaker();
var dc = new damageContainer(12);
var dc2 = new damageContainer(8);
var dc3 = new damageContainer(12);

var giant1 = new mkgiant();

attack(ranger, skeleton, sword, dc);
console.log();
var dmg = dc.calculateDamage();
console.log("sworddmg: " + dmg);


attack(ranger, skeleton, mace, dc2);
var dmg = dc2.calculateDamage();
console.log("macedmg: " + dmg);


attack(ranger, giant1, sword, dc3);
console.log();
var dmg = dc3.calculateDamage();
console.log("sworddmg: " + dmg);

skeleton.publicFun();      // Returns '>>bar'


var mkSpecialProps = (function() {
    
    var props;
    
    function specialProps() {
        init();
    }
    
    function init() {
        props = [];
    }
    
    specialProps.prototype.push = function(value) {
        props.push(value);
    };
    
    specialProps.prototype.print = function() {
        console.log(props.toString());
    };
    
    return specialProps;
})();

var mksword2 = (function() {
    
    var props;
    //var sp = new specialProps();
    var specialProps = new mkSpecialProps();
    
    function sword2() {
        init();
    }
    
    function init() {
        props = ["sword", "gold star", "sharp"];
        //specialProps = [];
        buildSpecialProps();
        specialProps.print();
    }
    
    function addSpecialProps(value) {
        specialProps.push(value);
    }
    
    function buildSpecialProps() {
        addSpecialProps(function(attacker, defender, source, dc) {
            if (defender.getProperties().includes("giant")) {
                dc.addBonusMultiplier(3);
            }            
        });
        addSpecialProps(function(attacker, defender, source, dc) {
            if (attacker.getProperties().includes("ranger")) {
                dc.addBonusDamage(13);
            }            
        });
    }
    
    sword2.prototype.check = function(attacker, defender, source, dc) {        
        console.log("source CHECK: " + specialProps);
        for (var i = 0; i < specialProps.length; i++) {
            specialProps[i](attacker, defender, source, dc);
        }
    };
    
    sword2.prototype.check = function(attacker, defender, source, dc) {        
        console.log("source CHECK: " + specialProps);
        for (var i = 0; i < specialProps.length; i++) {
            specialProps[i](attacker, defender, source, dc);
        }
    };
    
    sword2.prototype.getProperties = function() {
        return props;
    };
    
    return sword2;
})();

var nsword = mksword2();



//skeleton
//skeleton.privateFun('>>'); // ReferenceError: private is not defined


//return;
//var skeleton = new Skeleton();
//console.log("hello is : " + skeleton.hello());

//var skeleton = new skeletonMaker();
/*var ranger = new rangerMaker();
var sword = new swordMaker();
var mace = new maceMaker();
var dc = new damageContainer(12);
var dc2 = new damageContainer(8);

console.log("sword props: " + sword.getProperties());
*/

/*
console.log("skeleton: " + skeleton);
console.log("skeleton: " + skeleton.check());
*/

/*
attack(ranger, skeleton, sword, dc);
var dmg = dc.calculateDamage();
console.log("dmg: " + dmg);

attack(ranger, skeleton, mace, dc);
var dmg = dc2.calculateDamage();
console.log("dmg: " + dmg);
*/

//attack("", skeleton, mace);

/*
module.exports = (function Specials() {
    
    function Specials() {
        
    };
    
    
    return Specials
}());*/