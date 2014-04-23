'use strict';

describe('Service: surveyProvier', function () {

  // load the service's module
  beforeEach(module('surveyApp'));

  // instantiate service
  var surveyProvier;
  beforeEach(inject(function (_surveyProvier_) {
    surveyProvier = _surveyProvier_;
  }));

  it('should do something', function () {
    expect(!!surveyProvier).toBe(true);
  });

});
