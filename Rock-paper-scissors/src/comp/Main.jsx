
import Weapons from './Weapons';
import { useState } from 'react';
import  Rules  from './Rules'
import Close from './CloseButton'



function Main (){   

    const [score, setScore] = useState(0);
    const [enemyScore, setEnemyScore] = useState(0);
    const [rulesOn, setRulesOn] = useState(false);
    const rulesImg = 'images/image-rules-bonus.svg';

    const handleScore = (value) => {               
        setScore(value)
    }

    const handleScoreEnemy = (value) => {               
        setEnemyScore(value)
    }

    const resetScore = () => {
        setScore(0);
        setEnemyScore(0);
    }

    const handleRules = () => {
        setRulesOn((rulesOn) => !rulesOn);       
    }

    return(
        <div>
            {!rulesOn &&  
                <div>
                    <div className="flex justify-between border-4 border-slate-600 w-5/6 m-auto p-4 mt-4 rounded-lg 2xl:w-3/6">
                        <div className='flex items-center'>
                            <p className='text-white font-bold text-base leading-none sm:text-2xl sm:leading-5 xl:text-2xl'>
                                ROCK<br/>
                                PAPER<br/>
                                SCISSORS<br/>
                                LIZARD<br/>
                                SPOCK<br/>
                            </p>
                        </div>
                        <div onClick={resetScore} className={`px-4 rounded-lg flex justify-between flex-row items-center py-2 gap-4 ${score > enemyScore ? 'bg-green-500' : score < enemyScore ? 'bg-rose-700' : score === enemyScore ? 'bg-yellow-500' : ''}`}>
                            <div className='flex flex-col text-center xl:gap-3 border-r-2 pr-4'>
                                <p className='text-white text-xs font-bold sm:text-xl xl:text-lg'>YOU</p>
                                <p className="text-3xl font-bold text-white xl:text-3xl">{score}</p>
                            </div>

                            <div className='flex flex-col text-center xl:gap-3'>
                                <p className='text-white text-xs font-bold sm:text-xl xl:text-lg'>CPU</p>
                                <p className="text-3xl font-bold text-white xl:text-3xl">{enemyScore}</p>
                            </div>
                        </div>                         
                                                
                    </div>
                    <Weapons handleScore={handleScore} handleEnemyScore={handleScoreEnemy}/>
                    <Rules handleRules = {handleRules}/>                                       
                </div>}   

            {rulesOn && 
                <div className='bg-white h-screen flex flex-col items-center justify-around py-8'>
                    <p className='text-3xl font-bold lg:text-4xl'>RULES</p>  
                    <img className='w-5/6 sm:w-4/6 lg:w-2/6 lg:h-4/6' src={rulesImg} alt='rules'></img>
                    <Close handleRules={handleRules}/>
                </div>  
            }                 
        </div>

    )
}

export default Main;