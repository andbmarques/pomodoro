export const timeToMiliseconds = (timeObject) => {
  if (timeObject) {
    let totalTime = timeObject.seconds;

    totalTime += timeObject.minutes * 60;

    return totalTime;
  }
};

export const milisecondsToTime = (miliseconds) => {
  let formatedTime = miliseconds / 1000;
  let minutes, seconds;

  minutes = Math.floor(formatedTime / 60);
  seconds = formatedTime % 60;

  let formatedMinutes = minutes.toString();
  let formatedSeconds = seconds.toString();

  if (minutes < 10) formatedMinutes = "0" + formatedMinutes;
  if (seconds < 10) formatedSeconds = "0" + formatedSeconds;

  return `${formatedMinutes}:${formatedSeconds}`;
};
