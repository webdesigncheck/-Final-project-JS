function change(){
  var strana = document.getElementById("div1");
  var strana1 = document.getElementById("div2");
strana.style.display = "none";
strana1.style.display = "block";
}

function change1(){
  var x = document.getElementById("name1");
  var strana2 = document.getElementById("div2");
  var strana3 = document.getElementById("div3");
if (x.value){
  strana2.style.display = "none";
  strana3.style.display = "block";
}
else{
  alert("Name must be filled out!")
}
}

function change2(){
  var strana4 = document.getElementById("div3");
  var strana5 = document.getElementById("div4");
strana4.style.display = "none";
strana5.style.display = "block";
}

function change3(){
  var strana6 = document.getElementById("div4");
  var strana7 = document.getElementById("div5");
strana6.style.display = "none";
strana7.style.display = "block";
}

function change4(){
  var strana8 = document.getElementById("div5");
  var strana9 = document.getElementById("div6");
strana8.style.display = "none";
strana9.style.display = "block";
}

function change5(){
  var y = document.getElementById("div6");
  var strana10 = document.getElementById("customRange2").value;
  var strana11 = document.getElementById("div7");
  var strana12 = document.getElementById("div8");
  var strana13 = document.getElementById("div9");
  var strana14 = document.getElementById("div10");
  var strana15 = document.getElementById("div11");

  if (strana10 ==1){
    y.style.display = "none";
    strana11.style.display = "block";
  }
  
  else if (strana10 ==2){
    y.style.display = "none";
    strana12.style.display = "block";
  }
  
  else if (strana10 ==3){
    y.style.display = "none";
    strana13.style.display = "block";
  }
 
else if (strana10 ==4) {
  y.style.display = "none";
  strana14.style.display = "block";
}

else {
  y.style.display = "none";
  strana15.style.display = "block";
  }
}


function answer(){
  var select = document.querySelector('input[name="flexRadioDefault"]:checked').value;
  if(select == 7) { document.getElementById('answer').style.display = "block"; }
  else { 
      document.getElementById('answer').style.display = "none"; 
  }
}





