function handleVisibilityChange() {
  const video = document.querySelector("video");
  if (!video) return;

  if (document.visibilityState === "visible") {
    video.play();
    console.log("▶️ Chrome active - playing video");
  } else {
    video.pause();
    console.log("⏸ Chrome inactive - pausing video");
  }
}

document.addEventListener("visibilitychange", handleVisibilityChange);
