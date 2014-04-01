'use strict';

describe('Directive: ghVisualization', function () {

  // load the directive's module
  beforeEach(module('dataApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<gh-visualization></gh-visualization>');
    element = $compile(element)(scope);
    expect(element.children().length).toBe(1);
  }));
});
