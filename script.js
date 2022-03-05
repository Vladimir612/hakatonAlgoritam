const tri = document.getElementById("triangle").getContext("2d");

const beliProstor = 300 - (300 * Math.sqrt(3)) / 2;

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

const func = (duzina, tackaVrh) => {
  const visina = visinaTrougla(duzina);
  let prvaTacka = {
    x: tackaVrh.x - duzina / 4,
    y: beliProstor + visina / 2,
  };
  let drugaTacka = {
    x: tackaVrh.x + duzina / 4,
    y: beliProstor + visina / 2,
  };
  let trecaTacka = {
    x: tackaVrh.x,
    y: duzina,
  };

  const trougao = {
    prvaTacka: prvaTacka,
    drugaTacka: drugaTacka,
    trecaTacka: trecaTacka,
  };

  nacrtajTrougao(trougao, "red");
};

const trougao = {
  prvaTacka: {
    x: 0,
    y: 300,
  },
  drugaTacka: {
    x: 150,
    y: beliProstor,
  },
  trecaTacka: {
    x: 300,
    y: 300,
  },
};

nacrtajTrougao(trougao, "blue");

const duzinaGlavnog = 300;
const visina = (duzinaGlavnog * Math.sqrt(3)) / 2;

const vrhovnaTacka = {
  x: duzinaGlavnog / 2,
  y: beliProstor,
};

func(duzinaGlavnog, vrhovnaTacka);
