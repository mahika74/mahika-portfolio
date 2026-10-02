'use client';

import { useRef, useState } from 'react';

export default function IntroVideo() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      try {
        video.muted = false;
        video.volume = 1;
        await video.play();
      } catch (error) {
        console.error('Could not play intro video:', error);
      }
    } else {
      video.pause();
    }
  };

  return (
    <div className="video-card">
      <video
        ref={videoRef}
        src="/mahika-intro.mp4"
        poster="/intro-poster.jpg"
        playsInline
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => {
          setPlaying(false);
          if (videoRef.current) videoRef.current.currentTime = 0;
        }}
        onClick={togglePlayback}
        aria-label="Mahika portfolio introduction video"
      />

      <div className="video-vignette" aria-hidden="true" />

      <div className="video-brand-cover" aria-hidden="true">
        <span>MAHIKA</span>
        <small>AI / ML PORTFOLIO</small>
      </div>

      <button
        className={`play-btn ${playing ? 'is-playing' : ''}`}
        onClick={togglePlayback}
        aria-label={playing ? 'Pause introduction' : 'Play introduction with sound'}
      >
        <span className="play-icon">{playing ? 'Ⅱ' : '▶'}</span>
        <span>
          <small>12 sec introduction</small>
          {playing ? 'Pause intro' : 'Play with sound'}
        </span>
      </button>
    </div>
  );
}
