import React from 'react';
import './History.css';

export class History extends React.Component {
    render(){
        return(
            <li className="history">
                <h5>{this.props.data.day}</h5>
                <div className="historyleaf">
                    <i className="wi wi-storm-showers"></i>
                    <span>{this.props.data.OrtalamaSicaklik}
                        <small>m/s</small>
                    </span>
                </div>
            </li>
        )
    }
}