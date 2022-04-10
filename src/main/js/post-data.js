// Images
import postImageOne from "./assets/blog-bg-one.jpg";
import postImageTwo from "./assets/blog-bg-two.jpg";
import postImageThree from "./assets/blog-bg-three.jpg";
import postImageFour from "./assets/blog-bg-four.jpg";
import postImageFive from "./assets/blog-bg-five.jpg";

// Mock Text
const mock_text =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, \n \n when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

/**
 * Function used to calculate the length of time it takes to reach each blog post
 * @param {*} text The text within the blog post
 * @returns A rounded number in minutes
 */
export const calculateReadLength = (text) => {
    return Math.round(text.length / 200);
};

// Mock Data
const posts = [
    {
        id: 1,
        title: "Web Application Architecture",
        postImage: postImageOne,
        text: mock_text,
        author: "Shari Merrill",
        group: "Javaland",
        date: "Jan 15",
        read_length: calculateReadLength(mock_text),
    },
    {
        id: 2,
        title: "(Why) Is jQuery Gone?",
        postImage: postImageTwo,
        text: mock_text,
        author: "Tess Jackie",
        group: "Cland",
        date: "Jan 15",
        read_length: calculateReadLength(mock_text),
    },
    {
        id: 3,
        title: "Implement email authentication with React + RESTful API",
        postImage: postImageThree,
        text: mock_text,
        author: "Levi Philip",
        group: "Reactland",
        date: "Jan 15",
        read_length: calculateReadLength(mock_text),
    },
    {
        id: 4,
        title: "Go (Golang): Clean Architecture & Repositories vs Transactions",
        postImage: postImageFour,
        text: mock_text,
        author: "Kristin Salena",
        group: "Angularland",
        date: "Jan 15",
        read_length: calculateReadLength(mock_text),
    },
    {
        id: 5,
        title: "Stop Using Conditional Statements Everywhere in JavaScript, Use an Object Literal instead",
        postImage: postImageFive,
        text: mock_text,
        author: "Allan Mansel",
        group: "Cyberland",
        date: "Jan 15",
        read_length: calculateReadLength(mock_text),
    },
];

export default posts;
