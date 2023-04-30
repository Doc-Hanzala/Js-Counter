// selecting the elemetns
const value = document.querySelector(".count");
const btns = document.querySelectorAll(".btn");

let count = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const classValue = e.currentTarget.classList;

    // setting the functionality

    if (classValue.contains("decrease")) {
      count--;
    } else if (classValue.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    //   setting the styles

    if (count > 0) {
      value.style.color = "green";
    }

    if (count < 0) {
      value.style.color = "red";
    }

    if (count === 0) {
      value.style.color = "rgb(46, 46, 46)";
    }

    value.textContent = count;
  });
});
