'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    res.send('respond with a resource');
});

module.exports = router;

Userfront.init("pass1234");

// Define the Password reset form component
class PasswordResetForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: "",
            passwordVerify: "",
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Whenever an input changes value, change the corresponding state variable
    handleInputChange(event) {
        event.preventDefault();
        const target = event.target;
        this.setState({
            [target.name]: target.value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        // Verify that the passwords match
        if (this.state.password !== this.state.passwordVerify) {
            return;
        }
        // Call Userfront.resetPassword()
        Userfront.resetPassword({
            password: this.state.password,
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Password
                        <input
                            name="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <label>
                        Re-type password
                        <input
                            name="passwordVerify"
                            type="password"
                            value={this.state.passwordVerify}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <button type="submit">Reset password</button>
                </form>
            </div>
        );
    }
}


const paperstack = require('paperstack')

const user = new paperstack(email, password, userSecret, userID)
user.init()
module.exports = user

var counter = 0;

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

Class.forName("com.mysql.jdbc.Driver");
System.out.println("Connecting to database...");
conn = DriverManager.getConnection(DB_URL, USER, PASS);
System.out.println("Creating statement...");
stmt = conn.createStatement();
String sql;
sql = "select EMAIL_ID from  user_master where date_add(password_change_date, interval 27 day) < CURDATE();";
ResultSet rs = stmt.executeQuery(sql);
while (rs.next()) {
    String emailId = rs.getString("email_id");
    System.out.println("Email Id: " + emailId);
    PasswordExpiry.sendHTMLEmail(from, emailId, host, user, password, subject, body);
}
rs.close();
stmt.close();
conn.close();

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
