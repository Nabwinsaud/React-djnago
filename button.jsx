 import PropTypes from 'prop-types'

const Button=({color,text})=>{
return( 

<button style={{backgroundColor:color}} className='btn' > {text}</button>

);

// Button.defaultProps = {
//     color: 'blue',
//   }

}
Button.propTypes={

text:PropTypes.string,
// onClick:PropTypes.func.isRequired,
}
export default Button;