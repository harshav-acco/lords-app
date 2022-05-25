import { useEffect, useState } from 'react';

import GameDetails from './gameDetails';
import Styles from "../main.module.css";

const MainContent = (props) => {
    const [matches, setMatches] = useState(props.matches || []);
    
    useEffect(() => {
        setMatches(props.matches);
    }, [props.matches]);

    // useEffect(() => {
    //     console.log(props.game);
    // }, [props.game]);

    if (Object.keys(props.game).length > 0) {
        return (
            <GameDetails 
                game={props.game}
                gameName={props.gameName}
            />
        )
    }

    return (
        <div className={Styles.mainContent}>
            <div className={`w100 flexRow ${Styles.mainContent__header}`}>
                <div className={`textBold leftSpace ${Styles.mainContent__heading}`}>
                    Match
                </div>
                {/* <div className={`textBold flexRow jCenter ${Styles.mainContent__Side}`}>
                    1
                </div>
                <div className={`textBold flexRow jCenter ${Styles.mainContent__Side}`}>
                    2
                </div> */}
            </div>
            <div className={`w100 flexColumn ${Styles.mainContent__body}`}>
                {
                    matches.map((match) => {
                        return (
                            <div 
                                onClick={() => props.setMatch(match)}
                                key={match.gameId} 
                                className={`cPointer textBold jCenter alignCenter ${Styles.mainContent_game}`}
                            >
                                {match.name}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default MainContent;
