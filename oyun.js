//! yakalanan elementler

const resimdiv = document.getElementById("resimdiv");
const youskor = document.getElementById("youskor");
const pcskor = document.getElementById("pcskor");
const tiklananresim = document.getElementById("tiklananresim");
const tiklananresimyou = document.getElementById("tiklananresimyou");
const tiklananresimpc = document.getElementById("tiklananresimpc");
const result = document.querySelector(".result");
const final = document.getElementById("final");
const modalbuton = document.getElementById("modal-ok");
const modal = document.querySelector(".modal");
const modalcontainer = document.querySelector(".modal-container");

let yousecim;
let pcsecim;

const altlar = ["kagit", "makas", "tas"];

//! fonksiyon ve diğer işlemler
resimdiv.addEventListener("click", (e) => {
  if (e.target.getAttribute("alt")) {
    yousecim = e.target.getAttribute("alt");
    tiklananresimyou.innerHTML = `
<img src=./oyunresim/${yousecim}.png ></img>
`;
  }
  pc();
  sonuc();
});

function pc() {
  pcsecim = altlar[Math.floor(Math.random() * 3)];
  tiklananresimpc.innerHTML = `
<img src=./oyunresim/${pcsecim}.png ></img>
`;
}

function win() {
  result.classList.add("cik");
  result.textContent = "kazandın";
  resimdiv.style.boxShadow = "3px 3px 10px 1px #5AB7AC";
  result.style.backgroundColor = "#5AB7AC";
  youskor.innerText++;
}

function lost() {
  result.classList.add("cik");
  result.textContent = "kaybettin";
  resimdiv.style.boxShadow = "3px 3px 10px 1px #fb778b";
  result.style.backgroundColor = "#fb778b";
  result.style.fontSize = "20px";
  pcskor.innerText++;
}
function beraber() {
  result.classList.add("cik");
  result.textContent = "berabere";
  resimdiv.style.boxShadow = "3px 3px 10px 1px #FFFF00";
  result.style.backgroundColor = "#FFFF00";
}

function sonuc() {
  switch (yousecim) {
    case "tas":
      if (pcsecim === "kagit") {
        lost();
      } else if (pcsecim === "makas") {
        win();
      }
      break;
    case "kagit":
      if (pcsecim === "makas") {
        lost();
      } else if (pcsecim === "tas") {
        win();
      }
      break;
    case "makas":
      if (pcsecim === "kagit") {
        win();
      } else if (pcsecim === "tas") {
        lost();
      }

      break;

    default:
      break;
  }
  if (yousecim === pcsecim) {
    beraber();
  }
  if (youskor.innerText == "3") {
    final.innerHTML = " 💃 KAZANDIN 🎈";
    modal.style.backgroundColor = "#5AB7AC";
    modalbuton.style.color = "#5AB7AC";
    modalcontainer.classList.add("show");
  } else if (pcskor.innerText == "3") {
    modalcontainer.classList.add("show");
  }
}

modalbuton.addEventListener("click", () => {
  window.location.reload();
});
