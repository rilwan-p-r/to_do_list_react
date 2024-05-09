import { useState } from "react";

function ObjectComponent(){
    const [car,setCar]=useState({year:2024,model:'dodge'})

    function handleYear(event){
        setCar(car=>({...car,year:event.target.value}))
    }
    function handleModel(event){
        setCar(c=>({...c,model:event.target.value}))
    }
    return (
        <div>
            <p>My favourite car is {car.year} {car.model}</p>
            <input type='number' value={car.year} onChange={handleYear}/>
            <input type="text" value={car.model} onChange={handleModel}/>

        </div>
    )
}
export default ObjectComponent