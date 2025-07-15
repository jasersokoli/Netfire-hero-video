import React, { useRef, useState, useEffect } from 'react';
import '../styles/Hero.css';

const VIDEO_URL = 'https://videos.pexels.com/video-files/9206132/9206132-hd_1920_1080_25fps.mp4';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    // Ensure video auto-plays on mount
    if (videoRef.current) {
      videoRef.current.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    }
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (playing) {
      interval = setInterval(() => {
        if (videoRef.current) setCurrent(videoRef.current.currentTime);
      }, 200);
    } else if (interval) {
      clearInterval(interval);
    }
    return () => { if (interval) clearInterval(interval); };
  }, [playing]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    }
  };

  const onTimeUpdate = () => {
    if (videoRef.current) setCurrent(videoRef.current.currentTime);
  };

  const onLoadedMetadata = () => {
    if (videoRef.current) setDuration(videoRef.current.duration);
  };

  const onSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      videoRef.current.currentTime = Number(e.target.value);
      setCurrent(Number(e.target.value));
    }
  };

  const formatTime = (t: number) => {
    const m = Math.floor(t / 60).toString().padStart(2, '0');
    const s = Math.floor(t % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  // Custom progress bar style
  const progressPercent = duration ? (current / duration) * 100 : 0;

  return (
    <section className="hero">
      <video
        ref={videoRef}
        className="hero__video"
        src={VIDEO_URL}
        autoPlay
        muted
        loop
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onLoadedMetadata}
        playsInline
        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
      />
      <div className="hero__overlay" />
      <div className="hero__content page-width">
        <button className="hero__tag">LOREM IPSUM</button>
        <h1 className="hero__headline">
          Lorem Ipsum Dolor Sit amet          
        </h1>
        <h1 className="hero__headline hero__subheadline">
          Donec cursus ligula diam, nec congue augue ultrices nec.
        </h1>
        <div className="media-player page-width">
          <button className="media-player__play" onClick={togglePlay} aria-label={playing ? 'Pause' : 'Play'}>
            {playing ? <span className="icon-pause" /> : <span className="icon-play" />}
          </button>
          <div className="media-player__progress-bar">
            <div className="media-player__progress-bg">
              <div className="media-player__progress-fg" style={{ width: `${progressPercent}%` }} />
            </div>
            <input
              type="range"
              min={0}
              max={duration}
              value={current}
              step={0.1}
              onChange={onSeek}
              className="media-player__timeline"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
            />
          </div>
          <span className="media-player__time">{formatTime(current)}</span>
        </div>
      </div>
    </section>
  );
};

export default Hero; 