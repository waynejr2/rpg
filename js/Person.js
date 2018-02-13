
function Person(info) {
    var ac, currentHealth, health, id, name, thac0, weapon;
    this.ac = info.ac || 10;
    this.currentHealth = info.health;
    this.health = info.health;
    this.id = info.id;
    this.name = info.name;    
    this.thac0 = info.thac0 || 20;
    this.weapon = info.weapon;
};
Person.prototype.isAlive = function(){
    result = false;
    if (this.currentHealth >= 0) {
        result = true;
    }
    return result;
};
Person.prototype.damage = function(damage){
    this.currentHealth -= damage;
    //console.log(this.name + " has taken " + damage + " damage. current health: " + this.health);
};
Person.prototype.getId = function() {
    return this.id;
};
Person.prototype.info = function() {
    var mobInfo = "";
    mobInfo += "name: " + this.name + ", ID: " + this.id + ",";
    mobInfo += " health: " + this.currentHealth + ", isAlive: " + this.isAlive() + ",";
    mobInfo += " Weapon: " + this.weapon + ", thac0: " + this.thac0 + ",";
    mobInfo += " ac: " + this.ac;
    return mobInfo;
    //console.log("name: " + this.name + ", ID: " + this.id);
    //console.log("health: " + this.health + ", isAlive: " + this.isAlive());
    //console.log("Weapon: " + this.weapon);
};

module.exports = Person;
