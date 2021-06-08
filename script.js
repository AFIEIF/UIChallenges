var platform = Array(" an Android Mobile App","an Iphone App","a Desktop App","a Website","an Ipad OS App","a Watch OS App","a Wear OS App","A Tablet App"," an Android Mobile App","an Iphone App","a Desktop App","a Website","an Ipad OS App","a Watch OS App","a Wear OS App","A Tablet App"," an Android Mobile App","an Iphone App","a Desktop App","a Website","an Ipad OS App","a Watch OS App","a Wear OS App","A Tablet App");
var dowhat = Array("Ordering Food","Selling Products","Booking Hotel Rooms","Creating Video Content","Video Conferencing","Online Shopping","Audio Chatting","Online Payments","Music Streaming","Streaming Movies/Shows","Sharing Files","Job Hunting","Photo Editing","Online Learning","Social Networking","Sending Emails","Identifying Unknown Callers","Making Memes","Trading Stocks","Buying Cryptocurrency","Reading Ebooks","Booking a Cab","Saving the Environment");
var forwhom = Array("Adults","Students","Elderly People","Aliens","Superheroes","Doctors","Designers","Athletes","Geeks","Writers","Parents","Celebrities","Wizards","Vampires")
window.onload = function(){
    document.getElementById("refresh").onclick=function(){
        document.getElementById("platform").innerHTML=platform[Math.floor(Math.random()*platform.length)];
        document.getElementById("app").innerHTML=dowhat[Math.floor(Math.random()*dowhat.length)];
        document.getElementById("group").innerHTML=forwhom[Math.floor(Math.random()*forwhom.length)];
        document.getElementById("refresh").innerHTML="Refresh";

    }
}