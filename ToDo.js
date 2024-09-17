let inputs = document.getElementById("inp");
let text = document.querySelector(".text");
let btn = document.querySelector(".click");
const Add = function () {
  if (inputs.value == "") {
    alert("Please Enter Task");
  } else {
    let newEle = document.createElement("ul");
    newEle.innerHTML = `${inputs.value} <i class="fa-solid fa-trash"></i>`;

    text.appendChild(newEle);
    inputs.value = "";
    newEle.querySelector("i").addEventListener("click", remove);
    function remove() {
      newEle.remove();
    }
  }
};
btn.addEventListener("click", Add);
inputs.addEventListener("keydown", function (event) {
  console.log(event);

  if (event.key === "ArrowDown") {
    Add();
  }
});
