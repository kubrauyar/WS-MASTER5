import React from 'react';
import './MoonSun.css';

export class MoonSun extends React.Component {
    render(){
        return(
            <div className="moonsum">
                <div className="sum">
                    <h5>Güneş</h5>
                    <div className="sumicon"> 
                        <i class="wi wi-sunrise"></i> 
                        <i class="wi wi-direction-right"></i> 
                        <i class="wi wi-sunset"></i>
                    </div>
                    <div className="sumtime"> 
                        <small>07:33</small>
                        <small>12s 30d</small>
                        <small>18:55</small>
                    </div>
                </div>
                <div className="moon">
                    <h5>Ay</h5>
                    <div className="moonicon"> 
                        <i className="wi wi-moon-alt-waxing-crescent-5"></i> 
                        <small>15.6 %</small>
                        <small>Küçülen Hilal</small>
                    </div>
                </div>
            </div>
        )
    }
}