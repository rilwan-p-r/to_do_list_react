import ComponentC from "./componentC";
// import { useContext } from 'react'
// import UserContext from './componentA'
import PropTypes  from 'prop-types'

function ComponentB(props){
    // const user = useContext(UserContext);
    return(
        <div className="box">
            ComponentB
            <h3>{`helo again ${props.user}`}</h3>
            <ComponentC user={props.user}/>

            </div>
    )
}
ComponentB.propTypes={
    user:PropTypes.string
}
export default ComponentB