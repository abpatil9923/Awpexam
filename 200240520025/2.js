




function fetchData(currentposition) {

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;


    let userfiled = document.getElementById("field1").innerHTML = username;
    let emailfiled = document.getElementById("field2").innerHTML = email;
    let passfiled = document.getElementById("field3").innerHTML = pass;


    


// usingclone

    // let newElement = currentposition.parentElement.parentElement.parentElement.parentElement.children[1].children[0];

    // newElement.cloneNode(true);

    // let fieldcontainer = currentposition.parentElement.parentElement.parentElement.parentElement.children[1];

    // fieldcontainer.insertBefore(newElement, fieldcontainer.firstChild);


    // currentposition.parentElement.parentElement.parentElement.parentElement.children[1].children[0].children[0].innerHTML = username;
    // currentposition.parentElement.parentElement.parentElement.parentElement.children[1].children[0].children[1].innerHTML = email;
    // currentposition.parentElement.parentElement.parentElement.parentElement.children[1].children[0].children[2].innerHTML = pass;

    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("pass").value = "";

}