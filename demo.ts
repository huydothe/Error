let num=5;
let de_num=2;
try{
    if(de_num==0) {
        throw "devide by zero error";
    } else{
        let sol=num/de_num;
        console.log(sol)
    }
}catch (e){
    console.log("Error: " + e);
}