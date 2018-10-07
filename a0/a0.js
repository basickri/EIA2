/* Aufgabe 0
Name: Kristian Basic
Matrikel: 259150
Datum: 07.10.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */
var a0;
(function (a0) {
    var i = "";
    function main() {
        var i = prompt("Wie heisst du?"); // Anzeige der Promptbox + eingefügter Text
        var node = document.getElementById("connecthtml"); // Schnittstelle HTML Dokument
        node.innerHTML += "Hola "; // angezeigter Text
        node.innerHTML += i; // Variable, um Eingabe des Nutzers anzuzeigen
        node.innerHTML += "! Es freut mich, dass du hier bist."; // angezeigter Text
        console.log("Hola ", i, "! Es freut mich, dass du hier bist ."); // Eingabe in Konsole
    }
    document.addEventListener("DOMContentLoaded", main);
})(a0 || (a0 = {}));
//# sourceMappingURL=a0.js.map