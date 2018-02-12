
var Dice = require('./Dice');
var Combat = require('./Combat');

//function Fight(mob1, mob2) {
function Fight() {
    //var mob1, mob2;
    //this.mob1 = mob1;
    //this.mob2 = mob2;
    var mobs;
    this.mobs = [];
};
Fight.prototype.addMob = function(mob) {
    /*var entry = [
        [mob], []
        ];*/
    var entry = [
        mob, []
        ];
    this.mobs.push(entry);
};
Fight.prototype.setMobTarget = function(mob, target) {
    console.log("********************setMobTarget: " + arguments.length);
    
    var args = Array.from(arguments);
    
    var index = this.getMobIndexById(args.shift());
    console.log("********************setMobTarget: " + args.length);
    
    while (args.length) {
        if (index >= 0) {
            this.mobs[index][1].push(args.shift());
        }        
    }
    //var index = this.getMobIndexById(mob);
    /*
    if (index >= 0) {
        this.mobs[index][1].push(target);
    }
    */
    //console.log(this.mobs[index][1].length);
};
Fight.prototype.isInFight = function(mob) {
    var result = false;
    var index = this.getMobIndexById(mob);
    var fights = this.getNthMobFights(index);
    if ( fights.length > 0 ) {
        result = true;
    };
    return result;
};
Fight.prototype.getMobsInFight = function() {
    var result = [];
    for (var index = 0; index < this.mobs.length; index++ ) {
        //if (this.isInFight(this.mobs[index][0])) {
        if (this.isInFight(this.mobs[index][0])) {
        result.push(this.mobs[index][0]);
        };
    };
    return result;
};
Fight.prototype.getTarget = function(mob) {
    var index = this.getMobIndexById(mob);
    return this.mobs[index][1][0];
};
/*Fight.prototype.getTarget = function(mob) {
    var result = null;
    var index = this.getMobIndexById(mob);
    var targets = this.mobs[index][1];
    for (var i = 0; i < targets.length; i++) {
        if ( targets[i].isAlive()) {
            result = targets[i];
        }
    }
    return result;
    //return this.mobs[index][1][0];
};*/
Fight.prototype.showFights = function() {
    for (var i = 0; i < this.mobs.length; i++) {
        var named = this.getNthMob(i).name;
        var fights = this.getNthMobFights(i);
        var output = "";
        output += "name: " + named + " has " + fights.length + " fights:";
        console.log(output);
        //console.log("name: " + named + " has " + fights.length + " fights");
        for (var fight = 0; fight < fights.length; fight++) {
            var fightInfo = "      ";
            fightInfo += fights[fight].info();
            console.log(fightInfo);
            //console.log(fights[fight].info());
            //output += fights[fight].info();
        };
        //console.log(output);
    };
};
Fight.prototype.getMobIndexById = function(mob) {
    var id = mob.getId();
    for (var i = 0; i < this.mobs.length; i++) {
        if (id === this.getNthMob(i).getId()) {
            return i;
        }
    }
    return -1;
};
Fight.prototype.getNthMob = function(mobsIndex) {
    return this.mobs[mobsIndex][0];
};
Fight.prototype.getNthMobFights = function(mobsIndex) {
    return this.mobs[mobsIndex][1];
};
Fight.prototype.getMobs = function() {
    var result = [];    
    for (var i = 0; i < this.mobs.length; i++) {
        result.push(this.getNthMob(i));
        //result.push(this.mobs[i][0]);
    };
    return result;
};
Fight.prototype.getMobIds = function() {
    var result = [];
    for (var i = 0; i < this.mobs.length; i++) {
        result.push(this.getNthMob(i).getId());
        //result.push(this.mobs[i][0].getId());
    };
    return result;
};
Fight.prototype.doit = function() {
    var fight;
    fight = false;
    var c = new Combat();
    var d = new Dice();
    var toHitRoll, attackBonus, weaponAdjustment, thac0, armorClass, output;
    var damage;
    
    if ( this.mobs.length > 0 ) {
        fight = true;       
    };
    
    var count = 0;
    while (fight) {
        var fights, attacker, defender;
        console.log("FIGHT IS ON");
        
        fights = this.getMobsInFight();
        for (var i = 0; i < fights.length; i++) {
            output = "";
            attacker = fights[i];
            defender = this.getTarget(attacker);
            //console.log("attacker: " + attacker + ", defender: " + defender);
            
            toHitRoll = d.d20();
            attackBonus = null;
            weaponAdjustment = null;
            thac0 = attacker.thac0;
            armorClass = defender.ac;
            output += "toHitRoll: " + toHitRoll + ",";
            output += "thac0: " + thac0 + ",";
            output += "armorClass: " + armorClass;
            //console.log(output);
            //Combat.prototype.toHit = function(toHitRoll, attackBonus, weaponAdjustment, thac0, armorClass)
            if (c.toHit(toHitRoll, null, null, thac0, armorClass)) {
                console.log("HIT!");
                defender.damage(c.weaponDamage(attacker.weapon));
            } else {
                console.log("MISS");
            };
        }
        for (var i = 0; i < fights.length; i++) {
            if ( !fights[i].isAlive()) {
                console.log("DEATH OF " + fights[i].name + " " + fights[i].id);
            }
        }
        
        if (count > 10) {
            fight = false;
        }
        count++;
        
        console.log(Combat);
        
        //fight = false;
        /*
        this.mob1.damage(5);
        this.mob2.damage(7);
        
        if (!this.mob1.isAlive()) {
            fight = false;
        }        
        if (!this.mob2.isAlive()) {
            fight = false;
        }
        
        this.mob1.info();
        this.mob2.info();
        */
    };
    console.log("FIGHT IS OFF");
};
Fight.prototype.attack = function(defender) {
    ;
};

module.exports = Fight;    