
var Weapon = require('./Weapon');


function Mace() {
    Weapon.call(this);
    this.name = "Mace";
    
};
Mace.prototype = Object.create(Weapon.prototype);
Mace.prototype.constructor = Mace;

module.exports = Mace;