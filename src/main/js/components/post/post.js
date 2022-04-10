import Avatar from "react-avatar";

const Post = (props) => {
    return (
        <div id="post">
            <div className="post__column">
                <div id="post__column__profile__image__container">
                    <Avatar
                        name={props.author}
                        round={true}
                        size="30"
                        textSizeRatio={3}
                    />
                    <h2>
                        {props.author} <span>in</span> {props.group}
                    </h2>
                </div>
                <div id="post__column__text__container">
                    <h2>{props.title}</h2>
                    {/* Create a preview of the article contents by limiting the amount of characters displayed to 220 */}
                    <p>{props.text.slice(0, 220)}...</p>
                    <p>
                        {props.date} · {props.read_length} min read ·{" "}
                        <span>Selected for you</span>
                    </p>
                </div>
            </div>
            <div className="post__column">
                <div id="post__column__image__container">
                    <img
                        id="post__column__image"
                        alt="profile"
                        src={props.postImage}
                    />
                </div>
            </div>
        </div>
    );
};

export default Post;
