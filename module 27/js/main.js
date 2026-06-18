function kthesms(){
    alert("Ky eshte nje funksion qe kthen nje sms")
}
kthesms();

//parametra qe na ndihmojne per
function sum(n1,n2,n3){// per te treguar funksionit se far vlera pret
    return n1 + n1 + n3;
}
console.log(sum(2,5,6));

function ktheminutat(minutat){
    return minutat * 60;
}
console.log(ktheminutat(4))

var car={
    name:"BMW",
    color:"blue",
    year:2009,
    kilometrat:5000,
    // ni funksion brenda objektit quhet metode
    starEngine:function(){
        alert("vroom! ");

    },
    get getKm(){
        return this.kilometrat;
    },
    set setKm(km){
        this.kilometrat=km

    }
    


};
console.log(car.getKm);

car.setKm=0;


console.log(car.getKm);


var school={
    name:"digital school",
    subject:"programim",
    stundenta:2000,
    year:1000,
}
alert(school.name);

var computer=new Object();
computer.name="Lenovo"
computer.cpu="intel i9"
computer.ram="16GB"

computer.type=function(){
    return this.name + " , " + this.cpu + " , " + this.ram + " , ";
}
alert(computer.type());
//konstruktor i cili na ndihmon qe te kemi nje  shabllon per te krijuar objekte te cilat
//kan atribute te njejta por vlera e tyre ndryshon
function Computer(name,cpu,ram,gpu){
    this.name=name;
    this.cpu=cpu;
    this.ram=ram;
    this.gpu=gpu;
}
 var c1=new Computer("mac,8-core,8GB,5600M");
 var c2=new Computer("mac,8-core,8GB,5600M");