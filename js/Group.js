


//insert mobs or groups.
function Group() {
    this.members = [];        
}
Group.prototype.add = function(item) {
    var args = Array.from(arguments);
     
    while (args.length) {
        this.members.push(args.shift());
    }
};
Group.prototype.list = function() {
    var result = [];
    var obj;
    for ( var i = 0 ; i < this.members.length; i++ ) {
        obj = this.members[i].list();
        result = result.concat(obj);
    }
    return result;
};

module.exports = Group;