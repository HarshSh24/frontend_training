function validphone(){
    let number=document.getElementById("phone").value;
    if(number[0]=="0" || number.length!==10 || (/[a-zA-Z]/g).test(number)) { 
        document.getElementById("phone_error").innerHTML="Please enter a valid phone number"; 
        return(false);
    }
    document.getElementById("phone_error").innerHTML=""; 
    return(true);
}

function validmail(){
    let mail=document.getElementById("email").value;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (mail.match(validRegex)) {
        document.getElementById("mail_error").innerHTML="";

        return true;

    } else {

        document.getElementById("mail_error").innerHTML="Invalid email address!";

        document.getElementById("email").focus();

        return false;

    }

}

function validfname(){
    let fname=document.getElementById("fname").value;
    if(fname.length==0){
        document.getElementById("fname_error").innerHTML="First name cannot be empty";
        document.getElementById("fname").focus();
        return false;
    }
    document.getElementById("fname_error").innerHTML="";
    return true;
}

function validlname(){
    let lname=document.getElementById("lname").value;
    if(lname.length==0){
        document.getElementById("lname_error").innerHTML="Last name cannot be empty";
        document.getElementById("lname").focus();
        return false;
    }
    document.getElementById("lname_error").innerHTML="";
    return true;
}

function validpass(){
    var p = document.getElementById('password').value;
        errors = [];
    if (p.length < 8) {
        errors.push("Your password must be at least 8 characters"); 
    }
    if (p.search(/[a-z]/i) < 0) {
        errors.push("Your password must contain at least one letter.");
    }
    if (p.search(/[0-9]/) < 0) {
        errors.push("Your password must contain at least one digit."); 
    }
    if (errors.length > 0) {
        let err=errors.join("\n");
        document.getElementById("pass_error").innerHTML=err;
        return false;
    }
    document.getElementById("pass_error").innerHTML="";
    return true;

}

function validateform(){
    if(validfname() && validlname() && validmail() && validphone() && validpass()){
        document.getElementById("form").submit();
        alert("Form submitted successfully");
        return true;
    }
    return false;
}