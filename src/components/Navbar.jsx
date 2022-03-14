import React from 'react'
const Navbar = ({title}) => {
    return ( 
        <div className='fixed-top p-3 bg-light d-flex justify-content-center align-items-center border-bottom ' >
            <span className='text-center'>{title}</span>
        </div>
     );
}
 
export default Navbar;