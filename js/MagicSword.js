
var Weapon = require('./Weapon');

function MagicSword() {

    Weapon.call(this);
    this.name = "Magic Sword";
    this.damage = 14.5;
    
};
MagicSword.prototype = Object.create(Weapon.prototype);
MagicSword.prototype.constructor = MagicSword;

module.exports = MagicSword;