class ProgressCircle {
  constructor(container) {
    this.container = document.querySelector(`.${container}`);
    this.progressCircle = this.container.querySelector(".progress__circle");
    this.circle = this.container.querySelector(".circle");
    this.frontCircle = this.container.querySelector(".circle__front");
    this.percentInput = document.getElementById("valueInput");
    this.animateInput = document.getElementById("animateInput");
    this.hideInput = document.getElementById("hideInput");

    this.isAnimating = false;
    this.isHidden = false;

    this.percentInput.addEventListener("input", () =>
      this.setValue(this.percentInput.value)
    );
    this.animateInput.addEventListener("change", () =>
      this.toggleAnimate(this.animateInput.checked)
    );
    this.hideInput.addEventListener("change", () =>
      this.toggleHide(this.hideInput.checked)
    );

    this.updateProgress(0);
  }

  setValue(value) {
    value = parseInt(value, 10);
    if (this.percentInput.value === "") {
      value = 0;
    }
    if (value > 100) {
      this.percentInput.value = 100;
      value = 100;
    } else if (value < 0) {
      this.percentInput.value = 0;
      value = 0;
    }

    this.updateProgress(value);
  }

  updateProgress(value) {
    const radius = this.frontCircle.attributes.r.value;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (value / 100) * circumference;
    this.frontCircle.style.strokeDasharray = `${circumference} ${circumference}`;
    this.frontCircle.style.strokeDashoffset = offset;
  }

  toggleAnimate(isAnimating) {
    isAnimating
      ? this.circle.classList.add("rotating")
      : this.circle.classList.remove("rotating");
  }

  toggleHide(isHidden) {
    this.progressCircle.style.opacity = isHidden ? "0" : "1";
  }
}

const progressBlock = new ProgressCircle("progress");
