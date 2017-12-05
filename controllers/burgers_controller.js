var express = require('express');

var router = express.Router();

var burger = require('../models/burger.js');


router.get('/',function(req,res){

	burger.all(function(data){
		var burgerObject = {
			burgers: data
		}

		console.log(data);
		res.render("index",burgerObject);
	})

	

});

router.post('/api/burgers',function(req,res){
	//console.log("I posted via postman");
	//console.log(req.body);
	burger.create("burgers",'Burger_Name','Devoured',req.body.Burger_Name, req.body.Devoured ,function(data){
		console.log(data);
			console.log(req.body);

		res.json({id: data.insertId});
	});
});

router.put('/api/burgers/:id', function(req,res){
	var condition = "ID = " + req.params.id;
	console.log(condition);

	burger.update("burgers",'Devoured',req.body.Devoured,condition,function(data){
		console.log(req.body);
			res.json({id: data.insertId});
		console.log(data);
	})

});




module.exports = router;