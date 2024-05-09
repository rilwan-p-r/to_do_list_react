import ComponentD from "./componentD";
import PropTypes  from 'prop-types'
function ComponentC(props){
    return(
        <div className="box">
            ComponentC
            {/* <h3>{`hi again ${props.user}`}</h3> */}
            <ComponentD user={props.user}/>
            </div>
    )
}
ComponentC.propTypes={
    user:PropTypes.string
}
export default ComponentC
