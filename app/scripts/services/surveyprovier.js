'use strict';

angular.module('surveyApp')
    .provider('surveyProvier', function() {

        // Private variables
        // var salutation = 'Hello';

        // Private constructor
        function SurveyBackend() {
            this.getSurveyList = function() {
                return [{
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
            };
        }

        // Public API for configuration
        // this.setSalutation = function (s) {
        //   salutation = s;
        // };

        // Method for instantiating
        this.$get = function() {
            return new SurveyBackend();
        };
    });
