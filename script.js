const tri = document.getElementById("triangle").getContext("2d");

//Prostor koji je potreban da se odvoji da bi glavni trougao bio jednakostranican
const beliProstor = 600 - (600 * Math.sqrt(3)) / 2;

const nacrtajTrougao = (trougao, fillStyle) => {
  const { prvaTacka, drugaTacka, trecaTacka } = trougao;

  tri.fillStyle = fillStyle;
  tri.beginPath();
  tri.moveTo(prvaTacka.x, prvaTacka.y);
  tri.lineTo(drugaTacka.x, drugaTacka.y);
  tri.lineTo(trecaTacka.x, trecaTacka.y);
  tri.closePath();
  tri.fill();
};

const visinaTrougla = (stranica) => {
  return (stranica * Math.sqrt(3)) / 2;
};

const izracunajDuzinu = ({ x1, y1 }, { x2, y2 }) => {
  let y = x2 - x1;
  let x = y2 - y1;

  return Math.sqrt(x * x + y * y);
};

//brojac oznacava koliku dubinu u trouglu zelimo
const sjerpinskiTrougao = (duzina, tackaVrh, brojac) => {
  const visina = visinaTrougla(duzina);

  const trougao = {
    prvaTacka: {
      x: tackaVrh.x - duzina / 4,
      y: tackaVrh.y + visina / 2,
    },
    drugaTacka: {
      x: tackaVrh.x + duzina / 4,
      y: tackaVrh.y + visina / 2,
    },
    trecaTacka: {
      x: tackaVrh.x,
      y: tackaVrh.y + visina,
    },
  };

  nacrtajTrougao(trougao, "white");

  //Sledece tacke oznacavaju vrhove gornjeg, levog i desnog trougla
  const tackaVrh2 = {
    x: trougao.trecaTacka.x,
    y: tackaVrh.y,
  };

  const tackaVrh3 = {
    x: trougao.prvaTacka.x,
    y: trougao.prvaTacka.y,
  };

  const tackaVrh4 = {
    x: trougao.drugaTacka.x,
    y: trougao.drugaTacka.y,
  };

  //Za svaki trougao idemo u rekurziju do odredjene dubine
  if (brojac) {
    sjerpinskiTrougao(duzina / 2, tackaVrh2, brojac - 1);
    sjerpinskiTrougao(duzina / 2, tackaVrh3, brojac - 1);
    sjerpinskiTrougao(duzina / 2, tackaVrh4, brojac - 1);
  }
};

const glavniTrougao = {
  prvaTacka: {
    x: 0,
    y: 600,
  },
  drugaTacka: {
    x: 300,
    y: beliProstor,
  },
  trecaTacka: {
    x: 600,
    y: 600,
  },
};

const duzinaGlavnog = 600;
const visina = (duzinaGlavnog * Math.sqrt(3)) / 2;

const vrhovnaTacka = {
  x: duzinaGlavnog / 2,
  y: beliProstor,
};

const select = document.getElementById("trouglovi");
const dugmeIscrtaj = document.getElementById("iscrtaj");
const bojaInput = document.getElementById("boja");

const iscrtajSve = () => {
  let broj = select.options[select.selectedIndex].value;
  let boja = bojaInput.value;
  //Iscrtavanje glavnog trougla
  nacrtajTrougao(glavniTrougao, boja);
  //Iscrtavanje ostalih trouglova kako bismo dobili SJerpinski trougao
  sjerpinskiTrougao(duzinaGlavnog, vrhovnaTacka, broj - 1);
};

dugmeIscrtaj.addEventListener("click", iscrtajSve);
