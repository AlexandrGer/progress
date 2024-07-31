const progressCircle = document.querySelector(".progress__circle");
const circle = document.querySelector(".circle");
const frontCircle = progressCircle.querySelector(".circle__front");
const percentInput = document.getElementById("valueInput");
const animateInput = document.getElementById("animateInput");
const hideInput = document.getElementById("hideInput");

// Слушатель на то, чтобы не вводили числа меньше 0 и больше 100
percentInput.addEventListener("input", function () {
  let value = parseInt(this.value, 10);
  if (this.value === "") {
    value = 0;
  }
  if (value > 100) {
    this.value = 100;
    value = 100;
  } else if (value < 0) {
    this.value = 0;
    value = 0;
  }

  updateProgress(value);
});

// Обновление дуги прогресса
function updateProgress(value) {
  const offset = 566 - (566 * value) / 100;
  frontCircle.style.strokeDashoffset = offset;
}

// Слушатель на скрытие/показ круга-прогресса
hideInput.addEventListener("change", (e) => {
  if (e.target.checked) {
    progressCircle.style.opacity = "0";
  } else {
    progressCircle.style.opacity = "1";
  }
});

// Слушатель на анимацию
animateInput.addEventListener("change", (e) => {
  if (e.target.checked) {
    circle.classList.add("rotating");
  } else {
    circle.classList.remove("rotating");
  }
});
