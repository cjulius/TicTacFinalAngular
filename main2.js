var values = [{name: "Tyrion", image: "images/TyrionFace.jpg"}, {name: "Daenerys", image: "images/DanyFace.jpg"}, {name: "Drogo.jpg", image: "images/DrogoFace.jpg"}, {name: "Joffrey", image: "images/JoffreyFace.jpg"}];

function playersCtrl($scope) {
	$scope.playerSelect = [0, 0];
	$scope.playerCount = 0;


	$scope.clickTyrion = function() {
		if (playerCount < 2 && ($scope.playerCount == 0 || $scope.playerSelect[0] != 0)){
			$scope.playerSelect[$scope.playerCount] = 0;
			$scope.playerCount += 1;
			alert($scope.playerCount);
		}
	};

	$scope.clickDaenerys = function() {
		if (playerCount < 2 && ($scope.playerCount == 0 || $scope.playerSelect[0] != 1)){
			$scope.playerSelect[$scope.playerCount] = 1;
			$scope.playerCount += 1;
			alert($scope.playerCount);
			$scope.playersArry.push
		}
	};

	$scope.clickDrogo = function() {
		if (playerCount < 2 && ($scope.playerCount == 0 || $scope.playerSelect[0] != 2)){
			$scope.playerSelect[$scope.playerCount] = 2;
			$scope.playerCount += 1;
			alert($scope.playerCount);
		}
	};

	$scope.clickJoffrey = function() {
		if (playerCount < 2 && ($scope.playerCount == 0 || $scope.playerSelect[0] != 3)){
			$scope.playerSelect[$scope.playerCount] = 3;
			$scope.playerCount += 1;
			alert($scope.playerCount);
		}
	};

};