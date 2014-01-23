function boardCtrl ($scope) {
	$scope.boxes = ["","","","","","","","",""]
	$scope.turnCounter = 1;
	$scope.players = [{name: "Sword", image: "images/swords.jpg"}, {name: "Shield", image: "images/shields.jpg"}];
	$scope.xTurn = $scope.players[0].image;

	$scope.resetBoard = function() {
	$scope.boxes = ["","","","","","","","",""]	
	$scope.turnCounter = 1;
	$scope.players = [{name: "Sword", image: "images/swords.jpg"}, {name: "Shield", image: "images/shields.jpg"}];
	$scope.xTurn = $scope.players[0].image;
		
	}

	$scope.takeTurn = function (i) {
		if ($scope.boxes[i] == "") {
			$scope.boxes[i] = $scope.xTurn;
			if ($scope.boxes[i] == $scope.players[0].image) {
				$scope.xTurn = $scope.players[1].image
			} else {
				$scope.xTurn = $scope.players[0].image
			};
		} else {
			alert('TAKEN!')
		};
		if ($scope.turnCounter >= 5) {
		 	$scope.checkWin();
		};
		$scope.turnCounter++;
	};
	
	$scope.checkWin = function () {
		$scope.winAry = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
		for (var i = 0; i < 8; i++) {
			if ($scope.boxes[$scope.winAry[i][0]] == $scope.boxes[$scope.winAry[i][1]] && $scope.boxes[$scope.winAry[i][0]] == $scope.boxes[$scope.winAry[i][2]] && $scope.boxes[$scope.winAry[i][0]] !== "") {
					if ($scope.xTurn == $scope.players[0].image){
						$scope.winner = "O WIN!";
					}
					else if ($scope.xTurn == $scope.players[1].image){
						$scope.winner = "X WIN!";;
					};


					// document.getElementsByClassName("winner")[0].style.display="block";
					// $scope.winner = "You WIN!";
					// break;
				}
			// else {
			// 		alert("im checking winAry position:  "+ i)
			// };
			// add changing images here for position check
		};
	}
	
};





