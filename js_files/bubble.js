async function bubble() {
  console.log("In bubbe()");
  const ele = document.querySelectorAll(".bar");
  for (let i = 0; i < ele.length - 1; i++) {
    console.log("In ith loop");
    for (let j = 0; j < ele.length - i - 1; j++) {
      console.log("In jth loop");
      ele[j].style.background = "yellow";
      ele[j + 1].style.background = "yellow";
      if (parseInt(ele[j].style.height) > parseInt(ele[j + 1].style.height)) {
        console.log("In if condition");
        await waitforme(delay);
        swap(ele[j], ele[j + 1]);
      }
      ele[j].style.background = "red";
      ele[j + 1].style.background = "red";
    }
    ele[ele.length - 1 - i].style.background = "lime";
  }
  ele[0].style.background = "lime";
}

const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener("click", async function () {
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  await bubble();
  enableSortingBtn();
  enableSizeSlider();
  enableNewArrayBtn();
});
