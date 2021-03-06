'use strict';

/* Controllers */

function FetchCtrl($scope, $http) {
  $scope.method = 'GET';
  $scope.url = '/fastcall';
 
  $scope.fetch = function() {
    $scope.status = null;
    $scope.data = null;
 
    $http({method: $scope.method, url: $scope.url}).
	    success(function(data, status) {
	      $scope.status = status;
	      $scope.data = data;
	    }).
	    error(function(data, status) {
	      $scope.data = data || "Request failed";
	      $scope.status = status;
	    });
    };
 
    $scope.updateModel = function(method, url) {
      $scope.method = method;
      $scope.url = url;
    };
}
FetchCtrl.$inject = ['$scope', '$http'];

function MyCtrl1() {}
MyCtrl1.$inject = [];


function MyCtrl2($scope) {
  function fib(n) {
    if (n <= 1) return 1;
    return fib(n - 1) + fib(n - 2);
  }

  $scope.foos = [];
  for (var i = 0; i < 35; i++) {
    $scope.foos[i] = {
      a: i,
      b: fib(i),
    };
  }

  $scope.addOne = function() {
    $scope.foos.push({
      a: $scope.foos.length,
      b: fib($scope.foos.length)
    });
  };
}

MyCtrl2.$inject = ['$scope'];

function BindingsCtrl($scope) {
  $scope.planets = [
    { name: "Mercury",
      radius: 1516
    },
    { name: "Venus",
      radius: 3760
    },
    { name: "Earth",
      radius: 3959,
      moons: ["Luna"]
    },
    { name: "Mars",
      radius: 2106,
      moons: ["Phobos", "Deimos"]
    },
    { name: "Jupiter",
      radius: 43441,
      moons: ["Europa", "Io", "Ganymede", "Castillo"]
    },
    { name: "Saturn",
      radius: 36184,
      moons: ["Titan", "Rhea", "Iapetus", "Dione"]
    },
    { name: "Uranus",
      radius: 15759,
      moons: ["Titania", "Oberon", "Umbriel", "Ariel"]
    },
    { name: "Neptune",
      radius: 15299,
      moons: ["Triton", "Proteus", "Nereid", "Larissa"]
    }
  ];

  $scope.planet = $scope.planets[0];

  $scope.getRadiusKm = function() {
    return $scope.planet.radius * 0.6213;
  };
}
BindingsCtrl.$inject = ['$scope'];

function FormCtrl($scope) {
  $scope.greeting = "Hiya";
  $scope.username = "Anon";
  $scope.color = "blue";
  $scope.show = true;
  $scope.days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
}
FormCtrl.$inject = ['$scope'];

