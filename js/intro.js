var wrapper = document.getElementsByClassName("text-animation")[0];
wrapper.style.opacity="1";
wrapper.innerHTML = wrapper.textContent.replace(/./g,"<span>$&</span>");

var spans = wrapper.getElementsByTagName("span");

let delayBetweenWords = 0;
for(var i=0;i<spans.length;i++){
  if(spans[i].innerText ==  " ") {
    console.log(spans[i])
    delayBetweenWords += 100;
  }
  spans[i].style.animationDelay = ((i*80)+delayBetweenWords)+"ms";
}  
