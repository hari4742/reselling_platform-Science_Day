import React from 'react';

import slider5 from '../Images/slider5';
const Home = () => {
    
    return ( 
        <div className="home">
          <div className="disp_img">
            <img style={{width:'99vw',margin:'0px'}} src={slider5} />
          </div>
          <div className="display-text">
            <p>Central University of Haryana</p>
            <p>. . . Reselling Platform . . .</p>
          </div>
        </div>
     );
}
 
export default Home;