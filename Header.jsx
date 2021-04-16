import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';
import Task from './Task';
const Header=({title})=>{
  
    return(


        <>

    
        <h1 style={{textAlign:'left'}}>{title}    <Button  color='#23C4ED' text='Add '  /> </h1>
        <header className='' > 
 
     

    
        <Task />


        </header>
        





       </>

    );

    }
Header.defaultProps={


    title:'Todo list'
}

Header.propTypes={

title:PropTypes.string.isRequired,

}
// const HeadingStyle={


//     color:'yellow',
//     backgroundColor:'#3DBE29'
// }


export default Header