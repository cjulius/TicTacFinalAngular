function boardCtrl ($scope) {
	$scope.boxes = ["","","","","","","","",""]
	$scope.turnCounter = 1;
	$scope.players = [{name: "Sword", image: "images/swords.jpg"}, {name: "Shield", image: "images/shields.jpg"}];
	$scope.xTurn = $scope.players[0].image;
	$scope.win = false;

	$scope.resetBoard = function() {
	$scope.boxes = ["","","","","","","","",""]	
	$scope.turnCounter = 1;
	$scope.players = [{name: "Sword", image: "images/swords.jpg"}, {name: "Shield", image: "images/shields.jpg"}];
	$scope.xTurn = $scope.players[0].image;
		
	};

	$scope.takeTurn = function (i) {
		if ($scope.boxes[i] == "") {
			$scope.boxes[i] = $scope.xTurn;
			if ($scope.boxes[i] == $scope.players[0].image) {
				$scope.xTurn = $scope.players[1].image
				
			} else {
				$scope.xTurn = $scope.players[0].image
			};
			$scope.turnCounter++;
		} else {
			alert('TAKEN!')
		};
		if ($scope.turnCounter >= 5) {
		 	$scope.checkWin();
		};
		
	};
	
	$scope.checkWin = function () {
		$scope.winAry = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
			for (var i = 0; i < 8; i++) {
				if ($scope.boxes[$scope.winAry[i][0]] == $scope.boxes[$scope.winAry[i][1]] && $scope.boxes[$scope.winAry[i][0]] == $scope.boxes[$scope.winAry[i][2]] && $scope.boxes[$scope.winAry[i][0]] !== "") {
						if ($scope.xTurn == $scope.players[0].image){
							$scope.winner = "O WIN!";
							console.log($scope.turnCounter + " " + $scope.win)

						}
						else if ($scope.xTurn == $scope.players[1].image){
							$scope.winner = "X WIN!";
							console.log($scope.turnCounter + " " + $scope.win)
						};
						$scope.win = true;
			};
			if($scope.turnCounter == 10 && $scope.win==false) {
				alert('DRAW');
			}
		}
	};
	
};

// var values = {name: '', image: ''};
// var log = [];
// angular.forEach(values, function(value, key){
// 	this.push(key + ': ' + value);
// }, log);
// expect(log).toEqual([{name: "Tyrion", image: "images/TyrionFace.jpg"}, {name: "Daenerys", image: "images/DanyFace.jpg"}, {name: "Drogo.jpg", image: "images/DrogoFace.jpg"}, {name: "Joffrey", image: "images/JoffreyFace.jpg"}];)

function playersCtrl($scope) {
	$scope.playerSelect = [0, 0];
	$scope.playerCount = 0;


	$scope.clickTyrion = function() {
		if ($scope.playerCount < 2 && ($scope.playerCount == 0 || $scope.playerSelect[0] != 0)){
			$scope.playerSelect[$scope.playerCount] = 0;
			$scope.playerCount += 1;
			alert($scope.playerCount);
		}
	};

	$scope.clickDaenerys = function() {
		if ($scope.playerCount < 2 && ($scope.playerCount == 0 || $scope.playerSelect[0] != 1)){
			$scope.playerSelect[$scope.playerCount] = 1;
			$scope.playerCount += 1;
			alert($scope.playerCount);
			$scope.playersArry.push
		}
	};

	$scope.clickDrogo = function() {
		if ($scope.playerCount < 2 && ($scope.playerCount == 0 || $scope.playerSelect[0] != 2)){
			$scope.playerSelect[$scope.playerCount] = 2;
			$scope.playerCount += 1;
			alert($scope.playerCount);
		}
	};

	$scope.clickJoffrey = function() {
		if ($scope.playerCount < 2 && ($scope.playerCount == 0 || $scope.playerSelect[0] != 3)){
			$scope.playerSelect[$scope.playerCount] = 3;
			$scope.playerCount += 1;
			alert($scope.playerCount);
		}
	};

};



