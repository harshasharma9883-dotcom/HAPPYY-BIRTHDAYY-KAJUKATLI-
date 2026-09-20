let currentPage=1;
const letterText=`Ananya, pata hai… har kisi ke saath memories nahi banti.
Kuch log bas life mein aa jaate hain aur phir memories khud banne lagti hain.
Tu unhi logon mein se hai. 🩷🤭

Hum dono ko saathme jyda time nhi hua par fir bhi aisa lgta h ki hum dono saalon se dost h aisi friendship hogyi h humari..😭🌷

Humari friendship aisehi bani rahe bss yahi pray krta huu bhagwan se aur bhagwan se yeh bhi pray krta huu ki mujhe har janam me tu as a bestt freinddd mile 🧿🤭

~HARSHIT 🌷💗`;

function showPage(n){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  const el=document.getElementById("page"+n);
  if(el){el.classList.add("active");currentPage=n;window.scrollTo({top:0,behavior:"smooth"});}
  if(n===8) typeLetter();
}
function nextPage(){showPage(currentPage+1)}
function checkPassword(){
  const value=document.getElementById("password").value.trim();
  if(value==="26/09" || value==="2609"){
    document.getElementById("wrong").textContent="";
    showPage(2);
  }else{
    document.getElementById("wrong").textContent="Hmmmm… birthday girl ho toh date yaad honi chahiye 😭🤭";
  }
}
document.getElementById("password").addEventListener("keydown",e=>{if(e.key==="Enter")checkPassword()});

function heart(){
  const h=document.createElement("div");h.className="heart";h.textContent=["♡","♥","🩷","💗","💕"][Math.floor(Math.random()*5)];
  h.style.left=Math.random()*100+"vw";
  h.style.fontSize=(12+Math.random()*18)+"px";
  h.style.animationDuration=(6+Math.random()*7)+"s";
  document.getElementById("hearts").appendChild(h);
  setTimeout(()=>h.remove(),14000);
}
setInterval(heart,520);

function startCelebration(){showPage(7);setTimeout(()=>fireworks(),450)}
function blowCandles(){
  document.querySelector(".flame").style.display="none";
  fireworks();
  document.getElementById("cakeBtn").classList.add("show");
}
function fireworks(){
  for(let i=0;i<100;i++){
    const s=document.createElement("div");s.className="spark";
    s.style.left="50vw";s.style.top="45vh";
    const a=Math.random()*Math.PI*2,d=70+Math.random()*260;
    s.style.setProperty("--x",Math.cos(a)*d+"px");s.style.setProperty("--y",Math.sin(a)*d+"px");
    document.body.appendChild(s);setTimeout(()=>s.remove(),1300);
  }
  for(let i=0;i<30;i++)setTimeout(heart,i*45);
}
let typed=false;
function typeLetter(){
  if(typed)return;typed=true;
  const box=document.getElementById("letter");let i=0;
  const timer=setInterval(()=>{
    box.textContent=letterText.slice(0,i++);
    if(i>letterText.length){clearInterval(timer)}
  },22);
    }
      
