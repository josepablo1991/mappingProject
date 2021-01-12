import React from 'react';
import logo from '../../assets/tum_logo.png'
import carto_logo from '../../assets/cartomaster_logo.png'


const Navbar = () => {


  return(
    <div className='container'>
      <nav style ={{ marginBottom: '30px', height:'6rem'}} className='blue lighten-3'>
        <div className ='nav-wrapper'>
          <ul >
            <li className="left">
              <div href="/">
                <img  style={style1} width='190' alt='logo' src={carto_logo}></img>
              </div>
            </li>
            <li className='center' style={{margin :'1rem'}}>
              <h5>                    CONVID RESHAPING PERCEPTION OF SAFETY</h5>
              <h6>                    By Jose Pablo Ceballos Cantu, Zhuo Yang</h6>
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
