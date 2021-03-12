import { Avatar, Button } from "@material-ui/core";
import React, { useState } from 'react';
import db from "../firebase";
import "../styles/TweetBox.css";

const TweetBox = () => {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTWeet = (e) => {
        e.preventDefault();

        // Initialized db with first post.
        db.collection("posts").add({
            username: "Liftaris",
            displayName: "Kaio Barbosa",
            avatar: "https://i.pravatar.cc/300",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
        });

        setTweetMessage("");
        setTweetImage("");
    };

    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                    <Avatar src="https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png" />
                    <input
                        value={tweetMessage}
                        onChange={(e) => setTweetMessage(e.target.value)}
                        placeholder="What's happening?"
                        type="text"
                    />

                </div>
                <input
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                    placeholder="Enter an image URL"
                    type="text"
                    className="tweetBox__imageInput"
                />
                <Button onClick={sendTWeet} type="submit" className={"tweetBox__Button"}>
                    Tweet
                </Button>
            </form>
        </div>
    );
}

export default TweetBox;