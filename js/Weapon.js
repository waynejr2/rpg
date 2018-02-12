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