var jletter01 = new Array("a", "i", "u", "e", "o", "ka", "ki", "ku", "ke", "ko", "sa", "shi", "su", "se", "so",
"na", "ni", "nu", "ne", "no", "ta", "chi", "tsu", "te", "to", "ga", "gi", "gu", "ge", "go", "ra", "ru", "ru", "re", "ro",
    "ya", "yu", "yo");

var jletter02 = new Array("ka", "ki", "ku", "ke", "ko", "sa", "shi", "su", "se", "so", "na", "ni", "nu", "ne", "no",
    "ta", "chi", "tsu", "te", "to", "ga", "gi", "gu", "ge", "go", "ra", "ru", "ru", "re", "ro", "ya", "yu", "yo");


j1 = document.getElementById("j1");
j2 = document.getElementById("j2");
j3 = document.getElementById("j3");

generateButtonJ = document.getElementById("generateButtonJ");
generateButtonJ.onclick = function () {
    document.getElementById('j1').innerHTML = giveMeNAme();
    document.getElementById('j2').innerHTML = giveMeNAme();
    document.getElementById('j3').innerHTML = giveMeNAme();
}

var giveMeNAme = function() {

    var name = "";
    var number = Math.floor(Math.random() * 3) + 2;
    {
        if (number == 2) {
            var l1 = jletter01[Math.floor(Math.random() * (jletter01.length - 1))];
            var l2 = jletter02[Math.floor(Math.random() * (jletter02.length - 1))];
            name = l1+l2;
            name = name.charAt(0).toUpperCase() + name.slice(1);
        } else if (number == 3) {
            var l1 = jletter01[Math.floor(Math.random() * (jletter01.length - 1))];
            var l2 = jletter02[Math.floor(Math.random() * (jletter02.length - 1))];
            var l3 = jletter02[Math.floor(Math.random() * (jletter02.length - 1))];
            name = l1+l2+l3;
            name = name.charAt(0).toUpperCase() + name.slice(1);
        } else {
            var l1 = jletter01[Math.floor(Math.random() * (jletter01.length - 1))];
            var l2 = jletter02[Math.floor(Math.random() * (jletter02.length - 1))];
            var l3 = jletter02[Math.floor(Math.random() * (jletter02.length - 1))];
            var l4 = jletter02[Math.floor(Math.random() * (jletter02.length - 1))];
            name = (l1+l2+l3+l4);
            name = name.charAt(0).toUpperCase() + name.slice(1);
        }
        return name;
    }
}