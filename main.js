
var r=1;
var l=0;
var i=0
var mr;
var ml;
var m=1;
function changeL(){
    if(l==1){
    document.getElementById("left").style.color="black"
    document.getElementById("left").style.backgroundColor="white"}
}
function leaveL(){
    document.getElementById("left").style.color="white"
    document.getElementById("left").style.backgroundColor="black"
}
function changeR(){
    if(r==1){
    document.getElementById("right").style.color="black"
    document.getElementById("right").style.backgroundColor="white"}
}
function leaveR(){
    document.getElementById("right").style.color="white"
    document.getElementById("right").style.backgroundColor="black"
}
var y=1402/5;
var scroll=0
function right(){
    if(m==1){
    
if(scroll<5){
l=1;
document.getElementById("left").style.opacity=1


    x=document.getElementById("buy_div").scrollLeft
if(x==0){
    rightM()
    scroll=scroll+1
    
    }
else if(x+y){
    rightM()
    scroll=scroll+1
    
            }}

   
}
if(scroll==5){
    document.getElementById("right").style.opacity=0.5
        r=0
}
}


function left(){
    if(m==1){
    if(scroll>0){
        r=1;
        document.getElementById("right").style.opacity=1

        x=document.getElementById("buy_div").scrollLeft
    if(x==5){
        leftM()
        scroll=scroll-1
        
        }
    else if(x-y){
        leftM()
        scroll=scroll-1
        
                }
    
       
    }
}
    if(scroll==0){
        document.getElementById("left").style.opacity=0.5
        l=0
        
    }
}
window.setInterval(function(){
    if(r==0){
        document.getElementById("right").style.color="white"
    document.getElementById("right").style.backgroundColor="black" 
    l==1
    }
    if(l==0){
        document.getElementById("left").style.color="white"
        document.getElementById("left").style.backgroundColor="black"
        r==0
    }
    if(r>0){
        document.getElementById("right").style.opacity=1
    
    }
    if(l<0){
        document.getElementById("left").style.opacity=1
        
    }
   }, 1);

function rightM(){
    
    i=0
    mr=setInterval(fr,1)
    x=document.getElementById("buy_div").scrollLeft
}   
function fr(){
    m=0;
    if(i<70){
        
        i=i+1;
        x=x+4;
        document.getElementById("buy_div").scrollLeft=x;
              }
      else{
        m=1;
        clearInterval(mr);
          }
}
function leftM(){
    
    i=70
    ml=setInterval(fl,1)
    x=document.getElementById("buy_div").scrollLeft
}   
function fl(){
    m=0;
    if(i>0){
        
        i=i-1;
        x=x-4;
        document.getElementById("buy_div").scrollLeft=x;
              }
      else{
        m=1;
        clearInterval(ml);
          }
}