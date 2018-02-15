
var WeaponFactory = require('./WeaponFactory');

module.exports = (function(){
    
    var weaponFactory = new WeaponFactory();
    
    function Person(info) {
        var ac, currentHealth, health, id, name, thac0, weapon;
        this.ac = info.ac || 10;
        this.currentHealth = info.health;
        this.health = info.health;
        this.id = info.id;
        this.name = info.name;    
        this.thac0 = info.thac0 || 20;
        this.weapon2 = weaponFactory.createWeapon(info.weapon);
        console.log("Person: weapon2: " + this.weapon2.getName());
        this.weapon = info.weapon;        
    }
    
    Person.prototype.action = function(mob) {
        this.actionScript(mob);
        //console.log("ATTACKING!!!!");
        //console.log("   mob: " + this.name + " is attacking " + mob.name);
    };
    
    Person.prototype.actionScript = function(mob) {
        //this.actionScript(mob);
    };
    
    Person.prototype.damage = function(damage){
        this.currentHealth -= damage;
        console.log(this.name + " has taken " + damage + " damage. current health: " + this.currentHealth);
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
    };
    
    Person.prototype.isAlive = function(){
        result = false;
        if (this.currentHealth > 0) {
            result = true;
        };
        return result;
    };
    
    Person.prototype.weaponDamage = function() {
        return this.weapon2.calculateDamage();
    };

    
    return Person
}());
