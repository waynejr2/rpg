

var Person = require('./Person');

module.exports = (function() {
    
    function Orc(info) {
        var orcInfo = {
            ac:info.ac || 6,
            health: info.health || 8,
            id: info.id,
            name: info.name, 
            thac0: info.thac0 || 19,
            weapon: info.weapon || "sword"
        };
        Person.call(this, orcInfo);
    }
    
    Orc.prototype = Object.create(Person.prototype);
    Orc.prototype.constuctor = Orc;

    Orc.prototype.actionScript = function(mob) {
        console.log("Orc is viciously ATTACKING!!!!");
        console.log("   mob: " + this.name + " is attacking " + mob.name);
    };

    
    return Orc;
}());