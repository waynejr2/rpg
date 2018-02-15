
var Weapon = require('./Weapon');



function Mace() {
    Weapon.call(this);
    //this.name = "Mace";
    this.setName("mace");
    this.damage = 3.5;
};
Mace.prototype = Object.create(Weapon.prototype);
Mace.prototype.constructor = Mace;

module.exports = Mace;
