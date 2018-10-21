/* Aufgabe 2
Name: Kristian Basic
Matrikel: 259150
Datum: 19.10.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */
var a2uno;
(function (a2uno) {
    function unogame() {
        let c0 = {
            name: "0",
            red: 1,
            blue: 1,
            green: 1,
            yellow: 1
        };
        let c1 = {
            name: "1",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };
        let c2 = {
            name: "2",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };
        let c3 = {
            name: "3",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };
        let c4 = {
            name: "4",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };
        let c5 = {
            name: "5",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };
        let c6 = {
            name: "6",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };
        let c7 = {
            name: "7",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };
        let c8 = {
            name: "8",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };
        let c9 = {
            name: "9",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };
        let crev = {
            name: "reverse",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };
        let cplus2 = {
            name: "+2",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };
        let csus = {
            name: "suspend",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };
        let sumofcards = [c0, c1, c2, c3, c4, c5, c6, c7, c8, c9, crev, cplus2, csus];
        let s1 = 4;
        let s2 = 4;
        let c = "";
        function random1(x) {
            return Math.floor(Math.random() * Math.floor(x));
        }
        function placeDiv(_color, _v, _y) {
            let div = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "a" + _y);
            document.getElementById("a" + _y).innerHTML += _v;
            let s = div.style;
            s.border = "solid grey";
            s.textAlign = "center";
            s.position = "absolute";
            s.backgroundColor = _color;
            s.width = 150 + "px";
            s.height = 250 + "px";
            s.left = (_y + 0.1) * 166 + "px";
            s.bottom = 40 + "px";
            s.color = "#FFFFFF";
            s.font = "Avenir";
            if (_color == "#000000") {
                s.color = "white";
            }
            if (_color == "#0000ff") {
                s.color = "white";
            }
        }
        let z;
        let input = prompt("Wähle bitte die Kartenanzahl pro Spieler aus!");
        z = Number(input);
        for (let d = 0; d < z; d++) {
            let l = random1(15);
            if (l == 13 && s1 > 0) {
                c = "#000000";
                s1--;
                placeDiv(c, "+4", d);
                continue;
            }
            else if (l == 13 && s1 <= 0) {
                d--;
                continue;
            }
            else {
                if (l == 14 && s2 > 0) {
                    c = "#000000";
                    s2--;
                    placeDiv(c, "colorchoice", d);
                    continue;
                }
                else if (l == 14 && s2 <= 0) {
                    d--;
                    continue;
                }
                else {
                    let b = random1(4);
                    switch (b) {
                        case 0:
                            c = "#FA5858";
                            if (sumofcards[l].red > 0) {
                                placeDiv(c, sumofcards[l].name, d);
                                sumofcards[l].red--;
                                continue;
                            }
                        case 1:
                            c = "#A9F5A9";
                            if (sumofcards[l].green > 0) {
                                placeDiv(c, sumofcards[l].name, d);
                                sumofcards[l].green--;
                                continue;
                            }
                        case 2:
                            c = "#819FF7";
                            if (sumofcards[l].blue > 0) {
                                placeDiv(c, sumofcards[l].name, d);
                                sumofcards[l].blue--;
                                continue;
                            }
                        case 3:
                            c = "#F2F5A9";
                            if (sumofcards[l].yellow > 0) {
                                placeDiv(c, sumofcards[l].name, d);
                                sumofcards[l].yellow--;
                                continue;
                            }
                            else {
                                d--;
                                continue;
                            }
                    }
                }
            }
        }
        function Stapel() {
            let div = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "Kartenstapel");
            document.getElementById("Kartenstapel").innerHTML += "Kartenstapel";
            let s = div.style;
            s.textAlign = "center";
            s.position = "absolute";
            s.border = "solid grey";
            s.backgroundColor = "#8A0829";
            s.width = 150 + "px";
            s.height = 250 + "px";
            s.left = 50 + "px";
            s.top = 20 + "px";
            s.color = "#FFFFFF";
        }
        function Ablage() {
            let div = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "Ablage");
            document.getElementById("Ablage").innerHTML += "Ablage";
            let s = div.style;
            s.textAlign = "center";
            s.border = "solid grey";
            s.position = "absolute";
            s.backgroundColor = "#0B614B";
            s.width = 150 + "px";
            s.height = 250 + "px";
            s.right = 50 + "px";
            s.top = 20 + "px";
            s.color = "#FFFFFF";
        }
        Ablage();
        Stapel();
    }
    document.addEventListener("DOMContentLoaded", (unogame));
})(a2uno || (a2uno = {}));
//# sourceMappingURL=uno.js.map