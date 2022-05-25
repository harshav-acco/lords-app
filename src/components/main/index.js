import React, { useState } from 'react';

import FavouriteBar from './components/favouriteBar';
import MainContent from './components/mainContent';
import ActionBar from './components/actionBar';

import Styles from './main.module.css';

const Main = (props) => {
    const [gameMatches, setGameMatches] = useState([]);
    const [game, setGame] = useState({});
    const [gameName, setGameName] = useState('cricket');

    return (
        <div className={`flexRow ${Styles.mainContainer}`}>
            <div className={Styles.main__favorites}>
                <FavouriteBar 
                    setGameMatches={setGameMatches}
                    setMatch={setGame}
                    game={game}
                    setGameName={setGameName}
                />
            </div>
            <div className={Styles.main__main}>
                <MainContent 
                    matches={gameMatches}
                    game={game}
                    setMatch={setGame}
                    gameName={gameName}
                />
            </div>
            <div className={Styles.main__action}>
                <ActionBar />
            </div>
        </div>
    )
}

export default Main;
