'use strict';

angular.module('surveyApp')
    .provider('surveyProvier', function() {

        // Private variables
        // var salutation = 'Hello';

        // Private constructor
        function SurveyBackend() {

            this.getAnswerImageUrl = function(answer) {
                return "http://lorempixel.com/200/100/sports/";
            }

            this.getSurveyById = function(surveyId) {
                return this.getSurveyList()[surveyId];
            }
            this.getSurveyList = function() {
                return [{
                    no: 1,
                    title: "suerver1",
                    isMultipleAnswer: false,

                    questions: [{
                        no: 1,
                        title: "question 1-1",
                        isDisplayImage: true,
                        answers: [{
                            no: 1,
                            text: "answer1-1-1"
                        }, {
                            no: 2,
                            text: "answer1-1-2"
                        },
                        {
                            no: 1,
                            text: "answer1-1-3"
                        }, {
                            no: 2,
                            text: "answer1-1-4"
                        },
                        {
                            no: 1,
                            text: "answer1-1-5"
                        }]
                    }, {
                        no: 1,
                        title: "question 1-2",
                        isMultipleAnswer: true,
                        isDisplayImage: true,
                        answers: [{
                            no: 1,
                            text: "answer1-2-1"
                        }, {
                            no: 2,
                            text: "answer1-2-2"
                        }]
                    }]
                }, {
                    no: 2,
                    title: "suerver2",
                    questions: [{
                        no: 1,
                        title: "question 2-1",
                        isMultipleAnswer: false,
                        isDisplayImage: false,
                        answers: [{
                            no: 1,
                            text: "answer2-1-1"
                        }, {
                            no: 2,
                            text: "answer2-1-2"
                        }]
                    }, {
                        no: 2,
                        title: "question 2-2",
                        isMultipleAnswer: false,
                        isDisplayImage: false,
                        answers: [{
                            no: 1,
                            text: "answer2-2-1"
                        }, {
                            no: 2,
                            text: "answer1-2"
                        }]
                    }]
                },{
                    no: 3,
                    title: "suerver3",
                    isMultipleAnswer: false,
                    isInSinglePage:true,
                    questions: [{
                        no: 1,
                        title: "question 3-1",
                        isDisplayImage: true,
                        answers: [{
                            no: 1,
                            text: "answer3-1-1"
                        }, {
                            no: 2,
                            text: "answer3-1-2"
                        },
                        {
                            no: 1,
                            text: "answer3-1-3"
                        }, {
                            no: 2,
                            text: "answer3-1-4"
                        },
                        {
                            no: 1,
                            text: "answer3-1-5"
                        }]
                    }, {
                        no: 2,
                        title: "question 3-2",
                        isMultipleAnswer: true,
                        isDisplayImage: false,
                        answers: [{
                            no: 1,
                            text: "answer3-2-1"
                        }, {
                            no: 2,
                            text: "answer3-2-2"
                        }]
                    }]
                },];
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
