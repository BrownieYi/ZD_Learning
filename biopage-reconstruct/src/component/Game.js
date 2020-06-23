import React, { useEffect } from 'react';
import lol from '../image/league.jpg';
import ss from '../image/sekiro.jpg';
import mhw from '../image/mhw.jpg';
/* global document */

const Game = () => {
  const scrollFunction = () => {
    const topbutton = document.getElementById('topBut');
    if (document.documentElement.scrollTop > document.documentElement.clientHeight / 4) {
      topbutton.style.display = 'block';
    } else {
      topbutton.style.display = 'none';
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', () => {
      scrollFunction();
    });
  }, []);

  const topFunction = () => {
    document.documentElement.scrollTop = 0;
  };
  return (
            <div>
                <button onClick={topFunction} id="topBut" title="Go up">Top</button>
			<div>
				<p>
				These are some of the games I currently play.
				</p>
			</div>
			<div>
				<div className="games">
					<div>
						<a href="https://na.leagueoflegends.com/en-us/">
                            <img src={lol} alt="" />

                        </a>
					</div>
					<div>
						<p>
						League of Legends (including TFT)
						</p>
					</div>
				</div>

				<div className="games">
					<div>
						<a href="https://www.sekirothegame.com">
                            <img src={ss} alt="" />
                        </a>
					</div>
					<div>
						<p>
						Sekiro: Shadow Die Twice
						</p>
					</div>
				</div>

				<div className="games">
					<div>
						<a href="https://www.monsterhunterworld.com/us/">
                            <img src={mhw} alt = "" />
                        </a>
					</div>
					<div>
						<p>
						Monster Hunter World
						</p>
					</div>
				</div>
			</div>
		</div>
  );
};
export default Game;
