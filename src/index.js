class CountdownTimer {
  constructor() {
    this.refs = {
      days: document.querySelector('.days'),
      hours: document.querySelector('.hours'),
      mins: document.querySelector('.mins'),
      secs: document.querySelector('.secs'),
    };
    this.id = null;
    this.targetDate = null;
  }

  calc = () => {
    const currentDate = Date.now();
    const delta = (this.targetDate - currentDate) / 1000;
    // const days = Math.floor(delta / (1000 * 60 * 60 * 24));
    // const hours = Math.floor(
    //   (delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    // );
    // const mins = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((delta % (1000 * 60)) / 1000);

    // this.refs.days.textContent = days < 10 ? `0${days}` : days;
    // this.refs.hours.textContent = hours < 10 ? `0${hours}` : hours;
    // this.refs.mins.textContent = mins < 10 ? `0${mins}` : mins;
    this.refs.secs.textContent = secs < 10 ? `0${secs}` : secs;
    console.log(this.targetDate);
    console.log(delta);
  };
  timerStart = () => {
    this.id = setInterval(this.calc, 1000);
  };
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('August 18, 2023 00:00:00').getTime(),
});
window.addEventListener('DOMContentLoaded', timer.timerStart);
//console.log(new Date('August 18, 2023 00:00:00').getTime());
