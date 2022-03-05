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

const izracunajDuzinu = ({ x1, y1 }, { x2, y2 }) => {
    let y = x2 - x1;
    let x = y2 - y1;

    return Math.sqrt(x * x + y * y);
}
const func = (duzina, tackaVrh, brojac) => {
    const visina = visinaTrougla(duzina);
    let prvaTacka = {
        x: tackaVrh.x - duzina / 4,
        y: beliProstor + visina / 2,
    };
    console.log(prvaTacka)

    let drugaTacka = {
        x: tackaVrh.x + duzina / 4,
        y: beliProstor + visina / 2,
    };
    let trecaTacka = {
        x: tackaVrh.x,
        y: beliProstor + visina,
    };

    const trougao = {
        prvaTacka: prvaTacka,
        drugaTacka: drugaTacka,
        trecaTacka: trecaTacka,
    };

    nacrtajTrougao(trougao, "red");
    const tackaVrh2 = {
        x: trougao.trecaTacka.x,
        y: beliProstor
    };

    const tackaVrh3 = {
        x: trougao.prvaTacka.x,
        y: trougao.prvaTacka.y,
    };


    const tackaVrh4 = {
        x: trougao.trecaTacka.x,
        y: beliProstor
    };

    if (brojac) {
        func(duzina / 2, tackaVrh2, brojac - 1);
        // func(duzina / 2, tackaVrh3, brojac - 1);
        // func(duzina / 2, tackaVrh4, brojac - 1);
    }
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

func(duzinaGlavnog, vrhovnaTacka, 1);
