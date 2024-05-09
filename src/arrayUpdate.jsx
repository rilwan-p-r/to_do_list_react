import { useState } from "react";
function ArrayComponent(){
    const [fruits,setFruit]=useState(['apple','orange'])
    function addFruits(){
        const fruitItem = document.getElementById('fruisItems').value
        document.getElementById('fruisItems').value=''
        setFruit([...fruits,fruitItem])
    }
    function removeFruit(index){
        setFruit(fruits.filter((fruit,i)=>i !== index))
    }
    function search(){
        const search = document.getElementById('search')
        setFruit([search])
    }
    return (
        <div>
            <ul>
            {fruits.map((fruit,index)=><li key={index} onClick={()=>removeFruit(index)}>
                {fruit}</li>)}
            </ul>
            <input type="text" id="fruisItems"/>
            <input id='search'></input>
            <button onClick={search}></button>
            <button onClick={addFruits}>add fruit</button>
        </div>
    )

}
export default ArrayComponent