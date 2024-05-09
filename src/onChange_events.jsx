import { useState } from "react";
function  MyComponents(){

   const [name,setName]=useState('')
   const [text,setText]=useState('')
   const [select,setSelect]=useState('')
   const [status,setStatus]=useState('')

    function handleInput(events){
        setName(events.target.value)
    }
    function handleTextArea(events){
        setText(events.target.value)
    }
    function selectHandle(events){
        setSelect(events.target.value)
    }
    function statusHandle(events){
        setStatus(events.target.value)
    }

    return(<div>
       <input value={name} onChange={handleInput}></input>
       <p>name:{name}</p>

       <textarea value={text} placeholder="type your thoughts" onChange={handleTextArea}></textarea>
       <p>Descriptio:{text}</p>

       <select onChange={selectHandle}>
        <option value=''>Select any option</option>
        <option>Visa card</option>
        <option>Master card</option>
        <option>Rupay card</option>
       </select>
       <p>selected:{select}</p>
       <h3>status</h3>
       <label>
        <input type="radio" value='ordered'
         checked={status==='ordered'}
         onChange={statusHandle}/>
        ordered</label>

       <label>
        <input type="radio" 
        value='Delivered' 
        checked={status==='Delivered'} 
        onChange={statusHandle}/>
        Delivered</label>
        <p>status now:{status}</p>
       </div>
    )
}
export default MyComponents