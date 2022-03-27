
let list = document.querySelectorAll(".list");
let itemBox = document.querySelectorAll(".item_box");

list.forEach((e) => {
  e.addEventListener("click", function () {
    list.forEach((e) => {
      e.classList.remove("active");
    });
    this.classList.add("active");
    let dataFilter = this.getAttribute("data-filter");

    // filtering the box and add hide and remove class
    itemBox.forEach((e) => {  
      e.classList.add("hide");
    // remove class
      if (e.getAttribute("data-item") == dataFilter || dataFilter == "all") {
        e.classList.remove("hide");
      }
    });
  });
});
