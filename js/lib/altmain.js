/* global module */
///for extra special friends of rick

var Dice = require('./Dice');
var Combat = require('./Combat');
var Person = require('./Person');
var Fight = require('./Fight');
var WeaponFactory = require('./WeaponFactory');
//var Weapon = require('./Weapon');
//var Sword = require('./Sword');

var hw = function() {
    console.log("Hello");
};

module.exports = hw;

var my_config = {
    "a": "b"
};

module.exports = my_config;

module.exports = (function () {
  'use strict';
   
   var actionQueue = [];
   var item;
   
   actionQueue.push(1, 2, 3, 4, 5, 6);
   
   //console.log(actionQueue.length);
   
   while(actionQueue.length) {
       item = actionQueue.shift();
       if ( item == 4 ) {
           actionQueue.push("mobs moves to attack", 1, 3);
       }
       if ( item == 6 ) {
           actionQueue.push("mob flees", 4, 5, 4);
       }
       console.log(item);
   }

}());  
