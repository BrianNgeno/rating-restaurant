function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
$(function() {
  $('#example').barrating({
    theme: 'fontawesome-stars-o',
    //readonly: true,
    // showSelectedRating:false
  });
});

$(function() {
  $('#example').barrating({
    theme: 'fontawesome-stars-o',
    //readonly: true,
    // showSelectedRating:false
  });
});

var score = "";

$(document).ready(function() {
  var score1, score2, score3, score4, score5;
  $('input:radio[name=rate1]').change(function() {
    if (this.value == 'terrible') {
      //alert("you have picked customer service to be terrible");
      score1 = 1;
      console.log(score1);
    } else if (this.value == 'poor') {
      //alert("you have picked customer service to be poor");
      score1 = 2;
      console.log(score1);
    } else if (this.value == 'average') {
      //alert("you have picked customer service to be average");
      score1 = 3;
      console.log(score1);
    } else if (this.value == 'very good') {
      //alert("you have picked customer service to be very good");
      score1 = 4;
      console.log(score1)
    } else if (this.value == 'excellent') {
      //alert("you have picked customer service to be excellent");
      score1 = 5;
      console.log(score1)
    }
  });

  $('input:radio[name=rate2]').change(function() {
    if (this.value == 'terrible') {
      //alert("you have picked food quality to be terrible");
      score2 = 1;
      console.log(score2)
    } else if (this.value == 'poor') {
      //alert("you have picked food quality to be poor");
      score2 = 2;
      console.log(score2)
    } else if (this.value == 'average') {
      //alert("you have picked food quality to be average");
      score2 = 3;
      console.log(score2)
    } else if (this.value == 'very good') {
      //alert("you have picked food quality to be very good");
      score2 = 4;
      console.log(score2)
    } else if (this.value == 'excellent') {
      //alert("you have picked food quality to be excellent");
      score2 = 5;
      console.log(score2)
    }
  });

  $('input:radio[name=rate3]').change(function() {
    if (this.value == 'terrible') {
      //alert("you have picked comfort to be terrible");
      score3 = 1;
      console.log(score3)
    } else if (this.value == 'poor') {
      //alert("you have picked comfort to be poor");
      score3 = 2;
      console.log(score3)
    } else if (this.value == 'average') {
      //alert("you have picked comfort to be average");
      score3 = 3;
      console.log(score3)
    } else if (this.value == 'very good') {
      //alert("you have picked comfort to be very good");
      score3 = 4;
      console.log(score3)
    } else if (this.value == 'excellent') {
      //alert("you have picked comfort to be excellent");
      score3 = 5;
      console.log(score3)
    }
  });
  $('input:radio[name=rate4]').change(function() {
    if (this.value == 'terrible') {
      //alert("you have picked affordability to be terrible");
      score4 = 1;
      console.log(score4)
    } else if (this.value == 'poor') {
      //alert("you have picked affordability to be poor");
      score4 = 2;
      console.log(score4)
    } else if (this.value == 'average') {
      //alert("you have picked affordability to be average");
      score4 = 3;
      console.log(score4)
    } else if (this.value == 'very good') {
      //alert("you have picked affordability to be very good");
      score4 = 4;
      console.log(score4)
    } else if (this.value == 'excellent') {
      //alert("you have picked affordability to be excellent");
      score4 = 5;
      console.log(score4)
    }
  });
  $('input:radio[name=rate5]').change(function() {
    if (this.value == 'terrible') {
      //alert("you have picked accesibility to be terrible");
      score5 = 1;
      console.log(score5)
    } else if (this.value == 'poor') {
      //alert("you have picked accesibility to be poor");
      score5 = 2;
      console.log(score5)
    } else if (this.value == 'average') {
      //alert("you have picked accesibility to be average");
      score5 = 3;
      console.log(score5)
    } else if (this.value == 'very good') {
      //alert("you have picked accesibility to be very good");
      score5 = 4;
      console.log(score5)
    } else if (this.value == 'excellent') {
      //alert("you have picked accesibility to be excellent");
      score5 = 5;
      console.log(score5)
    }
  });
});
$("#questions").submit(function(event) {
  event.preventDefault();
  $("#rest").show();
  $("#form").hide();
  Rate.total(score1, score2, score3, score4, score5);
  Rate.average();
  console.log(Rate.average());
});
$("#proceed").click(function(event){
  event.preventDefault();
  $("#rest").show();
})


//business logic
function Rate() {
  this.totalScore = 0;
  this.averageScore = 0;
}
Rate.prototype.total = function(sc1, sc2, sc3, sc4, sc5) {
  this.totalScore = sc1 + sc2 + sc3 + sc4 + sc5;
}
Rate.prototype.average = function() {
  this.averageScore = (this.totalScore / 25) * 100;
}
