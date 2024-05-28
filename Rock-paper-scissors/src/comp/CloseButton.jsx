
function Close (props){

    const closeImg = 'images/icon-close.svg'; 
    const handleRules = props.handleRules 

    return(
        <button onClick={handleRules}>
            <img src={closeImg} alt="close" className="lg:w-16"></img>            
        </button>
    )
}

export default Close;
