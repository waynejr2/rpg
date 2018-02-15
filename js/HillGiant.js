

var Person = require('./Person');

module.exports = (function() {
    
    function HillGiant(info) {
        var HillGiantInfo = {
            ac:info.ac || 4,
            health: info.health || 37,
            id: info.id,
            name: info.name, 
            thac0: info.thac0 || 12,
            weapon: info.weapon || "HillGiantClub"
        };
        Person.call(this, HillGiantInfo);
    }
    
    HillGiant.prototype = Object.create(Person.prototype);
    HillGiant.prototype.constuctor = HillGiant;

    HillGiant.prototype.actionScript = function(mob) {
        console.log("HillGiant is powerfully ATTACKING!!!!");
        console.log("   mob: " + this.name + " is attacking " + mob.name);
    };

    
    return HillGiant;
}());