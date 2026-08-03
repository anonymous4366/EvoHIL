const videos = [...document.querySelectorAll('video')];

videos.forEach((video) => {
  video.addEventListener('play', () => {
    videos.forEach((other) => {
      const sameSyncGroup = video.dataset.syncGroup
        && video.dataset.syncGroup === other.dataset.syncGroup;

      if (other !== video && !sameSyncGroup) other.pause();
    });
  });
});
