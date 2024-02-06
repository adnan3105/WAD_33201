function addToCart(product, price) {
    alert(`Adding to Cart: ${product} - $${price}`);
}

//validations for signup form

function validateForm() {
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim() === "") {
        showError("emailError", "Please enter your email address.");
        return false;
    } else if (!emailRegex.test(email)) {
        showError("emailError", alert("Please enter a valid email address."));
        return false;
    }

    hideError("emailError");

    if (name.trim() === "") {
        showError("nameError", "Please enter your full name.");
        return false;
    }

    hideError("nameError");

    alert("Form submitted successfully!");
    return true;
}

function loginValidateForm() {
    var email = document.getElementById("email").value;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim() === "") {
        showError("emailError", "Please enter your email address.");
        return false;
    } else if (!emailRegex.test(email)) {
        showError("emailError", "Please enter a valid email address.");
        return false;
    }

    hideError("emailError");

    alert("Form submitted successfully!");
    return true;
}

function showError(id, message) {
    document.getElementById(id).innerHTML = message;
    document.getElementById(id).style.display = "block";
}

function hideError(id) {
    document.getElementById(id).style.display = "none";
}