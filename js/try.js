var countDownDate = new Date("Jul 25, 2022 16:37:52").getTime();

var myfunc = setInterval(function timer() {
    var now = new Date().getTime();
    var timeleft = countDownDate - now;

    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

}, 1000)

const days = Math.floor(seconds / 86400)
const hours = Math.floor(seconds / 3600)

const timerDislayHours = document.querySelector('.countdown-num-hour');
const timerDislayDays = document.querySelector('.countdown-num-day');



let countdown; 
const timerDislaySeconds = document.querySelector('.countdown-num-sec');
const timerDislayMinutes = document.querySelector('.countdown-num-min');


function timer(seconds){
    const now = Date.now();
    const then = now + seconds * 1000; 
    displayTimeLeft(seconds)
    countdown = setInterval (() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if(secondsLeft < 0 ){
            clearInterval(countdown)
            return 
        }
        displayTimeLeft(secondsLeft)
    }, 1000) 
}
function displayTimeLeft (seconds){
   
    const restminutes = Math.floor(seconds / 60); 
    const remainderSeconds = seconds % 60;
    const displaySeconds = `${remainderSeconds}`;
    timerDislaySeconds.textContent = displaySeconds; 
    
}


