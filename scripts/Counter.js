"use strict";

class Counter {
  constructor(value, class_name) {
    this.top = document.querySelectorAll(`.${class_name}-top`);
    this.top_number = document.querySelectorAll(`.${class_name}-top div`);

    this.bot = document.querySelectorAll(`.${class_name}-bot`);
    this.bot_number = document.querySelectorAll(`.${class_name}-bot div`);

    this.value = value;
    this.init(value);
  }

  init() {
    this.top_number[1].innerText = this.stringValue(this.value);
    this.bot_number[1].innerText = this.stringValue(this.value);
  }

  stringValue(value) {
    return String(value).padStart(2, "0");
  }

  tick() {
    this.value--;
    if (this.value < 0) this.value = 59;

    this.top_number[this.value % 2].innerText = this.stringValue((this.value + 1) % 60);
    this.bot_number[this.value % 2].innerText = this.stringValue((this.value + 1) % 60);

    this.top_number[(this.value + 1) % 2].innerText = this.stringValue(this.value);
    this.bot_number[(this.value + 1) % 2].innerText = this.stringValue(this.value);

    this.bot[(this.value + 1) % 2].style.zIndex = null;
    this.bot[(this.value + 1) % 2].style.transitionDuration = "0s";
    this.bot[(this.value + 1) % 2].style.transform = "rotateX(90deg)";

    this.bot[this.value % 2].style.zIndex = "0";

    this.top[(this.value + 1) % 2].style.zIndex = "0";
    this.top[(this.value + 1) % 2].style.transitionDuration = "0s";
    this.top[(this.value + 1) % 2].style.transform = null;

    this.top[this.value % 2].style.transform = "rotateX(90deg)";

    setTimeout(() => {
      this.top[(this.value + 1) % 2].style.zIndex = null;
      this.top[(this.value + 1) % 2].style.transitionDuration = null;

      this.bot[(this.value + 1) % 2].style.transitionDuration = null;
      this.bot[(this.value + 1) % 2].style.transform = "rotateX(0deg)";
    }, 500);
  }
}