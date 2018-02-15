
var Weapon = require('./Weapon');

function HillGiantClub() {

    Weapon.call(this);
    this.name = "Hill Giant Club";
    this.damage = 9;
    
};
HillGiantClub.prototype = Object.create(Weapon.prototype);
HillGiantClub.prototype.constructor = HillGiantClub;

module.exports = HillGiantClub;