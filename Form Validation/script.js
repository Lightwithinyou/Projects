let username = document.getElementById("username");
let password = document.getElementById("password");
let flag = 1;

function validateFrom() {

    if (username.value == "") {
        document.getElementById("userError").innerHTML = "Error!fill Correctly";
        flag = 0;
    } else if (username.value.length < 3) {
        document.getElementById("userError").innerHTML = "Error!fill 3 Characters";
        flag = 0;
    }
    else {
        document.getElementById("userError").innerHTML = "";
        flag = 1;
    }

    if (password.value == "") {
        document.getElementById("passError").innerHTML = "Error!Empty Box";
        flag = 0;
    }

    else {
        document.getElementById("passError").innerHTML = "";
        flag = 1;
    }

    if (flag) {
        return true;
    } else {
        return false;
    }

}