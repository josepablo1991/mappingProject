import React from 'react';

const MapImage = ({map, explanation}) => {

  return(
    <div className='col s12'>
          <img className='responsive-img' src={map}></img>
    </div>
  )
}

export default MapImage;
