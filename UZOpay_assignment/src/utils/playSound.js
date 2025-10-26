export const playSound = (soundFile, volume = 0.3) => {
  const audio = new Audio(soundFile);
  audio.volume = volume;
  audio.play().catch(() => {}); // avoid console warnings if user hasn’t interacted yet
};