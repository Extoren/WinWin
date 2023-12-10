// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDINfGdaDlzZPCqwI6Dj2XsoL8ULGo-C3Q",
    authDomain: "winwin-64fb0.firebaseapp.com",
    databaseURL: "https://winwin-64fb0-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "winwin-64fb0",
    storageBucket: "winwin-64fb0.appspot.com",
    messagingSenderId: "1094048771328",
    appId: "1:1094048771328:web:9485b15d57f68a743ad7e5",
    measurementId: "G-BS60XM5QPZ"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const db = getDatabase(app);
    const auth = getAuth(app);

function register() {
    Name = document.getElementById("name").value;
    LastName = document.getElementById("lastName").value;
    Email = document.getElementById("email").value;
    Password = document.getElementById("password").value;
    ConfirmPassword = document.getElementById("confirmPassword").value;
    Date = document.getElementById("date").value;
    Address = document.getElementById("address").value;

    if (validate_fields(email) == false || validate_password(password) == false) {
        alert("Email or password is invalid");
        return;
        // Stop running code
    }
    if (Password !== ConfirmPassword) {
        alert("Password and confirm password do not match");
        return;
    }
    if (validate_fields(Name) == false || validate_fields(Date) == false || validate_fields(Address) == false) {
        alert("One or more extra fields are invalid");
        return;
        // Stop running code
    }

    // On with Auth
    auth.createUserWithEmailAndPassword(email, password)
    .then(function() {

        var user = auth.currentUser;

        var database_ref = db.ref();

        var user_data = {
            email : email,
            name : name,
            last_name : last_name,
            date : date,
            address : address,
            last_login : Date.now()
        }

        database_ref.child('users/' + user.uid).set(user_data);

        alert("User created successfully!");

    })
    .catch(function(error) {
        // Handle Errors here.
        var error_code = error.code;
        var error_message = error.message;
        
        alert(error_message);
    });
}

function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/.test(str);
    if(expression.test(email) == true) {
        // Email is good
        return true
    } else {
        // Email is bad
        return false
    }
}

function validate_password(password) {
    if (password.length < 6) {
        // Password is bad
        return false
    } else {
        // Password is good
        return true
    }
}

function validate_fields(field) {
    if (field == null) {
        // Field is bad
        return false
    }

    if (field.length <= 0) {
        // Field is bad
        return false
    } else {
        // Field is good
        return true
    }
}