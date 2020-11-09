document.addEventListener('DOMContentLoaded',function(){
    const newYears = new Date('2021-01-01 00:00:00');
    
    const countDown = ()=>{
        const now = new Date();
        const leftTotalSeconds = (newYears - now)/1000;
        const leftDays = Math.floor(leftTotalSeconds/ (24*60*60));
        const leftHours = Math.floor((leftTotalSeconds/(60*60))%24);
        const leftMinutes = Math.floor((leftTotalSeconds/60)%60);
        const leftSeconds = Math.floor(leftTotalSeconds%60);
    
        const digit = num => num<10? `0${num}` : num;
        
        document.getElementById('days').textContent = digit(leftDays);
        document.getElementById('hours').textContent = digit(leftHours);
        document.getElementById('minutes').textContent = digit(leftMinutes);
        document.getElementById('seconds').textContent = digit(leftSeconds);
    }

    // initial call;
    countDown();
    
    setInterval(countDown,1000)

});