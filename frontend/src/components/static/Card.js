import React from 'react';
import '../../assets/styles/Card.css';
import i1 from '../../assets/images/oo.jpg';
import i2 from '../../assets/images/cvcv.avif';
import i3 from '../../assets/images/os.avif';

const Card = () => {
  return (
    <div className="card-wrapper">
      <div className="card-container">
        <div className="card">
          <img src={i1} alt="Search and select a service" className="card-image" />
          <div className="card-content">
            <h2>Cricket</h2>
            <p>Cricket is played with a bat and ball and involves two competing sides (teams) of 11 players. As there are 11 players on a team and 2 of them must be the bowler and wicketkeeper, only 9 other positions can be occupied at any one time.17 Jul 2024.</p>
          </div>
        </div>
        <div className="card">
          <img src={i2} alt="Dispose of your trash" className="card-image" />
          <div className="card-content">
            <h2>FootBall</h2>
            <p>Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal. Two teams usually have between 11 and 18 players some variations that have fewer players (five or more per team) are also popular.</p>
          </div>
        </div>
        <div className="card">
          <img src={i3} alt="Waste removal" className="card-image" />
          <div className="card-content">
            <h2>Badminton</h2>
            <p>
               Badminton is a racquet sport played using racquets to hit a shuttlecock across a net. Although it may be played with larger teams the most common forms of the game are "singles" and "Doubles".</p>
          </div>
        </div>
      </div>
      {/* <div className="flow-line-container">
        <div className="flow-line"></div>
        <div className="flow-step" style={{ left: '0%' }}>
          <div className="diamond"><span className="diamond-content">1</span></div>
        </div>
        <div className="flow-step" style={{ left: '50%' }}>
          <div className="diamond"><span className="diamond-content">2</span></div>
        </div>
        <div className="flow-step" style={{ left: '100%' }}>
          <div className="diamond"><span className="diamond-content">3</span></div>
        </div>
      </div> */}
    </div>
  );
}

export default Card;
