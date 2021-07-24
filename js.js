let myCelcius = function (celcius){
    this.celcius = celcius;
    this.getKenvin = function (){
        return (this.celcius + 273.5);
    }
    this.getFahrenheit = function (){
        return (this.celcius*1.8 + 32);
    }
}
function showResult(){
let a = +document.getElementById("c").value;
let celcius = new myCelcius(a);
document.getElementById("ketqua").innerHTML = "Độ F = "+celcius.getFahrenheit() + "<br>" + "Độ K = "+celcius.getKenvin();
}