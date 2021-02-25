import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import { Search } from "@material-ui/icons";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1318663095108177920"} />
        <TwitterTweetEmbed tweetId={"1307698278381879302"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="sadeghrafiei"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://www.instagram.com/mr.sadegh20"}
          options={{ text: "#reactjs is awesome", via: "sadeghrafiei" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
