var num = 5;
var de_num = 2;
try {
    if (de_num == 0) {
        throw "devide by zero error";
    }
    else {
        var sol = num / de_num;
        console.log(sol);
    }
}
catch (e) {
    console.log("Error: " + e);
}
