var appWidgetWeather = angular.module('appWidgetWeather',[])
    .directive('weatherWidget', function () {
      return {
        restrict: 'E',
        scope: {
          city: '@',
          forecast: '@'
        },
        controller: 'WeatherCtrl',
        templateUrl: './weatherWidget.html'
      };
    })
    .factory('weatherWidgetService', ['$http', '$q', function ($http, $q) {
      return {
        getWeather: getWeather,
        getForecast: getForecast,
        getImage: getImage
      };

      function getWeather(city) {
        var defer = $q.defer();
        var url = "http://api.openweathermap.org/data/2.5/find?q=" + city + ",fr&units=metric&appid=265c6a6f6256191b246b6846c8472dc8&callback=JSON_CALLBACK";
        //var url= "./weather.json?callback=JSON_CALLBACK";
        $http.jsonp(url)
            .success(function (data) {
              defer.resolve(data);
            })
            .error(function (error) {
              console.log("Error weather request " + error);
              defer.reject(error);
            });
        return defer.promise;

      }

      function getForecast(city) {
        var defer = $q.defer();
        var url = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + ",fr&units=metric&appid=265c6a6f6256191b246b6846c8472dc8&callback=JSON_CALLBACK";
        //var url= "./forecast.json?callback=JSON_CALLBACK";
        $http.jsonp(url)
            .success(function (data) {
              defer.resolve(data);
            })
            .error(function (error) {
              console.log("Error weather request " + error);
              defer.reject(error);
            });
        return defer.promise;
      }

      function getImage(icon) {
        if (icon !== undefined)
          return 'http://openweathermap.org/img/w/' + icon + '.png';
        return '/images/logo_2m.png';
      }
    }])
    .filter('temp', function ($filter) {
      return function (input, precision) {
        if (!precision) {
          precision = 1;
        }
        var numberFilter = $filter('number');
        return numberFilter(input, precision) + '\u00B0C';
      };
    })
    .controller('WeatherCtrl', function ($scope, weatherWidgetService) {
      $scope.weather = {temp: {}, icon: null, wind: {}, date: ""};
      $scope.isForecast=false;
      weatherWidgetService.getWeather($scope.city).then(
          function (data) {
            if (data.list[0]) {
              fillWeatherData(data.list[0], $scope.weather);
              $scope.imgurl = fillImage($scope.weather);
              $scope.date = fillDate(new Date(data.list[0].dt * 1000));
            }
          });

      if($scope.forecast!==null && $scope.forecast>0)
      {
        $scope.isForecast=true;
        $scope.forecastDays = [];
        weatherWidgetService.getForecast($scope.city).then(
            function (data) {
              if (data) {
                for(var i=1;i<=$scope.forecast;i++){
                  var weather = {temp: {}, icon: null, wind: {}, date: "",hour: ""};

                  fillWeatherData(data.list[i], weather);
                  weather.imgurl = fillImage(weather);
                  var t = new Date(data.list[i].dt * 1000);
                  console.log("fecha:" + t);
                  weather.date = fillDate(t);
                  weather.hour = fillHour(t);
                  $scope.forecastDays.push(weather);
                }
              }
            });

      }

      function fillWeatherData(data, weather) {
        weather.temp.current = data.main.temp;
        weather.temp.min = data.main.temp_min;
        weather.temp.max = data.main.temp_max;
        weather.icon = data.weather[0].icon ? data.weather[0].icon : undefined;
        weather.humidity = data.main.humidity;
        weather.pressure = data.main.pressure;
        weather.wind.speed = data.wind.speed;
      }

      function fillImage(weather){
        return weatherWidgetService.getImage(weather.icon);
      }

      function fillDate(date){
        var days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[date.getDay()] + ", " + date.getDate();
      }

      function fillHour(date){
        return addZero(date.getHours()) + ":" + addZero(date.getMinutes());
      }

      function addZero(value) {
        return value < 10 ? "0" + value : value;
      }
    });
