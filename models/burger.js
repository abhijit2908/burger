var orm = require('../config/orm.js');

var burger = {

	all: function(cb){
		orm.selectAll("burgers",function(res){

			cb(res);
		})
	},

	create: function(tableName,col1,col2,burgerName,devoured,cb){
		orm.insertOne("burgers",col1,col2,burgerName,devoured,function(res){
			cb(res);
		});
	},

	update: function(tableName,col1,devoured,condition,cb){
		orm.updateOne("burgers",col1,devoured,condition,function(res){
			cb(res);
		});
	}




}

module.exports=burger;