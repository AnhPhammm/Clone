import React from "react";
import { PlayCircleOutlined } from "@ant-design/icons";


class Video extends React.Component {
  componentDidMount = () => {
    this.playVideo();
  };

  componentWillUnmount = () => {
      this.pauseVideo();
  };


  playVideo = () => {
    // You can use the play method as normal on your video ref
    this.refs.vidRef.play();
  };

  pauseVideo = () => {
    // Pause as well
    this.refs.vidRef.pause();
  };

  render = () => {
    return (
      <div>
        <video
          ref="vidRef"
          src="https://d1uoy7w9kqjh3s.cloudfront.net/pub/company/10007309197/banner/f41e549e-d8d4-473f-a328-793745a6e870-recruiting-movie.mp4#t=0.001"
          type="video/mp4"
        />
        <div>
          
          <button onClick={this.playVideo}> 
            Play!
          </button>
          <button onClick={this.pauseVideo}>
            Pause!
          </button>
        </div>
      </div>
    );
  };
}

export default Video;