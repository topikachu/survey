'use strict';

angular.module('surveyApp')
    .controller('ResponseCtrl', function($scope, $routeParams, surveyProvier) {
        $scope.currentStep = "";
        var surveyId = $scope.surveyId = $routeParams.surveyId;
        var currentSurvey = $scope.currentSurvey = surveyProvier.getSurveyById(surveyId);
        var response = $scope.response = [];
        currentSurvey.questions.forEach(function(question) {
            if (question.isMultipleAnswer) {
                response.push([]);
            } else {
                response.push(0);
            }
        })

        $scope.isFirstStep = function() {
            console.log($scope.currentStep);

            var index = _.indexOf(_.map($scope.currentSurvey.questions, function(question) {
                return question.title;
            }), $scope.currentStep);
            return index==0;
        }


        $scope.isLastStep = function() {
            console.log($scope.currentStep);

            var index = _.indexOf(_.map($scope.currentSurvey.questions, function(question) {
                return question.title;
            }), $scope.currentStep);
            return index==$scope.currentSurvey.questions.length-1;
        }

        $scope.finishedWizard = function() {

        }
    });
