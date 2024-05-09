import ComponentB from './componentB.jsx'
import { useState,createContext } from "react";
import PropTypes  from 'prop-types'


 export const UserContext = createContext()
function ComponentA(){
    const [user,setUser] = useState('ril')
    return(
        <div className="box">
            componentA
            <p>{`hello ${user}`}</p>
            {/* <UserContext.Provider value={user}> */}
            <ComponentB user={user} />
            {/* </UserContext.Provider> */}
            </div>
    )
}
ComponentA.propTypes={
    user:PropTypes.string
}
export default ComponentA