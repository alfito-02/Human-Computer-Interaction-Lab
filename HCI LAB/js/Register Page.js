function validateAll(){
    const name = document.getElementById("name");
    const gender = document.getElementById("gender");
    const address = document.getElementById("address");
    const email = document.getElementById("email");
    const date = document.getElementById("date");

    if(name.value === ""){
        alert("Name must be filled !");
    }else if(gender.value === "none"){
        alert("Gender must be filled !");
    }else if(!email.value.endsWith("@gmail.com")){
        alert("Email must end with @gmail.com !");
    }else{
        registrationForm.submit();
    }
}