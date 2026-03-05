"use client";

import { useEffect, useRef, useState } from "react";

export default function SmartVideo({
  src,
  poster,
  className = "",
}) {
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1024);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);

          if (isDesktop) {
            video.play().catch(() => {});
          }
        } else {
          video.pause();
        }
      },
      {
        rootMargin: "200px",
        threshold: 0.3,
      }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, [isDesktop]);

  const handleClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  };

  return (
    <video
      ref={videoRef}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      onClick={handleClick}
      className={`${className} cursor-pointer`}
    >
      {shouldLoad && <source src={src} type="video/mp4" />}
    </video>
  );
}
