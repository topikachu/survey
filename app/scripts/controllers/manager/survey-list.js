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
                title: "question 1",

                answers: [{
                    no: 1,
                    text: "answer1-1"
                }, {
                    no: 2,
                    text: "answer1-2"
                }]
            }, {
                no: 1,
                title: "question 2",
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
                title: "question 1",
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
                title: "question 2",
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



        $scope.showModal = function(currentSurvey) {
            var isNew = false;
            if (!!currentSurvey) {
                $scope.currentSurvey = currentSurvey;                
            } else {
                isNew = true;
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
                
            }
            var modalInstance = $modal.open({
                templateUrl: 'views/manager/add-survey.html',
                controller: 'AddNewSurvey',
                resolve: {
                    currentSurvey: function() {
                        return $scope.currentSurvey;
                    },
                    isNew: function() {
                        return isNew;
                    },
                    suerveyList: function(){
                        return $scope.suerveyList;
                    }

                }

            })
        }


        $scope.selectedSurvey = [];

        $scope.gridOptions = {
            data: 'suerveyList',
            columnDefs: [{
                field: 'no',
                displayName: 'No.'
            }, {
                field: 'title',
                displayName: 'Title'
            }],
            multiSelect: false,
            selectedItems: $scope.selectedSurvey,
            dblClickFn: $scope.showModal,
            plugins: [ngGridDoubleClick]
        };



    });
