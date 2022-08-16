var username , password, name_, gmail,phone,address,high_school,intermediate,ug,pg;
function information(){
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
}
function personal_info(){
    console.log(username)
    name_ = document.getElementById("name").value;
    gmail = document.getElementById("gmail").value;
    phone = document.getElementById("phone").value;
    address = document.getElementById("address").value;
}
function high_school(){
    high_school = document.getElementById("highschool").value;
    intermediate =document.getElementById("intermediate").value;
    ug = document.getElementById("ug").value;
    pg = document.getElementById("pg").value;
}