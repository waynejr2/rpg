
var Weapon = require('./Weapon');

function Sword() {

    Weapon.call(this);
    this.name = "Sword";
    
};
Sword.prototype = Object.create(Weapon.prototype);
Sword.prototype.constructor = Sword;

module.exports = Sword;