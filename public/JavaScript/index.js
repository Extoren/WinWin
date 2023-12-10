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
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
    
        // Additional user data
        var name = document.getElementById('name').value;
        var lastName = document.getElementById('lastName').value;
        var birthDate = document.getElementById('birthDate').value;
        var address = document.getElementById('address').value;
        var userType = document.querySelector('input[name="userType"]:checked').value;
    
        // Create user with email and password
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in and User created 
                var user = userCredential.user;
    
                // Add additional user data to the database
                firebase.database().ref('users/' + user.uid).set({
                    name: name,
                    lastName: lastName,
                    email: email,
                    birthDate: birthDate,
                    address: address,
                    userType: userType
                });
    
                console.log("User successfully registered and added to database");
            })
            .catch((error) => {
                console.error("Error registering user: ", error);
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