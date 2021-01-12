import React , {useEffect} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';



const MapCard = ({map, explanation, title}) => {

  useEffect(()=>{
    // Init Materilize JS
    M.AutoInit();

    // eslint-disable-next-line
  })

  return(
    <div className='col s12'>
      <div className = 'card'>
        <div className = 'card-image hoverable materialboxed grey lighten-5'>
              <a><img className='responsive-img'  src={map}></img></a>
        </div>
        <div className='card-content hoverable'>
          <span class="card-title center-align leftblack-text">{title}</span>
          <p className='left-align valign-wrapper'>{explanation}</p>
        </div>
      </div>
    </div>
  )
}

export default MapCard;


// This will contain the map explanation of munich.
