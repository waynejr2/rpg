

var Mob = require('./Mob');

module.exports = (function() {
    
    function HillGiant(info) {
        if (!info) {
            info = {};
        }
        var HillGiantInfo = {
            ac: info.ac === 0 ? info.ac : info.ac  || 4,
            health: info.health === 0 ? info.health : info.health || 37,
            id: info.id === 0 ? info.id : info.id || 0,
            name: info.name === 0 ? info.name : info.name || "hillgiant", 
            thac0: info.thac0 === 0 ? info.thac0 : info.thac0 || 12,
            type: info.type === 0 ? info.type : info.type  || "HILLGIANT",
            weapon: info.weapon === 0 ? info.weapon : info.weapon || "HillGiantClub"
        };
        Mob.call(this, HillGiantInfo);
    }
    
    HillGiant.prototype = Object.create(Mob.prototype);
    HillGiant.prototype.constuctor = HillGiant;

    HillGiant.prototype.actionScript = function(mob) {
        console.log("HillGiant is powerfully ATTACKING!!!!");
        console.log("   mob: " + this.name + " is attacking " + mob.name);
    };
    
    return HillGiant;
}());