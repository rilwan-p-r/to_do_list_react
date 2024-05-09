import {useEffect,useRef } from "react"

function RefCompponent(){
    useEffect(()=>{
        console.log('clicked me');
        console.log('color changed');
    })
    const inputRef = useRef(null)
    // const [count,setCount]=useState(0)
    function handleClick(){
        // inputRef.current.focus();
        inputRef.current.style.backgroundColor='red';
    }
    return(
        <div>
            <button onClick={handleClick}>
                click Me!
            </button>
            <input ref={inputRef}/>
        </div>
    )
}
export default RefCompponent