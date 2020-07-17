function feetToMile(feet){
   var mile = feet/5280;
   return mile.toFixed(2); 
}
var mile = feetToMile(5280);
console.log(mile);

function woodCalculator(noOfChair,noOfTable,noOfBed){
    var totalWood = noOfChair*1+ noOfTable*3 + noOfBed*5;
    return totalWood;
}

var totalWood = woodCalculator(1,2,1);
console.log(totalWood);

function brickCalculator(noOfFloor){
    var height;
    var totalBrick;

    if(noOfFloor<=10){
        height= noOfFloor*15;
        totalBrick = height*1000;
        return totalBrick;
    }
    else if(noOfFloor>10 && noOfFloor<=20){
        height =(10*15+(noOfFloor-10)*12);
        totalBrick = height*1000;
        return totalBrick
    }
    else if(noOfFloor>20){
        height = (10*15+10*12+(noOfFloor-20)*10);
        totalBrick = height*1000;
        return totalBrick;
    }
    else{
        return "No brick is needed."
    }
}

var totalBrick = brickCalculator(12);
console.log(totalBrick);

function tinyFriend(names){
    var minNamelength = names[0].length; 
    for(var i=1; i<names.length; i++){
        var minName = names[0];
        var name1Length = names[i].length;
        if(name1Length<minNamelength){
             minName = names[i];
        }
}
   return minName;
}
var name = ['Saima','Salman','Purna','Nini','pri'];
var tinyname = tinyFriend(name);
console.log(tinyname);