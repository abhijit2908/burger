$(function(){
	$("body").on("click","#submit",function(event){

		//event.preventDefault();



		var newBurger = {
			Burger_Name : $("#burger").val(),
			Devoured : 0

		};
		console.log(newBurger);

		$.ajax("/api/burgers", {

			type:"POST",
			data: newBurger

		}).then(
			function(){

				//console.log("created new burger");
				location.reload();
			});
	});

	$("body").on("click","#devourit",function(event){

		//event.preventDefault();
		var id = $(this).data("id");

		console.log(id);
		var newDevourState = {
			Devoured : 1

		};
		console.log(newDevourState);

		$.ajax("/api/burgers/" + id, {

			type:"PUT",
			data: newDevourState

		}).then(
			function(){

				//console.log("created new burger");
				location.reload();
			});
	});
});