import './App.css';
import SHA256 from 'crypto-js/sha256';

function loginClick(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(event.target); // Create a FormData object
    const username = formData.get('username'); // Get the username input value
    const password = formData.get('password'); // Get the password input value

    console.log('Username:', username);
    console.log('Password:', password);

    // Hash the password using SHA256
    const hashedPassword = SHA256(password).toString();

    console.log('Hashed Password:', hashedPassword);

    // Store login state (example purpose)
    localStorage.setItem("isLoggedIn", true);

    // Reload the page (for example purposes)
    window.location.reload();
}

function Login() {
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={loginClick}>
            Username: <input type="text" name="username" />
            Password: <input type="password" name="password" />
            <button type="submit">Login</button>
        </form>
    </div>
  );
}

export default Login;
