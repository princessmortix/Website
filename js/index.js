small = false;
s = false;

dropdowns = document.querySelectorAll(".dropdown button");
for(i = 0; i < dropdowns.length; i++) {
    dropdowns[i].addEventListener("click", function(e){
        e.preventDefault();
        this.parentElement.classList.toggle("expanded");
    });
}

document.querySelector("button.bars").addEventListener("click", function() {
  document.querySelector("header").classList.toggle("dropdowndisplay");
  if(document.querySelector("header").classList.contains("dropdowndisplay")){
    setTimeout(function(){
      document.querySelector(".nav-ul").classList.toggle("dropdowndisplay");
      document.querySelector(".nav").classList.toggle("dropdowndisplay");
    }, 50)
  } else {
    document.querySelector(".nav-ul").classList.toggle("dropdowndisplay");
    document.querySelector(".nav").classList.toggle("dropdowndisplay");
  }
});

function closeDropdowns() {
  document.querySelector("header").classList.remove("dropdowndisplay");
  document.querySelector(".nav-ul").classList.remove("dropdowndisplay");
  document.querySelector(".nav").classList.remove("dropdowndisplay");
  dropdowns = document.querySelectorAll(".dropdown button");
  for(i = 0; i < dropdowns.length; i++) {
    dropdowns[i].parentElement.classList.remove("expanded");
  }
}

function check(media) {
  if (media.matches) {
    document.body.children[0].classList.add("small");
    document.body.classList.add("small");
	small = true;
  } else {
    document.body.children[0].classList.remove("small");
    document.body.classList.remove("small");
    small = false;
  }
  if(s != small) {
    s = small;
    closeDropdowns();
  }
}
minSize = window.matchMedia("(max-width: 1002px)");
check(minSize);
minSize.addListener(check);

function browser() {
	u = navigator.userAgent;
	return u.indexOf("Firefox") > -1 ? "Firefox" : u.indexOf("OP") > -1 ? "Opera" : u.indexOf("Edg") > -1 ? "Edge" : u.indexOf("Chrome") > -1 ? "Chrome" : !!window.chrome ? "Chromium based browsers" : null;
}

//add get fastforward for browser button
b = browser();
btn = document.querySelector("a.btn.ff");
if(btn != null) {
  switch (b) {
    case "Firefox":
      btn.classList.add("firefox");
      btn.innerText += " for Firefox";
      btn.href="https://addons.mozilla.org/en-US/firefox/addon/fastforwardteam/";
      break;
    case "Chrome":
      btn.classList.add("chrome");
      btn.innerText += " for Chrome";
      btn.href="https://chrome.google.com/webstore/detail/fastforward/icallnadddjmdinamnolclfjanhfoafe";
      break;
    case "Edge":
      btn.classList.add("edge");
      btn.innerText += " for Edge";
      btn.href="https://microsoftedge.microsoft.com/addons/detail/fastforward/ldcclmkclhomnpcnccgbgleikchbnecl";
      break;
    case "Opera":
      btn.classList.add("opera");
      btn.innerText += " for Opera";
      btn.href="https://chrome.google.com/webstore/detail/fastforward/icallnadddjmdinamnolclfjanhfoafe";
      break;
    case "Chromium based browsers":
      btn.classList.add("chromium");
      btn.innerText += " for Chromium based browsers";
      btn.href="https://chrome.google.com/webstore/detail/fastforward/icallnadddjmdinamnolclfjanhfoafe";
      break;
    default:
      btn.classList.add("default");
      btn.href="/install.html";
  }
}


var str = "";
document.onkeypress = function(e) {
  str += e.key;
  if(str.toLowerCase().indexOf("unjust1ce") != -1 || str.toLowerCase().indexOf("unjustice") != -1) {
    document.body.parentElement.style="animation: rainbow infinite 10s linear";
    document.onkeypress = null;
  }
}

console.log(`%c                    .,,,,,,,,,,,,,,,,,,,,,,                    
                       ,,*/*/*////////////*,,.                 
                         ,,,*****////////////*,,               
                           .,,****/***/////////*,,,            
                              ,,**********////////*,,.         
                                ,,************///////,,,       
                                  ,,,***************///*,,,    
                                    ,,,******************/*,,  
                    ,,,*************///*,********************,,
                 ,,,/((((((((((((((((*,*******************,,,  
              .,,/((((((((((((((((/,*******************,,,     
            ,,*//(((((((((((((((,,******************,,,        
         ,,,/////////((((((((/,,*****************,,,           
      ,,,///////////////(((,,,,,**************,,,              
   .,,*//////////////////,,,,,,,,,,,,******,,,.                
.,,*//////////////////,,,,,,,,,,,,,,,,,,,,,.                   
 ,,,*//////////////////,,.                                     
    ,,****///////////////,,.                                   
      ,,,*****/////////////,,,                                 
         ,,,******///////////*,,                               
           ,,,**********////////,,.                            
              .,,***********//////,,,                          
                 ,,**************///,,,                        
                   .,,*****************,,
                    
                          FastForward!
                    Help us make bypasses        
            https://discord.com/invite/RSAf7b5njt
                         `, 'color: #00C0FA');