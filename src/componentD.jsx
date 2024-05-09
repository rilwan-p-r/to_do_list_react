// import { useContext } from 'react'
// import UserContext from './componentA'
import PropTypes  from 'prop-types'

function ComponentD(props){
    // const user = useContext(UserContext)
    return(
        <div className="box">
            ComponentD
           <h3>{`by ${props.user}`}</h3>
            </div>
    )
}
ComponentD.propTypes={
    user:PropTypes.string
}
export default ComponentD