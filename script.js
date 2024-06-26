function setClock () {
    
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours()%12;

    const secondDegree = (seconds/60) * 360 + 90;
    const minuteDegree = (minutes/60) * 360 + 90;
    const hourDegree = (hours/12) * 360 + 90;

    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector(`.minute-hand`);
    const secondHand = document.querySelector(`.second-hand`);

    hourHand.style.transform = `rotate(${hourDegree}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
    secondHand.style.transform = `rotate(${secondDegree}deg)`;
}
setInterval(setClock,1000);