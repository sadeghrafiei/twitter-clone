import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import profile from "../../../assets/images/profile.png";
import db from "../../../firebase/firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Admin",
      username: "admin_test",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://scontent-lga3-1.cdninstagram.com/v/t51.2885-19/s150x150/69617706_2400013716787024_7538731089922097152_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_ohc=3iL7thBDApUAX8xXWxc&tp=1&oh=2286a1ce4117455f9cf8cb085644b89d&oe=60600D80",
    });
    setTweetImage("");
    setTweetMessage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src={profile} />
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
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
