// custom countdown timer
// author - Arsh
// github - https://github.com/Arsh23/

const endtime = 'January 10 2018 10:00:00 GMT+05:30';
let id = 0;

function getTimeRemaining(endtime) {
  const t = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((t / 1000) % 60);
  const minutes = Math.floor((t / 1000 / 60) % 60);
  const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  const days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    days,
    hours,
    minutes,
    seconds
  };
}

function update_clock() {
  const t = getTimeRemaining(endtime);
  const d = `0${t.days}`.slice(-2);
  const h = `0${t.hours}`.slice(-2);
  const m = `0${t.minutes}`.slice(-2);
  const s = `0${t.seconds}`.slice(-2);

  $('.days').html(d);
  $('.hours').html(h);
  $('.mins').html(m);
  $('.secs').html(s);

  if (t.total <= 0) {
    clearInterval(id);
  }
}

update_clock();
id = setInterval(update_clock, 1000);
