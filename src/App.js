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
        <div className="description">
          <p>
            Welcome to react-happy-player, a low-config react component for a
            stylish video player. Intended to provide easy control on the video
            playback.
          </p>
          <p>
            See the{" "}
            <a href="https://github.com/JulienDemarque/react-happy-video">
              repo
            </a>
          </p>
          <p>
            See the{" "}
            <a href="https://www.npmjs.com/package/react-happy-video">
              package
            </a>{" "}
            on npm
          </p>
        </div>

        <div className="exemple">
          <div className="code">
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
          </div>
          <div className="video-player">
            <h3>Result: </h3>
            <VideoPlayer
              width="100%"
              color="#3b3346"
              source="https://dbofqilsy3dz.cloudfront.net/ya-sahra-homepage-low-bitrate.mp4"
            />
          </div>
        </div>

        <hr />

        <div className="exemple">
          <div className="code">
            <h3>Code: </h3>
            <pre>
              <code className="language-jsx">
                {`<VideoPlayer
  width="100%"
  color="#FF5216"
  source="[theurl]"
/>`}
              </code>
            </pre>
          </div>
          <div className="video-player">
            <h3>Result: </h3>
            <VideoPlayer
              width="100%"
              color="#FF5216"
              source="https://dbofqilsy3dz.cloudfront.net/ya-sahra-homepage-low-bitrate.mp4"
            />
          </div>
        </div>

        <hr />

        <div className="exemple">
          <div className="code">
            <h3>Code: </h3>
            <pre>
              <code className="language-jsx">
                {`<VideoPlayer
  width="100%"
  color="#0F9F4F"
  source="[theurl]"
/>`}
              </code>
            </pre>
          </div>
          <div className="video-player">
            <h3>Result: </h3>
            <VideoPlayer
              width="100%"
              color="#0F9F4F"
              source="https://dbofqilsy3dz.cloudfront.net/ya-sahra-homepage-low-bitrate.mp4"
            />
          </div>
        </div>

        <hr />

        <div className="exemple">
          <div className="code">
            <h3>Code: </h3>
            <pre>
              <code className="language-jsx">
                {`<VideoPlayer
  width="100%"
  color="#F8B700"
  source="[theurl]"
/>`}
              </code>
            </pre>
          </div>
          <div className="video-player">
            <h3>Result: </h3>
            <VideoPlayer
              width="100%"
              color="#F8B700"
              source="https://dbofqilsy3dz.cloudfront.net/ya-sahra-homepage-low-bitrate.mp4"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
