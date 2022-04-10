import React from "react";

const Popup = (props) => {

    return (
        <div id="popup__overlay">
            <div id="popup__container">
                <div>
                    <span onClick={props.onClose}>
                        <i className="fas fa-times"></i>
                    </span>
                </div>
                <h1>Challenge: {props.challenge}
                </h1>
                <h2>{props.intro}
                </h2>
                <p>{props.text}</p>
                {props.children}
            </div>
        </div>
    );
};

export default Popup;
