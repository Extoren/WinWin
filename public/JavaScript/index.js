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
    firebase.initializeApp(firebaseConfig);
    const analytics = firebase.analytics();
    const db = firebase.database();
    const auth = firebase.auth();

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
    auth.createUserWithEmailAndPassword(Email, Password)
    .then((userCredential) => {
        // User created, now store the additional data
        const user = userCredential.user;
        const userRef = ref(db, 'users/' + user.uid);
        set(userRef, {
            Name: Name,
            LastName: LastName,
            Email: Email,
            Date: Date,
            Address: Address
        });
    })
    .catch((error) => {
        // Handle errors here
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error code: " + errorCode);
        console.log("Error message: " + errorMessage);
        alert("Error: " + error.message);
    });

    db.ref('.info/connected').on('value', (snapshot) => {
        if (snapshot.val() === false) {
            alert("Cannot connect to the database. Please check your internet connection.");
        }
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