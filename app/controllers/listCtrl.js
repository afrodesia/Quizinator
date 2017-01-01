angular.module('App')
	.controller('listCtrl', ListController)

	const dataFruit = [
			{
				"name": "Blueberries",
				"type": "fruits",
				"image": "/data/img/blueberries-690072_640.jpg",
				"description": "Blueberries are the fruits of a shrub that belong to the heath (Ericaceae) family whose other members include the cranberry and bilberry as well as the azalea, mountain laurel, and rhododendron. Blueberries grow in clusters and range in size from that of a small pea to a marble. They are deep in color, ranging from blue to maroon to purple-black, and feature a white-gray waxy bloom that covers the berry's surface and serves as a protective coat. The skin surrounds a semi-transparent flesh that encases tiny seeds. Blueberries are at their best from May through October when they are in season."
			},
			{
				"name": "Grapes",
				"type": "fruits",
				"image": "/data/img/grapes-1696921_640.jpg",
				"description": "Grapes are small round or oval berries that feature semi-translucent flesh encased by a smooth skin. Some contain edible seeds while others are seedless. Like blueberries, grapes are often covered by a protective, whitish bloom. Grapes that are eaten as is or used in a recipe are called table grapes and as opposed to wine grapes (used in viniculture) or raisin grapes (used to make dried fruit). "
			},
			{
				"name": "Cherries",
				"type": "fruits",
				"image": "/data/img/cherries-1503974_640.jpg",
				"description": "The cherry fruits of commerce usually are obtained from a limited number of species such as cultivars of the sweet cherry, Prunus avium. The name 'cherry' also refers to the cherry tree, and is sometimes applied to almonds and visually similar flowering trees in the genus Prunus, as in ornamental cherry, cherry blossom, etc. Wild cherry may refer to any of the cherry species growing outside of cultivation, although Prunus avium is often referred to specifically by the name wild cherry in the British Isles."
			},
			{
				"name": "Apricots",
				"type": "fruits",
				"image": "/data/img/apricots-1522680_640.jpg",
				"description": "Apricots are those beautifully orange colored fruits full of beta-carotene and fiber that are one of the first signs of summer. Although dried and canned apricots are available year-round, fresh apricots with a plentiful supply of vitamin C and are in season in North America from May through August. Any fresh fruit you see during the winter months have been imported from either South America or New Zealand. Relatives to peaches, apricots are small, golden orange fruits, with velvety skin and flesh, not too juicy but definitely smooth and sweet. Some describe their flavor as almost musky, with a faint tartness that lies somewhere between a peach and a plum."

			},
			{
				"name": "Apple",
				"type": "fruits",
				"image": "/data/img/apple-1589874_640.jpg",
				"description": "Apples belong to the Rose family of plants and are joined in that family by a wide range of very popular foods, including apricots, plums, cherries, peaches, pears, raspberries, and almonds. Foods in the Rose family are simply too diverse in their nutrient value to allow for any one single recommendation about the number of servings that we should consume from this family on a weekly basis. However, when focusing specifically on apples, several anti-cancer studies show daily intake of this fruit to provide better anti-cancer benefits than lesser amounts. So there may be some truth to that old phrase, 'An apple a day keeps the doctor away!' Still, we don't recommend that everyone eat one apple on a daily basis, given the wide variety of available fruits and the nutritional uniqueness of each type. But we do recommend that everyone eat at least 2-3 whole fresh fruits per day, or the equivalent of 2-3 cups' worth of fresh fruit. Within this framework, if apples are a type of fruit that you strongly prefer, there would be nothing wrong with consuming one on a daily basis, and you may get some special health benefits by doing so. "
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
		console.log("From List Controller")
		// var dataFruit = $http.get('/data/fruit.json')
		// console.log(dataFruit.name)
		const vm = this
		vm.data = dataFruit
	}