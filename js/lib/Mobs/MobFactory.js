
var Person = require('./Person');
var HillGiant = require('./HillGiant');
var Human = require('./Human');
var Orc = require('./Orc');

function MobFactory() {

    
};
MobFactory.prototype.createMob = function(type, info) {
    if (!info) {
        info = {};
    }
    info.type = type;
    if (type == "hillgiant" ) { return new HillGiant(info);}
    if (type == "human" ) { return new Human(info);}
    if (type == "orc" ) { return new Orc(info);}
    //if (type == "skeleton" ) { return new Skeleton(info);}
};

module.exports = MobFactory;