import { useState } from 'react';
import './style.css';

export function Home() {
  const [time, setTime] = useState('');

  function update() {
    const newDate = new Date();
    const hour = newDate.getHours();
    const minute = newDate.getMinutes();
    const second = newDate.getSeconds();
    let formatedHour = `${hour}`;
    let formatedMinute = `${minute}`;
    let formatedSecond = `${second}`;

    if (hour < 10) formatedHour = '0' + hour;
    if (minute < 10) formatedMinute = '0' + minute;
    if (second < 10) formatedSecond = '0' + second;

    const text = `${formatedHour}:${formatedMinute}:${formatedSecond}`;
    setTime(text);
  }

  setInterval(update, 1000);
  return (
    <div className="found">
      <div>
        <h1 className="tela">{time}</h1>
      </div>
    </div>
  );
}
