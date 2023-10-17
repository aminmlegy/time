const hrs = document.querySelector('.hrs'),
      min = document.querySelector('.min'),
      sec = document.querySelector('.sec'),
      dayStatus = document.querySelector('.day-status');

setInterval(()=>{
    const date = new Date();
    let hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds();
        dayStatus.textContent = 'am'
    if(hours >= 12){
        dayStatus.textContent = 'pm'
        hours = hours - 12
    } if(hours < 10){
        hours = `0${hours}`
    } if(minutes < 10){
        minutes = `0${minutes}`
    }if(seconds < 10){
        seconds = `0${seconds}`
    }

    hrs.textContent=hours;
    min.textContent=minutes;
    sec.textContent=seconds;

},1000)