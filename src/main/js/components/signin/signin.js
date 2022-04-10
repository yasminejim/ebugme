import { getStorageValue } from "../../utils/useLocalStorage";
import { useState } from "react";

const Signin = (props) => {
    // State variables
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [wrongCredentials, setWrongCredentials] = useState(false);

    // Authentication function
    const authenticateUser = (e) => {
        // Prevent the page from loading once this function is triggered
        e.preventDefault();

        // Retrieve the values that are stored in local storage using a specified key
        const savedEmail = getStorageValue("email", "");
        const savedPassword = getStorageValue("password", "");

        // Validates if the values inputted by the user match the values store in local storage
        if (email === savedEmail && password === savedPassword) {
            // Navigate to the "/feed" page
            window.location.href = "/feed";
        } else {
            // If the user inputs credentials that don't match any on file return an error by calling the function below
            setWrongCredentials(true);
            console.log("The email or password entered is incorrect");
        }
    };
    return (
        <div>
            <h1>Welcome back.</h1>

            <form onSubmit={authenticateUser}>
                {/* If the wrongCredentials state variable is set to true then display an error message to the user */}
                {wrongCredentials && (
                    <div id="wrong__credentials__prompt">
                        <p>Incorrect email or password. </p>
                        <span>
                            <i
                                className="fas fa-times"
                                onClick={() => setWrongCredentials(false)}
                            ></i>
                        </span>
                    </div>
                )}
                <div className="signin__container">
                    <label htmlFor="email">Email</label>
                    {/* Captures the input entered by the user in realtime then stores the value into a specified state variable */}
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="signin__container">
                    <label htmlFor="password">Password</label>
                    {/* Captures the input entered by the user in realtime then stores the value into a specified state variable */}
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="signin__container">
                    <input
                        className="form__submit__btn"
                        type="submit"
                        value="Sign in"
                    />
                </div>
                <div id="signup__container">
                    <p>
                        Don't have an account yet?{" "}
                        {/* If this tag is clicked update the UI to hide the sign in UI and display the sign up UI */}
                        <a id="signup__container__link" onClick={props.update}>
                            Create one
                        </a>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Signin;
