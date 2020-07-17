// **************feetToMile Start*************
function feetToMile(feet){
    if(feet>=0){
        var mile = feet * 0.0001893939;

    }else{
        console.log("Please give a right value (example 5280) !!");
    }
    return mile;
}

var mileResult = feetToMile(5280);
console.log(mileResult);

// ***********feetToMile end*************



// **************woodCalculator Start****************
function woodCalculator(chair,table,bed){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed * 5;
    var totalWood = chairCount + tableCount + bedCount ;
    return totalWood;

}

var woodResult = woodCalculator(2,4,6);
console.log(woodResult);

// ********woodCalculator end***********



// **************brickCalculator Start****************
function brickCalculator(floorNumber){
    var brickAmount;

    if(floorNumber>0){  

        if(floorNumber>=1 && floorNumber<=10){
            brickAmount = 15 * 1000;

        }else if(floorNumber>=11 && floorNumber<=20){
            brickAmount = 12 * 1000;

        }else{
            brickAmount = 10 * 1000;
        }
        
    }else{
        console.log("Please give a correct vlaue (example 55)");
    }

    return brickAmount;
}
var brickResult = brickCalculator(25);
console.log(brickResult);

// *********brickCalculator end*************



// **************tinyFriend Start****************
function tinyFriend(friendName){
    var tinyName = friendName[0];

    if(friendName==" " || friendName == ""){
        console.log("Please input your friends name as valid string");
    }

    for(var i = 1 ; i< friendName.length; i++){
        
        var currentTinyName = friendName[i];

        if(currentTinyName < tinyName){
            tinyName = currentTinyName;
        }

    }
    return tinyName;
}

var tinyNameResult = tinyFriend(["xyyyyss","xxxyyy","xx","yy","xyz"]);
console.log(tinyNameResult);
// **************tinyFriend end*************