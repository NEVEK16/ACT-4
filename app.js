(function () {
    'use strict';

    angular.module('MsgApp', [])
    .controller('MsgController', MsgController);

    MsgController.inject = ['$scope'];
    function MsgController($scope) {
        $scope.name = "Sasuke";
        $scope.stateOfBeing = "close";

        $scope.sayMessage = function () {
            return "Mangekyo Sharingan"
        };

        $scope.feedSasuke =function () {
            $scope.stateOfBeing = "open";
        }
    }

}) ();
