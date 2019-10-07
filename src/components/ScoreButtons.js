import React from 'react';
import '../App.css';
import Button from './Button';

const ScoreButtons = ({
  homeScore,
  awayScore,
  setHomeScore,
  setAwayScore,
  updateScore,
}) => {
  return (
    <section className='buttons'>
      <div className='homeButtons'>
        {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
        <Button
          handleEvent={() => updateScore('home', 7)}
          className='homeButtons__touchdown'
        >
          Home Touchdown
        </Button>
        <Button
          handleEvent={() => updateScore('home', 3)}
          className='homeButtons__touchdown'
        >
          Home Field Goal
        </Button>
      </div>
      <div className='awayButtons'>
        <Button
          handleEvent={() => updateScore('away', 7)}
          className='awayButtons__touchdown'
        >
          Away Touchdown
        </Button>
        <Button
          handleEvent={() => updateScore('away', 3)}
          className='awayButtons__fieldGoal'
        >
          Away Field Goal
        </Button>
      </div>
    </section>
  );
};

export default ScoreButtons;
