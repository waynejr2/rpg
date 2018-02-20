

var Mob = require('./Mob');

module.exports = (function() {
    
    function Orc(info) {
        if (!info) {
            info = {};
        }
        var orcInfo = {
            ac: info.ac === 0 ? info.ac : info.ac  || 6,
            health: info.health  === 0 ? info.health : info.health || 8,
            id: info.id === 0 ? info.id : info.id || 0,
            name: info.name === 0 ? info.name : info.name || 'orc', 
            thac0: info.thac0 === 0 ? info.thac0 : info.thac0 || 19,
            type: info.type === 0 ? info.type : info.type || "ORC",
            weapon: info.weapon === 0 ? info.weapon : info.weapon || "sword"
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