'use strict';
angular.module('surveyApp').
controller('AddNewSurvey', function($scope, $modalInstance,$modal, currentSurvey, isNew, surveyList, surveyProvier) {

    $scope.currentSurvey = currentSurvey;
    $scope.surveyProvier=surveyProvier;
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

        currentSurvey.questions.push(newQuestion);
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
        prependFiles: true,
        acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i

    };

    $scope.$on('fileuploadadd', function(event, data) {
        if ( !! data.scope.answer.data) {
            data.scope.answer.data.files.forEach(
                function(f) {
                    f.$cancel()
                }
            )
        };
        

    });

    $scope.$on('fileuploadprocessdone', function(event, data) {
        console.log(data.files.length);
        data.scope.answer.data = data;

    });


    $scope.$on('fileuploadprocessdone', function(event, data) {
        console.log(data.files.length);
        data.scope.answer.data = data;

    });

    $scope.$on('fileuploaddone', function(event, data) {
        data.scope.answer.data = null;
        data.scope.answer.imgname = data.result.imgname;
    });



    $scope.save = function() {
        var submitPromiseArray = []
        currentSurvey.questions.forEach(
            function(question) {
                question.answers.forEach(
                    function(answer) {
                        if (answer.data) {
                            submitPromiseArray.push(answer.data.submit());
                        }
                    }
                )
            });


        $.when($, submitPromiseArray).then(function() {
            if (isNew) {
                surveyList.push($scope.currentSurvey);
            }
            $modalInstance.close()


        });


    }

    $scope.preview=function(){
        var modalInstance = $modal.open({
                templateUrl: 'views/response.html',
                controller: 'PreviewCtrl',
                resolve: {
                    currentSurvey: function() {
                        return $scope.currentSurvey;
                    }
                    

                }

            })
    }

    $scope.removeImage=function(answer){
        answer.imgname="";
        answer.data="";
    }


})
