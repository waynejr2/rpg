
var WeaponFactory = require('../Weapons/WeaponFactory');

module.exports = (function(){
    
    var weaponFactory = new WeaponFactory();
    
    function Mob(info) {
        if (!info) {
            info = {};
        }
        var ac, currentHealth, health, id, name, thac0, type, weapon;
        this.ac = info.ac === 0 ? info.ac : info.ac || 10;
        this.currentHealth = info.health === 0 ? info.health : info.health || 1;
        this.health = info.health === 0 ? info.health : info.health || 1;
        this.id = info.id === 0 ? info.id : info.id || 0;
        this.name = info.name === 0 ? info.name : info.name || "noname";    
        this.thac0 = info.thac0 ===0 ? info.thac0 : info.thac0 || 20;
        this.type = info.type || "Mob";
        this.weapon2 = weaponFactory.createWeapon(info.weapon);
        //console.log("Mob: weapon2: " + this.weapon2.getName());
        //this.weapon = info.weapon === 0 ? info.weapon : info.weapon || "none"
        this.weapon = info.weapon;    
    }
    
    Mob.prototype.action = function(mob) {
        this.actionScript(mob);
        //console.log("ATTACKING!!!!");
        //console.log("   mob: " + this.name + " is attacking " + mob.name);
    };
    
    Mob.prototype.actionScript = function(mob) {
        //this.actionScript(mob);
    };
    
    Mob.prototype.damage = function(damage){
        this.currentHealth -= damage;
        console.log(this.name + " has taken " + damage + " damage. current health: " + this.currentHealth);
    };
    
    Mob.prototype.getInfo = function() {
        var result = {};
        
        result.ac = this.ac;
        result.currentHealth = this.currentHealth;
        result.health = this.health;
        result.id = this.id;
        result.name = this.name;
        result.thac0 = this.thac0;
        result.type = this.type;
        result.weapon = this.weapon;
        
        return result;
    };
    
    Mob.prototype.getId = function() {
        return this.id;
    };
    
    Mob.prototype.info = function() {
        var mobInfo = "";
        mobInfo += "name: " + this.name + ", ID: " + this.id + ",";
        mobInfo += " health: " + this.currentHealth + ", isAlive: " + this.isAlive() + ",";
        mobInfo += " Weapon: " + this.weapon + ", thac0: " + this.thac0 + ", type: " + this.type + ",";
        mobInfo += " ac: " + this.ac;
        return mobInfo;
    };
    
    Mob.prototype.isAlive = function(){
        result = false;
        if (this.currentHealth > 0) {
            result = true;
        }
        return result;
    };
    
    Mob.prototype.list = function() {
        var result = [this];
        return result;
    };
    
    Mob.prototype.weaponDamage = function() {
        return this.weapon2.calculateDamage();
    };

    
    return Mob;
}());
