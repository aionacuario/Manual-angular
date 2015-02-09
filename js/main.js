var miAplicacion = angular.module( 'miApp' , ['ngRoute'] );
          
 miAplicacion.controller( 'circunferencia' , [ '$scope' , function($scope){
                  var pi = 3.14;
                      $scope.calcularCircunferencia = function(){
                      $scope.circunferencia =  $scope.diametro * pi;
                       };
     }]);

 miAplicacion.config( ['$routeProvider',function($routeProvider) {
                $routeProvider.when('/hola', {
                    templateUrl: 'plantillas/hola.html'
                  }).when('/gorda1', {
                    templateUrl: 'plantillas/gorda1.html'
                  }).when('/gorda2', {
                    templateUrl: 'plantillas/gorda2.html'
                  }).when('/gorda3', {
                    templateUrl: 'plantillas/gorda3.html'
                  }).when('/gorda4', {
                    templateUrl: 'plantillas/gorda4.html'
                  }). otherwise({
                    redirectTo: '/',
                      templateUrl: 'plantillas/inicio.html'
                  });
              }]);

    $(document).ready(function() {
      $(".menu-res").click(function(event) {
        $(this).toggleClass("on");
         $(".wrap-move").toggleClass("on");
         $(".fondo").toggle();
          $(".menu-fixed").toggle();
      });
      $(".fondo").click(function(event) {
         $(".wrap-move").toggleClass("on");
         $(".fondo").hide();
         $(".menu-res").toggleClass("on");
          $(".menu-fixed").toggle();

      });
       $(".menu-fixed").click(function(event) {
         $(".wrap-move").toggleClass("on");
         $(".fondo").hide();
         $(".menu-res").toggleClass("on");
          $(".menu-fixed").toggle();
          $("html, body").animate({ scrollTop: 0 }, 0);    
      });
    });
