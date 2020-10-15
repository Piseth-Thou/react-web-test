import React from 'react';
import { Carousel} from 'antd';

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
class Slide extends React.Component{
        render() {
            return(
                
                        <div className="Slide">
                             <Carousel autoplay>
                                <div>
                                <h3 style={contentStyle}><img src="http://resource.icekh.com:8085/images/banners/top/214653d4-9e55-4201-b9ed-5edcacc5a141.jpg" alt=".."/></h3>
                                </div>
                                <div>
                                <h3 style={contentStyle}><img src="http://resource.icekh.com:8085/images/banners/top/3183562b-2602-415a-bf37-7d7f7e12f129.jpg" alt=".."/></h3>
                                </div>
                                <div>
                                <h3 style={contentStyle}><img src="http://resource.icekh.com:8085/images/banners/top/02560119-0f37-40a9-b511-886dd7056551.jpg" alt=".."/></h3>
                                </div>
                                <div>
                                <h3 style={contentStyle}><img src="http://resource.icekh.com:8085/images/banners/top/7aea4e43-ab5b-4b76-a107-2251df83e640.jpg" alt=".."/></h3>
                                </div>
                            </Carousel>
                        </div>
                  );
        }
}
export default Slide;

 