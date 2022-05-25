import { useEffect, useState } from 'react';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import DisplaySettingsOutlinedIcon from '@mui/icons-material/DisplaySettingsOutlined';

import { CricketBetData } from './tempData';
import Styles from "../main.module.css";
import { changeFormat } from "../../../utils";

const GameDetails = ({ game, gameName }) => {
    const [betDetails, setBetDetails] = useState({});

    useEffect(() => {
        console.log(game, gameName);
        const fetchGameDetails = async () => {
            try {
                const response = 
                    await fetch("http://34.93.64.47:3000/api/ods/"+gameName+"?gameid="+game.gameId);
                console.log(response);
            } catch (e) {
                setBetDetails(CricketBetData());
                console.log(e);
            }
        }
        const interval = setInterval(() => fetchGameDetails(), 3000);
        fetchGameDetails();
        return () => clearInterval(interval);
    }, [game, gameName])

    return (
        <div className={Styles.mainContent}>
            <div 
                className={`w100 flexRow ${Styles.mainContent__header} ${Styles.gameDetails_heading}`}
            >
                <div className={`textBold leftSpace vLargeFont ${Styles.mainContent__heading}`}>
                    {game.name}
                </div>
                <div className={`textBold flexRow jCenter ${Styles.mainContent__Side}`}>
                    
                </div>
                <div 
                    className={`textSemiBold jCenter ${Styles.mainContent__Side} ${Styles.gameDetails_date}`}
                >
                    {changeFormat(game.stime, "d/mm/yyyy hh:mm")}
                </div>
            </div>
            <div className="topSpace flexRow">
                <WatchLaterOutlinedIcon style={{ color: '#e1d5b4' }} />
                <span className='extraLeftSpace goldFont textBold largeFont'>
                    Opens in 7hrs 15 mins
                </span>
            </div>
            <div className="topSpace flexRow w100">
                <div className={`topSpace flexRow jSpaceBetween ${Styles.gameDetails__name}`}>
                    <div className="gameDetails_name flexRow w100">
                        <StarOutlineIcon style={{ color: 'gold' }} />
                        <span className='extraLeftSpace textBold largeFont'>
                            Match Odds
                        </span>
                    </div>
                    <DisplaySettingsOutlinedIcon style={{ color: "#000000", fontSize: '30px' }} />
                </div>
                <div 
                    className={`topSpace flexRow textBold ${Styles.gameDetails__back}`}
                    style={{ paddingRight: '10px', alignSelf: "center" }}
                >
                    Back
                </div>
                <div 
                    className={`topSpace flexRow textBold ${Styles.gameDetails__lay}`}
                    style={{ paddingLeft: '10px', alignSelf: "center" }}
                >
                    Lay
                </div>
            </div>
            <div className={`topSpace flexRow w100 ${Styles.gameDetails__container}`}>
                <div className={`flexRow ${Styles.gameDetails__name}`}>
                    <div className="gameDetails_name flexRow w100 alignCenter">
                        <span className='extraLeftSpace textBold largeFont'>
                            {betDetails?.match_odds?.runners[0]?.runnerName}
                        </span>
                    </div>
                </div>
                <div className={`textBold ${Styles.gameDetails__backNumber} flexRow`}>
                    <div 
                        className=
                            {
                            `flexColumn textCenter ${Styles.gameDetails_cell} ${Styles.gameDetails_lightBlue}`
                            }
                    >
                        <span className='largeFont textBold'>
                            {betDetails?.match_odds?.runners[0]?.back[0]?.number}
                        </span>
                        <span>{betDetails?.match_odds?.runners[0]?.back[0]?.size}</span>
                    </div>
                    <div 
                        className=
                            {
                            `flexColumn textCenter ${Styles.gameDetails_cell} ${Styles.gameDetails_lightBlue}`
                            }
                    >
                        <span className='largeFont textBold'>
                            {betDetails?.match_odds?.runners[0]?.back[1]?.number}
                        </span>
                        <span>{betDetails?.match_odds?.runners[0]?.back[1]?.size}</span>
                    </div>
                    <div 
                        className=
                            {
                            `flexColumn textCenter ${Styles.gameDetails_cell} ${Styles.gameDetails_blue}`
                            }
                    >
                        <span className='largeFont textBold'>
                            {betDetails?.match_odds?.runners[0]?.back[2]?.number}
                        </span>
                        <span>{betDetails?.match_odds?.runners[0]?.back[2]?.size}</span>
                    </div>
                </div>
                <div className={`textBold ${Styles.gameDetails__lay} flexRow`}>
                    <div 
                        className=
                            {
                            `flexColumn textCenter ${Styles.gameDetails_cell} ${Styles.gameDetails_pink}`
                            }
                    >
                        <span className='largeFont textBold'>
                            {betDetails?.match_odds?.runners[0]?.lay[0]?.number}
                        </span>
                        <span>{betDetails?.match_odds?.runners[0]?.lay[0]?.size}</span>
                    </div>
                    <div 
                        className=
                            {
                            `flexColumn textCenter ${Styles.gameDetails_cell} ${Styles.gameDetails_lightPink}`
                            }
                    >
                        <span className='largeFont textBold'>
                            {betDetails?.match_odds?.runners[0]?.lay[1]?.number}
                        </span>
                        <span>{betDetails?.match_odds?.runners[0]?.lay[1]?.size}</span>
                    </div>
                    <div 
                        className=
                            {
                            `flexColumn textCenter ${Styles.gameDetails_cell} ${Styles.gameDetails_lightPink}`
                            }
                    >
                        <span className='largeFont textBold'>
                            {betDetails?.match_odds?.runners[0]?.lay[2]?.number}
                        </span>
                        <span>{betDetails?.match_odds?.runners[0]?.lay[2]?.size}</span>
                    </div>
                </div>
            </div>
            <div className={`flexRow w100 ${Styles.gameDetails__secondContainer}`}>
                <div className={`flexRow ${Styles.gameDetails__name}`}>
                    <div className="gameDetails_name flexRow w100 alignCenter">
                        <span className='extraLeftSpace textBold largeFont'>
                            {betDetails?.match_odds?.runners[1]?.runnerName}
                        </span>
                    </div>
                </div>
                <div className={`textBold ${Styles.gameDetails__backNumber} flexRow`}>
                    <div 
                        className=
                            {
                            `flexColumn textCenter ${Styles.gameDetails_cell} ${Styles.gameDetails_lightBlue}`
                            }
                    >
                        <span className='largeFont textBold'>
                            {betDetails?.match_odds?.runners[1]?.back[0]?.number}
                        </span>
                        <span>
                            {betDetails?.match_odds?.runners[1]?.back[0]?.size}
                        </span>
                    </div>
                    <div 
                        className=
                            {
                            `flexColumn textCenter ${Styles.gameDetails_cell} ${Styles.gameDetails_lightBlue}`
                            }
                    >
                        <span className='largeFont textBold'>
                            {betDetails?.match_odds?.runners[1]?.back[1]?.number}
                        </span>
                        <span>{betDetails?.match_odds?.runners[1]?.back[1]?.size}</span>
                    </div>
                    <div 
                        className=
                            {
                            `flexColumn textCenter ${Styles.gameDetails_cell} ${Styles.gameDetails_blue}`
                            }
                    >
                        <span className='largeFont textBold'>
                            {betDetails?.match_odds?.runners[1]?.back[2]?.number}
                        </span>
                        <span>{betDetails?.match_odds?.runners[1]?.back[2]?.size}</span>
                    </div>
                </div>
                <div className={`textBold ${Styles.gameDetails__lay} flexRow`}>
                    <div 
                        className=
                            {
                            `flexColumn textCenter ${Styles.gameDetails_cell} ${Styles.gameDetails_pink}`
                            }
                    >
                        <span className='largeFont textBold'>
                            {betDetails?.match_odds?.runners[1]?.lay[0]?.number}
                        </span>
                        <span>{betDetails?.match_odds?.runners[1]?.lay[0]?.size}</span>
                    </div>
                    <div 
                        className=
                            {
                            `flexColumn textCenter ${Styles.gameDetails_cell} ${Styles.gameDetails_lightPink}`
                            }
                    >
                        <span className='largeFont textBold'>
                            {betDetails?.match_odds?.runners[1]?.lay[1]?.number}
                        </span>
                        <span>{betDetails?.match_odds?.runners[1]?.lay[1]?.size}</span>
                    </div>
                    <div 
                        className=
                            {
                            `flexColumn textCenter ${Styles.gameDetails_cell} ${Styles.gameDetails_lightPink}`
                            }
                    >
                        <span className='largeFont textBold'>
                            {betDetails?.match_odds?.runners[1]?.lay[2]?.number}
                        </span>
                        <span>{betDetails?.match_odds?.runners[1]?.lay[2]?.size}</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default GameDetails
