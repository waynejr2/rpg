/* global module */
//Combat.js

module.exports = Combat;
/*function Combat (dice) {
    'use strict';
    //var dice;
  	this.dice = dice;
};*/
function Combat () {
};

    Combat.prototype.toHit = function(toHitRoll, attackBonus, weaponAdjustment, thac0, armorClass) {
        this.toHitRoll = toHitRoll || 0;
        this.attackBonus = attackBonus || 0;
        this.weaponAdjustment = weaponAdjustment || 0;
        this.thac0 = thac0 || 20;
        this.armorClass = armorClass || 10;
  
        this.toBeHitNumber = this.calculateToBeHit(this.thac0, this.armorClass);
        this.toHitNumber = this.calculateToHit(this.toHitRoll, this.attackBonus, this.weaponAdjustment);
  
        return this.didToHitSucceed(this.toHitNumber, this.toBeHitNumber);
    };
    
    //what about extremes? like tohit needing to be above 20? what do to if
    //calculations are >20 or < 1?  do we make them 20 or 1 in those cases?
    Combat.prototype.calculateToBeHit = function(thac0, armorClass) {
        return thac0 - armorClass;
    };
    
    Combat.prototype.calculateToHit = function(toHitRoll, attackBonus, weaponAdjustment) {
        return toHitRoll + attackBonus + weaponAdjustment;
    };
    
    Combat.prototype.didToHitSucceed = function(toHit, toBeHit) {
        var result = false;
        
        if (toHit >= toBeHit) {
            result = true;
        }
        
        return result;
    };
    
    Combat.prototype.weaponDamage = function(attacker) {
        return attacker.weaponDamage();
    };
    
    Combat.prototype.weaponDamage2 = function(weapon) {
        switch(weapon) {
            case "HillGiantClub": 
                return 9;
                break;
            case "mace": 
                return 3.5;
                break;
            case "sword": 
                return 4.5;
                break;
            case "magicsword": 
                return 14.5;
                break;
        }
    };
 


