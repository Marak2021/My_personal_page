

var typed = new Typed("#my_name", {
    strings: ["Perry Marak", "a Tech Lover"],
    typeSpeed: 200,
    backSpeed: 150,
    loop: true
})


var form = document.querySelector("#my_form");
form.addEventListener("submit", function(event){

    event.preventDefault() // prevents auto submission

    var name = document.querySelector("#name").value
    var email = document.querySelector("#email").value
    // var gender = document.querySelector("#name").value
    var address = document.querySelector("#address").value
    var message = document.querySelector("#message").value
    let radioSelected = document.querySelector("input[name='genderSelect']:checked").value
    
    var message_body = "name: " + name +"<br>gender: "+radioSelected + "<br>email: " + email + "<br>message: " + message + "<br><br>address:  " + address;

    Email.send({
        SecureToken: "2cf445cd-dfda-4a7b-b938-7276be78817b",
        
        To : 'Perry.marak@hotmail.com',
        From : "kindermarak95@gmail.com",
        Subject : "You portfolio message",
        Body : message_body
    }).then(
      message => {
        if (message == "OK") {
            swal("SUCCESS!", "Message has been sent!", "success");
            document.querySelector("#name").value = "";
            document.querySelector("#email").value = "";
            document.querySelector("#address").value = "";
            document.querySelector("#message").value = "";
        } else {
            swal("Error!", "Unable to send message!", "error");
        }
      }
    );
    
})