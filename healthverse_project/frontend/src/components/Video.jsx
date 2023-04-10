import { FaPlay, FaPause } from "react-icons/fa";

import React, { useState, useEffect } from "react";
import "../components/video.css";

function VideoPlaylist() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [videos, setVideos] = useState([]);
  const [isPlaying, setIsPlaying] = useState({});

  useEffect(() => {
    fetch("http://127.0.0.1:8000/videos/")
      .then((response) => response.json())
      .then((data) => {
        setVideos(data);
        setActiveVideo(data[0]);
        // initialize isPlaying state for each video
        setIsPlaying(
          data.reduce((obj, video) => ({ ...obj, [video.id]: false }), {})
        );
      })
      .catch((error) => console.error(error));
  }, []);

  const handleVideoClick = (video) => {
    setActiveVideo(video);
    setIsPlaying((prevState) => ({ ...prevState, [video.id]: true }));
  };

  const handlePlayPauseClick = () => {
    setIsPlaying((prevState) => ({
      ...prevState,
      [activeVideo.id]: !prevState[activeVideo.id]
    }));
    activeVideo.paused ? activeVideo.play() : activeVideo.pause();
  };

  return (
    <div>
      <style>
        {`
          body {
            min-height: 90vh;
            background: var(--color-gray-600) url('./images/bg_texture..png');
            font-family: sans-serif;
            color: var(--text);
            align-items: center;
          }
        `}
      </style>
      <div className="video-player">
        <div className="containervid">
          <section className="main-video">
            {activeVideo && (
              <video
                src={`http://127.0.0.1:8000${activeVideo.video}`}
                controls
                autoPlay
                muted={!isPlaying[activeVideo.id]}
                ref={(video) => {
                  if (video) {
                    if (isPlaying[activeVideo.id]) {
                      video.play();
                    } else {
                      video.pause();
                    }
                  }
                }}
              />
            )}
          </section>
          <section className="video-playlist">
            <h3 className="title">Title of Video Playlist</h3>
            <div className="videos">
              {videos.map((video, index) => (
                <div
                  key={video.id}
                  className={`video${video === activeVideo ? " active" : ""}`}
                  onClick={() => handleVideoClick(video)}
                >
                  {isPlaying[video.id] ? (
                    <FaPause onClick={handlePlayPauseClick} />
                  ) : (
                    <FaPlay onClick={handlePlayPauseClick} />
                  )}

                  <p>{index + 1 > 9 ? index + 1 : "0" + (index + 1)}. </p>
                  <h3 className="title">{video.caption}</h3>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default VideoPlaylist;
