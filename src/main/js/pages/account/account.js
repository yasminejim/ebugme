import React, { useState, useEffect } from "react";
import Signin from "../../components/signin/signin";
import Signup from "../../components/signup/signup";

const Account = (props) => {
    // Function that triggers as soon as the page loads
    useEffect(() => {
        // Scroll to the top of the screen as the page loads
        window.scrollTo(0, 0);
    }, []);

    // State variable
    const [isRegistered, setIsRegistered] = useState(true);

    // Function that toggles the isRegistered state variable
    const updateToggle = () => {
        setIsRegistered(!isRegistered);
    };

    const Form = () => {
        // If the isRegistered state variable is set to true then display the signIn component otherwise display the signup component
        if (isRegistered) {
            return <Signin update={updateToggle} />;
        }
        return <Signup update={updateToggle} />;
    };
    return (
        <>
            <div id="account">
                {/* Render the Form function declared above */}
                <Form />
            </div>
        </>
    );
};

export default Account;
