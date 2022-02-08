const hour = document.getElementById("hour")
const Minute = document.getElementById("minute")
const Second = document.getElementById("second")
const MiliSecond = document.getElementById("ms")

    setInterval(showTime, 100);
    function showTime() {
        // await new Promise(resolve => setTimeout(resolve, 1000));
        var date = new Date(Date.now())
        hour.innerText = date.getHours()
        Minute.innerText = date.getMinutes()
        Second.innerText = date.getSeconds() 
        MiliSecond.innerText = date.getMilliseconds()
      //  console.log('after 1 second');
    
      }
    showTime()