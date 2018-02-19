

var Mob = require('./Mob');

module.exports = (function() {
    
    function Orc(info) {
        var orcInfo = {
            ac: info.ac === 0 ? info.ac : info.ac  || 6,
            health: info.health || 8,
            id: info.id,
            name: info.name, 
            thac0: info.thac0 || 19,
            type: info.type || "ORC",
            weapon: info.weapon || "sword"
        };
        Mob.call(this, orcInfo);
    }
    
    Orc.prototype = Object.create(Mob.prototype);
    Orc.prototype.constuctor = Orc;

    Orc.prototype.actionScript = function(mob) {
        console.log("Orc is viciously ATTACKING!!!!");
        console.log("   mob: " + this.name + " is attacking " + mob.name);
    };
    
    return Orc;
}());