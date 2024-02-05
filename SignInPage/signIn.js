//signInJS
const username = "mohammadjury";
const password = "123";

$(document).ready(function(){

    

    $("form").submit(function(event){
        event.preventDefault(); 

        var usernameValue = $("input[name='username']").val();
        var passwordValue = $("input[name='password']").val();

        if(usernameValue == username && 
           passwordValue == password){
            var encodedVariable = encodeURIComponent(usernameValue);
            window.location.href = "../HomePage/homePage.html?variable=" + encodedVariable;

           }

           else{
            $("[type='password'], [type='text']").css({

                "border-color": "red"});
                var p = $("<p></p>").text("Wrong Usename or Password");
                p.css("color", "red");
                $("#password").append(p);
           }

    });
});
