
var Weapon = require('./Weapon');
var HillGiantClub = require('./HillGiantClub');
var Mace = require('./Mace');
var MagicSword = require('./MagicSword');
var Sword = require('./Sword');

function WeaponFactory() {

    
}
WeaponFactory.prototype.createWeapon = function(weapon) {
    //if (weapon == "GiantSlayerSword") { return new GiantSlayerSword();}
    if (weapon == "HillGiantClub") { return new HillGiantClub();}
    if (weapon == "mace" ) { return new Mace();}
    if (weapon == "magicsword") { return new MagicSword();}
    //if (weapon == "magicswordplus3") { return new MagicSwordPlus3();}
    if (weapon == "sword" ) { return new Sword();}
};

module.exports = WeaponFactory;