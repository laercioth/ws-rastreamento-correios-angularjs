
/*Controller NroPortabilidade*/
app.controller('RastreamentoCtrl', function($scope, $rootScope, $http) {

	/*Chamada AJAX que faz a busca de operadora*/
	$scope.search = function (nro){
		$scope.reset();
		/**PE173327987BR*/
		if(nro !== '' && nro !== undefined && nro !== null){
			$scope.loading = true;
			$http({
			    method: 'GET',
			    url: $rootScope.URI_WS + nro,
			}).then(function(response) {
				$scope.reset();
				$scope.listEvent = response.data.events;
			}, function errorCallback(noResponse) {
				if(noResponse.statusText === ""){
					$scope.objetoNaoEncontrado = true;
					$scope.loading = false;
				}
				console.log(noResponse);
			});
		}else{
			$scope.objetoInvalido = true;
		}
	}

	/*Limpa os campos*/
	$scope.clear = function (){
		$scope.listEvent = '';
		$scope.objetoInvalido = false;
		$scope.nro = '';
	}

	/*Reseta valores*/
	$scope.reset = function (){
		$scope.objetoInvalido = false;
		$scope.loading = false;
		$scope.objetoNaoEncontrado = false;
	}

});
