

module.exports = (function() {
    
    function Weapon() {
        this.name = "weapon";
        this.damage = 0;
    }
    //Weapon.type = "melee";
    //getName = function() {
    //    return this.name;
    //};
    Weapon.prototype.printName = function() {
        console.log(this.name);
    };
    Weapon.prototype.setName = function(name) {
        this.name = name;
    };
    Weapon.prototype.getName = function(name) {
        return this.name;
    };
    Weapon.prototype.calculateDamage = function() {
        return this.damage;
    };
    
    return Weapon;
}());




/*

function Weapon() {

    //if (!(this instanceof Dice)) {
    //    return new Dice(width);
    //}
    var name;
    this.name = "Weapon";
    
    
};
Weapon.prototype.printName = function() {
    console.log(this.name);
};
module.exports = Weapon;
*/