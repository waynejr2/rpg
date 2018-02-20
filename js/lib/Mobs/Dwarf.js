

var Mob = require('./Mob');

module.exports = (function() {
    
    function Dwarf(info) {
        if (!info) {
            info = {};
        }
        var dwarfInfo = {
            ac: info.ac === 0 ? info.ac : info.ac || 6,
            health: info.health === 0 ? info.health : info.health || 8,
            id: info.id === 0 ? info.id : info.id || 0,
            name: info.name === 0 ? info.name : info.name || 'dwarf', 
            thac0: info.thac0 === 0 ? info.thac0 : info.thac0 || 19,
            type: info.type === 0 ? info.type : info.type  || "DWARF",
            weapon: info.weapon === 0 ? info.weapon : info.weapon || "sword"
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