var numPeople = document.querySelector("input[type='number']");
var passengers = document.querySelectorAll("#passenger");
var orderBtn = document.querySelector(".orderBtn");
var defaultTeamNum = 16;
var weights = document.querySelectorAll("#weight");


orderBtn.addEventListener("click",function(){
	var arr = [];
	
	for(var i=0;i<defaultTeamNum;i++){
		arr.push(prompt((i+1) + ". Yarışmacı ağırlığını giriniz"));
	}
	
	arr.sort(sortNumber);
	arr.join(",");
	
	for(var i=0;i<defaultTeamNum;i++){
		arr[i] = Number(arr[i]);
	}
	
	console.log(arr);
	
	var arrLeft = leftSideArr(arr);
	var arrRight = rightSideArr(arr);
	console.log(arrLeft);
	console.log(arrRight);

	for(var i=0;i<defaultTeamNum/2;i++){
		var a;
		a=arrRight[2*i+1];
		arrRight[2*i+1] = arrLeft[2*i+1];
		arrLeft[2*i+1] = a;
	}
	
	for(var i = 0 ; i < defaultTeamNum/2 ; i++){
		passengers[i].textContent = (i+1) + ") " + arrLeft[i] + " kg";
		passengers[i+8].textContent = (i+1) + ") " + arrRight[i] + " kg";
	}	
	
	var weightCalculated = [totalWeight(arr), leftSideTotalWeight(arrLeft), rightSideTotalWeight(arrRight)]; 
	console.log(weightCalculated);
	
	for(var i=0;i<3;i++){
		weights[i].innerHTML = weightCalculated[i] + "kg";
	}
	
	
}
)

function totalWeight(arr){
	var totalWeight = 0;
	for(var i=0;i<defaultTeamNum;i++){
		totalWeight += arr[i];
	}
	return totalWeight;
}

function leftSideTotalWeight(arrLeft){
	var totalLeftWeight = 0;
	for(var i=0;i<defaultTeamNum/2;i++){
		totalLeftWeight += arrLeft[i];
	}
	return totalLeftWeight;
}

function rightSideTotalWeight(arrRight){
	var totalRightWeight = 0;
	for(var i=0;i<defaultTeamNum/2;i++){
		totalRightWeight += arrRight[i];
	}
	return totalRightWeight;
}

function sortNumber(a,b) {
    return a - b;
}

//solda oturacakların ağırlıkları arrLeft'e atanmıştır
function leftSideArr(arr){
		arrLeft = [];
	for(var i=0;i<(defaultTeamNum/2);i++){
		arrLeft[i] = arr[i*2];
	}		
	return arrLeft;
}

//sağda oturacaklar ise arrRight dizininze atanmıştır.
function rightSideArr(arr){
		arrRight = [];
	for(var i=0;i<(defaultTeamNum/2);i++){
		arrRight[i] = arr[i*2+1];
	}		
	return arrRight;
}

