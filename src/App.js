//TODO: STEP 1 - Import the useState hook.
import React, { useState } from 'react';
import './App.css';
import Scoreboard from './components/Scoreboard';
import ScoreButtons from './components/ScoreButtons';

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  function updateScore(team, by) {
    const score =
      team === 'home'
        ? setHomeScore(homeScore + by)
        : setAwayScore(awayScore + by);
    return score;
  }

  return (
    <div className='container'>
      <Scoreboard homeScore={homeScore} awayScore={awayScore} />
      <ScoreButtons
        homeScore={homeScore}
        awayScore={awayScore}
        updateScore={updateScore}
      />
    </div>
  );
}

export default App;
