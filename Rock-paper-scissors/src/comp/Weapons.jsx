import { useEffect, useState } from 'react';
import Choice from './Choice'

function Weapons({handleScore, handleEnemyScore}){
    
    const rock = 'images/icon-rock.svg';
    const paper = 'images/icon-paper.svg';
    const scissors = 'images/icon-scissors.svg';
    const spock = 'images/icon-spock.svg';
    const lizard = 'images/icon-lizard.svg';
    const pentagon = 'images/bg-pentagon.svg';
    const pentagon2XL = 'images/bg-pentagon-2xl.svg';

    const [userPick, setUserPick] = useState('');   
    const [cPick, setCPick] = useState('');   
    const [showWeapons, setShowWeapons] = useState(true);
    const [result, setResult] = useState('');

    // pc weapon choose
    const computerPick = () => {        
        const random = Math.floor(Math.random() * 5);
        const compPickArrayValue = (['scissors', 'paper', 'rock', 'lizard', 'spock'][random]);
        setCPick(compPickArrayValue);
    }
    
    

    // play again function
    const handlePlayAgain = () => {        
        setShowWeapons(true);      
    }

    useEffect(() =>{
        // console.log(userPick);
        // console.log(cPick);
        // console.log(result);
        
        // checking values

        // user won possibilities
        if(userPick === 'rock' && (cPick ==='scissors' || cPick === 'lizard')){
            console.log(userPick, cPick);    
            handleScore((prev) => prev + 1);
            setResult('YOU WIN')       
        }
        else if(userPick === 'paper' && (cPick === 'rock' || cPick === 'spock')){
            console.log(userPick, cPick);
            handleScore((prev) => prev + 1);  
            setResult('YOU WIN') 
        }

        else if(userPick === 'scissors' && (cPick ==='paper' || cPick === 'lizard')){
            console.log(userPick, cPick);
            handleScore((prev) => prev + 1);  
            setResult('YOU WIN') 
        }

        else if(userPick === 'lizard' && (cPick ==='spock' || cPick === 'paper')){
            console.log(userPick, cPick);
            handleScore((prev) => prev + 1);  
            setResult('YOU WIN') 
        }

        else if(userPick === 'spock' && (cPick ==='scissors' || cPick === 'rock')){
            console.log(userPick, cPick);
            handleScore((prev) => prev + 1);  
            setResult('YOU WIN') 
        }

        // comp won possibilities
        else if(cPick === 'rock' && (userPick ==='scissors' || userPick === 'lizard')){
            console.log(userPick, cPick); 
            handleEnemyScore((prev) => prev + 1);           
            setResult('YOU LOSE')       
        }
        else if(cPick === 'paper' && (userPick === 'rock' || userPick === 'spock')){
            console.log(userPick, cPick);  
            handleEnemyScore((prev) => prev + 1);             
            setResult('YOU LOSE') 
        }

        else if(cPick === 'scissors' && (userPick ==='paper' || userPick === 'lizard')){
            console.log(userPick, cPick);       
            handleEnemyScore((prev) => prev + 1);       
            setResult('YOU LOSE') 
        }

        else if(cPick === 'lizard' && (userPick ==='spock' || userPick === 'paper')){
            console.log(userPick, cPick);              
            handleEnemyScore((prev) => prev + 1);           
            setResult('YOU LOSE') 
        }

        else if(cPick === 'spock' && (userPick ==='scissors' || userPick === 'rock')){
            console.log(userPick, cPick);
            console.log('Computer won');   
            handleEnemyScore((prev) => prev + 1);            
            setResult('YOU LOSE') 
        }

        //DRAW RULE
        else if(userPick === cPick){            
            console.log(userPick, cPick);
            console.log("IT'S A DRAW");
            setResult("IT'S DRAW")
        }

    }, [userPick, cPick])

    const handleClick = (event) => { 
        computerPick();    
        const value = event.target.getAttribute('value');
        setUserPick(value);                
       
        
        
        // logics for close container with weapons        
        setShowWeapons(false);     

    }      

    return(
        <>
            {showWeapons && <div className="flex flex-col justify-center mt-16 gap-4 2xl:w-4/6 m-auto">

                <div className='flex justify-around'>
                    <div className='custom-border-blue rounded-full cursor-pointer' onClick={handleClick} value='paper'>
                        <Choice>
                            <div className='flex justify-center items-center bg-slate-300 w-20 h-20 rounded-full sm:w-28 sm:h-28 lg:w-48 lg:h-48 xl:w-32 xl:h-32' value='paper'>
                                <img className='lg:w-28 xl:w-16' src={paper}  value='paper' alt='paper'></img>     
                            </div>                 
                        </Choice>  
                    </div> 

                    <div className='custom-border-yellow rounded-full cursor-pointer' onClick={handleClick} value='scissors'>
                        <Choice>
                            <div className='flex justify-center items-center bg-slate-300 w-20 h-20 rounded-full sm:w-28 sm:h-28 lg:w-48 lg:h-48 xl:w-32 xl:h-32' value='scissors'>
                                <img className='lg:w-28 xl:w-16' src={scissors}  value='scissors' alt="scissors" ></img>    
                            </div> 
                        </Choice>    
                    </div> 
                </div>

                   
                <div className="flex justify-center">
                    

                    <div className=' custom-border-red rounded-full cursor-pointer' onClick={handleClick} value='rock'>
                        <Choice>
                            <div className='flex justify-center items-center bg-slate-300 w-20 h-20 sm:w-28 sm:h-28 rounded-full lg:w-48 lg:h-48  xl:w-32 xl:h-32' value='rock'>
                                <img className='lg:w-28 xl:w-16' src={rock}  value='rock' alt='rock'></img>
                            </div> 
                        </Choice>   
                    </div> 
                </div>

                 
            <div className="flex justify-around">
                 <div className='custom-border-violet rounded-full cursor-pointer' onClick={handleClick} value="lizard">
                    <Choice>
                        <div className='flex justify-center items-center bg-slate-300 w-20 h-20 rounded-full sm:w-28 sm:h-28 lg:w-48 lg:h-48 xl:w-32 xl:h-32' value="lizard">
                            <img className='lg:w-28 xl:w-16' src={lizard}  value='lizard' alt='lizard'></img>    
                        </div> 
                    </Choice>    
                </div> 

                <div className='custom-border-lightblue rounded-full cursor-pointer' onClick={handleClick} value='spock'>
                    <Choice>
                        <div className='flex justify-center items-center bg-slate-300 w-20 h-20 rounded-full sm:w-28 sm:h-28 lg:w-48 lg:h-48 xl:w-32 xl:h-32' value='spock'>
                            <img className='lg:w-28 xl:w-16' src={spock}  value='spock' alt='spock'></img>
                        </div> 
                    </Choice>   
                </div> 
            </div>

                 

            </div>}


        {!showWeapons &&
        <div className='flex justify-around '>

            <div className='flex flex-col'>
                <div className='flex gap-14 mt-11 xl:gap-72'>

                    {/* first child */}
                    <div>
                        {/* game result display for user*/}                                              
                            <div >                     
                                {
                                    userPick === 'rock' ? 
                                        <div className='flex flex-col text-center gap-2 cursor-pointer'>
                                            <div className='custom-border-red rounded-full'>
                                                <Choice>
                                                    <div className='flex justify-center items-center bg-slate-300 w-24 h-24 rounded-full lg:w-48 lg:h-48  xl:w-32 xl:h-32'>
                                                        <img src={rock} value='rock' alt='rock'></img>
                                                    </div> 
                                                </Choice>   
                                            </div> 
                                            <p className='text-white font-bold'>You picked</p>
                                        </div>: ''
                                }                       
                            </div>
                            

                            
                            <div>
                                {
                                    userPick === 'scissors' ? 
                                        <div className='flex flex-col text-center gap-2 cursor-pointer'>
                                            <div className='custom-border-yellow rounded-full'>
                                                <Choice>
                                                    <div className='flex justify-center items-center bg-slate-300 w-24 h-24 rounded-full lg:w-48 lg:h-48  xl:w-32 xl:h-32'>
                                                        <img src={scissors} value='scissors' alt='scissors'></img>
                                                    </div> 
                                                </Choice>  
                                            </div>
                                            <p className='text-white font-bold'>You picked</p>
                                        </div> : ''            
                                }                       
                            </div>
                        

                            <div>
                                {
                                userPick === 'paper' ? 
                                    <div className='flex flex-col text-center gap-2 cursor-pointer'>
                                        <div className='custom-border-blue rounded-full'>
                                            <Choice>
                                                <div className='flex justify-center items-center bg-slate-300 w-24 h-24 rounded-full lg:w-48 lg:h-48  xl:w-32 xl:h-32'>
                                                    <img src={paper} value='paper' alt='paper'></img>
                                                </div> 
                                            </Choice>   
                                        </div>
                                        <p className='text-white font-bold'>You picked</p> 
                                    </div>: ''
                                }                       
                            </div> 

                            <div>
                                {
                                userPick === 'lizard' ? 
                                    <div className='flex flex-col text-center gap-2 cursor-pointer'>
                                        <div className='custom-border-violet rounded-full'>
                                            <Choice>
                                                <div className='flex justify-center items-center bg-slate-300 w-24 h-24 rounded-full lg:w-48 lg:h-48  xl:w-32 xl:h-32'>
                                                    <img src={lizard} value='lizard' alt='lizard'></img>
                                                </div> 
                                            </Choice>   
                                        </div>
                                        <p className='text-white font-bold'>Enemy picked</p> 
                                    </div>: ''
                                }                       
                            </div> 

                            <div>
                                {
                                userPick === 'spock' ? 
                                    <div className='flex flex-col text-center gap-2 cursor-pointer'>
                                        <div className='custom-border-lightblue rounded-full'>
                                            <Choice>
                                                <div className='flex justify-center items-center bg-slate-300 w-24 h-24 rounded-full lg:w-48 lg:h-48  xl:w-32 xl:h-32'>
                                                    <img src={spock} value='spock' alt='spock'></img>
                                                </div> 
                                            </Choice>   
                                        </div>
                                        <p className='text-white font-bold'>Enemy picked</p> 
                                    </div>: ''
                                }                       
                            </div>
                    </div>

                    {/* game result display for computer*/}                                        
                    <div>

                    <div >                     
                        {
                        cPick === 'rock' ? 
                            <div className='flex flex-col text-center gap-2 cursor-pointer'>
                                <div className='custom-border-red rounded-full'>
                                    <Choice>
                                        <div className='flex justify-center items-center bg-slate-300 w-24 h-24 rounded-full lg:w-48 lg:h-48  xl:w-32 xl:h-32'>
                                            <img src={rock} value='rock' alt='rock'></img>
                                        </div> 
                                    </Choice>   
                                </div> 
                                <p className='text-white font-bold'>Enemy picked</p>
                            </div>: ''
                        }                       
                    </div>                    

                    
                    <div>
                        {
                        cPick === 'scissors' ? 
                            <div className='flex flex-col text-center gap-2 cursor-pointer'>
                                <div className='custom-border-yellow rounded-full'>
                                    <Choice>
                                        <div className='flex justify-center items-center bg-slate-300 w-24 h-24 rounded-full lg:w-48 lg:h-48  xl:w-32 xl:h-32'>
                                            <img src={scissors} value='scissors' alt='scissors'></img>
                                        </div> 
                                    </Choice>  
                                </div>
                                <p className='text-white font-bold'>Enemy picked</p>
                            </div> : ''            
                        }                       
                    </div>
                

                    <div>
                        {
                        cPick === 'paper' ? 
                            <div className='flex flex-col text-center gap-2 cursor-pointer'>
                                <div className='custom-border-blue rounded-full'>
                                    <Choice>
                                        <div className='flex justify-center items-center bg-slate-300 w-24 h-24 rounded-full lg:w-48 lg:h-48  xl:w-32 xl:h-32'>
                                            <img src={paper} value='paper' alt='paper'></img>
                                        </div> 
                                    </Choice>   
                                </div>
                                <p className='text-white font-bold'>Enemy picked</p> 
                            </div>: ''
                        }                       
                    </div> 

                    <div>
                        {
                        cPick === 'lizard' ? 
                            <div className='flex flex-col text-center gap-2 cursor-pointer'>
                                <div className='custom-border-violet rounded-full'>
                                    <Choice>
                                        <div className='flex justify-center items-center bg-slate-300 w-24 h-24 rounded-full lg:w-48 lg:h-48  xl:w-32 xl:h-32'>
                                            <img src={lizard} value='lizard' alt='lizard'></img>
                                        </div> 
                                    </Choice>   
                                </div>
                                <p className='text-white font-bold'>Enemy picked</p> 
                            </div>: ''
                        }                       
                    </div> 

                    <div>
                        {
                        cPick === 'spock' ? 
                            <div className='flex flex-col text-center gap-2 cursor-pointer'>
                                <div className='custom-border-lightblue rounded-full'>
                                    <Choice>
                                        <div className='flex justify-center items-center bg-slate-300 w-24 h-24 rounded-full lg:w-48 lg:h-48  xl:w-32 xl:h-32'>
                                            <img src={spock} value='spock' alt='spock'></img>
                                        </div> 
                                    </Choice>   
                                </div>
                                <p className='text-white font-bold'>Enemy picked</p> 
                            </div>: ''
                        }                       
                    </div> 

                </div> 

            </div> 
                {/* another child */}       
                <div className='flex flex-col text-center mt-20'>
                    <p className={`text-5xl font-bold ${ result === 'YOU WIN' ? 'text-green-500' : result=== 'YOU LOSE' ? 'text-rose-700' : 'text-yellow-500'}`}>{result}</p>
                    <button onClick={handlePlayAgain} className='bg-slate-300 mt-14 p-3 px-14 rounded-lg font-bold text-2xl text-blue-900'>PLAY AGAIN</button> 
                </div>                    
            </div>               
                
        </div>
        }
          
        </>
    )
}

export default Weapons;