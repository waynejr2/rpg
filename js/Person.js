
function Person(info) {
    var id, name, health, weapon;
    this.id = info.id;
    this.name = info.name;
    this.health = info.health;
    this.weapon = info.weapon;
    this.thac0 = info.thac0 || 20;
    this.ac = info.ac || 10;
};
Person.prototype.isAlive = function(){
    result = false;
    if (this.health >= 0) {
        result = true;
    }
    return result;
};
Person.prototype.damage = function(damage){
    this.health -= damage;
};
Person.prototype.getId = function() {
    return this.id;
};
Person.prototype.info = function() {
    var mobInfo = "";
    mobInfo += "name: " + this.name + ", ID: " + this.id + ",";
    mobInfo += " health: " + this.health + ", isAlive: " + this.isAlive() + ",";
    mobInfo += " Weapon: " + this.weapon + ", thac0: " + this.thac0 + ",";
    mobInfo += " ac: " + this.ac;
    return mobInfo;
    //console.log("name: " + this.name + ", ID: " + this.id);
    //console.log("health: " + this.health + ", isAlive: " + this.isAlive());
    //console.log("Weapon: " + this.weapon);
};

module.exports = Person;
