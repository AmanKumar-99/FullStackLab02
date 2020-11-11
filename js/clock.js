const time = document.getElementById('time');
const greet = document.getElementById('greeting');
const name = document.getElementById('name');
date = document.getElementById('date');

name.addEventListener("keypress",setName);
name.addEventListener("blur",setName);


function showtime(){
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    let todayDate = today.toDateString();

    amPm = hour>12?'PM':'AM';
    hour=hour%12 || 12;


    time.innerHTML=`${formattime(hour)}<span>:</span>${formattime(min)}<span>:</span>${formattime(sec)} ${amPm}`;
    date.innerHTML = `${todayDate}`;
    setTimeout(showtime,1000);
}

function formattime(n){
    return  ((parseInt(n,10)<10?'0':'')+n);
}

function setGreeting(){
    
    let today = new Date();
    let hour = today.getHours();
    if(hour<12){
        document.body.style.backgroundImage = 'url("../img/morning.jpg")';
        greet.innerHTML = "Good Morning";
    }else if(hour<17){
        document.body.style.backgroundImage = 'url("../img/afternoon.jpg")';
        greet.innerHTML = "Good Afternoon";
    }else{
        document.body.style.backgroundImage = 'url("../img/evening.jpg")';
        greet.innerHTML = "Good Evening";
        document.body.style.color = 'white';
    }

}

function getName(){
    if(localStorage.getItem("keyName")===null){
        name.innerHTML="[Enter name]";
    }else{
        name.innerHTML=localStorage.getItem("keyName");
    }
}

function setName(e){
    if(e.type="keypress"){
        if(e.keyCode===13){
            localStorage.setItem("keyName",e.target.innerHTML);
            name.blur();
        }
    }else
    {
        localStorage.setItem("keyName",e.target.innerHTML);
    }
}

showtime();
setGreeting();
getName();