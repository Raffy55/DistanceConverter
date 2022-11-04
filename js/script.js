function convert() {
    let num = document.querySelector("#num").value;
    let int = parseInt(num);
    let unit1 = document.querySelector("#choice1").value;
    let unit2 = document.querySelector("#choice2").value;
    let ans = 0;


    //messages if some fields are not filled up
    switch(true){
        case (num == false):
            alert("Please enter a number");
            break;
        case (unit1 == false):
            alert("Please choose a unit to convert");
            break;
        case (unit2 == false):
            alert("Please choose a unit to convert to");
            break;
    }

    //conditional statements for converting meter

    if (unit1 === "mt" && unit2 === "mt") {
        ans = int;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " meter/s in " + int + " meter/s"
    }
    else if (unit1 === "mt" && unit2 === "km") {
        ans = int / 1000;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " km/s in " + int + " meter/s"
    }

    else if (unit1 === "mt" && unit2 === "cm") {
        ans = int * 100;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " centimeter/s in " + int + " meter/s"
    }

    else if (unit1 === "mt" && unit2 === "mm") {
        ans = int * 1000;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " millimeter/s in " + int + " meter/s"
    }

    else if (unit1 === "mt" && unit2 === "mcm") {
        ans = int * 1e+6;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " micrometer/s in " + int + " meter/s"
    }

    else if (unit1 === "mt" && unit2 === "nm") {
        ans = int * 1e+9;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " micrometer/s in " + int + " meter/s"
    }

    else if (unit1 === "mt" && unit2 === "mi") {
        ans = int / 1609;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " mile/s in " + int + " meter/s"
    }

    else if (unit1 === "mt" && unit2 === "yd") {
        ans = int * 1.094;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " yard/s in " + int + " meter/s"
    }

    //conditional statements for converting Kilometer

    else if (unit1 === "km" && unit2 === "mt") {
        ans = int * 1000;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " meter/s in " + int + " kilometer/s"
    }

    else if (unit1 === "km" && unit2 === "km") {
        ans = int;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " kilometer/s in " + int + " kilometer/s"
    }

    else if (unit1 === "km" && unit2 === "cm") {
        ans = int * 100000;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " centimeter/s in " + int + " kilometer/s"
    }

    else if (unit1 === "km" && unit2 === "mm") {
        ans = int * 1e+6;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " millimeter/s in " + int + " kilometer/s"
    }

    else if (unit1 === "km" && unit2 === "mcm") {
        ans = int * 1e+9;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " micrometer/s in " + int + " kilometer/s"
    }

    else if (unit1 === "km" && unit2 === "nm") {
        ans = int * 1e+12;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " nanometer/s in " + int + " kilometer/s"
    }

    else if (unit1 === "km" && unit2 === "mi") {
        ans = int / 1.609;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " mile/s in " + int + " kilometer/s"
    }

    else if (unit1 === "km" && unit2 === "yd") {
        ans = int * 1094;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " yard/s in " + int + " kilometer/s"
    }

    //conditional statements for converting centimeter

    else if (unit1 === "cm" && unit2 === "mt") {
        ans = int / 100;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " meter/s in " + int + " centimeter/s"
    }

    else if (unit1 === "cm" && unit2 === "km") {
        ans = int / 100000;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " kilometer/s in " + int + " centimeter/s"
    }

    else if (unit1 === "cm" && unit2 === "cm") {
        ans = int;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " centimeter/s in " + int + " centimeter/s"
    }

    else if (unit1 === "cm" && unit2 === "mm") {
        ans = int * 10;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " millimeter/s in " + int + " centimeter/s"
    }

    else if (unit1 === "cm" && unit2 === "mcm") {
        ans = int * 10000;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " micrometer/s in " + int + " centimeter/s"
    }

    else if (unit1 === "cm" && unit2 === "nm") {
        ans = int * 1e+7;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " nanometer/s in " + int + " centimeter/s"
    }

    else if (unit1 === "cm" && unit2 === "mi") {
        ans = int / 160900;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " mile/s in " + int + " centimeter/s"
    }

    else if (unit1 === "cm" && unit2 === "yd") {
        ans = int / 91.44;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " yard/s in " + int + " centimeter/s"
    }
    
    //conditional statements for converting millimeter

    else if (unit1 === "mm" && unit2 === "mt") {
        ans = int / 1000;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " meter/s in " + int + " millimeter/s"
    }

    else if (unit1 === "mm" && unit2 === "km") {
        ans = int / 1e+6;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " kilometer/s in " + int + " millimeter/s"
    }

    else if (unit1 === "mm" && unit2 === "cm") {
        ans = int / 10;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " centimeter/s in " + int + " millimeter/s"
    }

    else if (unit1 === "mm" && unit2 === "mm") {
        ans = int;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " millimeter/s in " + int + " millimeter/s"
    }

    else if (unit1 === "mm" && unit2 === "mcm") {
        ans = int * 1000;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " micrometer/s in " + int + " millimeter/s"
    }

    else if (unit1 === "mm" && unit2 === "nm") {
        ans = int * 1e+6;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " nanometer/s in " + int + " millimeter/s"
    }

    else if (unit1 === "mm" && unit2 === "mi") {
        ans = int / 1.609e+6;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " mile/s in " + int + " millimeter/s"
    }

    else if (unit1 === "mm" && unit2 === "yd") {
        ans = int / 914.4;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " yard/s in " + int + " millimeter/s"
    }

    //conditional statements for converting micrometer

    else if (unit1 === "mcm" && unit2 === "mt") {
        ans = int / 1e+6;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " meter/s in " + int + " micrometer/s"
    }

    else if (unit1 === "mcm" && unit2 === "km") {
        ans = int / 1e+9;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " kilometer/s in " + int + " micrometer/s"
    }

    else if (unit1 === "mcm" && unit2 === "cm") {
        ans = int / 10000;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " centimeter/s in " + int + " micrometer/s"
    }

    else if (unit1 === "mcm" && unit2 === "mm") {
        ans = int / 1000;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " millimeter/s in " + int + " micrometer/s"
    }

    else if (unit1 === "mcm" && unit2 === "mcm") {
        ans = int;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " micrometer/s in " + int + " micrometer/s"
    }

    else if (unit1 === "mcm" && unit2 === "nm") {
        ans = int * 1000;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " nanometer/s in " + int + " micrometer/s"
    }

    else if (unit1 === "mcm" && unit2 === "mi") {
        ans = int / 1.609e+9;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " mile/s in " + int + " micrometer/s"
    }

    else if (unit1 === "mcm" && unit2 === "yd") {
        ans = int / 914400;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " yard/s in " + int + " micrometer/s"
    }

    //conditional statement for converting Nanometer

    else if (unit1 === "nm" && unit2 === "mt") {
        ans = int / 1e+9;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " meter/s in " + int + " nanometer/s"
    }

    else if (unit1 === "nm" && unit2 === "km") {
        ans = int / 1e+12;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " kilometer/s in " + int + " nanometer/s"
    }

    else if (unit1 === "nm" && unit2 === "cm") {
        ans = int / 1e+7;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " centimeter/s in " + int + " nanometer/s"
    }

    else if (unit1 === "nm" && unit2 === "mm") {
        ans = int / 1e+6;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " millimeter/s in " + int + " nanometer/s"
    }

    else if (unit1 === "nm" && unit2 === "mcm") {
        ans = int / 1000;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " micrometer/s in " + int + " nanometer/s"
    }

    else if (unit1 === "nm" && unit2 === "nm") {
        ans = int;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " nanometer/s in " + int + " nanometer/s"
    }

    else if (unit1 === "nm" && unit2 === "mi") {
        ans = int / 1.609e+12;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " mile/s in " + int + " nanometer/s"
    }

    else if (unit1 === "nm" && unit2 === "yd") {
        ans = int / 9.144e+8;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " yard/s in " + int + " nanometer/s"
    }

    //conditional statements for converting Mile

    else if (unit1 === "mi" && unit2 === "mt") {
        ans = int * 1609;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " meter/s in " + int + " mile/s"
    }

    else if (unit1 === "mi" && unit2 === "km") {
        ans = int * 1.609;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " kilometer/s in " + int + " mile/s"
    }

    else if (unit1 === "mi" && unit2 === "cm") {
        ans = int * 160900;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " centimeter/s in " + int + " mile/s"
    }

    else if (unit1 === "mi" && unit2 === "mm") {
        ans = int * 1.609e+6;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " millimeter/s in " + int + " mile/s"
    }

    else if (unit1 === "mi" && unit2 === "mcm") {
        ans = int * 1.609e+9;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " micrometer/s in " + int + " mile/s"
    }

    else if (unit1 === "mi" && unit2 === "nm") {
        ans = int * 1.609e+12;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " nanometer/s in " + int + " mile/s"
    }

    else if (unit1 === "mi" && unit2 === "mi") {
        ans = int;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " mile/s in " + int + " mile/s"
    }

    else if (unit1 === "mi" && unit2 === "yd") {
        ans = int * 1760;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " yard/s in " + int + " mile/s"
    }

    //conditional statements for converting Yard

    else if (unit1 === "yd" && unit2 === "mt") {
        ans = int / 1.094;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " meter/s in " + int + " yard/s"
    }

    else if (unit1 === "yd" && unit2 === "km") {
        ans = int / 1094;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " kilometer/s in " + int + " yard/s"
    }

    else if (unit1 === "yd" && unit2 === "cm") {
        ans = int * 91.44;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " centimeter/s in " + int + " yard/s"
    }

    else if (unit1 === "yd" && unit2 === "mm") {
        ans = int * 914.4;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " millimeter/s in " + int + " yard/s"
    }

    else if (unit1 === "yd" && unit2 === "mcm") {
        ans = int * 914400;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " micrometer/s in " + int + " yard/s"
    }

    else if (unit1 === "yd" && unit2 === "nm") {
        ans = int * 9.144e+8;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " nanometer/s in " + int + " yard/s"
    }

    else if (unit1 === "yd" && unit2 === "mi") {
        ans = int / 1760;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " mile/s in " + int + " yard/s"
    }

    else if (unit1 === "yd" && unit2 === "yd") {
        ans = int;
        document.getElementById("answer").innerHTML = "There is/are " + ans + " yard/s in " + int + " yard/s"
    }

}