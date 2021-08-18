class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.refs = {
      days: document.querySelector('.value[data-value="days"]'),
      hours: document.querySelector('.value[data-value="hours"]'),
      mins: document.querySelector('.value[data-value="mins"]'),
      secs: document.querySelector('.value[data-value="secs"]'),
    };
  }

  calc = () => {
    const currentDate = Date.now();
    const delta = this.targetDate - currentDate;
    if (delta < 0) {
      this.timerStop;
    } else {
      const days = Math.floor(delta / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const mins = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((delta % (1000 * 60)) / 1000);
      this.refs.days.textContent = days < 10 ? `0${days}` : days;
      this.refs.hours.textContent = hours < 10 ? `0${hours}` : hours;
      this.refs.mins.textContent = mins < 10 ? `0${mins}` : mins;
      this.refs.secs.textContent = secs < 10 ? `0${secs}` : secs;
    }
  };
  timerStart = () => {
    this.selector = setInterval(this.calc, 1000);
  };
  timerStop = () => {
    clearInterval(this.selector);
  };
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 31, 2021').getTime(),
});

window.addEventListener('DOMContentLoaded', timer.timerStart);
