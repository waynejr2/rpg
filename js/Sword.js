
var Weapon = require('./Weapon');


function Sword() {

    //if (!(this instanceof Dice)) {
    //    return new Dice(width);
    //}
    Weapon.call(this);
    this.name = "Sword";
    
};
Sword.prototype = Object.create(Weapon.prototype);
Sword.prototype.constructor = Sword;

module.exports = Sword;