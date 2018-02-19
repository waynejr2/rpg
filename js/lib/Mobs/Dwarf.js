

var Mob = require('./Mob');

module.exports = (function() {
    
    function Dwarf(info) {
        var dwarfInfo = {
            ac: info.ac === 0 ? info.ac : info.ac || 6,
            health: info.health || 8,
            id: info.id,
            name: info.name, 
            thac0: info.thac0 || 19,
            type: info.type || "DWARF",
            weapon: info.weapon || "sword"
        };
        Mob.call(this, dwarfInfo);
    }
    
    Dwarf.prototype = Object.create(Mob.prototype);
    Dwarf.prototype.constuctor = Dwarf;
    
    Dwarf.prototype.actionScript = function(mob) {
        console.log("Dwarf is smartly ATTACKING!!!!");
        console.log("   mob: " + this.name + " is attacking " + mob.name);
    };
    
    return Dwarf;
}());