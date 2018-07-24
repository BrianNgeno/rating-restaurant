function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
$(document).ready(function(){
  $("button#login").click(function(event){
    event.preventDefault();
    var user=$("#input1").val();
    alert("You are logged in as" +user);
    $("#id01").hide();
    // window.location.reload();
    $("#login").hide();
    $("#log").append("<li>"+user+"</li>");
    console.log(user)
    });
});
