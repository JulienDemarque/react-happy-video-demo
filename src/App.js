import React, { Component } from "react";
import VideoPlayer from "react-happy-video";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>react-happy-video demo</h1>
        <div className="video-player">
          <VideoPlayer
            width="100%"
            color="#3b3346"
            source="https://s3.us-east-2.amazonaws.com/freecodecamp-hackaton/videos-for-testing/Dunes1.mp4"
          />
        </div>
        <div className="video-player">
          <VideoPlayer
            width="100%"
            color="#FF5216"
            source="https://s3.us-east-2.amazonaws.com/freecodecamp-hackaton/videos-for-testing/Dunes1.mp4"
          />
        </div>
        <div className="video-player">
          <VideoPlayer
            width="100%"
            color="#0F9F4F"
            source="https://s3.us-east-2.amazonaws.com/freecodecamp-hackaton/videos-for-testing/Dunes1.mp4"
          />
        </div>
        <div className="video-player">
          <VideoPlayer
            width="100%"
            color="#F8B700"
            source="https://s3.us-east-2.amazonaws.com/freecodecamp-hackaton/videos-for-testing/Dunes1.mp4"
          />
        </div>
      </div>
    );
  }
}

export default App;
