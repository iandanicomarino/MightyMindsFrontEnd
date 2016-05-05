var app=angular.module('app', []);

app.controller('Ctrl', function($scope, $http, $timeout){

  $scope.login=function(){
    $http.post('https://limitless-citadel-27491.herokuapp.com/login', $scope.Account)
    .then(function(res){
      console.log(res)
      if(res.status == 200){
        if(res.data.accounttype == "School"){
          console.log('School');
          // window.location="http://127.0.0.1/front_end/mighty-minds/admin.html"
        }
        else if (res.data.accounttype == "Sponsor") {
          console.log('Sponsor');
          // window.location="http://127.0.0.1/front_end/mighty-minds/sponsor.html"
        }
        else if (res.data.accounttype == "Admin") {
          console.log('Admin');
          // window.location="http://127.0.0.1/front_end/mighty-minds/sponsor.html"
        }
      }
    })
    .catch(function(data){
      alert("Invalid Account!");
    });
  }
  $scope.registersponsor=function(){
    $http.post('https://limitless-citadel-27491.herokuapp.com/registersponsor', $scope.Account)
    .then(function(res){
      console.log(res);
      if(res.status == 200){
        alert("Account Registered!");
        location.reload();
      }
    })
    .catch(function(data){
      alert("Invalid Account!");
    });
  }
  $scope.registerschool=function(){
    $http.post('https://limitless-citadel-27491.herokuapp.com/addschool', $scope.Account)
    .then(function(res){
      console.log(res);
      if(res.status == 200){
        alert("School Registered!");
        location.reload();
      }
    })
    .catch(function(data){
      alert("Invalid Account!");
    });
  }

  // fade-in &out
  $scope.hiddenschool = true;
  $scope.hiddenreg = true;

  $scope.hidelogSp = function () {
    $scope.startFadeout = true;
    $scope.startFadein = true;
    $timeout(function(){
      $scope.hiddenlog = true;
      $scope.hiddenreg = false;
    }, 1700);
  };

  $scope.hidelogSc = function () {
    $scope.startFadeout = true;
    $scope.startFadein = true;
    $timeout(function(){
      $scope.hiddenlog = true;
      $scope.hiddenschool = false;
    }, 1700);
  };

  $scope.hideregi = function () {
    $scope.startFadeout = false;
    $scope.startFadein = false;
    $timeout(function(){
      $scope.hiddenlog = false;
      $scope.hiddenreg = true;
    }, 200);
  };

  $scope.hideschool = function () {
    $scope.startFadeout = false;
    $scope.startFadein = false;
    $timeout(function(){
      $scope.hiddenlog = false;
      $scope.hiddenschool = true;
    }, 200);
  };

  console.log("application load complete...");
});
