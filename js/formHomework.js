"use strict";

function Person(ad, soyad, yas, email, id) {
    this.id = id;
    this.name = ad;
    this.surname = soyad;
    this.birthday = yas;
    this.email = email;
}


let users = [];
let wrapper = document.querySelector("#myDiv");

function validateForm() {
    let nameInput = document.forms["myForm"]["nameInput"].value;
    let surNameInput = document.forms["myForm"]["surNameInput"].value;
    let birthdayInput = document.forms["myForm"]["birthdayInput"].value;
    let emailInput = document.forms["myForm"]["emailInput"].value;
    let newPerson = new Person(nameInput, surNameInput, birthdayInput, emailInput);
    users.push(newPerson);
    displayTable();
    if (nameInput == "") {
        alert("Please, enter your name");
    }
    else if (isNaN(nameInput) != true) {
        alert("Please, don't use number")
    }
    if (surNameInput == "") {
        alert("Please, enter your surname")
    }
    else if (isNaN(surNameInput) != true) {
        alert("Please, don't use number")
    }
    if (birthdayInput == "") {
        alert("Please, enter your date");
    }
    else if (birthdayInput == "YYYY-MM-DD") {
        alert("Please enter correct date format")
    }
    if (emailInput == "") {
        alert("Please, enter your email")
    }
    // else if (emailInput != "text@text.text.text") {
    //     alert("Please, enter correct email addres")
    // }
    console.log(users)
    return false;
}


// function displayNames() {
//     let list = "<ul class='list-group'>";
//     for (let i = 0; i < users.length; i++) {
//         list += "<li class='list-group-item id=\"(i+1)\"'>" +
//             users[i].nameInput + " " +
//             users[i].surNameInput + " " + users[i].birthdayInput + " - " + users[i].emailInput + "</li>";
//     }
//     list += "</ul>";
//     wrapper.innerHTML = list;
// }

function displayTable() {
    let list = "<table class='table'> <thead> " +
        '<tr>' +
        '<th scope="col">id</th>' +
        '<th scope="col">Name</th>' +
        '<th scope="col">Surname</th>' +
        '<th scope="col">Birthday</th>' +
        '<th scope="col">Email</th>' +
        '</tr>' +
        '</thead> <tbody>';
    for (let i = 0; i < users.length; i++) {
        list += "<tr><th scope='row'>" + (i + 1) + "</th><td>" + users[i].name +
            "</td><td>" + users[i].surname + "</td><td>" + users[i].birthday +
            "</td><td>" + users[i].email + "</td></tr>";
    }
    list += "</tbody></table>";
    wrapper.innerHTML = list;

}
function deleteId() {
    let clean = document.querySelectorAll(".deleteInput").value;
    users.splice(clean, 1);
    document.querySelectorAll("#myDiv").innerHTML = displayTable();
    console.log(users);
    return
}
displayUsers();
function sortByName() {
    users.sort(function (a, b) {
        let x = a.name.toLowerCase();
        let y = b.name.toLowerCase();
        if (x < y) { return -1; }
        if (x > y) { return 1; }
        return 0;
    })
    displayUsers()
}
function displayUsers(){
    document.querySelectorAll("#myDiv").innerHTML = displayTable();

}

displayUsers1();
function sortBysurname() {
    users.sort(function (a, b) {
        let x = a.surname.toLowerCase();
        let y = b.surname.toLowerCase();
        if (x < y) { return -1; }
        if (x > y) { return 1; }
        return 0;
    })
    displayUsers1()
 
}
function displayUsers1(){
    document.querySelectorAll("#myDiv").innerHTML = displayTable();
    console.log(users)
}
