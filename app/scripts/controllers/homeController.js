'use strict';

/**
 * @ngdoc function
 * @name NannyBook.controller:HomeController
 * @description
 * # HomeController
 */
angular.module('NannyBook')
  .controller('HomeController', function($scope, ExampleService, $ionicModal,$timeout) {

  $ionicModal.fromTemplateUrl('modal.html', function($ionicModal) {

    $scope.modal = $ionicModal;

  }, {
    // Use our scope for the scope of the modal to keep it simple
    scope: $scope,
    // The animation we want to use for the modal entrance
    animation: 'slide-in-up'
  });

  //$timeout(function(){$scope.modal.show()},100);

  //$scope.modal.show();    

    $scope.items = null;

    // just an example...
    $scope.fetchRandomText = function() {
      ExampleService.doSomethingAsync()
        .then(ExampleService.fetchSomethingFromServer)
        .then(function(response) {
            $scope.items = response.data;

            console.log($scope.items);

            // close pull to refresh loader
            $scope.$broadcast('scroll.refreshComplete');
        });
    };

    $scope.fetchRandomText();

  });
