function checkdetails() {
    var name = "",
        password = "";

    name = form1.txtusername.value
    password = form1.txtpassword.value

    if (name == "Shauna" && password == "8nss") {
        window.alert("Both right")
        window.location.replace("Home.html");

        form1.txtusername.value = ""
        form1.txtpassword.value = ""

    } else if (name == "Shauna" && password != "8nss") {
        window.alert("Incorrect Password.")
        counter = counter + 1

        window.alert(3 - counter + " attempts left")
        form1.txtusername.value = ""
        form1.txtpassword.value = ""

    } else if (name != "Shauna" && password == "8nss") {
        window.alert("Incorrect Username")
        counter = counter + 1

        window.alert(3 - counter + " attempts left")
        form1.txtusername.value = ""
        form1.txtpassword.value = ""
    } else if (name != "Shauna" && password != "8nss") {
        window.alert("Both Wrong")
        counter = counter + 1

        window.alert(3 - counter + " attempts left")
        form1.txtusername.value = ""
        form1.txtpassword.value = ""
    }
    if (counter == 3) {
        window.alert("Incorrect details - Login failed")
        window.close()
    }

}