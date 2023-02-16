function sendMail() {
    var link = "mailto:me@example.com"
        + "?cc=myCCaddress@example.com"
        + "&subject=" + encodeURIComponent("This is my subject")
        + "&body=" + encodeURIComponent(document.getElementById('myText').value)
        ;

    window.location.href = link;
}
Email.send(
    "from@you.com",
    "to@them.com",
    "This is a subject",
    "this is the body",
    "smtp.yourisp.com",
    "username",
    "password"
);