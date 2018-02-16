

var Person = require('./Person');

module.exports = (function() {
    
    function Human(info) {
        var humanInfo = {
            ac:info.ac || 6,
            health: info.health || 8,
            id: info.id,
            name: info.name, 
            thac0: info.thac0 || 19,
            type: info.type || "HUMAN",
            weapon: info.weapon || "sword"
        };
        Person.call(this, humanInfo);
    }
    
    Human.prototype = Object.create(Person.prototype);
    Human.prototype.constuctor = Human;
    
    Human.prototype.actionScript = function(mob) {
        console.log("Human is smartly ATTACKING!!!!");
        console.log("   mob: " + this.name + " is attacking " + mob.name);
    };
    
    return Human;
}());