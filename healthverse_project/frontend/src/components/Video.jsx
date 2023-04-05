import React, { useState } from 'react';
import '../components/video.css';

const data = [
  {
    'id': 'a1',
    'title': 'manipulate text background',
    'name': 'manipulate text background.mp4',
    'duration': '2:47',
  },
  {
    'id': 'a2',
    'title': 'build gauge with css',
    'name': 'build gauge with css.mp4',
    'duration': '2:45',
  },
  {
    'id': 'a3',
    'title': '3D popup card',
    'name': '3D popup card.mp4',
    'duration': '24:49',
  },
  {
    'id': 'a4',
    'title': 'customize HTML5 form elements',
    'name': 'customize HTML5 form elements.mp4',
    'duration': '3:59',
  },
  {
    'id': 'a5',
    'title': 'custom select box',
    'name': 'custom select box.mp4',
    'duration': '4:25',
  },
  {
    'id': 'a6',
    'title': 'embed google map to contact form',
    'name': 'embed google map to contact form.mp4',
    'duration': '5:33',
  },
  {
    'id': 'a7',
    'title': 'password strength checker javascript web app',
    'name': 'password strength checker javascript web app.mp4',
    'duration': '0:29',
  },
  {
    'id': 'a8',
    'title': 'custom range slider',
    'name': 'custom range slider.mp4',
    'duration': '1:12',
  },
  {
    'id': 'a9',
    'title': 'animated shopping cart',
    'name': 'animated shopping cart.mp4',
    'duration': '3:38',
  },
];

function VideoPlaylist() {
  const [activeVideo, setActiveVideo] = useState(data[0]);

  const handleVideoClick = (video) => {
    setActiveVideo(video);
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
        //   display: flex;
          align-items: center;
        }
      `}
    </style>
    <div class="video-player">

    <div className="containervid">
      <section className="main-video">
        <video src={`videos/${activeVideo.name}`} controls autoPlay muted></video>
        <h3 className="title">{activeVideo.title}</h3>
      </section>
      <section className="video-playlist">
        <h3 className="title">Title of Video Playlist</h3>
        <p>{data.length} lessons &nbsp; . &nbsp; {data.reduce((totalDuration, video) => {
          const [minutes, seconds] = video.duration.split(':').map(Number);
          return totalDuration + minutes * 60 + seconds;
        }, 0)}s</p>
        <div className="videos">
          {data.map((video, index) => (
            <div
              key={video.id}
              className={`video${video === activeVideo ? ' active' : ''}`}
              onClick={() => handleVideoClick(video)}
            >
              <img src={`images/${video === activeVideo ? 'pause' : 'play'}.svg`} alt="" />
              <p>{index + 1 > 9 ? index + 1 : '0' + (index + 1)}. </p>
              <h3 className="title">{video.title}</h3>
              <p className="time">{video.duration}</p>
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