import React, {useState, useEffect} from 'react';

function DigitalClock() {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);

    }

  },[])

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12; //if hours=12 % 12 = 0 return or 12

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
  }

  function padZero(number) {
    return (number < 10 ? "0" : "") + number; // if number=10 return "", then number=9 which is lessthan 10 return 0, + number.originalNumber
  }

  return(
    <>
      <div className='clock-container'>
        <div className='clock'>
          <span>{formatTime()}</span>
        </div>
      </div>
    </>
  )
}

export default DigitalClock;