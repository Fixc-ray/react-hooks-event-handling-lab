// Code Keypad Component Here

function Keypad (){
    handleChange= () => {
        console.log("Entering Password...");
    }
    return (
        <div>
            <input type="password" onChange={handleChange}/>
        </div>
         )
}

export default Keypad;