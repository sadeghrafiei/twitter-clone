import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";
import Profile from "../../../assets/images/profile.png";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import Gif from "../../../assets/gif/CV.gif";
import {
  ChatBubbleOutline,
  FavoriteBorder,
  Publish,
  Repeat,
} from "@material-ui/icons";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={Profile} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Sadegh Rafiei{" "}
              <span className="post__headerSpecial">
                <VerifiedUserIcon className="post__badge" /> @sadeghrafiei
              </span>
            </h3>
            <div className="post__headerDescription">
              <p>
                let to build a Twitter clone with react.js material-ui firebase
              </p>
            </div>
          </div>
          <img
            src="https://media.giphy.com/media/VTtANKl0beDFQRLDTh/giphy.gif"
            alt="gif"
          />
          <div className="post__footer">
            <ChatBubbleOutline fontSize="small" />
            <Repeat fontSize="small" />
            <FavoriteBorder fontSize="small" />
            <Publish fontSize="small" />
          </div>
        </div>
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Sadegh Rafiei{" "}
              <span className="post__headerSpecial">
                <VerifiedUserIcon className="post__badge" /> @sadeghrafiei
              </span>
            </h3>
            <div className="post__headerDescription">
              <p>just coding</p>
            </div>
          </div>
          <img
            src="https://media.giphy.com/media/PiQejEf31116URju4V/giphy.gif"
            alt="gif"
          />
          <div className="post__footer">
            <ChatBubbleOutline fontSize="small" />
            <Repeat fontSize="small" />
            <FavoriteBorder fontSize="small" />
            <Publish fontSize="small" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
