"use strict";

class Timer {
  constructor(time) {
    this.time = time;

    this.seconds = new Counter(this.time[3], "seconds");
    this.minutes = new Counter(this.time[2], "minutes");
    this.hours = new Counter(this.time[1], "hours");
    this.days = new Counter(this.time[0], "days");

    setInterval(this.tick.bind(this), 1000);
  }

  tick() {
    this.seconds.tick();

    if (this.seconds.value === 59) {
      this.minutes.tick();

      if (this.minutes.value === 59) {
        this.hours.tick();

        if (this.hours.value === 59) this.days.tick();
      }
    }
  }
}