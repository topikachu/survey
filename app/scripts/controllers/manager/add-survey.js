'use strict';
angular.module('surveyApp').
controller('AddNewSurvey', function($scope, $modalInstance, $http, currentSurvey) {

    $scope.currentSurvey = currentSurvey;
    $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
    };
    $scope.addNewQuestion = function() {
        var newQuestion = {
            title: "new question",
            answers: [{
                text: "answer 1"
            }, {
                text: "answer 2"
            }]
        };

        $scope.currentSurvey.questions.push(newQuestion);
    };


    $scope.addAnswerAfter = function(question, answer) {
        var newAnswer = {
            text: "new answer"
        };
        var index = question.answers.indexOf(answer);
        question.answers.splice(index + 1, 0, newAnswer);
    };

    $scope.removeThisAnswer = function(question, answer) {
        var index = question.answers.indexOf(answer);
        if (index > -1) {
            question.answers.splice(index, 1);
        }

    };







    $scope.options = {
        url: '/uploadimage',
        maxNumberOfFiles: 1,
        prependFiles: true

    };

    $scope.$on('fileuploadadd', function(event, data) {
        console.log(data.files.length);
        data.scope.$parent.answer.data = data;
        data.scope.$parent.answer.imgname = null;
    });

    $scope.$on('fileuploaddone', function(event, data) {
        data.scope.$parent.answer.data = data;
        data.scope.$parent.answer.imgname = data.result.imgname;
    });


    $scope.items=[1,2,3];

    $scope.save = function() {
        $scope.currentSurvey.questions.forEach(
            function(question) {
                question.answers.forEach(
                    function(answer) {
                        if (answer.data) {
                            answer.data.submit();
                        }
                    }
                )
            });
    }


})
