# Clock2

[![Netlify Status](https://api.netlify.com/api/v1/badges/03055cee-2393-40ec-b056-734994e8f2be/deploy-status)](https://app.netlify.com/sites/gilded-zuccutto-1c18ff/deploys)



<style>
  #body{
    background-color: black;/*url(https://wallpaperaccess.com/full/123346.jpg);*/
    width: 100%;
    height: 100%;
    
}

#currently{
    font-family: 'Akshar', sans-serif;
    font-weight: normal;
    position: relative;
    top:260px;
    left:500px;
    font-size: 35px;
    color: white;
}

#location{
    font-family: 'Akshar', sans-serif;
    position: relative;
    top:380px;
    left:500px;
    font-size: 35px;
    color: white;
}

#container{
    font-family: 'Akshar', sans-serif;
    font-size: 75px;
    position: relative;
    top:150px;
    left:500px;
    color: white;
}
 
</style>


<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clock</title>
    <link rel="stylesheet" href="clock.css">
    <script src="clock.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Akshar:wght@600&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Akshar:wght@300&display=swap" rel="stylesheet">
<link rel="shortcut icon" href="https://www.logotaglines.com/wp-content/uploads/2021/06/spaceX-Logo-tagline-slogan-motto-mission-vision-founder-owner.jpg">

</head>


<div id="background">

</div>


<body id = body>

   <div id="currently">
        <h3>It's currently:</h3>
   </div>

   <div id="location">
        <h3>In West Springfield</h3>
   </div>




   <div id="container">
        <span id="hours">00</span>
        <span>:</span>
        <span id="minutes">00</span>
        <span>:</span>
        <span id="seconds">00</span>
        <span id="session"></span>
        <span id="day"></span>
        
   </div>

    
</body>
</html>


<script>
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

</script>
