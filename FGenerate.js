var fletter01 = new Array("a", "o", "e", "i", "u", "ai", "ya", "ei", "el", "la", "li", "io", "yo", "go", "zo", "fa", "fi", "fo", "lio",
"fe", "fa", "fio", "tha", "tho", "gra", "tio", "pa", "lio", "lie", "vio", "via", "ve", "ke", "ko", "co", "bo", "se", "se");

var fletter02 = new Array("ma", "to", "ye", "zi", "uo", "kai", "wa", "yo", "la", "lo", "fi", "fa", "wu", "vio", "via", "ro", "ra",
"re", "ri", "tho", "tha", "jo", "xo", "xa", "xe", "tu", "su", "ze", "ba", "pi", "ti", "ho", "ha", "da" ,"dio");

var fletter03 = new Array("zor", "yo", "ya", "lion", "dor", "dian", "no", "ria", "lia", "dion", "cia", "sia", "vov", "nov", "hon",
"thas", "jon", "zon", "nor", "na", "rey", "ray", "xis", "nox");


f1 = document.getElementById("f1");
f2 = document.getElementById("f2");
f3 = document.getElementById("f3");

generateButtonF = document.getElementById("generateButtonF");
generateButtonF.onclick = function () {
    document.getElementById('f1').innerHTML = giveMeNAme();
    document.getElementById('f2').innerHTML = giveMeNAme();
    document.getElementById('f3').innerHTML = giveMeNAme();
}

var giveMeNAme = function() {

    var name = "";
    var number = Math.floor(Math.random() * 3) + 2;
    {
        if (number == 2) {
            var l1 = fletter01[Math.floor(Math.random() * (fletter01.length - 1))];
            var l2 = fletter03[Math.floor(Math.random() * (fletter03.length - 1))];
            name = l1+l2;
            name = name.charAt(0).toUpperCase() + name.slice(1);
        } else if (number == 3) {
            var l1 = fletter01[Math.floor(Math.random() * (fletter01.length - 1))];
            var l2 = fletter02[Math.floor(Math.random() * (fletter02.length - 1))];
            var l3 = fletter03[Math.floor(Math.random() * (fletter03.length - 1))];
            name = l1+l2+l3;
            name = name.charAt(0).toUpperCase() + name.slice(1);
        } else {
            var l1 = fletter01[Math.floor(Math.random() * (fletter01.length - 1))];
            var l2 = fletter02[Math.floor(Math.random() * (fletter02.length - 1))];
            var l3 = fletter02[Math.floor(Math.random() * (fletter02.length - 1))];
            var l4 = fletter03[Math.floor(Math.random() * (fletter03.length - 1))];
            name = (l1+l2+l3+l4);
            name = name.charAt(0).toUpperCase() + name.slice(1);
        }
        return name;
    }
}