describe('Hello world app test', function(){

  beforeEach(function() {

    module('hello-world-angular');

  });

  var HelloWorldController, scope;

  beforeEach(inject(function($rootScope, $controller) {

    scope = $rootScope.$new();

    HelloWorldController = $controller('MainCtrl', {

      $scope : scope

    });

  }));

  it('Says world', function() {

    expect(scope.name).toEqual('World');

  })

});
