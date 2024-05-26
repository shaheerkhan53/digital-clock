function updateclock(){
    const now = new Date();
    let hours = now.getHours();
    let fix;
    if(hours >= 12 && hours > 12){
        fix = "PM";
        hours = hours - 12;
    }else{
        fix ="AM";
        hours = hours - 12;
    }
    hours = hours.toString().padStart(2,0);
    const min = now.getMinutes().toString().padStart(2,0);
    const sec = now.getSeconds().toString().padStart(2,0);
    const timeStrings = `${hours}:${min}:${sec}:${fix}`;
    document.getElementById("clock").textContent = timeStrings;
}    

updateclock();
setInterval(updateclock, 1000);