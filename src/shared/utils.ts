const sleep = (time: number) =>
  new Promise(resolve => {
    setTimeout(resolve, time);
  });

const convertToTime = (time: number) => {
  let minutes = parseInt((time / 60).toString(), 10).toString();
  let seconds = parseInt((time % 60).toString(), 10).toString();

  minutes = +minutes < 10 ? "0" + minutes : minutes;
  seconds = +seconds < 10 ? "0" + seconds : seconds;

  return minutes + ":" + seconds;
};
export { sleep, convertToTime };
