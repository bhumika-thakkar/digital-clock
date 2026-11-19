function updateClock()
{
    let now=new Date();

    let hours=now.getHours();
    let minutes=now.getMinutes();
    let seconds=now.getSeconds();

    let day=now.getDate();
    let month=now.getMonth()+1;
    let year=now.getFullYear();

    let days=["SUN","MON","TUE","WED","THU","FRI","SAT"];
    let dayName=days[now.getDay()];
    let ampm=hours>=12?"PM":"AM";

    hours=hours%12;
    hours=hours?hours:12;

    hours=String(hours).padStart(2,"0");
    minutes=String(minutes).padStart(2,"0");
    seconds=String(seconds).padStart(2,"0");
    
    day=String(day).padStart(2,"0");
    month=String(month).padStart(2,"0");
    document.getElementById("clock").innerHTML=`${hours}:${minutes}:${seconds} ${ampm}`;
    document.querySelector(".date").innerHTML=`${day}-${month}-${year} ${dayName}`;
}

updateClock();
setInterval(updateClock,1000);