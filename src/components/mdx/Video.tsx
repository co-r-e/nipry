"use client";

import styles from "./Media.module.css";

interface VideoProps {
  src: string;
  title?: string;
  autoPlay?: boolean;
}

export function Video({ src, title, autoPlay = false }: VideoProps) {
  const isYouTube = src.includes("youtube.com") || src.includes("youtu.be");
  const isVimeo = src.includes("vimeo.com");

  if (isYouTube || isVimeo) {
    return (
      <div className={styles.videoWrapper}>
        <iframe
          src={src}
          title={title ?? "Video"}
          className={styles.videoIframe}
          allowFullScreen
          sandbox="allow-same-origin allow-scripts allow-presentation allow-popups"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    );
  }

  return (
    <video
      src={src}
      title={title}
      className={styles.videoNative}
      controls
      autoPlay={autoPlay}
      muted={autoPlay}
    />
  );
}
