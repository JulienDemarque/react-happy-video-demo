import React, { Component } from "react";
import VideoPlayer from "react-happy-video";
import "prismjs";
import "prismjs/components/prism-jsx.min";
import "./prism.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>react-happy-video demo</h1>

        <div className="video-player">
          <h3>Code: </h3>
          <pre>
            <code className="language-jsx">
              {`<VideoPlayer
  width="100%"
  color="#3b3346"
  source="[theurl]"
/>`}
            </code>
          </pre>
          <h3>Result: </h3>
          <VideoPlayer
            width="100%"
            color="#3b3346"
            source="https://dbofqilsy3dz.cloudfront.net/ya-sahra-homepage-low-bitrate.mp4"
          />
        </div>
        <div className="video-player">
          <pre>
            <code className="language-jsx">{`<VideoPlayer
  width="100%"
  color="#FF5216"
  source="[theurl]"
/>`}</code>
          </pre>
          <VideoPlayer
            width="100%"
            color="#FF5216"
            source="https://dbofqilsy3dz.cloudfront.net/ya-sahra-homepage-low-bitrate.mp4"
          />
        </div>
        <div className="video-player">
          <pre>
            <code className="language-jsx">{`<VideoPlayer
  width="100%"
  color="#0F9F4F"
  source="[theurl]"
/>`}</code>
          </pre>
          <VideoPlayer
            width="100%"
            color="#0F9F4F"
            source="https://dbofqilsy3dz.cloudfront.net/ya-sahra-homepage-low-bitrate.mp4"
          />
        </div>
        <div className="video-player">
          <pre>
            <code className="language-jsx">{`<VideoPlayer
  width="100%"
  color="#F8B700"
  source="[theurl]"
/>`}</code>
          </pre>
          <VideoPlayer
            width="100%"
            color="#F8B700"
            source="https://dbofqilsy3dz.cloudfront.net/ya-sahra-homepage-low-bitrate.mp4"
          />
        </div>
      </div>
    );
  }
}

export default App;
