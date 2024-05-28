
function Rules (props) {

    const handleRules = props.handleRules
    
    return(       
        <div className='flex justify-center items-center mt-32 lg:justify-end lg:mr-20 2xl:mt-10'>
            <button onClick={handleRules} className="text-white px-7 py-1 border-2 rounded-lg sm:text-2xl lg:text-4xl lg:font-bold lg:px-10 lg:py-2 2xl:text-xl">RULES</button> 
        </div>      
    )
}

export default Rules;