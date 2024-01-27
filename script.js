let Ques1 = document.querySelector(".Ques1");
let Ques2 = document.querySelector(".Ques2");
let Ques3 = document.querySelector(".Ques3");
let Ques4 = document.querySelector(".Ques4");
let Ques5 = document.querySelector(".Ques5");

let ans1 = document.querySelector(".ans1");
let ans2 = document.querySelector(".ans2");
let ans3 = document.querySelector(".ans3");
let ans4 = document.querySelector(".ans4");
let ans5 = document.querySelector(".ans5");

let icon1 =document.querySelector(".icon1");
let icon2 =document.querySelector(".icon2");
let icon3 =document.querySelector(".icon3");
let icon4 =document.querySelector(".icon4");
let icon5 =document.querySelector(".icon5");

let a=1;

Ques1.addEventListener("click",()=>{
if (a==1) {
    Ques1.style.color="Black";
    icon1.style.rotate="180deg";
    ans1.innerText="You can invite up to 2 additional users on the free plan. There is no limit on the team members for the premium plan.";
    a=0
    ans2.innerHTML="";
    icon2.style.rotate="0deg";
    Ques2.style.color="grey";
    ans3.innerHTML="";
    icon3.style.rotate="0deg";
    Ques3.style.color="grey";
    ans4.innerHTML="";
    icon4.style.rotate="0deg";
    Ques4.style.color="grey";
    ans5.innerHTML="";
    icon5.style.rotate="0deg";
    Ques5.style.color="grey";
}
else{
    ans1.innerHTML="";
    Ques1.style.color="grey";
    icon1.style.rotate="0deg";
    a=1;
}


})
Ques2.addEventListener("click",()=>{
if (a==1) {
    Ques2.style.color="Black";
    icon2.style.rotate="180deg";
    ans2.innerText="No more then 2 GB.All files in your account must fit your alloted storage space.";
    a=0
    ans1.innerHTML="";
    icon1.style.rotate="0deg";
    Ques1.style.color="grey";
    ans3.innerHTML="";
    icon3.style.rotate="0deg";
    Ques3.style.color="grey";
    ans4.innerHTML="";
    icon4.style.rotate="0deg";
    Ques4.style.color="grey";
    ans5.innerHTML="";
    icon5.style.rotate="0deg";
    Ques5.style.color="grey";

}
else{
    ans2.innerHTML="";
    icon2.style.rotate="0deg";
    Ques2.style.color="grey";
    a=1;
}


})
Ques3.addEventListener("click",()=>{
if (a==1) {
    Ques3.style.color="Black";
    icon3.style.rotate="180deg";
    ans3.innerText="Click 'Forgot password' from the login page or 'Change password' from your profile page. A reset link will be emailed to you.";
    a=0
    ans1.innerHTML="";
    icon1.style.rotate="0deg";
    Ques1.style.color="grey";
    ans2.innerHTML="";
    icon2.style.rotate="0deg";
    Ques2.style.color="grey";
    ans4.innerHTML="";
    icon4.style.rotate="0deg";
    Ques4.style.color="grey";
    ans5.innerHTML="";
    icon5.style.rotate="0deg";
    Ques5.style.color="grey";
}
else{
    ans3.innerHTML="";
    Ques3.style.color="grey";
    icon3.style.rotate="0deg";
    a=1;
}


})
Ques4.addEventListener("click",()=>{
if (a==1) {
    Ques4.style.color="Black";
    icon4.style.rotate="180deg";
    ans4.innerText="Yes! Send us a message and we will process your request no questions asked.";
    a=0
    ans1.innerHTML="";
    icon1.style.rotate="0deg";
    Ques1.style.color="grey";
    ans2.innerHTML="";
    icon2.style.rotate="0deg";
    Ques2.style.color="grey";
    ans3.innerHTML="";
    icon3.style.rotate="0deg";
    Ques3.style.color="grey";
    ans5.innerHTML="";
    icon5.style.rotate="0deg";
    Ques5.style.color="grey";
}
else{
    ans4.innerHTML="";
    icon4.style.rotate="0deg";
    Ques4.style.color="grey";
    a=1;
}


})
Ques5.addEventListener("click",()=>{
if (a==1) {
    Ques5.style.color="Black";
    icon5.style.rotate="180deg";
    ans5.innerText="Chat and email support is available 24/7.Phone lines are open during normal business";
    a=0
    ans1.innerHTML="";
    icon1.style.rotate="0deg";
    Ques1.style.color="grey";
    ans2.innerHTML="";
    icon2.style.rotate="0deg";
    Ques2.style.color="grey";
    ans3.innerHTML="";
    icon3.style.rotate="0deg";
    Ques3.style.color="grey";
    ans4.innerHTML="";
    icon4.style.rotate="0deg";
    Ques4.style.color="grey";
}
else{
    ans5.innerHTML="";
    icon5.style.rotate="0deg";
    Ques5.style.color="grey";
    a=1;
}


})