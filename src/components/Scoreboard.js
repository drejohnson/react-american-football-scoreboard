import React, { useState, useEffect } from 'react';
import '../App.css';
import BottomRow from './BottomRow';

const Scoreboard = ({ homeScore, awayScore }) => {
  const [time, setTime] = useState(2);

  useEffect(() => {
    function countdown(minutes) {
      let seconds = 60;
      let mins = minutes;
      function tick() {
        let current_minutes = mins - 1;
        seconds--;
        let timer = `${current_minutes.toString()}:${
          seconds < 10 ? '0' : ''
        }${String(seconds)}`;
        setTime(timer);
        if (seconds > 0) {
          setTimeout(tick, 1000);
        } else {
          if (mins > 1) {
            countdown(mins - 1);
          }
        }
      }
      tick();
    }
    countdown(time);
  }, []);
  return (
    <section className='scoreboard'>
      <div className='topRow'>
        <div className='home'>
          <h2 className='home__name'>Lions</h2>

          {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

          <div className='home__score'>{homeScore}</div>
        </div>
        <div className='timer'>{time}</div>
        <div className='away'>
          <h2 className='away__name'>Tigers</h2>
          <div className='away__score'>{awayScore}</div>
        </div>
      </div>
      <BottomRow />
    </section>
  );
};

export default Scoreboard;
