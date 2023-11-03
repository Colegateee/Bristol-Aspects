function validateForm() {
    let y = document.forms["contactForm"]["Email"].value;
    if (y == "") {
        alert("Email must be filled out");
        return false;
    }
    let z = document.forms["contactForm"]["text"].value;
    if (z == "") {
        alert("Comments must be filled out");
        return false;
    }
    let x = document.forms["contactFormContainer"]["Name"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}