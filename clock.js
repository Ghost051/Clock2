function timetwo(){
    var current_time = new Date()
    var hours = current_time.getHours(); //get the hour
    var minutes = current_time.getMinutes();//gets the minutes
    var seconds = current_time.getSeconds();//gets the seconds

    var clock = document.getElementById('time')
    var AorP; //Determies if the the time is AM or PM

    if(minutes < 10)// if the mintues are under 10 put 0 infront of the number
    {
        minutes = '0' + minutes; 
    }


    if(seconds < 10)// if the seconds are under 10 put 0 infront of the number
    {
        seconds = '0' + seconds; 
    }

    if(hours > 12) //if the hours go more then 12 minus the 12 from 24
    {
        hours = hours - 12;
    }
    else if(hours == 0) //if the hour hits 0 set it to 12;
    {
        hours = 12
    }

    if(hours < 12){ //if the hour is between or equal to 0 or 12 return AM if not return PM
        session.innerHTML = 'AM';
   }
   else{
        session.innerHTML = 'PM';
   }
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;


    clock.innerHTML = hours + ":" + minutes + ":" + seconds + AorP;

   


}

setInterval("timetwo()", 10);

