const content = document.querySelector(".content");
const btnNew = document.querySelector(".addNote-content");

let items_db = localStorage.getItem("item_db")
  ? JSON.parse(localStorage.getItem("item_db"))
  : [];

const colors = [
  "#845EC2",
  "#008F7A",
  "#008E9B",
  "#FFC75F",
  "#FF8066",
  "#BA3CAF",
];
const randomColor = () => colors[Math.floor(Math.random() * colors.length)];

function loadItems() {
  content.innerHTML = "";
  verifyNulls();

  items_db.forEach((item) => {
    addHTML(item);
  });
}

btnNew.onclick = () => {
  addHTML();
};

function addHTML(item) {
  const div = document.createElement("div");

  div.innerHTML = `<div class="item" style="background-color: ${
    item?.color || randomColor()
  }"> <span class="remove">X</span> <textarea>${
    item?.text || ""
  }</textarea></div>`;
  content.appendChild(div);
}

function addEvents() {
  const notes = documents.querySelectorAll(".item textarea");
  const remove = documents.querySelectorAll(".item .remove");

  notes.forEach((item, i) => {
    item.oninput = () => {
      items_db[i] = {
        text: item.value,
        color: item.value,
        color: items_db[i]?.color || item.parentElement.style.backgroundColor,
      };
      localStorage.setItem("items_db", JSON.stringify(items_db));
    };
  });

  remove.forEach((item, i) => {
    item.onclick = () => {
      content.children[i].remove();
      if (item_db[i]) {
        item_db.splice(i, 1);
        localStorage.setItem("item_db", JSON.stringify(item_db));
      }
      addEvents();
    };
  });
}
function verifyNulls() {
  items_db = items_db.filter((item) => item);
  localStorage.setItem("item_db", JSON.stringify(items_db));
}

loadItems();
