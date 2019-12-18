window.onload=function(){
    var data=sessionStorage.getItem('times');
    if(data==null){
    var timer=parseInt(window.prompt("Enter the time(in seconds) you want refresh to happen:"));

if(/^[0-9]+$/.test(timer)){
    console.log("Yes");
    sessionStorage.setItem('times',timer);
}
else{
    console.log("No");
}

}
//setTimeout function
setTimeout(function(){
    location.reload()
},data*100);

//console.log(timer);
console.log("Ankit");
}   
