import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;

class Card_service extends React.Component{
    render(){
        return(
            <>
             <Card
                    hoverable
                    style={{ width: 250 ,margin:'10px 0 10px 0'}}
                    cover={<img alt="example" src="https://miro.medium.com/max/3960/0*HICLyAdNSIyT0ODU.jpg" />}
                  >
                    <Meta title="Web development refers to building, creating, and an maintaining websitesEurope Street beat" description="www.iceelectronics.com" />
              </Card>
            </>
        )
    }
} 
export default Card_service;