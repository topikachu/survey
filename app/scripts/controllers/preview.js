'use strict';

angular.module('surveyApp')
    .controller('PreviewCtrl', function($scope,$modalInstance, currentSurvey, surveyProvier) {
        $scope.data ={};
        $scope.data.currentStep='-';
        $scope.surveyProvier = surveyProvier;
        
        $scope.currentSurvey = currentSurvey;
        var response = $scope.response = [];
        currentSurvey.questions.forEach(function(question) {
            if (question.isMultipleAnswer) {
                response.push([]);
            } else {
                response.push(0);
            }
        })

        $scope.isFirstStep = function() {
            console.log($scope.data.currentStep);

            var index = _.indexOf(_.map($scope.currentSurvey.questions, function(question) {
                return question.title;
            }), $scope.data.currentStep);
            return index == 0;
        }


        $scope.isLastStep = function() {
            console.log($scope.data.currentStep);

            var index = _.indexOf(_.map($scope.currentSurvey.questions, function(question) {
                return question.title;
            }), $scope.data.currentStep);
            return index == $scope.currentSurvey.questions.length - 1;
        }

        $scope.finish = function() {
 			$modalInstance.close();
        }
    });
