function getNumber(num){
	var result =document.getElementById("result");
   result.value+=num;
}
function getClear(){
	var result =document.getElementById("result");
	result.value=""
} 
function getResult(){
	var result =document.getElementById("result");
	result.value=eval(result.value)
}
function getDelete(){
		var result =document.getElementById("result");
		result.value=result.value.substring(0,result.value.length -1);
}