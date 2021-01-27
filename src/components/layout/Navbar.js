import React from 'react';
import logo from '../../assets/tum_logo.png'
import carto_logo from '../../assets/cartomaster_logo.png'


const Navbar = () => {


  return(
    <div className='container'>
      <nav className='blue lighten-3' style ={{ marginBottom: '30px', height:'6rem', paddingBottom:'50px'}}>
        <div className ='nav-wrapper'>
          <ul >
            <li className="left">
              <div href="/">
                <img  style={style1} width='190' alt='logo' src={carto_logo}></img>
              </div>
            </li>
            <li style={{margin :'1rem'}}>
                <h5 style={{fontSize:'1.2vw'}}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  COVID RESHAPING PERCEPTION OF SAFETY</h5>
                <h6 style={{fontSize:'1.2vw'}}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  By Zhuo Yang & Jose Pablo Ceballos Cantu
                  </h6>
            </li>
            <li className="right">
              <div className="right responsive-img" style={style}>
                <img  width='80' alt='logo' src={logo}></img>
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
