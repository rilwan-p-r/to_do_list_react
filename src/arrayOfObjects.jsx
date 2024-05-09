import { useState } from "react";
function ArrayOfObject(){
const [cars,setCars]=useState([])
const [year,setYear]=useState(new Date().getFullYear())
const [model,setMOdel]=useState('')

function addCars(){
const car={year:year,model:model}

setCars([...cars,car])

setYear(new Date().getFullYear())
setMOdel('')
}
function removeCar(index){
    setCars(cars.filter((car,i)=>i !==index))

}
function addYear(Event){
    setYear(Event.target.value)
}
function addModel(event){
setMOdel(event.target.value)
}
    return(
        <div>
            <h2>List of Cars</h2>
            <ul>
                {cars.map((car,index)=><li key={index} onClick={()=>removeCar(index)}>
                    {car.model} {car.year}
                    </li>)}
            </ul>
            <input placeholder="enter car model" value={model} onChange={addModel}/><br/><br/>
            <input placeholder="enter the year" value={year} onChange={addYear}/><br/><br/>
            <button onClick={addCars}>add car</button>
        </div>
    )
}
export default ArrayOfObject