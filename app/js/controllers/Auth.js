app.controller('Auth', function (EndPoint, $localStorage,$location, $sessionStorage, $http, $scope, $rootScope) {

  // var shell = require('shell');


    $scope.Login = function(form){

           $http.post(EndPoint + 'login', form)
            .success(function (Data) {
                
                if (parseInt(Data.type) == 3) {

                	 $localStorage.User = Data;
                	 $location.path('#/dashboard');
                }else{

                //      shell.openExternal("http://zeedas.com");

                console.log("your er not from here");
                 $location.path('/dashboard');

                }
          
            })
            .error(function (data) {

                 console.log(data);

            });
    };
      




    //   var All_Projects = function () {

    //     $http.get(EndPoint + 'totalsavings')
    //         .success(function (Data) {

    //             $scope.totalsavings = Data.data;

    //         })
    //         .error(function (data) {

    //             $scope.error = "Connection Error";

    //         });
    // };
      
         


});