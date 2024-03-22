const progressCircle = document.querySelector(".progress-ring-circle");
const radius = progressCircle.r.baseVal.value;
const progressBar = document.querySelector(".progress-bar");
const percentInput = document.querySelector(".percent");
const animateCheckbox = document.querySelector("#animate-checkbox");
const hideCheckbox = document.querySelector("#hide-checkbox");
const circumference = 2 * Math.PI * radius;

percentInput.addEventListener("input", () => {
  let percent = parseInt(percentInput.value);
  if (percent > 100) {
    percent = 100;
    percentInput.value = percent;
  }
  setProgress(percent);
});

progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
progressCircle.style.strokeDashoffset = circumference;

function setProgress(percent) {
  const offset = circumference - (percent / 100) * circumference;
  progressCircle.style.strokeDashoffset = offset;
}

animateCheckbox.addEventListener("change", () => {
  if (animateCheckbox.checked) {
    const value = percentInput.value;
    setProgress(0);
    setTimeout(() => {
      progressCircle.style.animation = "rotate 2s linear infinite";
      setProgress(value);
    }, 0);
  } else {
    const value = percentInput.value;
    setProgress(0);
    setTimeout(() => {
      progressCircle.style.animation = "none";
      setProgress(value);
    }, 0);
  }
});

hideCheckbox.addEventListener("change", () => {
  progressBar.style.display = hideCheckbox.checked ? "none" : "block";
});
