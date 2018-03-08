
var Dice = require('./Dice');
var Combat = require('./Combat');

function Fight() {
    var mobs, deadMobs, newlyDeadMobs;
    this.mobs = [];
    this.deadMobs = [];
    this.newlyDeadMobs = [];

}
Fight.prototype.listMobs = function() {
    return this.mobs;
};
Fight.prototype.addMob = function(mob) {
    var entry = [
        mob, []
        ];
    this.mobs.push(entry);
};
Fight.prototype.deadMobReport = function() {
    console.log("DEAD DEAD DEAD DEAD DEAD MOB REPORT");
    console.log("we have " + this.deadMobs.length + " dead mobs");
    for (let i = 0; i < this.deadMobs.length; i++) {
        console.log(this.deadMobs[i].info());
    }
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
    }
    return result;
};
Fight.prototype.getMobsInFight = function() {
    var result = [];
    for (let index = 0; index < this.mobs.length; index++ ) {
        if (this.isInFight(this.mobs[index][0])) {
        result.push(this.mobs[index][0]);
        }
    }
    return result;
};
Fight.prototype.hasTargets = function(mob) {
    var index = this.getMobIndexById(mob);
    var result = false;
    for (let tindex = 0; tindex < this.mobs[index][1].length; tindex++) {
        if (this.mobs[index][1][tindex].isAlive()) {
            result = true;            
        } 
    } 
    return result;    
};
Fight.prototype.getTarget = function(mob) {
    var index = this.getMobIndexById(mob);
    var result = [];
    for (let tindex = 0; tindex < this.mobs[index][1].length; tindex++) {
        if (this.mobs[index][1][tindex].isAlive()) {
            result = this.mobs[index][1][tindex];
            break;
        }
    } 
    return result;
};
Fight.prototype.showFights = function() {
    for (let i = 0; i < this.mobs.length; i++) {
        var named = this.getNthMob(i).name;
        var fights = this.getNthMobFights(i);
        var output = "";
        if (!this.getNthMob(i).isAlive()) {
            output += "name: " + named + "is dead";
            
        } else {
            output += "name: " + named + " has " + fights.length + " fights:";
        }    
        console.log(output);

        for (let fight = 0; fight < fights.length; fight++) {
            var fightInfo = "      ";
            fightInfo += fights[fight].info();
            console.log(fightInfo);
        }
    }
};
Fight.prototype.getMobIndexById = function(mob) {
    var id = mob.getId();
    for (let i = 0; i < this.mobs.length; i++) {
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
    for (let i = 0; i < this.mobs.length; i++) {
        result.push(this.getNthMob(i));
    }
    return result;
};
Fight.prototype.getMobIds = function() {
    var result = [];
    for (let i = 0; i < this.mobs.length; i++) {
        result.push(this.getNthMob(i).getId());
    }
    return result;
};
Fight.prototype.removeDeadFromFight2 = function() {
    var mob;
    var deadmob;
    var newMobs;
    var targets;
    
    for (let i = 0; i < this.mobs.length; i++) {
        mob = this.getNthMob(i);
        
        if (!mob.isAlive()) {
            this.newlyDeadMobs.push(mob);
        }        
    }
    for (let newlydDeadMobsIndex = 0; newlydDeadMobsIndex < this.newlyDeadMobs.length; newlydDeadMobsIndex++) {
        deadmob = this.newlyDeadMobs[newlydDeadMobsIndex];
        mob = null;
        
        for (let mobsIndex = 0; mobsIndex < this.mobs.length; mobsIndex++) {
            for (let opponentsIndex = this.mobs[mobsIndex][1].length -1; opponentsIndex >= 0; opponentsIndex--) {
                if (deadmob === this.mobs[mobsIndex][1][opponentsIndex]) {
                    this.mobs[mobsIndex][1].splice(opponentsIndex, 1);
                }
            }
        }       
    }
    for (let mobsIndex = 0; mobsIndex < this.mobs.length; mobsIndex++) {
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
    removeDeadTargets2.call(this);
    //this.removeDeadTargets();
    removeDeadAttackers2.call(this);
    //this.removeDeadAttackers.();
};
Fight.prototype.removeDeadTargets = function() {
    console.log("removeDeadTargets");
    var dead = [];
    for (let i = 0; i < this.mobs.length; i++ ) {
        if (!this.mobs[i][0].isAlive()) {
            dead.push(this.mobs[i][0]);
        }
    }
    for (let di = 0; di < dead.length; di++) {
        console.log("deadname: " + dead[di].name);
    }
    for (let i = 0; i < this.mobs.length; i++ ) {
        console.log(" checking mob " + this.mobs[i][0].name + " for dead targets");
        
        for (let di = 0; di < dead.length; di++) {
            let ti = this.mobs[i][1].length;
            
            while(ti--) {
                if (dead[di] == this.mobs[i][1][ti]) {
                    console.log("    match: " + dead[di].name + " " + this.mobs[i][1][ti].name);
                    this.mobs[i][1].splice(ti, 1);
                }                
            }
        }        
    }
};
Fight.prototype.removeDeadAttackers = function() {
    var i = this.mobs.length;
    var m;
    while (i--) {
        if (!this.mobs[i][0].isAlive()) {
            m = this.mobs.splice(i, 1);
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
    for (let i = 0; i < fights.length; i++) {
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
Fight.prototype.fakeInitiative = function() {
    var d = new Dice();
    var OrderQueue = [[],[],[],[],[],[],[],[],[],[]];
    var initroll;
    var mob;
    
    for (let i = 0; i < this.mobs.length; i++) {
        initRoll = d.d10()-1;
        mob = this.mobs[i][0];
        //console.log("initRoll: " + initRoll + " mob: " + mob.name);
        OrderQueue[initRoll].push(mob);
        //OrderQueue[initRoll].push(this.mobs[i][0]);
        //console.log(OrderQueue);
        //OrderQueue[i].push(this.mobs[i][0]);
    }
    for (let initiative = 0; initiative < OrderQueue.length; initiative++) {
        console.log("Initiative number: " + initiative);
        for(let ii = 0; ii < OrderQueue[initiative].length; ii++) {
            //console.log("   mob: " + OrderQueue[0]);
            //console.log("   mob: " + OrderQueue[initiatve][ii].name);
            console.log("   mob: " + OrderQueue[initiative][ii].name);
        }
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
    }
    
    var count = 0;
    while (fight) {
        var fights, attacker, defender;
        
        //console.log("FIGHT IS ON");
    console.log("_________________________________________________________________");
    console.log();
    console.log("ROUND NUMBER: " + count);
    console.log();
    console.log("_________________________________________________________________");
        this.fakeInitiative();
        
        fights = this.getMobsInFight();
        //fights = [];
        ////console.log("number of fights: " + fights.length);
        //this.printFights(fights);
        for (let fightIndex = 0; fightIndex < fights.length; fightIndex++) {
            //console.log("ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ");
            //this.showFights();
            output = "";
            attacker = fights[fightIndex];
            if (this.hasTargets(attacker)) {
                defender = this.getTarget(attacker);                
            } else {
                continue;
            }
            /*
            if (!attacker.isAlive() || !defender.isAlive()) {
                console.log("doit warning name: " + attacker.name + " " + !attacker.isAlive() + " " + defender.name + " " + !defender.isAlive());
                continue;
            }*/
            //console.log("attacker: " + attacker.name + ", defender: " + defender.name);
            
            toHitRoll = d.d20();
            
            /*if (toHitRoll == 20) {
                console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$    CRITICAL HIT");
            };*/
            
            attackBonus = null;
            weaponAdjustment = null;
            thac0 = attacker.thac0;
            armorClass = defender.ac;
            output += "toHitRoll: " + toHitRoll + ",";
            output += "thac0: " + thac0 + ",";
            output += "armorClass: " + armorClass;
            ////console.log(output);
            //Combat.prototype.toHit = function(toHitRoll, attackBonus, weaponAdjustment, thac0, armorClass)
            
            
            if (c.toHit(toHitRoll, null, null, thac0, armorClass)) {
                console.log(attacker.name + " attacks " + defender.name + " and HITs!");
                var weaponDamage = toHitRoll == 20 ? c.weaponDamage(attacker)* 1 : c.weaponDamage(attacker);
                ////var weaponDamage = toHitRoll == 20 ? c.weaponDamage(attacker.weapon)* 1 : c.weaponDamage(attacker.weapon);
                defender.damage(weaponDamage);
                //defender.damage(c.weaponDamage(attacker.weapon));
            } else {
                console.log(attacker.name + " attacks " + defender.name + " and MISSES");
            }
            
            
        }
        for (let i = 0; i < fights.length; i++) {
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
    }
    console.log("FIGHT IS OFF");
    console.log();
    console.log("_________________________________________________________________");
        
};
Fight.prototype.attack = function(defender) {
    
};
function removeDeadTargets2() {
    var dead = [];
    for (let i = 0; i < this.mobs.length; i++ ) {
        if (!this.mobs[i][0].isAlive()) {
            dead.push(this.mobs[i][0]);
        }
    }
    for (let i = 0; i < this.mobs.length; i++ ) {        
        for (let di = 0; di < dead.length; di++) {
            var ti = this.mobs[i][1].length;            
            while(ti--) {
                if (dead[di] == this.mobs[i][1][ti]) {
                    this.mobs[i][1].splice(ti, 1);
                }                
            }           
        }        
    }
}
function removeDeadAttackers2() {
    var i = this.mobs.length;
    var m;
    while (i--) {
        if (!this.mobs[i][0].isAlive()) {
            m = this.mobs.splice(i, 1);
            this.deadMobs.push(m[0][0]);
        }
    }
    console.log("deadMobs length: " + this.deadMobs.length);
}

module.exports = Fight;    