

var Mob = require('./Mob');

module.exports = (function() {
    
    function Human(info) {
        var humanInfo = {
            ac: info.ac === 0 ? info.ac : info.ac || 6,
            health: info.health || 8,
            id: info.id,
            name: info.name, 
            thac0: info.thac0 || 19,
            type: info.type || "HUMAN",
            weapon: info.weapon || "sword"
        };
        Mob.call(this, humanInfo);
    }
    
    Human.prototype = Object.create(Mob.prototype);
    Human.prototype.constuctor = Human;
    
    Human.prototype.actionScript = function(mob) {
        console.log("Human is smartly ATTACKING!!!!");
        console.log("   mob: " + this.name + " is attacking " + mob.name);
    };
    
    return Human;
}());