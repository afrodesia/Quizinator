angular.module('App')
	.controller('listCtrl', ListController)

	function ListController(){
		console.log("From List Controller")	

		this.data = "Hello from List Controller"
	}