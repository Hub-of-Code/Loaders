var t = 0;
var l = 0;
function loads(){
    var ld = document.getElementById("load");
    var i = setInterval(function(){
      ld.style.transform="rotate("+t+"deg)";
      if (t==360){
      	t=0;
      }
      t=t+2;
    },1);
}
function loads2(){
   var u = setInterval(function(){
   	 l++;
   if (l==1){
     document.getElementById("p1").style.background='red';
   }
   if (l==2){
     document.getElementById("p2").style.background='red';
   }
   if (l==3){
     document.getElementById("p3").style.background='red';
   }
   if (l==4){
     document.getElementById("p4").style.background='red';
   }
   if (l==5){
     document.getElementById("p5").style.background='red';
   }
   if (l==6){
     document.getElementById("p6").style.background='red';
   }
   if (l==7){
     document.getElementById("p7").style.background='red';
   }
   if (l==8){
     document.getElementById("p8").style.background='red';
   }
   if (l==9){
     document.getElementById("p9").style.background='red';
   }
   if (l==10){
     document.getElementById("p10").style.background='red';
   }
   if (l==11){
   	  document.getElementById("p1").style.background="white";
   	  document.getElementById("p2").style.background="white";
   	  document.getElementById("p3").style.background="white";
   	  document.getElementById("p4").style.background="white";
   	  document.getElementById("p5").style.background="white";
   	  document.getElementById("p6").style.background="white";
   	  document.getElementById("p7").style.background="white";
   	  document.getElementById("p8").style.background="white";
   	  document.getElementById("p9").style.background="white";
   	  document.getElementById("p10").style.background="white";
   	  l=0;
   }
   },100);
}