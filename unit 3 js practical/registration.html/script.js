function validateForm(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message");

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (name === "") {
        message.innerHTML = "Name cannot be empty!";
        message.style.color = "red";
        return false;
    }

    if (!emailPattern.test(email)) {
        message.innerHTML = "Please enter a valid email format!";
        message.style.color = "red";
        return false;
    }

    message.innerHTML = "Registration Successful! Welcome, " + name;
    message.style.color = "green";
    return true;
}