
var Dice = require('./Dice');
var Combat = require('./Combat');
var wjr2 = "hello";

function Fight() {
    var mobs, deadMobs, newlyDeadMobs;
    this.mobs = [];
    this.deadMobs = [];
    this.newlyDeadMobs = [];

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
Fight.prototype.deadMobReport = function() {
    console.log("DEAD MOB REPORT");
    console.log("   DEAD MOB REPORT");
    console.log("      DEAD MOB REPORT");
    console.log("         DEAD MOB REPORT");
    console.log("we have " + this.deadMobs.length + " dead mobs");
    for (var i = 0; i < this.deadMobs.length; i++) {
        console.log(this.deadMobs[i].info());
    }
    wjr();
};
Fight.prototype.setMobTarget = function(mob, target) {
    var args = Array.from(arguments);
    
    var index = this.getMobIndexById(args.shift());   
    while (args.length) {
        if (index >= 0) {
            this.mobs[index][1].push(args.shift());
        }        
    }
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
Fight.prototype.hasTargets = function(mob) {
    var index = this.getMobIndexById(mob);
    var result = false;
    for (var tindex = 0; tindex < this.mobs[index][1].length; tindex++) {
        if (this.mobs[index][1][tindex].isAlive()) {
            result = this.mobs[index][1][tindex];
            console.log("getTarget: name: " + mob.name + " target: " + result.info());
            result = true;            
        } else {
            console.log("getTarget FYI: " + this.mobs[index][1][tindex].name + " is dead");
        }
    } 
    return result;    
};
Fight.prototype.getTarget = function(mob) {
    var index = this.getMobIndexById(mob);
    var result = [];
    for (var tindex = 0; tindex < this.mobs[index][1].length; tindex++) {
        if (this.mobs[index][1][tindex].isAlive()) {
            result = this.mobs[index][1][tindex];
            console.log("getTarget: name: " + mob.name + " target: " + result.info());
            return result;            
        } else {
            console.log("getTarget FYI: " + this.mobs[index][1][tindex].name + " is dead");
        }
    } 
    return result;
    //return this.mobs[index][1][0];
};
Fight.prototype.showFights = function() {
    for (var i = 0; i < this.mobs.length; i++) {
        var named = this.getNthMob(i).name;
        var fights = this.getNthMobFights(i);
        var output = "";
        if (!this.getNthMob(i).isAlive()) {
            output += "name: " + named + "is dead";
            
        } else {
            output += "name: " + named + " has " + fights.length + " fights:";
        }    
        console.log(output);

        for (var fight = 0; fight < fights.length; fight++) {
            var fightInfo = "      ";
            fightInfo += fights[fight].info();
            console.log(fightInfo);
        };
    };
};
Fight.prototype.getMobIndexById = function(mob) {
    //console.log("getMobIndexById " + mob);
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
Fight.prototype.removeDeadFromFight2 = function() {
    //console.log("AAAAAAAAAAAAAAAAA: " + this.mobs.length);
    //console.log("BBBBBBBBBBBBBBBBB: " + this.mobs);
    var mob;
    var deadmob;
    var newMobs;
    var targets;

    
    for (var i = 0; i < this.mobs.length; i++) {
        mob = this.getNthMob(i);
        
        if (!mob.isAlive()) {
            //console.log("------------DEAD: " + mob.name);
            this.newlyDeadMobs.push(mob);
            //console.log("newlyDeadMobs: " + this.newlyDeadMobs);
        }        
    }
    //console.log("XXXXXXXXXXXXXXXXXXX: deadmobs length: " + this.newlyDeadMobs.length);
    for (var newlydDeadMobsIndex = 0; newlydDeadMobsIndex < this.newlyDeadMobs.length; newlydDeadMobsIndex++) {
        deadmob = this.newlyDeadMobs[newlydDeadMobsIndex];
        mob = null;
        
        //for (var mobsIndex = this.mobs.length -1; mobsIndex >= 0; mobsIndex--) {
        for (var mobsIndex = 0; mobsIndex < this.mobs.length; mobsIndex++) {
            for (var opponentsIndex = this.mobs[mobsIndex][1].length -1; opponentsIndex >= 0; opponentsIndex--) {
            //for (var opponentsIndex = 0; opponentsIndex < this.mobs[mobsIndex][1].length; opponentsIndex++) {
                //console.log("mob " + this.mobs[mobsIndex][0].name + " length "  + this.mobs[mobsIndex][1].length);
                //console.log("    opponent " + this.mobs[mobsIndex][1][opponentsIndex].name);
                if (deadmob === this.mobs[mobsIndex][1][opponentsIndex]) {
                    //console.log("deadmob: " + deadmob.name + " is the same as " + this.mobs[mobsIndex][1][opponentsIndex].name);
                    this.mobs[mobsIndex][1].splice(opponentsIndex, 1);
                }
            }
        }       
    }
    
    for (var mobsIndex = 0; mobsIndex < this.mobs.length; mobsIndex++) {
        newMobs = [];
        mob = null;
        targets = [];
        
        if (this.mobs[mobsIndex][0].isAlive()) {
            mob = this.mobs[mobsIndex][0];
            targets = this.mobs[mobsIndex][1];
            entry = [
                mob, [ targets ]
            ];
            newMobs.push(entry);
        }
    }
    console.log("newmobs len: " + newMobs.length);

    this.mobs = newMobs;
};
Fight.prototype.removeDeadFromFight = function() {
    wjr.call(this);
    removeDeadTargets2.call(this);
    //this.removeDeadTargets();
    removeDeadAttackers2.call(this);
    //this.removeDeadAttackers.();
};
Fight.prototype.removeDeadTargets = function() {
    console.log("removeDeadTargets");
    var dead = [];
    for (var i = 0; i < this.mobs.length; i++ ) {
        if (!this.mobs[i][0].isAlive()) {
            dead.push(this.mobs[i][0]);
        }
    }
    for (var di = 0; di < dead.length; di++) {
        console.log("deadname: " + dead[di].name);
    }
    for (var i = 0; i < this.mobs.length; i++ ) {
        console.log(" checking mob " + this.mobs[i][0].name + " for dead targets");
        
        for (var di = 0; di < dead.length; di++) {
            var ti = this.mobs[i][1].length;
            
            while(ti--) {
                if (dead[di] == this.mobs[i][1][ti]) {
                    console.log("    match: " + dead[di].name + " " + this.mobs[i][1][ti].name);
                    this.mobs[i][1].splice(ti, 1);
                }                
            }            
            /*
            for (var ti = 0; ti < this.mobs[i][1].length; ti++) {
                if (dead[di] == this.mobs[i][1][ti]) {
                    console.log("    match: " + dead[di].name + " " + this.mobs[i][1][ti].name);
                    this.mobs[i][1].splice(ti, 1);
                    ti--;
                    
                }
            }
            */
        }        
    }
};
Fight.prototype.removeDeadAttackers = function() {
    //console.log("removeDeadAttackers");
    var i = this.mobs.length;
    var m;
    while (i--) {
        if (!this.mobs[i][0].isAlive()) {
            //console.log("   " + this.mobs[i][0].name + " is dead");
            //mobs.push(this.mobs.splice(i, 1);
            //console.log("     this.mobs.length: " + this.mobs.length); 
            m = this.mobs.splice(i, 1);
            //console.log("     this.obs.length: " + this.mobs.length); 
            //console.log("        m.length:" + m.length);
            //console.log("           m[0][0] should dead mob: " + m[0][0].name);
            this.deadMobs.push(m[0][0]);
        }
    }
    console.log("deadMobs length: " + this.deadMobs.length);
};
Fight.prototype.printFights = function(fights) {
    var mob, opponent, output, mobinfo, opponentinfo;
    output = "";
    mobinfo = "";
    opponentinfo = "";
    for (var i = 0; i < fights.length; i++) {
        output = "";
        mobinfo = "";
        opponentinfo = "";
        mob = fights[i];
        if (! mob.isAlive()) {
            continue;
        }
        mobinfo += "Aname: " + mob.name;
        opponent = this.getTarget(mob);
        opponentinfo += " Oname: " + opponent.name;
        
        output += mobinfo + " " + opponentinfo;
        console.log(output);
    }
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
        //console.log("FIGHT IS ON");
    console.log("_________________________________________________________________");
    console.log();
    console.log("ROUND NUMBER: " + count);
    console.log();
    console.log("_________________________________________________________________");
        
        fights = this.getMobsInFight();
        //fights = [];
        console.log("number of fights: " + fights.length);
        this.printFights(fights);
        for (var fightIndex = 0; fightIndex < fights.length; fightIndex++) {
            //console.log("ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ");
            //this.showFights();
            output = "";
            attacker = fights[fightIndex];
            if (this.hasTargets(attacker)) {
                defender = this.getTarget(attacker);                
            } else {
                continue;
            }
            if (!attacker.isAlive() || !defender.isAlive()) {
                console.log("doit warning name: " + attacker.name + " " + !attacker.isAlive() + " " + defender.name + " " + !defender.isAlive());
                continue;
            }
            console.log("attacker: " + attacker.name + ", defender: " + defender.name);
            
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
                console.log(attacker.name + " attacks " + defender.name + " and HITs!");
                defender.damage(c.weaponDamage(attacker.weapon));
            } else {
                console.log(attacker.name + " attacks " + defender.name + " and MISSES");
            };
        }
        for (var i = 0; i < fights.length; i++) {
            if ( !fights[i].isAlive()) {
                console.log("DEATH OF " + fights[i].name + " " + fights[i].id);
            }
        }
        //this.removeDeadFromFight();
        //fights = this.getMobsInFight();
        //console.log("ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZFIGHTS COUNT: " + fights.length);
        
        
        this.removeDeadFromFight();
        //this.removeDeadTargets();
        //this.removeDeadAttackers();
        if (count > 19 || fights.length == 0) {
            fight = false;
        }
        count++;
        
        //console.log(Combat);
    };
    console.log("FIGHT IS OFF");
};
Fight.prototype.attack = function(defender) {
    ;
};
function wjr(a) {
    console.log("WJRWJRWJR");
    console.log(wjr2);
}
function removeDeadTargets2() {
    console.log("removeDeadTargets2");
    var dead = [];
    for (var i = 0; i < this.mobs.length; i++ ) {
        if (!this.mobs[i][0].isAlive()) {
            dead.push(this.mobs[i][0]);
        }
    }
    for (var di = 0; di < dead.length; di++) {
        console.log("deadname: " + dead[di].name);
    }
    for (var i = 0; i < this.mobs.length; i++ ) {
        console.log(" checking mob " + this.mobs[i][0].name + " for dead targets");
        
        for (var di = 0; di < dead.length; di++) {
            var ti = this.mobs[i][1].length;
            
            while(ti--) {
                if (dead[di] == this.mobs[i][1][ti]) {
                    console.log("    match: " + dead[di].name + " " + this.mobs[i][1][ti].name);
                    this.mobs[i][1].splice(ti, 1);
                }                
            }           
        }        
    }
}

function removeDeadAttackers2() {
    //console.log("removeDeadAttackers");
    var i = this.mobs.length;
    var m;
    while (i--) {
        if (!this.mobs[i][0].isAlive()) {
            //console.log("   " + this.mobs[i][0].name + " is dead");
            //mobs.push(this.mobs.splice(i, 1);
            //console.log("     this.mobs.length: " + this.mobs.length); 
            m = this.mobs.splice(i, 1);
            //console.log("     this.obs.length: " + this.mobs.length); 
            //console.log("        m.length:" + m.length);
            //console.log("           m[0][0] should dead mob: " + m[0][0].name);
            this.deadMobs.push(m[0][0]);
        }
    }
    console.log("deadMobs length: " + this.deadMobs.length);
};
//var wjr2 = "hello";

module.exports = Fight;    