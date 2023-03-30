user_name = localStorage.getItem("Username");
 
document.getElementById("welcome_user_name").innerHTML = "Welcome " + user_name + "! " +"     "  +  "    THIS APP IS BASED ON CASE STUDY BETWEEN GOOGLE LENS AND MOBILENET        " + "           (also click to go back)";


function d(){
    window.location = "hi.html";
}