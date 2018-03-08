
var Weapon = require('./Weapon');

function Sword() {

    Weapon.call(this);
    this.name = "Sword";
    this.damage = 4.5;
    
}
Sword.prototype = Object.create(Weapon.prototype);
Sword.prototype.constructor = Sword;

module.exports = Sword;