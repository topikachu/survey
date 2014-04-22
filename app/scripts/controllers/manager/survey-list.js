'use strict';

angular.module('surveyApp')
    .controller('ManagerSurveyListCtrl', function($scope, $modal) {
        var suerveyList = $scope.suerveyList = [{
            no: 1,
            title: "suerver1",
            isMultipleAnswer: false,
            isDisplayImage: false,
            questions: [{
                no: 1,
                question: "question 1",

                answers: [{
                    no: 1,
                    text: "answer1-1"
                }, {
                    no: 2,
                    text: "answer1-2"
                }]
            }, {
                no: 1,
                question: "question 2",
                isMultipleAnswer: false,
                isDisplayImage: false,
                answers: [{
                    no: 1,
                    text: "answer1-1"
                }, {
                    no: 2,
                    text: "answer1-2"
                }]
            }]
        }, {
            no: 2,
            title: "suerver2",
            questions: [{
                no: 1,
                question: "question 1",
                isMultipleAnswer: false,
                isDisplayImage: false,
                answers: [{
                    no: 1,
                    text: "answer1-1"
                }, {
                    no: 2,
                    text: "answer1-2"
                }]
            }, {
                no: 2,
                question: "question 2",
                isMultipleAnswer: false,
                isDisplayImage: false,
                answers: [{
                    no: 1,
                    text: "answer1-1"
                }, {
                    no: 2,
                    text: "answer1-2"
                }]
            }]
        }];








        $scope.gridOptions = {
            data: 'suerveyList',
            columnDefs: [{
                field: 'no',
                displayName: 'No.'
            }, {
                field: 'title',
                displayName: 'Title'
            }]
        };


        $scope.showModal = function() {
            $scope.currentSurvey = {
                title: "new suerver",
                questions: [{
                    title: "question",
                    answers: [{
                        text: "answer 1"
                    }, {
                        text: "answer 2"
                    }]
                }]
            };
            var modalInstance = $modal.open({
                templateUrl: 'views/manager/add-survey.html',
                controller: 'AddNewSurvey',
                resolve: {
                    currentSurvey: function() {
                        return $scope.currentSurvey;
                    }
                }

            })
        }
    })
    .controller('AddNewSurvey', function($scope, $modalInstance, $http, currentSurvey) {

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

        $scope.helloWorld = function() {
            alert("hello");
        };

        $scope.onSuccess = function(response) {
            console.log(response.data);
        };

        
        var url='/uploading'


        $scope.options = {
            url: url,
            maxNumberOfFiles: 1
           
        };

        $scope.$on('fileuploadadd', function(event, data){             
            data.scope.$parent.answer.data=data
        });

        $scope.save=function(){
            alert($scope.currentSurvey.title);
        }

        $scope.loadingFiles = true;
        $http.get(url)
            .then(
                function(response) {
                    $scope.loadingFiles = false;
                    $scope.queue = response.data.files || [];
                },
                function() {
                    $scope.loadingFiles = false;
                }
        );
    });
