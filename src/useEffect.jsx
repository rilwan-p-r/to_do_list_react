import {useState, useEffect} from 'react'
function UseEffectComponent(){
    const [count,setCount]=useState(0)
    const [count1,setCount1]=useState(0)
    useEffect(()=>{
        document.title=`count: ${count}`
    },[count])
    function handleConut(){
        setCount(count+1)
        setCount1(count1+1)
        console.log(count);
    }
    return(
        <>
        <p>count:{count}</p>
        <button onClick={handleConut}>add</button>
        </>
    )
}
export default UseEffectComponent