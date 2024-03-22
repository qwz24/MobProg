const circle = document.querySelector(".progress-ring-circle");
const radius = circle.r.baseVal.value;
const progressBar = document.querySelector(".progress-bar");
const input = document.querySelector(".percent");
const animateCheckbox = document.querySelector("#animate-checkbox");
const hideCheckbox = document.querySelector("#hide-checkbox");

const circumference = 2 * Math.PI * radius;

input.addEventListener("input", function () {
  if (parseInt(this.value) > 100) {
    this.value = "100";
  }
  setProgress(this.value);
});

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

function setProgress(percent) {
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
}

animateCheckbox.addEventListener("change", function () {
  if (this.checked) {
    const value = input.value;
    setProgress(0);
    setTimeout(() => {
      circle.style.transition = "stroke-dashoffset 3s";
      setProgress(value);
    }, 10);
  } else {
    const value = input.value;
    setProgress(0);
    setTimeout(() => {
      circle.style.transition = "none";
      setProgress(value);
    }, 10);
  }
});

hideCheckbox.addEventListener("change", function () {
  progressBar.style.display = this.checked ? "none" : "block";
});
