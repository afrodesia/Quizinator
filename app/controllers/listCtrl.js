angular.module('App')
	.controller('listCtrl', ListController)

	const dataFruit = [
			{
				"name": "Blueberries",
				"type": "fruits",
				"image": "/data/img/blueberries-690072_640.jpg",
				"description": "Blueberries are the fruits of a shrub that belong to the heath (Ericaceae) family."
			},
			{
				"name": "Grapes",
				"type": "fruits",
				"image": "/data/img/grapes-1696921_640.jpg",
				"description": "Grapes are small round or oval berries that feature semi-translucent flesh encased by a smooth skin. "
			},
			{
				"name": "Cherries",
				"type": "fruits",
				"image": "/data/img/cherries-1503974_640.jpg",
				"description": "The cherry fruits of commerce usually are obtained from a limited number of species such as cultivars of the sweet cherry, Prunus avium. "
			},
			{
				"name": "Apricots",
				"type": "fruits",
				"image": "/data/img/apricots-1522680_640.jpg",
				"description": "Apricots are those beautifully orange colored fruits full of beta-carotene and fiber that are one of the first signs of summer."

			},
			{
				"name": "Apple",
				"type": "fruits",
				"image": "/data/img/apple-1589874_640.jpg",
				"description": "Apples belong to the Rose family of plants and are joined in that family by a wide range of very popular foods, including apricots, plums, cherries, etc."
			},
			{
				"name": "Strawberrys",
				"type": "fruits",
				"image": "/data/img/strawberry-629180_640.jpg",
				"description": "" 
					
			},
			{
				"name": "Lemons",
				"type": "fruits",
				"image": "/data/img/lemon-1117568_640.jpg",
				"description": "" 
					
			},
			{
				"name": "Pears",
				"type": "fruits",
				"image": "/data/img/pears-2280_640.jpg",
				"description": "" 
					
			},
			{
				"name": "Bananas",
				"type": "fruits",
				"image": "/data/img/bananas-1642706_640.jpg",
				"description": "" 
					
			},
			{
				"name": "Kiwi",
				"type": "fruits",
				"image": "/data/img/kiwifruit-400143_640.jpg",
				"description": "" 
					
			},
			{
				"name": "Cantaloupe",
				"type": "fruits",
				"image": "/data/img/cantaloupe-470252_640.jpg",
				"description": "" 
					
			},
			{
				"name": "Watermelon",
				"type": "fruits",
				"image": "/data/img/watermelon-2636_640.jpg",
				"description": "" 
					
			},
			{
				"name": "Plum",
				"type": "fruits",
				"image": "/data/img/plum-1561529_640.jpg",
				"description": "" 
			}			
			
	]

	function ListController(){

		const vm = this

		vm.data = dataFruit
		vm.ActiveFruit = {}
		vm.changeActiveFruit = changeActiveFruit

		function changeActiveFruit(index){
			vm.ActiveFruit = index
		}
	}