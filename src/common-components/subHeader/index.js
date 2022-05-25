import Styles from './subHeader.module.css';

const GameLinks = (props) => {
    return (
        <div 
            className={
                `standardFontSize textSemiBold purpleFont ${Styles.subHeader_GameLinks}`
            }
        >
            {props.name}
        </div>
    )
}

const SubHeader = (props) => {
    const games = ['cricket', 'football', 'tennis'];
    const activeGame = (game) => {
        console.log(game)
    };

    return (
        <div className={Styles.subHeaderContainer}>
            <div className='h100 flexRow jSpaceAround alignCenter'>
                {
                    games.map(game => (
                        <div className='cPointer' onClick={() => activeGame(game)} key={game}>
                            <GameLinks name={game} key={game} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default SubHeader;
