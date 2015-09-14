//By Rajeshwar Patlolla - rajeshwar.patlolla@gmail.com
//https://github.com/rajeshwarpatlolla

(function(){
  'use strict';

  angular.module('ionic-datepicker')
    .service('IonicDatepickerService',IonicDatepickerService);

  IonicDatepickerService.$inject = [];
  function IonicDatepickerService(){
    this.monthsList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var currentYear = new Date().getFullYear();
    this.yearsList = [];
    for (var i = 5; i>=0; i--) {
      this.yearsList.push(currentYear-i);
    }
    for (var j = 1; j<=5; j++) {
      this.yearsList.push(currentYear+j);
    }
  }

})();