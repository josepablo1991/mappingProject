import React from 'react';
import logo from '../../assets/tum_logo.png'
import carto_logo from '../../assets/cartomaster_logo.png'


const Navbar = () => {


  return(
    <div className='container'>
      <nav style ={{ marginBottom: '30px', height:'6rem'}} className='blue lighten-3'>
        <div className ='nav-wrapper'>
          <ul >
            <li className='left' style={{margin :'1rem'}}>
              <h5>Covid Reshaping Safety</h5>
            </li>
            <li className="right">
              <div href="/">
                <img  style={style1} width='170' alt='logo' src={carto_logo}></img>
              </div>
            </li>
            <li className="right">
              <div className="right" style={style}>
                <img width='80' alt='logo' src={logo}></img>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )

}


const style = {
  padding :'0.8rem',
  pointerEvents: 'none'
}
const style1 = {
  padding :'1.5rem',
  pointerEvents: 'none'
}
export default Navbar;
