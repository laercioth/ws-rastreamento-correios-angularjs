/*Modulo Angular*/
var app = angular.module('rastreamentoApp', []);

 /**
 * QUANDO INCIAR O MODULO APP EXECUTAR OS COMPONENTES INCIAIS
 */
app.run(function($rootScope) {
	$rootScope.URI_WS = "https://correiosapi.herokuapp.com/package/";
});
