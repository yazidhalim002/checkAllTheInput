





function toggler(){
    var Username = document.getElementById("username");
    var Email = document.getElementById("email");
    var Password = document.getElementById("password");
    var submit =document.getElementById("submit");
    if(Username.value.length>=8){
        if(Email.value.includes("@")){
            if(Password.value.length>=8){
                $(document).ready(function(){
                    $("#submit").hover(function(){
                      $(this).css("background-color", "green");
                      }
                      );
                }
                    )
            }else{
                submit.classList.toggle("move");
                submit.classList.toggle("stop");
            }
        }else{
            submit.classList.toggle("move");
            submit.classList.toggle("stop");
        }
    }else{
        submit.classList.toggle("move");
        submit.classList.toggle("stop");
    }





}


function untoggler(){
    submit.style.backgroundColor = "blue";
    submit.classList.toggle("move");
}