const decreseButton = document.getElementById('decbtn');
const resetButton = document.getElementById('resetbtn');
const increseButton = document.getElementById('incbtn');
const countLable = document.getElementById('countlable');
let count = 0;

increseButton.onclick = function () {
  count++;
  countLable.textContent = count;
};
decreseButton.onclick = function () {
  count--;
  countLable.textContent = count;
};
resetButton.onclick = function () {
  count = 0;
  countLable.textContent = count;
};
