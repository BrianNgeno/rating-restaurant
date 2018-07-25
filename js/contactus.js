function openNav() {
   document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
   document.getElementById("myNav").style.width = "0%";
}

//Business logic
function ContactForm(first, last, priority, subject) {
    this.firstName = first;
    this.lastName = last;
    this.priority = priority;
  }


//User interface logic
$(document).ready(function() {
  $("form#contactForm").submit(function(event) {
    event.preventDefault();
    var firstName =$("input#firstName").val();
    var lastName =$("input#lastName").val();
    var high =$("input#high").val();
    var moderate =$("input#moderate").val();
    var low =$("input#low").val();
    var Subject =$("input#subject").val();
    var priority =$("input#priority").val();
    var newContactForm = new ContactForm(firstName, lastName, priority, subject);

    $("#summary").text(newContactForm);

    $("input#firstName").val("");
      $("input#lastName").val("");
      $("input#priority").val("");
      $("input#subject").val("");


    });
  });
