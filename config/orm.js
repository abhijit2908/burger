var connection = require('./connection.js')



var orm = {

		selectAll: function(tableName,cb){
			connection.query("select * from ??",[tableName],function(err,result){
				if(err){
					throw err;
				}

				cb(result);
			})
		},


		insertOne: function(tableName,col1,col2,burgerName,devoured,cb){
			connection.query("INSERT INTO ?? (??,??) VALUES (?,?)",[tableName,col1,col2,burgerName,devoured],function(err,result){
				if(err){
					throw err;
				}

				cb(result);	
			});
		


		},

	updateOne: function(tableName,col1,devoured,condition,cb){

				 var updateQuery = `update ${tableName} set ${col1} = ${devoured} where ${condition}`;

        connection.query(updateQuery, function(err, result){

            if(err){
                throw err;
            }

            cb(result);
        });
	}






};

module.exports = orm;