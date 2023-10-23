function skillsMember(){
    var skills = document.getElementById("skills").value;
    if (skills == "1"){
        document.getElementById("skillsMember").style.display = "block";
    } else {
        document.getElementById("skillsMember").style.display = "none";
    }

}