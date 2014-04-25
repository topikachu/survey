'use strict';

angular.module('surveyApp')
    .controller('ResponseCtrl', function($scope, $routeParams,WizardHandler, surveyProvier) {
        $scope.data ={};
        $scope.data.currentStep=0;
        $scope.surveyProvier = surveyProvier;
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

        $scope.next=function(){
            
            $scope.data.currentStep++;
        }

        $scope.prev=function(){
            $scope.data.currentStep--;
        }

        $scope.finish = function() {

        }
    });
