const tri = document.getElementById("triangle").getContext("2d");

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
const func = (duzina, tackaVrh, brojac) => {
  const visina = visinaTrougla(duzina);
  let prvaTacka = {
    x: tackaVrh.x - duzina / 4,
    y: tackaVrh.y + visina / 2,
  };

  let drugaTacka = {
    x: tackaVrh.x + duzina / 4,
    y: tackaVrh.y + visina / 2,
  };
  let trecaTacka = {
    x: tackaVrh.x,
    y: tackaVrh.y + visina,
  };

  const trougao = {
    prvaTacka: prvaTacka,
    drugaTacka: drugaTacka,
    trecaTacka: trecaTacka,
  };

  nacrtajTrougao(trougao, "white");
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

  if (brojac) {
    func(duzina / 2, tackaVrh2, brojac - 1);
    func(duzina / 2, tackaVrh3, brojac - 1);
    func(duzina / 2, tackaVrh4, brojac - 1);
  }
};

const trougao = {
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
  nacrtajTrougao(trougao, boja);
  func(duzinaGlavnog, vrhovnaTacka, broj - 1);
};

dugmeIscrtaj.addEventListener("click", iscrtajSve);
