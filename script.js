const closee=document.querySelector("#img3");
const rule=document.querySelector(".rules");
const play_game=document.querySelector(".play_game");
const game=["rock","sissors","paper","spock","lizard"];
const next=document.querySelector('.next');
const rule_none=document.querySelector('body');



rule_none.addEventListener('click',(el)=>{
    if(document.querySelector(".rule").style.visibility==="visible" && String(el.target.className).includes('rules')==false ){document.querySelector(".rule").style.visibility="hidden"}
});

var test=true;
closee.addEventListener("click",()=>{
    document.querySelector(".rule").style.visibility="hidden";
}); 
rule.addEventListener("click",()=>{
    if(document.querySelector(".rule").style.visibility=="hidden"){document.querySelector(".rule").style.visibility="visible"}
    else{document.querySelector(".rule").style.visibility="hidden"}
});
play_game.addEventListener("click",()=>{
    document.querySelector(".play_game").style.display="none";
    document.querySelector(".game").style.transform = "translateX(-20rem)";
    document.querySelector(".pick").style.display="block";
    document.querySelector(".rule").style.left="30rem";
});
function tesst(){
    document.querySelectorAll(".picked").forEach(el =>{if(el.style.backgroundColor==el.id){ 
        test=false;};});
}
var go="block";
var playerScore=0;
var picked="";
var hostScore=0;
var nul=0;
document.querySelectorAll(".picked").forEach(elem=>{
    elem.addEventListener("click",()=>{
        tesst();
        if(go==="block" && test==true && document.querySelector(".play_game").style.display==="none"){
            elem.style.backgroundColor=elem.id;
            document.querySelector(".pickk").textContent="you  picked  "+String(elem.className).substring(String(elem.className).indexOf(" ")+1,String(elem.className).length);
            document.querySelector(".pick").style.display="block";
            document.querySelector(".hpicked").style.display="block";
            house=game[getrandomint(4)];
            document.querySelector(".hpicked").textContent=`the house picked ${house}`;
            player=String(elem.className).substring(String(elem.className).indexOf(" ")+1,String(elem.className).length);
            winners=set_winners_in_round(player,house);
            if(winners==="player") document.querySelector('.player').textContent++;
            if(winners==="house") document.querySelector('.host').textContent++; 
            if(winners==='nul') nul++;
            hostScore=Number(document.querySelector('.host').textContent);
            playerScore=Number(document.querySelector('.player').textContent);
            go="none";
            console.log(winners);
        if(hostScore<10 && playerScore<10){
            document.querySelector('.next').classList.remove('hidden');
        }    
        }
        if(hostScore>=10 || playerScore>=10){
            bigWinners=(hostScore===10)?hostwinner():playerwinner();
            
        }
});});

function getrandomint(max){
    return Math.floor(Math.random()*max)
}
function set_winners_in_round(player,house){
    if(player=="lizard" ){
        if(house=="spock" || house=="paper"){
            return "player"}};
    if(player=="spock" ){
        if(house=="sissors" || house=="rock"){
            return "player"}};
    if(player=="sissors" ){
        if(house=="paper" || house=="lizard"){
            return "player"}}; 
    if(player=="paper" ){
        if(house=="rock" || house=="spock"){
            return "player"}};          
    if(player=="rock" ){
        if(house=="lizard" || house=="sissors"){
            return "player"}};          

    if(house=="lizard" ){
        if(player=="spock" || player=="paper"){
            return "house"}};
    if(house=="spock" ){
        if(player=="sissors" || player=="rock"){
            return "house"}};
    if(house=="sissors" ){
        if(player=="paper" || player=="lizard"){
            return "house"}}; 
    if(house=="paper" ){
        if(player=="rock" || player=="spock"){
            return "house"}};          
    if(house=="rock" ){
        if(player=="lizard" || player=="sissors"){
            return "house"}};   
                
    return 'nul';
}
next.addEventListener('click',()=>{
    if(go==="none" && hostScore<10 && playerScore<10){
    document.querySelector(".hpicked").textContent="the house picked...";
    document.querySelector(".pickk").textContent=`you picked...`;
    go="block";
    test=true;
    document.querySelectorAll(".picked").forEach(el=>{el.style.backgroundColor="white";});}
    document.querySelector('.next').classList.add('hidden');
});

const hostwinner=function(){

}