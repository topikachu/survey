'use strict';

angular.module('surveyApp')
    .controller('ManagerSurveyListCtrl', function($scope, $modal,surveyProvier) {
       
        var surveyList = $scope.surveyList = surveyProvier.getSurveyList();



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
                    surveyList: function(){
                        return $scope.surveyList;
                    }

                }

            })
        }


        $scope.selectedSurvey = [];

        $scope.gridOptions = {
            data: 'surveyList',
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
