
var Weapon = require('./Weapon');
var Mace = require('./Mace');
var Sword = require('./Sword');

function WeaponFactory() {

    
};
WeaponFactory.prototype.createWeapon = function(weapon) {
    if (weapon == "mace" ) { return new Mace();}
    if (weapon == "sword" ) { return new Sword();}
};

module.exports = WeaponFactory;