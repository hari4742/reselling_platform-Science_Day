import React, { Component } from 'react'; 
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
// import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";  
import '../Styles/slickdemo.css';  
import slider1 from '../Images/slider1.jpg';
import slider2 from '../Images/slider2.jpg';
import slider3 from '../Images/slider3.jpg';
import slider4 from '../Images/slider4.jfif';
import slider5 from '../Images/slider5';

export class SlickDemo extends Component {  
    render() {  
        var settings = {  
          dots: true,  
          infinite: true,  
          speed: 500,  
          centerMode: true,  
          slidesToShow: 1,  
          slidesToScroll: 1  
          };  
          return (  
            <div>  
            <div class='container' >        
            <div className="row title" style={{marginTop: "30px"}} >        
            <div class="col-sm-12 btn btn-info" style={{marginBottom: "20px"}} >        
            Put Your Product In front Of CUHians    
            </div>        
            </div>    
            </div>  
            <Slider {...settings} >  
              <div className="wdt">
              
              <img  className="img" src= {slider1} className="img"/>
              </div>   
              <div className="wdt">
              <img className="img" src= {slider2} className="img"/>  
              </div>   
              <div className="wdt">
              <img  className="img" src= {slider3} className="img"/>  
              </div>   
              <div className="wdt">
              <img  className="img" src= {slider4} className="img"/>  
              </div>   
              <div className="wdt">
              <img  className="img" src= {slider5} className="img"/>  
              </div>  
                
            </Slider>  
            </div>  
          );  
        }  
      }  
  
export default SlickDemo ;