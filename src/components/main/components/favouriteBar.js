import { useState, useEffect } from 'react';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import Styles from "../main.module.css";
import Toaster from '../../../common-components/toaster';

const GAMES = ['cricket', 'football', 'tennis'];

const FavoriteGame = ({ name, activateGame, active }) => {
    return (
        <div
            onClick={() => activateGame(name)}
            style={{ background: active ? "maroon": 'white' }} 
            className={`w100 cPointer flexRow ${Styles.favorite__bodyItem}`}
        >
            <SportsCricketIcon style={{ color: !active ? "maroon": 'white' }} />
            <span 
                className='standardFontSize leftSpace vAlignTop textCapitalize'
                style={{ color: !active ? "maroon": 'white' }}
            >
                {name}
            </span>
        </div>
    )
}

const Game = ({ name, active, setGame }) => {
    return (
        <div
            onClick={setGame}
            style={{ background: !active ? "white" : "maroon" }} 
            className={`w100 flexRow jSpaceBetween ${Styles.favorite__bodyItem}`}
        >
            <span 
                className='standardFontSize leftSpace vAlignTop'
                style={{ color: active ? "white" : "maroon" }}
            >
                {name}
            </span>
            <ChevronRightIcon style={{ color: active ? "white" : "maroon" }} />
        </div>
    )
}

const FavouriteBar = (props) => {
    const [matches, setMatches] = useState([]);
    const [hoverMatch, setHoverMatch] = useState('');
    const [typeGame, setTypeGame] = useState('cricket');
    const [error, setError] = useState("");

    const setDefaultMatches = (data) => {
        setMatches(data);
        props.setGameMatches(data);
        props.setMatch({});
    }

    useEffect(() => {
        const fetchMatches = async () => {
            setError("");

            try {
                // const { body, status } = await fetch("http://localhost:3000/"+typeGame);
                const response = await fetch("http://3.108.193.226:3000/api/"+typeGame);
                const data = await response.json();

                if (!data.data) {
                    setError(data.status_code);
                }
                setDefaultMatches(data?.data || []);
            } catch (e) {
                setError("Not able to fetch data");
            }
        }

        fetchMatches();
    }, [typeGame]);

    return (
        <div className={Styles.favorite}>
            <div className={`alignCenter ${Styles.favorite__heading}`}>
                <StarOutlineIcon style={{ color: "gold" }} /> 
                <span className='leftSpace textSemiBold standardFontSize vAlignTop'>
                    Favourites
                </span>
            </div>
            <div className={`alignCenter flexColumn`}>
                <div className={`w100 flexRow ${Styles.favorite__body}`}>
                    <HomeRoundedIcon />
                    <span className='standardFontSize leftSpace vAlignTop'>
                        Sports
                    </span>
                </div>
                {
                    GAMES.map((game) => (
                        <FavoriteGame 
                            name={game}
                            key={game}
                            activateGame={() => {
                                setTypeGame(game);
                                props.setGameName(game);
                            }}
                            active={typeGame === game}
                        />
                    ))
                }
                {
                    matches.map((match) => (
                        <div
                            className='w100 cPointer'
                            onMouseEnter={() => setHoverMatch(match.gameId)}
                            onMouseLeave={() => setHoverMatch("")}
                            key={match.gameId}
                        >
                            <Game 
                                key={match.gameId}
                                active={(hoverMatch === match.gameId || props.game.gameId === match.gameId)}
                                name={match.name}
                                setGame={() => {
                                    props.setMatch(match);
                                }}
                            />
                        </div>
                    ))
                }
            </div>
            {
                error ? 
                <Toaster 
                    statement={error}
                    handleClose={() => setError("")}
                /> : null
            }
        </div>
    )
};

export default FavouriteBar;
