import React, { useEffect } from "react";
import Navigation from "../../components/navigation/navigation";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Link } from "react-router-dom";
import { getStorageValue, useLocalStorage } from "../../utils/useLocalStorage";
import mock_post_data, { calculateReadLength } from "../../post-data";
import moment from "moment";

const NewStory = () => {
    // Retrieve the values that are stored in local storage using a specified key
    const [title, setTitle] = useLocalStorage("title", "");
    const [text, setText] = useLocalStorage("text", "");
    const [posts, setPosts] = useLocalStorage("post", "");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // This function is triggered after the new story form is submitted
    const submitPost = () => {
        // Construct a new object with all the user entered fields
        const postData = {
            title: getStorageValue("title", ""),
            postImage:
                "https://images.pexels.com/photos/69797/morocco-africa-desert-marroc-69797.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            text: getStorageValue("text", ""),
            author: getStorageValue("name", ""),
            group: "Javaland",
            date: moment().format("MMM Do"),
            read_length: calculateReadLength(getStorageValue("text", "")),
        };

        // Validate if we are inserting or appending to the current posts data
        if (posts) {
            postData.id = posts.length + 1;
            setPosts([...posts, postData]);
            console.log("Not Empty", posts);
        } else {
            postData.id = mock_post_data.length + 1;
            setPosts([...mock_post_data, ...posts, postData]);
            console.log("Empty", posts);
        }

        // Store the resulting data in the appropriate temporary variable
        localStorage.setItem("post", posts);

        // Navigate to the "/feed" page
        window.location.href = "/feed";
        console.log("Submitted");

        // Clear out all of the form inputs
        clearInputs();
    };

    // Function to clear all of the form inputs
    const clearInputs = () => {
        setTitle("");
        setText("");
    };

    return (
        <>
            <Navigation title="Draft" submit={submitPost} />
            <div className="story__button__container__back">
                <Link to="/feed">
                    <button className="story__button__back">
                        <i className="fas fa-arrow-left"></i> <span>Back</span>
                    </button>
                </Link>
            </div>
            <div id="new__story">
                {/* Captures the input entered by the user in realtime then stores the value into a specified state variable */}
                <input
                    id="new__story__input__title"
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title..."
                />
                {/* Captures the input entered by the user in realtime then stores the value into a specified state variable */}
                <textarea
                    className="new__story__input__text"
                    type="text"
                    name="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Add your story here..."
                />
            </div>
        </>
    );
};

export default NewStory;
